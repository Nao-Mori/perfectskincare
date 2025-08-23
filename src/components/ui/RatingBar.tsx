import { useTranslations } from "next-intl";

export default function RatingBar({ rating }: { rating: number }) {
  const t = useTranslations("Product");
  const percent = (rating / 10) * 100;

  return (
    <div className="w-full text-sm text-gray-600">
      <div className="flex justify-between mb-1 px-1">
        <span>{t("rating")}</span>
        <span>{rating.toFixed(1)} / 10</span>
      </div>
      <div className="relative h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full transition-all duration-700"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(to right, #fbc2eb, #a6c1ee)"
          }}
        />
      </div>
    </div>
  );
}