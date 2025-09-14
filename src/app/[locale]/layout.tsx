import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import BackgroundImage from '@/components/ui/BackgroundImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppProviders from '../providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: 'en' | 'ja' | 'ko' };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });

  return {
    title: t('site'),
    description: t('title'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ja: '/ja',
        ko: '/ko',
      },
    },
    openGraph: {
      type: 'website',
      url: 'https://skinmatch.io/recommendations',
      siteName: t('site'),
      title: t('site'),
      description: t('title'),
      locale: locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="min-h-screen flex flex-col">
          <AppProviders locale={locale} messages={messages}>
            <BackgroundImage />
            <Header />
            <main className="bg-bg text-text font-sans flex-grow px-5 flex flex-col items-center z-10">
              {children}
            </main>
            <Footer />
          </AppProviders>
        </div>
      </body>
    </html>
  );
}
