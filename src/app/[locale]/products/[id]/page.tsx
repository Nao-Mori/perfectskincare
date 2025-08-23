'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import type { Product } from '@/data/products';
import { summarizeReviews } from '@/lib/summarizeReviews';
import RatingBar from '@/components/ui/RatingBar';
import SkinTypeBar from '@/components/ui/SkinTypeBar';
import Spinner from '@/components/ui/Spinner';
import RecentlyViewed from "@/components/RecentlyViewed";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div className="px-5">
      <Details />
      <RecentlyViewed id={String(id)} />
    </div>
  );
}

function Details() {
  const t = useTranslations("Recommendations");
  const param = useParams();
  const { data, isLoading, error } = useProduct(param.id as string);
  const product = data as Product;

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  if (error || !product) {
    return <div className="text-red-500 text-center">Product does not exist</div>;
  }

  const { 
    avgRating,
    //mostFrequentGroup,
    topRatedSkinType,
    topConcerns,
    averageReviewedSkinType
  } = summarizeReviews(product.reviews);

  // convert to percentage offset for arrow placement (1–8 scale)
  const arrowPos = ((averageReviewedSkinType - 1) / 7) * 100;

  return (
    <div className="w-full flex flex-wrap item-center justify-center mt-5 mb-10">
      <div className="relative h-60 w-60"> 
        <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-contain rounded-lg shadow-md"
        />
      </div>
      <div className="text-sm text-gray-600 px-5">
        <div className="flex items-center h-16">
          <h4 className="text-base font-semibold w-full">{product.name}</h4>
        </div>
        {avgRating !== undefined && (
          <div className="mt-2">
            <RatingBar rating={avgRating} />
          </div>
        )}
        <SkinTypeBar value={arrowPos} />
        <div className="text-sm text-gray-600 mt-4 space-y-1">
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
    </div>
  );
}