import { useQuery } from '@tanstack/react-query';

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await fetch(`/api/products/${id}`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
  });
}