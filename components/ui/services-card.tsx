"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  techStack: string;
  features: string[];
}

export function ServicesCard({
  title,
  description,
  icon,
  tag,
  techStack,
  features,
}: ServicesCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0A2342]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(23,66,118,0.35)]"
    >
      {/* Spotlight Radial Background Glow following mouse cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), transparent 70%)`,
        }}
      />

      {/* Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-[1px] z-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.5), transparent 70%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative z-10">
        {/* Top bar with Icon and Tech Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#174276] to-[#0A2342] border border-sky-400/30 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] group-hover:scale-105 transition-transform">
            {icon}
          </div>
          <span className="rounded-full border border-sky-400/20 bg-sky-950/40 px-3 py-1 text-[11px] font-semibold tracking-wider text-sky-300 uppercase">
            {tag}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors mb-2.5">
          {title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {description}
        </p>

        {/* Feature List */}
        <ul className="space-y-2 mb-6 border-t border-white/10 pt-4">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer with Tech Stack and Arrow */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-xs font-medium text-slate-400">
          Powered by <strong className="text-slate-200">{techStack}</strong>
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-colors group-hover:bg-[#174276] group-hover:text-white">
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
