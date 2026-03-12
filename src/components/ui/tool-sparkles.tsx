"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export function ToolSparkles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
      <SparklesCore
        id="tool-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={80}
        className="h-full w-full"
        particleColor="#8b5cf6"
        speed={1.5}
      />
      {/* Fade edges so sparkles blend into background */}
      <div className="absolute inset-0 bg-[#060b18] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,black)]" />
    </div>
  );
}
