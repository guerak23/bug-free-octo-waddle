"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CssLink } from "./css-link";
import { Phone, Mail, Sparkles, Shield, Cpu, Users } from "lucide-react";

export function HoverFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#061325] pt-24 pb-36 text-white"
    >
      {/* Interactive Cursor Spotlight Glow (replicates nurui/hover-footer) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(23, 66, 118, 0.4), rgba(10, 35, 66, 0.15) 40%, transparent 80%)`,
        }}
      />

      {/* Massive Background Typography with Hover Reveal Mask */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 select-none z-0">
        <span
          className="text-[13vw] font-black tracking-tighter text-white/[0.03] transition-colors duration-300"
          style={{
            textShadow: isHovered
              ? "0 0 80px rgba(56, 189, 248, 0.15)"
              : "none",
          }}
        >
          TBTSOCIAL
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#174276] text-white shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                <Sparkles className="h-5 w-5 text-sky-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                tbtsocial<span className="text-sky-400">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              The AI-Native Content Operations and Automation Platform for
              high-growth digital agencies and modern marketing teams.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-950/30 px-3 py-1 text-xs text-sky-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational &middot; Claude 3.5 &amp; Make.com Connected
              </span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <CssLink href="#features">Features</CssLink>
              </li>
              <li>
                <CssLink href="#pipeline">The Pipeline</CssLink>
              </li>
              <li>
                <CssLink href="#integrations">Integrations</CssLink>
              </li>
              <li>
                <CssLink href="https://cal.com/tbtsocial/30min" external>
                  Request API
                </CssLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Channel */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4 text-sky-400" />
                <a
                  href="tel:05340637353"
                  className="hover:text-sky-300 transition-colors"
                >
                  0534 063 73 53
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 text-sky-400" />
                <a
                  href="mailto:contact@socialtbt.com.tr"
                  className="hover:text-sky-300 transition-colors"
                >
                  contact@socialtbt.com.tr
                </a>
              </li>
              <li className="pt-1">
                <CssLink href="https://wa.me/905340637353" external>
                  WhatsApp Channel
                </CssLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Founders & Leadership */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Founder
            </h4>
            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#174276] text-xs font-bold text-white">
                    BF
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Burak Fidan
                    </div>
                    <div className="text-xs text-slate-400">
                      Founder &amp; Growth Architect
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} tbtsocial. All Rights Reserved.
            Built for Autonomous Content Operations.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security Overview
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
