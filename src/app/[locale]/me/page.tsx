'use client';

import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import RecentlyViewed from '@/components/RecentlyViewed';
import LoginButton from '@/components/ui/LoginButton';
import { useMe } from './_hooks/useMe';
import Spinner from '@/components/ui/Spinner';
import { getSkinTypeName } from '@/data/skinTypes';
import ProductListMini from '@/components/ProductListMini';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-zinc-200 bg-zinc-600 text-zinc-50">
      {children}
    </span>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
        >
          <div className="aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
          <div className="p-3 space-y-2">
            <div className="h-3 w-20 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded" />
            <div className="h-4 w-40 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  const t = useTranslations('Links');
  const tControls = useTranslations('Controls');
  const tProduct = useTranslations('Product');
  const { data: session, status } = useSession();

  const { me, preference, favorites, favoritesTotal, isLoading, isError } = useMe({ take: 50 });

  if (!session) {
    return (
      <div className="mt-10 text-center">
        <h3 className="mt-5 mb-10 text-3xl font-bold">
          {tControls('pleaseLogin')}
        </h3>
        <LoginButton />
      </div>
    );
  }

  if (isLoading) return <Spinner size={30} />;

  return (
    <div>
      <h1 className="my-5 text-3xl font-bold">{t('yourData')}</h1>
      <div>
        {isLoading ? (
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="h-7 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse"
              />
            ))}
          </div>
        ) : preference ? (
          <div className="mb-10">
            {typeof preference.skinType === 'number' && (
              <div className="flex items-center gap-2 flex-wrap mt-3">
              <h2>{tProduct('skinType')}:</h2>
              <Badge>{tProduct(`_skinType.${getSkinTypeName(preference.skinType)}`)}</Badge>
              </div>
            )}
            {typeof preference.concerns?.length && (
              <div className="flex items-center gap-2 flex-wrap mt-3">
              <h2>{tProduct('concerns')}:</h2>
              {preference.concerns.length > 0 ? (
                preference.concerns.map((c:string) => <Badge key={c}>{tProduct(`_concerns.${c}`)}</Badge>)
              ) : (
                <span className="text-sm text-zinc-500">
                  No concerns selected
                </span>
              )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-sm text-zinc-500">No preferences saved yet.</div>
        )}
      </div>
      <div className="my-5">
        <h3 className="text-xl font-semibold mb-6">{t('favorites')}</h3>
        {isLoading ? (
          <GridSkeleton />
        ) : favorites.length ? (
          <ProductListMini products={favorites} />
        ) : (
          <div className="text-sm text-zinc-500">
            You haven't favorited any products yet.
          </div>
        )}
      </div>
      <RecentlyViewed />
      <div className="mt-10 text-center">
        <button
          className="text-sm whitespace-nowrap font-bold ml-2"
          onClick={() => signOut()}
        >
          {tControls('logout')}
        </button>
      </div>
    </div>
  );
}
