'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useId } from 'react';

type Props = {
  group: string;
  selected: Set<string>;
  onChange: React.Dispatch<React.SetStateAction<Set<string>>>;
  options: readonly string[];
  col: number;
  multiSelect: boolean;
};

export default function Checklist({
  group,
  selected,
  onChange,
  options,
  col,
  multiSelect,
}: Props) {
  const rid = useId();
  const t = useTranslations(`Product.${group}`);

  return (
    <div>
      <ul className={clsx(`grid gap-2`, col === 2 && `grid-cols-2`)}>
        {options.map((label, i) => {
          const id = `${rid}-${i}`;
          const isChecked = selected.has(label);
          return (
            <li key={id} className="relative">
              <label
                htmlFor={id}
                className={clsx(
                  `
                flex leading-none cursor-pointer
                rounded-lg border border-amber-200 bg-white/80 px-2 py-2
                text-amber-900 shadow-sm text-[15px]
                hover:bg-white hover:shadow
              `,
                  group === 'skinType' &&
                    `text-[17px] has-[:checked]:bg-orange-100`
                )}
              >
                <input
                  id={id}
                  type="checkbox"
                  className={clsx(
                    'h-3.5 w-3.5 mr-1.5 peer pointer-events-none',
                    group === 'skinType'
                      ? 'sr-only'
                      : group === 'categories'
                        ? 'accent-green-600'
                        : 'accent-amber-600'
                  )}
                  checked={isChecked}
                  onChange={() =>
                    onChange((prev) => {
                      if (!multiSelect) return new Set([label]);
                      const next = new Set(prev);
                      next.has(label) ? next.delete(label) : next.add(label);
                      return next;
                    })
                  }
                />
                <span
                  className={`text-amber-900 truncate capitalize`}
                  title={label}
                >
                  {t(label)}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* {options.length > 10 ? (
        <button
          type="button"
          className="
          mt-4 w-full rounded-lg border border-amber-300 bg-white/80 py-2 text-sm
          text-amber-900 hover:bg-amber-100 active:shadow-inner
          "
        >
          More
        </button>
      ) : null} */}
    </div>
  );
}
