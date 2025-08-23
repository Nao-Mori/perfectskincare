'use client';

import QueryProvider from '@/components/query-provider';
import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider } from 'next-intl';


type Props = {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
};

export default function AppProviders({ locale, messages, children }: Props) {
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </NextIntlClientProvider>
    </SessionProvider>
  );
}