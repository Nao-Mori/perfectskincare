'use client';

import { useCallback, useEffect, useState } from 'react';
import { loadRecent, saveRecent, updateRecent } from '@/lib/recent';

export function useRecentViewed(max: number = 8) {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(loadRecent().slice(0, max));
  }, [max]);

  const pushView = useCallback(
    (id: string) => {
      setRecent((prev) => {
        const next = updateRecent(prev, id, max);
        saveRecent(next);
        return next;
      });
    },
    [max]
  );

  return { recent, pushView };
}
