import { Product } from '@/types/core';
import { useQuery } from '@tanstack/react-query';

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error('Network response was not ok');
      return data as Product;
    },
    enabled: Boolean(id),
    staleTime: 30_000,
    gcTime: 5 * 60_000,
  });
}
