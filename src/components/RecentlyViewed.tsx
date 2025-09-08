'use client';

import { useRecentViewed } from '@/hooks/useRecentViewed';
import { useEffect, useMemo } from 'react';
import { ProductMini } from '@/data/products';
import ProductListMini from './ProductListMini';

export default function RecentlyViewed({ product }: { product?: ProductMini }) {
  const { recent, pushView } = useRecentViewed(8);

  useEffect(() => {
    if (product) pushView(product);
  }, [product, pushView]);

  const products = useMemo(() => {
    if (!recent) return [];
    return product ? recent.filter((p) => p.id !== product.id) : recent;
  }, [recent, product]);

  if (!products.length) return null;

  return (
    <aside className="w-full max-w-5xl">
      <h3 className="text-xl font-semibold mb-6">Recently viewed</h3>
      <ProductListMini products={products} />
    </aside>
  );
}
