'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useFavorite(productId: string, initial?: boolean) {
  const qc = useQueryClient();

  const m = useMutation({
    mutationFn: async (next: boolean) => {
      const res = await fetch(`/api/favorites/${productId}`, {
        method: next ? 'POST' : 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return next;
    },
    onMutate: async (next) => {
      await qc.cancelQueries({ queryKey: ['product', productId] });
      const prev = qc.getQueryData<boolean>(['favorite', productId]);
      qc.setQueryData(['favorite', productId], next);
      return { prev };
    },
    onError: (_err, _next, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData(['favorite', productId], ctx.prev);
    },
    onSuccess: (next) => {
      qc.setQueryData(['favorite', productId], next);
    },
  });

  return {
    isFavorite: (qc.getQueryData<boolean>(['favorite', productId]) ?? initial) ?? false,
    toggle: () => m.mutate(!( (qc.getQueryData<boolean>(['favorite', productId]) ?? initial) ?? false )),
    isPending: m.isPending,
  };
}