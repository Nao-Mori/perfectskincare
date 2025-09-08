import { ProductMini } from '@/data/products';

const KEY = 'recentProducts';

export function updateRecent(
  recent: ProductMini[],
  product: ProductMini,
  max: number
): ProductMini[] {
  if (max <= 0 || !product) return recent.slice(0, max);
  const without = recent.filter((pro: ProductMini) => pro.id !== product.id);
  return [{ ...product, seenAt: Date.now() }, ...without].slice(0, max);
}

function isObj(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

export function loadRecent(): ProductMini[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const now = Date.now();
    return parsed
      .filter(isObj)
      .map((x) => {
        const id = typeof x.id === 'number' ? x.id : 0;
        if (!id) return null;

        return {
          id,
          name: typeof x.name === 'string' ? x.name : '(unknown)',
          image: typeof x.image === 'string' ? x.image : '',
          category: typeof x.category === 'string' ? x.category : '',
          seenAt: typeof x.seenAt === 'number' ? x.seenAt : now,
        } as ProductMini;
      })
      .filter((x): x is ProductMini => Boolean(x));
  } catch {
    return [];
  }
}

export function saveRecent(products: ProductMini[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(products));
}
