'use client';

import clsx from "clsx";
import { useId } from "react";

type Props = {
  selected: Set<string>;
  onChange: React.Dispatch<React.SetStateAction<Set<string>>>;
  options: string[];
  col: number;
  multiSelect: boolean
}

export default function Checklist({
  selected, onChange, options, col, multiSelect
}: Props) {
  const rid = useId();

  return (
    <div>
      <ul className={clsx(`grid gap-2`, `grid-cols-${col}`)}>
        {options.map((label, i) => {
          const id = `${rid}-${i}`;
          const isChecked = selected.has(label);
          return (
            <li key={id} className="relative">
              <label htmlFor={id} className="
                flex leading-none cursor-pointer
                rounded-lg border border-amber-300 bg-white/80 px-2 py-2
                text-[15px] text-amber-900 shadow-sm 
                hover:bg-white hover:shadow
              ">
                <input
                  id={id}
                  type="checkbox"
                  className={clsx("h-3.5 w-3.5 accent-amber-600 mr-1.5 peer pointer-events-none", multiSelect ? "" : "sr-only")}
                  checked={isChecked}
                  onChange={() =>
                    onChange((prev) => {
                      if(!multiSelect) return new Set([label]);
                      const next = new Set(prev);
                      next.has(label) ? next.delete(label) : next.add(label);
                      return next;
                    })
                  }
                />
                <span
                  className={`text-amber-900 truncate`}
                  title={label}
                >
                  {label}
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