'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import RatingBar from '@/components/ui/RatingBar';
import { Review } from '@/types/core';
import { getSkinTypeName } from '@/data/skinTypes';

export function Reviews({ reviews }: { reviews: Review[] }) {
  const all = reviews ?? [];
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? all : all.slice(0, 4);
  const hiddenCount = Math.max(0, all.length - 4);

  const t = useTranslations('Product');

  return (
    <section className="mt-8 px-5">
      <div className="flex items-baseline justify-between px-2">
        <h2 className="text-xl font-semibold">{t('rating')}</h2>
        <span className="text-xl text-gray-500 pl-2 mr-auto">
          {reviews.length}
        </span>
      </div>

      {reviews.length && (
        <ul className="mt-4 grid gap-4 lg:grid-cols-2">
          {visible.map((r, key) => (
            <li
              key={key}
              className="rounded-2xl border border-gray-300 bg-white/80 p-4 shadow-sm transition hover:shadow-md"
            >
              <header className="flex items-center gap-3">
                <Avatar name={r.userName || 'SkinMatch.io'} src={r.avatarUrl} />
                <div>
                  <div className="font-medium">
                    {r.userName || 'SkinMatch.io'}
                  </div>
                  <div className="text-xs text-gray-500">
                    <span className="mr-3">
                      <b>{t('skinType')}</b>:{' '}
                      {t(`_skinType.${getSkinTypeName(r.skinType)}`)}
                    </span>
                    <b>{t('concerns')}</b>:{' '}
                    {r.concerns.map((value: string) => (
                      <span key={value}>{t(`_concerns.${value}`)} </span>
                    ))}
                  </div>
                </div>
              </header>

              <div className="mt-3">
                <RatingBar rating={r.rate} />
                <p className="mt-2 text-sm leading-6 text-gray-800 whitespace-pre-wrap">
                  {r.comment}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {hiddenCount > 0 && (
        <button
          className="btn--outlined mt-6 text-sm w-full block text-center"
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? 'Show less' : `Show more`}
        </button>
      )}
    </section>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  const initials = useMemo(
    () =>
      name
        .split(' ')
        .map((p) => p[0]?.toUpperCase())
        .slice(0, 2)
        .join(''),
    [name]
  );

  return (
    <div className="relative h-10 w-10 shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-200 text-sm font-semibold text-gray-700">
          {initials || '👤'}
        </div>
      )}
      <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-[10px] font-bold text-white">
        ★
      </span>
    </div>
  );
}
