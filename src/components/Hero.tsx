import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <section className="text-center max-w-xl mb-12">
        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
        <p className="text-base text-gray-600 mb-6">{t('subtitle')}</p>

        <div className="flex gap-2 justify-center items-center bg-white rounded-full px-4 py-2 shadow-md">
            <input
            className="bg-transparent outline-none text-sm w-60"
            type="text"
            placeholder="I have dry cheeks and an oily T-zone..."
            />
            <button className="bg-accent hover:bg-accent-light px-4 py-1.5 rounded-full text-sm">
            Get recommendations
            </button>
        </div>
        </section>
    );
}