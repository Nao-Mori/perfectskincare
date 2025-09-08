export const skinTypeNames = [
  "dry",
  "drycombination",
  "balanced",
  "oilycombination",
  "oily",
] as const;

export type SkinTypeName = typeof skinTypeNames[number];

export const skinTypeMapping: Record<SkinTypeName, number> = Object.fromEntries(
  skinTypeNames.map((name, i) => [name, i + 1])
) as Record<SkinTypeName, number>;

export const skinTypeReverse: Record<number, SkinTypeName> = Object.fromEntries(
  skinTypeNames.map((name, i) => [i + 1, name])
) as Record<number, SkinTypeName>;

export const getSkinTypeId = (name: string) =>
  (skinTypeMapping as Record<string, number | undefined>)[name];

export const getSkinTypeName = (id: number) => skinTypeReverse[id];
