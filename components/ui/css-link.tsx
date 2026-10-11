"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CssLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function CssLink({
  href,
  children,
  className = "",
  external = false,
}: CssLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group relative inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-sky-300 ${className}`}
    >
      <span className="relative">
        {children}
        {/* Animated expanding underline */}
        <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-sky-400 to-[#174276] transition-all duration-300 ease-out group-hover:w-full" />
      </span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-sky-400" />
    </a>
  );
}
