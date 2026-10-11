"use client";

import React from "react";

interface LogoItem {
  name: string;
  tag: string;
  color: string;
  bgGrad: string;
}

const partners: LogoItem[] = [
  {
    name: "Claude API",
    tag: "Anthropic LLM",
    color: "#D4A574",
    bgGrad: "from-[#D4A574]/20 to-transparent",
  },
  {
    name: "Make.com",
    tag: "Visual Automation",
    color: "#8B5CF6",
    bgGrad: "from-[#8B5CF6]/20 to-transparent",
  },
  {
    name: "ElevenLabs",
    tag: "Voice Synthesis",
    color: "#38BDF8",
    bgGrad: "from-[#38BDF8]/20 to-transparent",
  },
  {
    name: "Modash",
    tag: "Creator Analytics",
    color: "#0EA5E9",
    bgGrad: "from-[#0EA5E9]/20 to-transparent",
  },
  {
    name: "Trello",
    tag: "Human-in-the-Loop",
    color: "#0079BF",
    bgGrad: "from-[#0079BF]/20 to-transparent",
  },
];

export function ProgressiveBlurLogos() {
  const fullList = [...partners, ...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-14" id="integrations">
      <div className="mx-auto max-w-6xl px-4 text-center mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">
          Native Architecture &middot; Powered by the Best in Tech
        </p>
      </div>

      <div className="relative flex w-full items-center overflow-hidden">
        {/* Progressive Blur Layer: Left Edge */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-24 md:w-44 bg-gradient-to-r from-[#061325] via-[#061325]/80 to-transparent backdrop-blur-[2px]" />
        
        {/* Progressive Blur Layer: Right Edge */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-24 md:w-44 bg-gradient-to-l from-[#061325] via-[#061325]/80 to-transparent backdrop-blur-[2px]" />

        {/* Infinite Moving Track */}
        <div className="flex animate-marquee gap-8 whitespace-nowrap will-change-transform py-4">
          {fullList.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="group relative flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-400/40 hover:bg-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              {/* Logo Badge Icon */}
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-white shadow-md text-sm border border-white/15"
                style={{ backgroundColor: logo.color }}
              >
                {logo.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {logo.name}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {logo.tag}
                </span>
              </div>
              {/* Subtle hover backlight */}
              <div
                className={`absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${logo.bgGrad} blur-xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
