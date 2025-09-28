import RecentlyViewed from '@/components/RecentlyViewed';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Links');
  return (
    <div>
      <h1 className="mt-5 mb-10 text-3xl font-bold">{t('yourData')}</h1>
      {/* add user prefs and favorites later */}
      <RecentlyViewed />
    </div>
  );
}
