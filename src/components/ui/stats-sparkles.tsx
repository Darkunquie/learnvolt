"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export function StatsSparkles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
      <SparklesCore
        id="stats-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={60}
        className="h-full w-full"
        particleColor="#FFFFFF"
        speed={0.8}
      />
    </div>
  );
}
