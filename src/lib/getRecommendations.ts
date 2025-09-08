import { Product, UserInput } from '@/data/products';

//How many concerns are matched with the review
const WEIGHT_CONCERN_OVERLAP = 10; //Usually only 1~3 overlap expected so should be kinda high
//The rate of the review
const WEIGHT_RATE = 2; //Rating is 1~10 so keep it low
//*Value to DEDUCT! How different the user skin type is from skin type of the review
const WEIGHT_SKIN_DIFF = 12; //Pretty crutial to have a similar skin type, keep it slightly higher than concern overlap
//How many products to recommend for each category
const LIMIT_DEFAULT = 10;

function bestReviewScore(
  p: Product,
  userConcerns: Set<string>,
  userSkinType: number
): number {
  let best = -Infinity;
  for (let i = 0; i < p.reviews.length; i++) {
    const r = p.reviews[i];
    let concernOverlap = 0;
    for (const j of r.concerns) {
      if (userConcerns.has(j)) concernOverlap++;
    }
    if (concernOverlap === 0) continue;
    const skinDiff = Math.abs(r.skinType - userSkinType);
    const score =
      concernOverlap * WEIGHT_CONCERN_OVERLAP +
      r.rate * WEIGHT_RATE -
      skinDiff * WEIGHT_SKIN_DIFF;
    if (score > best) best = score;
  }
  return best;
}

class MinHeap<T> {
  private a: T[] = [];
  constructor(private less: (x: T, y: T) => boolean) {}
  size() {
    return this.a.length;
  }
  peek() {
    return this.a[0]!;
  }
  push(v: T) {
    const a = this.a;
    a.push(v);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this.less(a[i], a[p])) break;
      [a[i], a[p]] = [a[p], a[i]];
      i = p;
    }
  }
  pop() {
    const a = this.a;
    if (!a.length) return undefined;
    const top = a[0];
    const last = a.pop()!;
    if (a.length) {
      a[0] = last;
      let i = 0;
      while (true) {
        const l = i * 2 + 1,
          r = l + 1;
        let m = i;
        if (l < a.length && this.less(a[l], a[m])) m = l;
        if (r < a.length && this.less(a[r], a[m])) m = r;
        if (m === i) break;
        [a[i], a[m]] = [a[m], a[i]];
        i = m;
      }
    }
    return top;
  }
  toArray() {
    return [...this.a];
  }
}

export function getRecommendations(
  userInput: UserInput,
  limit: number = LIMIT_DEFAULT,
  loadProductsForCategory: (category: string) => Product[]
): Record<string, Product[]> {
  const userConcerns = new Set(userInput.concerns);
  const out: Record<string, Product[]> = {};

  type Entry = { score: number; item: Product };

  for (const cat of userInput.categories) {
    const products = loadProductsForCategory(cat) ?? [];
    const heap = new MinHeap<Entry>((x, y) =>
      x.score === y.score ? x.item.id < y.item.id : x.score < y.score
    );

    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      const s = bestReviewScore(p, userConcerns, userInput.skinType);
      if (!Number.isFinite(s)) continue;

      if (heap.size() < limit) {
        heap.push({ score: s, item: p });
      } else if (s > heap.peek().score) {
        heap.pop();
        heap.push({ score: s, item: p });
      }
    }

    out[cat] = heap.toArray().sort((a, b) => b.score - a.score).map(e => e.item);
  }

  return out;
}
