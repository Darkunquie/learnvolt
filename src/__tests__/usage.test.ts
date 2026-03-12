import { describe, it, expect, beforeEach } from "vitest";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(globalThis, "localStorage", {
  value: localStorageMock,
});

import {
  getUsage,
  incrementUsage,
  getRemainingUses,
  hasReachedLimit,
  FREE_DAILY_LIMIT,
} from "@/lib/usage";

describe("usage tracking", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("starts with zero usage", () => {
    expect(getUsage().count).toBe(0);
  });

  it("increments usage correctly", () => {
    expect(incrementUsage().count).toBe(1);
    expect(incrementUsage().count).toBe(2);
  });

  it("reports correct remaining uses", () => {
    expect(getRemainingUses()).toBe(FREE_DAILY_LIMIT);
    incrementUsage();
    expect(getRemainingUses()).toBe(FREE_DAILY_LIMIT - 1);
  });

  it("detects when limit is reached", () => {
    for (let i = 0; i < FREE_DAILY_LIMIT; i++) {
      incrementUsage();
    }
    expect(hasReachedLimit()).toBe(true);
    expect(getRemainingUses()).toBe(0);
  });

  it("resets when date changes", () => {
    incrementUsage();
    localStorageMock.setItem(
      "learnvolt_usage",
      JSON.stringify({ count: 5, date: "2020-01-01" })
    );
    expect(getUsage().count).toBe(0);
  });
});
