const KEY = "recentProducts";

export function updateRecent(recent: string[], viewedId: string, max: number): string[] {
  if (max <= 0 || !viewedId) return recent.slice(0, max);
  const without = recent.filter(id => id !== viewedId);
  return [viewedId, ...without].slice(0, max);
}

export function loadRecent(): string[] {
  if (typeof window === "undefined") return []; // SSR guard
  try {
    const raw = localStorage.getItem(KEY);
    
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}

export function saveRecent(ids: string[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(ids.filter((value:string) => value !== "undefined")));
}