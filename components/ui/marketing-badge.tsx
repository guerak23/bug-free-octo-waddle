"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface MarketingBadgeProps {
  text: string;
  className?: string;
  variant?: "primary" | "accent" | "emerald";
}

export function MarketingBadge({
  text,
  className = "",
  variant = "primary",
}: MarketingBadgeProps) {
  const variantStyles = {
    primary:
      "border-sky-400/30 bg-[#174276]/30 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    accent:
      "border-indigo-400/30 bg-indigo-900/30 text-indigo-200 shadow-[0_0_15px_rgba(129,140,248,0.15)]",
    emerald:
      "border-emerald-400/30 bg-emerald-950/40 text-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.15)]",
  };

  const dotStyles = {
    primary: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
    accent: "bg-indigo-400 shadow-[0_0_8px_#818cf8]",
    emerald: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-300 ${variantStyles[variant]} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotStyles[variant]}`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${dotStyles[variant]}`}
        />
      </span>
      <span>{text}</span>
      <Sparkles className="h-3 w-3 opacity-70" />
    </div>
  );
}
