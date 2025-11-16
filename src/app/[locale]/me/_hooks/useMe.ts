'use client';

import { MeResponse } from '@/app/api/me/route';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

async function fetchMe(take?: number): Promise<MeResponse> {
  const qs = typeof take === 'number' ? `?take=${take}` : '';
  const res = await fetch(`/api/me${qs}`, { method: 'GET' });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `Failed to fetch /api/me (${res.status})`);
  }
  return res.json();
}

export function useMe(options?: {
  take?: number;
  enabled?: boolean;
  staleTime?: number;
}) {
  const { status } = useSession();
  const take = options?.take;
  const enabled = (options?.enabled ?? true) && status === 'authenticated';

  const query = useQuery({
    queryKey: ['me', { take }],
    queryFn: () => fetchMe(take),
    enabled,
    placeholderData: keepPreviousData,
    staleTime: options?.staleTime ?? 60_000,
  });

  return {
    ...query,
    me: query.data?.user,
    preference: query.data?.preference ?? null,
    favorites: query.data?.favorites ?? [],
    favoritesTotal: query.data?.favoritesTotal ?? 0,
    pageSize: query.data?.pagination.take ?? take ?? 50,
    isUnauthorized:
      query.isError &&
      (query.error as Error)?.message?.toLowerCase().includes('unauthorized'),
  };
}
