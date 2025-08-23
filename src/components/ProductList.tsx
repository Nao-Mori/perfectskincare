import { useTranslations } from "next-intl";
import Image from "next/image";
import type { Product } from "../data/products";
import { summarizeReviews } from "@/lib/summarizeReviews";
import RatingBar from "./ui/RatingBar";
import SkinTypeBar from "./ui/SkinTypeBar";

export default function ProductList({ products }: { products: Product[] }) {
  const t = useTranslations("Product");

  return (
    <section className="max-w-5xl w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((product: Product) => {
          const { 
            avgRating,
            //mostFrequentGroup,
            topRatedSkinType,
            topConcerns,
            averageReviewedSkinType
          } = summarizeReviews(product.reviews);

          // convert to percentage offset for arrow placement (1–8 scale)
          const arrowPos = ((averageReviewedSkinType - 1) / 7) * 100;

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
  //latestComment,
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
    <div className="rounded-xl bg-white p-4 shadow-md text-center z-10">
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