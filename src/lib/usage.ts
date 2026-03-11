const FREE_LIMIT = 5;
const STORAGE_KEY = "learnvolt_usage";

interface UsageData {
  count: number;
  date: string;
}

function getTodayKey(): string {
  return new Date().toISOString().split("T")[0];
}

export function getUsage(): UsageData {
  if (typeof window === "undefined") return { count: 0, date: getTodayKey() };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { count: 0, date: getTodayKey() };
    const data: UsageData = JSON.parse(raw);
    if (data.date !== getTodayKey()) {
      return { count: 0, date: getTodayKey() };
    }
    return data;
  } catch {
    return { count: 0, date: getTodayKey() };
  }
}

export function incrementUsage(): UsageData {
  const usage = getUsage();
  const updated = { count: usage.count + 1, date: getTodayKey() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function getRemainingUses(): number {
  const usage = getUsage();
  return Math.max(0, FREE_LIMIT - usage.count);
}

export function hasReachedLimit(): boolean {
  return getRemainingUses() <= 0;
}

export const FREE_DAILY_LIMIT = FREE_LIMIT;
