'use client';

import { useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getRecommendations } from '@/app/[locale]/recommendations/_lib/getRecommendations';
import { Product, UserInput } from '@/types/core';

export type ByCategoryResponse = Record<string, Product[]>;
export type Recommendations = Record<string, Product[]>;

const recommendationsKeys = {
  all: ['recommendations'] as const,
  list: (user: UserInput, take: number) =>
    [...recommendationsKeys.all, { user, take }] as const,
};

async function fetchByCategory(categories: string[], take: number) {
  const res = await fetch('/api/products/by-categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      categories,
      limit: take,
    }),
  });
  if (!res.ok) throw new Error(`Failed to load products: ${res.status}`);
  return (await res.json()) as ByCategoryResponse;
}

export function useGetRecommendations(
  user: UserInput,
  options?: {
    perCategoryLimit?: number;
    fetchPerCategory?: number;
    enabled?: boolean;
    staleTime?: number;
  }
) {
  const perCategoryLimit = options?.perCategoryLimit ?? 10;
  const fetchLimit = options?.fetchPerCategory ?? 50;

  const q = useQuery({
    queryKey: recommendationsKeys.list(user, fetchLimit),
    queryFn: () => fetchByCategory(user.categories, fetchLimit),
    placeholderData: keepPreviousData,
    staleTime: options?.staleTime ?? 86_400_000,
    enabled: options?.enabled ?? true,
    select: (byCategory: ByCategoryResponse): Recommendations => {
      return getRecommendations(
        user,
        perCategoryLimit,
        (cat: string) => byCategory[cat] ?? []
      );
    },
  });

  useEffect(() => {
    if (!q.data) return;
    try {
      // If logged-in, saved to DB

      // If not logged-in Temporary save and passed to DB on first log-in
      const key = `reco:${user.skinType}:${user.concerns.join(',')}:${user.categories.join(',')}`;
      localStorage.setItem(
        key,
        JSON.stringify({ recs: q.data, ts: Date.now() })
      );
    } catch {}
  }, [q.data, user.skinType, user.concerns, user.categories]);

  return q;
}
