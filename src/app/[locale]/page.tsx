import Hero from '@/components/sections/Hero';
import MainSection from '@/components/sections/MainSection';
import ProductList from '@/components/ProductList';
import { products } from '@/data/products';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Hero');
  return (
    <div className="relative w-full z-1">
      <div className="px-5 flex flex-col items-center z-10">
        <Hero />
        <MainSection />
        <h3 className="max-w-5xl w-full text-xl font-semibold mb-6 mt-15">
          {t('recommendations')}
        </h3>
        <ProductList products={products} />
      </div>
    </div>
  );
}
