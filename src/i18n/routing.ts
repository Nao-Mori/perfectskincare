import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'ja', 'ko']

export const routing = defineRouting({
  locales,
  defaultLocale: locales[0],
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
