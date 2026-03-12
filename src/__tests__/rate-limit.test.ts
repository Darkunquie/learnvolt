import { describe, it, expect } from "vitest";
import { rateLimit } from "@/lib/rate-limit";

describe("rateLimit", () => {
  it("allows first request", () => {
    const result = rateLimit("test-ip-" + Date.now());
    expect(result.success).toBe(true);
  });

  it("tracks remaining count", () => {
    const ip = "track-ip-" + Date.now();
    expect(rateLimit(ip).remaining).toBe(4);
    expect(rateLimit(ip).remaining).toBe(3);
  });

  it("blocks after limit exceeded", () => {
    const ip = "block-ip-" + Date.now();
    for (let i = 0; i < 5; i++) {
      rateLimit(ip);
    }
    const blocked = rateLimit(ip);
    expect(blocked.success).toBe(false);
    expect(blocked.remaining).toBe(0);
  });

  it("allows different IPs independently", () => {
    const ts = Date.now();
    const ip1 = "ip1-" + ts;
    const ip2 = "ip2-" + ts;

    for (let i = 0; i < 5; i++) {
      rateLimit(ip1);
    }
    expect(rateLimit(ip1).success).toBe(false);
    expect(rateLimit(ip2).success).toBe(true);
  });
});
