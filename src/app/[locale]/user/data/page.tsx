'use client';

import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import RecentlyViewed from '@/components/RecentlyViewed';
import LoginButton from '@/components/ui/LoginButton';

export default function Page() {
  const t = useTranslations('Links');
  const tControls = useTranslations('Controls');
  const { data: session, status } = useSession();

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

  return (
    <div>
      <h1 className="mt-5 mb-10 text-3xl font-bold">{t('yourData')}</h1>
      {/* add user prefs and favorites later */}
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
