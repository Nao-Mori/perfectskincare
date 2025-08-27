import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePostReview() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { id: string; rating: number; comment: string }) => {
      const res = await fetch(`/api/products/${payload.id}/reviews`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to post review');
      return res.json();
    },
    onSuccess: (_data, { id }) => {
      qc.invalidateQueries({ queryKey: ['product', id] });
      qc.invalidateQueries({ queryKey: ['product', id, 'reviews'] });
    },
  });
}