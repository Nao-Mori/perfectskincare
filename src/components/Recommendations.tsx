import { products } from "@/data/products";
import { useTranslations } from "next-intl";
import Image from 'next/image';

function summarizeReviews(reviews: {
    rate: number;
    skinType: number; // 1–8
    concern: string[];
    comment: string;
}[]) {
    // 1. Average rating overall
    const avgRating =
        reviews.reduce((sum, r) => sum + r.rate, 0) / reviews.length;

    // 2. Skin type (grouped 1–2, 3–4, 5–6, 7–8) that reviewed the most
    const skinTypeGroups: Record<
        "dry" | "drycombination" | "oilycombination" | "oily",
        number[]
    > = {
        dry: [],
        drycombination: [],
        oilycombination: [],
        oily: []
    };

    const groupLabel = (num: number) => {
        if (num <= 2) return "dry";
        if (num <= 4) return "drycombination";
        if (num <= 6) return "oilycombination";
        return "oily";
    };

    const skinTypeCount: Record<string, number> = {};
    const skinTypeRateMap: Record<number, number[]> = {};

    for (const r of reviews) {
        const group = groupLabel(r.skinType);
        skinTypeGroups[group].push(r.skinType);

        skinTypeCount[group] = (skinTypeCount[group] || 0) + 1;

        if (!skinTypeRateMap[r.skinType]) skinTypeRateMap[r.skinType] = [];
        skinTypeRateMap[r.skinType].push(r.rate);
    }

    const mostFrequentGroup = Object.entries(skinTypeCount).sort(
        (a, b) => b[1] - a[1]
    )[0]?.[0];

    // 3. Highest avg rating by specific skinType number
    const topRatedSkinType:{ skinType: number, group: string, avg: number } = Object.entries(skinTypeRateMap)
    .map(([skinNumStr, rates]) => ({
      skinType: Number(skinNumStr),
      group: groupLabel(Number(skinNumStr)),
      avg:
        rates.reduce((sum, r) => sum + r, 0) / rates.length
    }))
    .sort((a, b) => b.avg - a.avg)[0];

    // 4. Top 2 concerns
    const concernCounts: Record<string, number> = {};

    reviews.forEach((r) => {
    r.concern.forEach((c) => {
        concernCounts[c] = (concernCounts[c] || 0) + 1;
    });
    });

    const topConcerns = Object.entries(concernCounts)
    .sort((a, b) => b[1] - a[1]) // sort by count
    .slice(0, 2) // top 2
    .map(([concern]) => concern);

  return {
    avgRating: Number(avgRating.toFixed(2)), // 1
    mostFrequentGroup, // 2
    topRatedSkinType,  // 3: { skinType: number, group: string, avg: number }
    topConcerns        // 4
  };
}

export default function Recommendations() {
  const t = useTranslations("Recommendations");

  return (
    <section className="max-w-5xl w-full">
      <h3 className="text-xl font-semibold mb-6">{t("title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product) => {
            const { 
                avgRating,
                mostFrequentGroup, 
                topRatedSkinType,
                topConcerns  
            } = summarizeReviews(product.reviews);
            const allSkinTypes = product.reviews.map((r) => r.skinType);
            const avgSkinType =
            allSkinTypes.reduce((a, b) => a + b, 0) / allSkinTypes.length;

            // convert to percentage offset for arrow placement (1–8 scale)
            const arrowPos = ((avgSkinType - 1) / 7) * 100;

            const extra = (
                <div className="text-sm text-gray-600 mt-2 space-y-1">
                <div>
                    ⭐ {t("ratedHighBy")} {" "}
                    <strong>{t(`skinType.${topRatedSkinType.group}`)}</strong> {t("skin")}
                    {" "} ({topRatedSkinType.avg})
                    </div>
                <div>
                    🎯 {t("effectivedTo")} {" "}
                    {topConcerns.map((c, i) => (
                      <strong key={i}>{t(`concern.${c}`)}{i === 0 ? ", " : null}</strong>
                    ))}
                </div>
                </div>
            );

            return (
                <Card
                key={product.id}
                title={product.name}
                latestComment={product.reviews[0]?.comment || t("noDescription")}
                arrowPos={arrowPos}
                image={product.image}
                extra={extra}
                avgRating={avgRating}
                />
            );
        })}
      </div>
    </section>
  );
}

function Card({
  title,
  latestComment,
  image,
  extra,
  arrowPos,
  avgRating,
}: {
  title: string;
  latestComment: string;
  image: string;
  extra?: React.ReactNode;
  arrowPos: number;
  avgRating: number;
}) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md text-center">
        <div className="relative w-full h-48"> 
        <Image
        src={image}
        alt={title}
        fill
        className="object-contain p-2"
        />
        </div>
        <div className="flex items-center h-16">
            <h4 className="text-base font-semibold w-full">{title}</h4>
        </div>
        {avgRating !== undefined && (
            <div className="mt-2">
              <RatingBar rating={avgRating} />
            </div>
        )}
        <SkinTypeBar value={arrowPos} />
        {/* <p className="text-sm text-gray-600">{latestComment}</p> */}
        {extra}
    </div>
  );
}

function RatingBar({ rating }: { rating: number }) {
  const percent = (rating / 10) * 100;

  return (
    <div className="w-full text-sm text-gray-600">
      <div className="flex justify-between mb-1 px-1">
        <span>Rating</span>
        <span>{rating.toFixed(1)} / 10</span>
      </div>
      <div className="relative h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full transition-all duration-700"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(to right, #fbc2eb, #a6c1ee)" // soft gradient
          }}
        />
      </div>
    </div>
  );
}

function SkinTypeBar({ value }: { value: number }) {
  const labels = ["Dry", "Dry Combo", "Oily Combo", "Oily"];

  return (
    <div className="mt-4">
      <div className="flex justify-between text-xs text-gray-500 mb-1 px-1">
        {labels.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>

      <div className="relative h-4 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-700 ease-out"
          style={{
            width: `${value}%`,
            background: "linear-gradient(to right, #f9c5d1, #fbc2eb)"
          }}
        />
        
        <div
          className="absolute top-[-6px] text-pink-500 text-lg transition-all duration-500"
          style={{ left: `${value}%`, transform: "translateX(-50%)" }}
        >
          ▲
        </div>
      </div>
    </div>
  );
}