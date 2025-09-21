import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="text-center max-w-xl mb-5 mt-9 z-10">
      <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
      <p className="text-base text-gray-600 mb-6">{t('subtitle')}</p>
    </section>
  );
}
