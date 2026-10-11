"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Features", href: "#features" },
  { name: "Integrations", href: "#integrations" },
  { name: "Pipeline", href: "#pipeline" },
  { name: "About", href: "#about" },
];

export function LimelightNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="relative flex items-center justify-between gap-6 rounded-full border border-white/10 bg-[#0A2342]/70 px-5 py-2.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-white/20 max-w-4xl w-full">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[#174276] text-white shadow-[0_0_15px_rgba(56,189,248,0.35)] transition-transform group-hover:scale-105">
            <Sparkles className="h-4 w-4 text-sky-300" />
            <div className="absolute inset-0 rounded-lg bg-sky-400/20 blur-[6px] -z-10" />
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            tbtsocial<span className="text-sky-400">.</span>
          </span>
        </a>

        {/* Limelight Nav Links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = activeIndex === index && hoveredIndex === null;

            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                className="relative px-4 py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors z-10 text-slate-300 hover:text-white"
              >
                {/* Limelight Glow Pill */}
                {(isHovered || isActive) && (
                  <motion.div
                    layoutId="limelight-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#174276] to-[#0f315a] border border-sky-400/30 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                  >
                    {/* Top edge subtle spotlight reflection */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
                  </motion.div>
                )}
                {item.name}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/tbtsocial/30min"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-sky-400/40 bg-gradient-to-r from-[#174276] to-[#0A2342] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_25px_rgba(23,66,118,0.6)] transition-all hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
          >
            <span>Request Demo</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
        </div>
      </nav>
    </header>
  );
}
