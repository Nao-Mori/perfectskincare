'use client';
import { useState } from 'react';

//Hardcoding for now
const SKIN_TYPES = [
  { id: 1, label: 'Very Dry' },
  { id: 2, label: 'Dry' },
  { id: 3, label: 'Dry Combo' },
  { id: 4, label: 'Balanced' },
  { id: 5, label: 'T-zone Combo' },
  { id: 6, label: 'Oily Combo' },
  { id: 7, label: 'Oily' },
  { id: 8, label: 'Very Oily' },
];

export default function SkinTypeSelector() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center">
      {SKIN_TYPES.map(({ id, label }) => (
        <div
          key={id}
          onClick={() => setSelected((prev) => (prev === id ? null : id))}
          className={`cursor-pointer animate-bubble rounded-xl px-3 py-1 transition-all border shadow-sm text-sm font-medium m-1
            ${
              selected === id
                ? 'bg-pink-100 border-pink-400 text-pink-800 shadow-md'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }
          `}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
