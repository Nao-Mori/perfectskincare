'use client'

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useState } from 'react';

export default function LanguageDropdown({ isWide }: { isWide: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const locales = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'jp', label: "日本語" }
  ];

  const handleLocaleChange = (code: string) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`${isWide ? "hidden md:flex" : ""} text-sm whitespace-nowrap font-bold button--outlined`}
      >
        🌐 {locales.find(l => l.code === locale)?.label}
      </button>

      {open && (
        <div className={`${isWide ? "hidden md:flex" : ""}`}>
          <div className="cursor-pointer absolute mt-2 w-25 rounded shadow z-10 bg-[var(--color-bg)]">
            <ul>
            {locales.filter(loc => loc.code !== locale).map(({ code, label }) => (
              <li
                key={code}
                onClick={() => handleLocaleChange(code)}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {label}
              </li>
            ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}