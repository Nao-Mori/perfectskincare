'use client';

import { useRecentViewed } from '@/hooks/useRecentViewed';
import { useEffect, useMemo } from 'react';
import { useProducts } from '@/hooks/useProducts';
import ProductList from './ProductList';
import Spinner from './ui/Spinner';

export default function RecentlyViewed({ id }: { id: string }) {
  const { recent, pushView } = useRecentViewed(8);

  useEffect(() => {
    pushView(id);
  }, [id, pushView]);

  const ids = useMemo(() => recent ?? [], [recent]);

  const { data: products, error, isPending } = useProducts(ids);

  return (
    <aside className="w-full max-w-5xl">
      <h3 className="text-xl font-semibold mb-6">Recently viewed</h3>

      {isPending ? (
        <Spinner size={50} />
      ) : products ? (
        <ProductList products={products} />
      ) : (
        <p style={{ color: 'crimson' }}>
          {error ? (error as Error).message : 'Unknow error occured'}
        </p>
      )}
    </aside>
  );
}
