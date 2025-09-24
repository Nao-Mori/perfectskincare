import { Product } from '@/types/core';
import { useQuery } from '@tanstack/react-query';

export function useProducts(ids: string[]) {
  return useQuery({
    queryKey: ['products-by-ids', { ids }],
    queryFn: async () => {
      const res = await fetch('/api/products/by-ids', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ids }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error('Network response was not ok');
      return data.products as Product[];
    },
    enabled: ids.length > 0,
    staleTime: 30_000,
    gcTime: 5 * 60_000,
    select: (items) => {
      // NECESSARY to make them ordered cause it's recently viewed!
      const map = new Map(items.map((p) => [String(p.id), p]));
      const dd = ids
        .map((x) => map.get(String(x)))
        .filter(Boolean) as Product[];
      return dd;
    },
  });
}
