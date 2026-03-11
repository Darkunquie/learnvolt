"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import Link from "next/link"

export function GlassCTA({
  href,
  children,
  className = "",
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const isExternal = href.startsWith("http") || href.startsWith("#")

  const button = (
    <LiquidButton
      size="xxl"
      className={`text-white font-bold text-sm uppercase tracking-[0.2em] ${className}`}
    >
      {children}
    </LiquidButton>
  )

  if (isExternal) {
    return <a href={href}>{button}</a>
  }

  return <Link href={href}>{button}</Link>
}
