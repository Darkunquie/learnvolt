"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export function ToolSparkles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <SparklesCore
        id="tool-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="h-full w-full"
        particleColor="#FFFFFF"
        speed={1}
      />
    </div>
  );
}
