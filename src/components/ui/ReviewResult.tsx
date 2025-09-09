import { Review } from '@/data/products';
import { summarizeReviews } from '@/lib/summarizeReviews';
import { useTranslations } from 'next-intl';
import RatingBar from './RatingBar';
import SkinTypeBar from './SkinTypeBar';

export default function ReviewResult({ reviews }: { reviews: Review[] }) {
  const t = useTranslations('Product');

  if (reviews.length === 0) {
    return (
      <div className="mt-2">
        <RatingBar rating={0} />
        <h2 className="py-4 text-gray-500">{t('noReview')}</h2>
      </div>
    );
  }

  const { avgRating, topRatedSkinType, topConcerns, averageReviewedSkinType } =
    summarizeReviews(reviews);

  return (
    <div>
      {avgRating !== undefined && (
        <div className="mt-2">
          <RatingBar rating={avgRating} />
        </div>
      )}
      <SkinTypeBar value={averageReviewedSkinType} />
      <div className="text-sm text-gray-600 mt-4 space-y-1">
        <div>
          ⭐ {t('ratedHighBy')}{' '}
          <strong>{t(`skinType.${topRatedSkinType.group}`)}</strong> {t('skin')}{' '}
          ({topRatedSkinType.avg})
        </div>
        <div>
          🎯 {t('effectivedTo')}{' '}
          {topConcerns.map((c, i) => (
            <strong key={i}>
              {t(`concerns.${c}`)}
              {i === 0 ? ', ' : null}
            </strong>
          ))}
        </div>
      </div>
    </div>
  );
}
