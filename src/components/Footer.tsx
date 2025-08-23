import Link from "next/link";
import { useTranslations } from 'next-intl';
import { internalLinks } from "@/data/internalLinks";

export default function Footer() {
  const t = useTranslations('Footer');
  const tLinks = useTranslations('Links');

  return (
    <footer className="relative z-10 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 text-gray-700 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">SkinMatch.io</h4>
          <p>{t('description')}</p>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">{t('quickLinks')}</h4>
          <ul className="space-y-1">
            {internalLinks.map(({ href, label }) => (
              <li key={href}><Link href={href} className="hover:underline">{tLinks(label)}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">{t('connect')}</h4>
          <p className="mb-1">{t('email')}</p>
          <p className="mb-1">{t('instagram')}</p>
          <p>{t('credit')}</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-300 text-xs">
        &copy; {new Date().getFullYear()} {t('copyright')}
      </div>
    </footer>
  );
}