export function summarizeReviews(
  reviews: {
    rate: number;
    skinType: number; // 1–8
    concerns: { value: string }[];
    comment: string;
  }[]
): {
  avgRating: number;
  mostFrequentGroup: string;
  topRatedSkinType: { skinType: number; group: string; avg: number };
  topConcerns: string[];
  averageReviewedSkinType: number;
} {
  // 1. Average rating overall
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rate, 0) / reviews.length;

  // 2. Skin type (grouped 1–2, 3–4, 5–6, 7–8) that reviewed the most
  const skinTypeGroups: Record<
    'dry' | 'drycombination' | 'oilycombination' | 'oily',
    number[]
  > = {
    dry: [],
    drycombination: [],
    oilycombination: [],
    oily: [],
  };

  const groupLabel = (num: number) => {
    if (num <= 2) return 'dry';
    if (num <= 4) return 'drycombination';
    if (num <= 6) return 'oilycombination';
    return 'oily';
  };

  const skinTypeCount: Record<string, number> = {};
  const skinTypeRateMap: Record<number, number[]> = {};

  for (const r of reviews) {
    const group = groupLabel(r.skinType);
    skinTypeGroups[group].push(r.skinType);

    skinTypeCount[group] = (skinTypeCount[group] || 0) + 1;

    if (!skinTypeRateMap[r.skinType]) skinTypeRateMap[r.skinType] = [];
    skinTypeRateMap[r.skinType].push(r.rate);
  }

  const mostFrequentGroup = Object.entries(skinTypeCount).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];

  // 3. Highest avg rating by specific skinType number
  const topRatedSkinType: { skinType: number; group: string; avg: number } =
    Object.entries(skinTypeRateMap)
      .map(([skinNumStr, rates]) => ({
        skinType: Number(skinNumStr),
        group: groupLabel(Number(skinNumStr)),
        avg: rates.reduce((sum, r) => sum + r, 0) / rates.length,
      }))
      .sort((a, b) => b.avg - a.avg)[0];

  // 4. Top 2 concerns
  const concernCounts: Record<string, number> = {};

  reviews.forEach((r) => {
    r.concerns.forEach((c) => {
      concernCounts[c.value] = (concernCounts[c.value] || 0) + 1;
    });
  });

  const topConcerns = Object.entries(concernCounts)
    .sort((a, b) => b[1] - a[1]) // sort by count
    .slice(0, 2) // top 2
    .map(([concern]) => concern);

  // 5. Average Skin type that reviewed this product
  const allSkinTypes = reviews.map((r) => r.skinType);
  const averageReviewedSkinType =
    allSkinTypes.reduce((a, b) => a + b, 0) / allSkinTypes.length;

  return {
    avgRating: Number(avgRating.toFixed(2)),
    mostFrequentGroup,
    topRatedSkinType,
    topConcerns,
    averageReviewedSkinType,
  };
}
