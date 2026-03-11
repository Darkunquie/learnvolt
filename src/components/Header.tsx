"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > lastY && y > 80) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`glass-header fixed left-1/2 -translate-x-1/2 z-50 w-[min(92%,1200px)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        hidden && !menuOpen ? "-translate-y-[calc(100%+32px)]" : ""
      } ${
        scrolled ? "top-2 glass-header-scrolled" : "top-4"
      }`}
    >
      <div className="flex items-center justify-between px-7 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="LearnVolt" className="h-[42px] w-[42px] -my-[8px] object-cover scale-[1.8]" />
          <span className="text-[1.8rem] font-extrabold text-white tracking-tight" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>
            LearnVolt
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-2">
            <li>
              <Link
                href="/#tools"
                className="text-white/85 text-[0.95rem] font-medium px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/15 hover:text-white"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-white/85 text-[0.95rem] font-medium px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/15 hover:text-white"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/pricing" className="hidden md:block">
          <button className="glass-cta px-5 py-2.5 rounded-[14px] text-[0.9rem] font-semibold text-[#1a1a2e] bg-white/75 backdrop-blur-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-none cursor-pointer transition-all duration-300 hover:bg-white/95 hover:scale-[1.04]">
            Go Pro
          </button>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="px-7 pb-5 border-t border-white/15 md:hidden">
          <Link
            href="/#tools"
            className="block py-3 text-[0.95rem] font-medium text-white/85 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Tools
          </Link>
          <Link
            href="/pricing"
            className="block py-3 text-[0.95rem] font-medium text-white/85 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            <button className="mt-2 w-full px-4 py-3 rounded-[14px] text-[0.9rem] font-semibold text-[#1a1a2e] bg-white/75 backdrop-blur-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-none cursor-pointer transition-all duration-300 hover:bg-white/95">
              Go Pro
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}
