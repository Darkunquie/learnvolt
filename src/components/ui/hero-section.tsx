"use client"

import { ParticlesBg } from "@/components/ui/particles-bg"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#060b18]">
      {/* Layer 1: Floating particles */}
      <ParticlesBg />

      {/* Layer 2: WebGL wave (blended on top) */}
      <div className="absolute inset-0 opacity-70 mix-blend-screen pointer-events-none">
        <WebGLShader />
      </div>

      {/* Subtle gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Abstract decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-t-2 border-l-2 border-white/20" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-b-2 border-r-2 border-white/20" />
      </div>

      <div className="container mx-auto px-8 pb-20 relative z-10">
        <div className="max-w-6xl flex flex-col md:flex-row items-end gap-12">
          <div className="flex-1">
            {/* Editorial line accent */}
            <div className="mb-8 w-24 h-px bg-gradient-to-r from-white/40 to-transparent" />

            <h1 className="text-white text-7xl md:text-[9rem] font-extrabold leading-[0.85] tracking-tighter mb-8">
              STUDY<br />BEYOND.
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
                Harness the power of AI to synthesize knowledge, write better essays,
                and accelerate your academic journey.
              </p>
              <a href="#tools">
                <LiquidButton size="xxl" className="text-white px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] shrink-0">
                  Start Journey
                </LiquidButton>
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-1/3 text-white/40 text-right pb-4">
            <p className="text-sm tracking-widest uppercase">Free AI Study Tools</p>
            <p className="text-xs mt-2 font-mono">5 generations per day. No signup required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
