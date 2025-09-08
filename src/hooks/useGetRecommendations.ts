"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getRecommendations } from "@/lib/getRecommendations";
import { Product, UserInput } from "@/data/products";

export type ByCategoryResponse = Record<string, Product[]>;
export type Recommendations = Record<string, Product[]>;

const recommendationsKeys = {
  all: ["recommendations"] as const,
  list: (user: UserInput, take: number) =>
    [...recommendationsKeys.all, { user, take }] as const,
};

async function fetchByCategory(categories: string[], take: number) {
  const res = await fetch("/api/products/by-category", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

  return useQuery({
    queryKey: recommendationsKeys.list(user, fetchLimit),
    queryFn: () => fetchByCategory(user.categories, fetchLimit),
    placeholderData: keepPreviousData,
    staleTime: options?.staleTime ?? 60_000,
    enabled: options?.enabled ?? true,
    select: (byCategory: ByCategoryResponse): Recommendations => {
      return getRecommendations(
        user,
        perCategoryLimit,
        (cat: string) => byCategory[cat] ?? []
      );
    },
  });
}