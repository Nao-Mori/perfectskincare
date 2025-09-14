import { Review } from '@/data/products';

type Bin = { skinType: number; averageReview: number; reviewCount: number };

// Centered skin type weighted by the average review rate
function getSkinTypeCenter(bins: Bin[]): number {
  let num = 0, den = 0;
  for (const b of bins) {
    // More review count = Trust worthy
    const w = b.averageReview * b.reviewCount * 0.5;
    if (w > 0) { 
      num += b.skinType * w;
      den += w;
    }
  }
  return den ? num / den : NaN;
}

export function aggregateReviews(reviews: readonly Review[]) {
  const skinTypeRateMap = new Map<number, { sum: number; count: number }>();
  const concernCounts: Record<string, number> = {};

  for (const r of reviews) {
    const cur = skinTypeRateMap.get(r.skinType) ?? { sum: 0, count: 0 };
    cur.sum += r.rate;
    cur.count += 1;
    skinTypeRateMap.set(r.skinType, cur);

    r.concerns.forEach((c) => {
      concernCounts[c] = (concernCounts[c] || 0) + 1;
    });
  }
  const skinTypeRates = Array.from(skinTypeRateMap, ([skinType, { sum, count }]) => ({
    skinType,
    averageReview: sum / count,
    reviewCount: count,
  })).sort((a, b) => a.skinType - b.skinType);

  // 5. Average Skin type that reviewed this product
  const highReviewSkinType = getSkinTypeCenter(skinTypeRates);

  return {
    skinTypeRates,
    concernCounts,
    highReviewSkinType
  }
}

export function summarizeReviews(reviews: readonly Review[]): {
  avgRating: number;
  topRatedSkinType: { skinType: number; group: string; avg: number };
  topConcerns: string[];
  highReviewSkinType: number;
} {
  // 1. Average rating overall
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rate, 0) / reviews.length;

  const SKIN_GROUPS: Record<number, string> = {
    1: "verydry",
    2: "dry",
    3: "drycombination",
    4: "balanced",
    5: "oilycombination",
    6: "oily",
    7: "veryoily",
  };

  const { skinTypeRates, concernCounts, highReviewSkinType } = aggregateReviews(reviews);

  // 2. Find the highest rated skin type
  const topRatedSkinType = (() => {
    let best: { skinType: number; group: string; avg: number } | null = null;

    for (const b of skinTypeRates as Bin[]) {
      if (!b.reviewCount) continue;
      const avg = b.averageReview;
      const group = SKIN_GROUPS[b.skinType] ?? "unknown";
      if (!best || avg > best.avg) best = { skinType: b.skinType, group, avg };
    }

    return best ?? { skinType: NaN, group: "unknown", avg: 0 };
  })();

  // 3. Top 2 concerns
  const topConcerns = Object.entries(concernCounts)
    .sort((a, b) => b[1] - a[1]) // sort by count
    .slice(0, 2) // top 2
    .map(([concern]) => concern);

  return {
    avgRating: Number(avgRating.toFixed(2)),
    topRatedSkinType,
    topConcerns,
    highReviewSkinType, // 4. Skin type to recommend, centered
  };
}
