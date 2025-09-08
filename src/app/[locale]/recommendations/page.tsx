'use client';

import { useMemo, use } from 'react';
import { useGetRecommendations } from '@/hooks/useGetRecommendations';
import { UserInput } from '@/data/products';
import ProductList from '@/components/ProductList';
import { Loader } from 'lucide-react';

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
        <h2>Finding the best skincare products for you...</h2>
      </div>
    );
  if (error || !data) return <div>Failed to load!</div>;

  return (
    <div className="space-y-8 py-4">
      {categories.map((cat) => (
        <section key={cat} className="max-w-5xl w-full">
          <h2 className="text-xl font-semibold py-3 text-center">{cat}</h2>
          <ProductList products={data[cat] ?? []} />
        </section>
      ))}
    </div>
  );
}
