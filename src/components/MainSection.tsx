'use client';

import { useState } from 'react';
import Checklist from './ui/Checklist';
import SelectorCard from './ui/SelectorCard';
import { concerns } from '@/data/concerns';
import { useTranslations } from 'next-intl';
import { getSkinTypeId, skinTypeNames } from '@/data/skinTypes';
import { categories } from '@/data/categories';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

function toParam(list: string[]) {
  return list.map(encodeURIComponent).join(',');
}

export default function MainSection() {
  const [skinType, setSkinType] = useState<Set<string>>(() => new Set());
  const [myConcerns, setMyConcerns] = useState<Set<string>>(() => new Set());
  const [chosenCategories, setChosenCategories] = useState<Set<string>>(
    () => new Set()
  );
  const [moving, setMoving] = useState(false);

  const t = useTranslations('Counseling');
  const router = useRouter();

  const getRecommendations = () => {
    setMoving(true);
    const params = new URLSearchParams();
    params.set('skinType', String(getSkinTypeId([...skinType][0])));
    params.set('concerns', toParam([...myConcerns]));
    params.set('categories', toParam([...chosenCategories]));
    router.push(`/recommendations?${params.toString()}`);
  };

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-2">
        <SelectorCard step={1} title={t('step1')}>
          <Checklist
            group="skinType"
            selected={skinType}
            onChange={setSkinType}
            options={skinTypeNames}
            col={1}
            multiSelect={false}
          />
        </SelectorCard>
        <SelectorCard step={2} title={t('step2')}>
          <Checklist
            group="concerns"
            selected={myConcerns}
            onChange={setMyConcerns}
            options={concerns}
            col={2}
            multiSelect
          />
        </SelectorCard>
        <SelectorCard step={3} title={t('step3')}>
          <Checklist
            group="categories"
            selected={chosenCategories}
            onChange={setChosenCategories}
            options={categories}
            col={1}
            multiSelect
          />
        </SelectorCard>
      </div>
      <div className="text-center mt-4 flex flex-col items-center justify-center">
        {moving ? (
          <Loader2 className="animate-spin text-blue-300" />
        ) : (
          <button
            className="btn--gradient"
            disabled={
              skinType.size === 0 ||
              myConcerns.size === 0 ||
              chosenCategories.size === 0
            }
            onClick={getRecommendations}
          >
            {t('getRecommendations')}
          </button>
        )}
      </div>
    </section>
  );
}
