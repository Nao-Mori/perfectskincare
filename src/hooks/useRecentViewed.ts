'use client';

import { useCallback, useEffect, useState } from 'react';
import { loadRecent, saveRecent, updateRecent } from '@/lib/recent';
import { ProductMini } from '@/types/core';

export function useRecentViewed(max: number = 8) {
  const [recent, setRecent] = useState<ProductMini[]>([]);

  useEffect(() => {
    setRecent(loadRecent().slice(0, max));
  }, [max]);

  const pushView = useCallback(
    (product: ProductMini) => {
      setRecent((prev) => {
        const next = updateRecent(prev, product, max);
        saveRecent(next);
        return next;
      });
    },
    [max]
  );

  return { recent, pushView };
}
