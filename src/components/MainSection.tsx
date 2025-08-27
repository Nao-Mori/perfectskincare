'use client';

import { useState } from "react";
import Checklist from "./ui/Checklist";
import SelectorCard from "./ui/SelectorCard";
import { concerns } from "@/data/concerns";
import { useTranslations } from "next-intl";

const skinTypes = [
  "dry", "drycombination", "balanced", "oilycombination", "oily"
];

const productCategories = [
  "cleanser", "face wash", "toner", "serum", "lotion", "cream", "sunscreen"
];

export default function MainSection() {
  const [skinType, setSkinType] = useState<Set<string>>(() => new Set());
  const [myConcerns, setMyConcerns] = useState<Set<string>>(() => new Set());
  const [chosenCategories, setChosenCategories] = useState<Set<string>>(() => new Set()); 

  return (
    <div className="flex flex-wrap justify-center">
      <SelectorCard step={1} title={"Tell us your skin type!"}>
        <Checklist selected={skinType} onChange={setSkinType} options={skinTypes} col={1} multiSelect={false} />
      </SelectorCard>
      <SelectorCard step={2} title={"Tell us your skin concerns!"}>
        <Checklist selected={myConcerns} onChange={setMyConcerns} options={concerns} col={2} multiSelect />
      </SelectorCard>
      <SelectorCard step={3} title={"Tell us ingredients you like!"}>
        <Checklist selected={chosenCategories} onChange={setChosenCategories} options={productCategories} col={1} multiSelect />
      </SelectorCard>
    </div>
  );
}