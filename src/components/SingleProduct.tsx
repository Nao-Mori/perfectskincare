'use client';

import { useTranslations } from "next-intl";
import { useProduct } from '@/hooks/useProduct';
import Image from 'next/image';
import type { Product } from '../data/products';
import { summarizeReviews } from "@/lib/summarizeReviews";
import RatingBar from "./ui/RatingBar";
import SkinTypeBar from "./ui/SkinTypeBar";
import Spinner from "./ui/Spinner";

export default function SingleProduct({ id }: { id: string }) {
  const { data, isLoading, error } = useProduct(id as string);
  const product = data as Product;

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  if (error || !product) {
    return <div className="text-red-500 text-center">Product doesn't exist</div>;
  }

  const t = useTranslations("Recommendations");

  const { 
    avgRating,
    mostFrequentGroup,
    topRatedSkinType,
    topConcerns,
    mostReviewedSkinType
  } = summarizeReviews(product.reviews);

  // convert to percentage offset for arrow placement (1–8 scale)
  const arrowPos = ((mostReviewedSkinType - 1) / 7) * 100;

  return (
    <section className="max-w-5xl w-full">
      <h3 className="text-xl font-semibold mb-6">{t("title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="relative w-full h-48"> 
          <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
          />
        </div>
        <div className="text-sm text-gray-600 mt-2 space-y-1">
          <div className="flex items-center h-16">
            <h4 className="text-base font-semibold w-full">{product.name}</h4>
          </div>
          {avgRating !== undefined && (
            <div className="mt-2">
              <RatingBar rating={avgRating} />
            </div>
          )}
          <SkinTypeBar value={arrowPos} />
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
      </div>
    </section>
  );
}