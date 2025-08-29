'use client';

import { useState } from 'react';
import Checklist from './ui/Checklist';
import SelectorCard from './ui/SelectorCard';
import { concerns } from '@/data/concerns';
import { useTranslations } from 'next-intl';
import { skinTypes } from '@/data/skinTypes';
import { categories } from '@/data/categories';

export default function MainSection() {
  const [skinType, setSkinType] = useState<Set<string>>(() => new Set());
  const [myConcerns, setMyConcerns] = useState<Set<string>>(() => new Set());
  const [chosenCategories, setChosenCategories] = useState<Set<string>>(
    () => new Set()
  );

  const t = useTranslations('Counseling');

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <SelectorCard step={1} title={t('step1')}>
          <Checklist
            group="skinType"
            selected={skinType}
            onChange={setSkinType}
            options={skinTypes}
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
      <div className="text-center mt-4">
        <button
          className="btn--gradient"
          disabled={
            skinType.size === 0 ||
            myConcerns.size === 0 ||
            chosenCategories.size === 0
          }
        >
          {t('getRecommendations')}
        </button>
      </div>
    </section>
  );
}
