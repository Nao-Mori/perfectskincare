'use client';

import { useMemo, use } from 'react';
import { useGetRecommendations } from '@/hooks/useGetRecommendations';
import { UserInput } from '@/data/products';
import ProductList from '@/components/ProductList';
import { Loader } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RecommendationsPage({
  searchParams,
}: {
  searchParams: Promise<{
    skinType?: string;
    concerns?: string;
    categories?: string;
  }>;
}) {
  const params = use(searchParams);
  const skinType = Number(params.skinType ?? 0);
  const concerns = (params.concerns ?? '').split(',').filter(Boolean);
  const categories = (params.categories ?? '').split(',').filter(Boolean);
  const t = useTranslations('Counseling');
  const tProduct = useTranslations('Product');

  const userInput: UserInput = useMemo(
    () => ({ skinType, concerns, categories }),
    [skinType, concerns, categories]
  );

  const { data, isLoading, error } = useGetRecommendations(userInput, {
    perCategoryLimit: 3,
    fetchPerCategory: 50,
  });

  if (isLoading)
    return (
      <div className="space-y-8 py-4">
        <Loader className="animate-spin text-blue-300" size={65} />
        <h3>{t('lookingForProducts')}</h3>
      </div>
    );
  if (error || !data) return <div>Failed to load!</div>;

  return (
    <div className="space-y-8 py-5">
      {categories.map((cat) => {
        const categoryLabel = tProduct(`categories.${cat}`);
        return (
          <section key={cat} className="max-w-5xl w-full pb-5">
            <h2 className="text-xl font-semibold pb-5 text-center">
              {t('recommendedForYou', { category: categoryLabel })}✨
            </h2>
            <ProductList products={data[cat] ?? []} />
          </section>
        )
      })}
    </div>
  );
}
