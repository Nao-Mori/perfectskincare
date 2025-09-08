import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
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

export const metadata: Metadata = {
  title: 'Skin Match AI',
  description: 'Perfect skincare products for your skin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};

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
