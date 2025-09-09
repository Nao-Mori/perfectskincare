import { useTranslations } from 'next-intl';

export default function SkinTypeBar({ value }: { value: number }) {
  const t = useTranslations('Product.skinType');
  // convert to percentage offset for arrow placement (1–8 scale)
  const arrowPos = ((value - 1) / 6) * 100;

  return (
    <div className="mt-4">
      <div className="flex justify-between text-xs text-gray-500 mb-1 px-1">
        <span>{t('dry')}</span>
        <span>{t('drycombination')}</span>
        <span>{t('oilycombination')}</span>
        <span>{t('oily')}</span>
      </div>

      <div className="relative h-4 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-700 ease-out"
          style={{
            width: `${arrowPos}%`,
            background: 'linear-gradient(to right, #f9c5d1, #fbc2eb)',
          }}
        />

        <div
          className="absolute top-[-6px] text-pink-500 text-lg transition-all duration-500"
          style={{ left: `${arrowPos}%`, transform: 'translateX(-50%)' }}
        >
          ▲
        </div>
      </div>
    </div>
  );
}
