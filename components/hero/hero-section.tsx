"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DownloadButton } from "../ui/download-button";
import { MarketingBadge } from "../ui/marketing-badge";
import {
  Sparkles,
  Zap,
  Play,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Share2,
} from "lucide-react";

export function HeroSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl text-center z-10">
        {/* Top Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <MarketingBadge
            text="Autonomous Content Engine 2.0 &middot; Claude 3.5 Native"
            variant="primary"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
        >
          Content Operations on{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-[#60a5fa] bg-clip-text text-transparent">
              Autopilot with AI.
            </span>
            {/* Subtle glow underneath */}
            <div className="absolute -inset-x-2 -bottom-2 h-4 bg-sky-500/20 blur-xl -z-10" />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
        >
          Streamline your digital agency workflows. Connect real-time trend
          data, automate script generation, and manage campaigns in one unified
          platform.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Glowing Download/Access Button */}
          <DownloadButton
            idleText="Request API Access"
            loadingText="Connecting AI Pipeline..."
            successText="Pipeline Access Ready!"
          />

          {/* Secondary Action */}
          <a
            href="#pipeline"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-sky-400/40"
          >
            <Play className="h-4 w-4 text-sky-400 fill-sky-400" />
            <span>Explore Automations</span>
          </a>
        </motion.div>

        {/* Interactive Dashboard / Pipeline Preview Card (replicates wisedev/portfolio-hero & prebuiltui) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mx-auto max-w-4xl rounded-2xl border border-white/15 bg-[#0A2342]/60 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)] text-left"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">
                tbtsocial-engine://pipeline/live
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-emerald-300">
                Claude 3.5 Live
              </span>
            </div>
          </div>

          {/* Interactive Steps inside preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div
              onClick={() => setActiveStep(1)}
              className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                activeStep === 1
                  ? "border-sky-400/60 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                  : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold text-sky-300 mb-1">
                <span>1. Signal Ingestion</span>
                <TrendingUp className="h-3.5 w-3.5" />
              </div>
              <div className="text-xs text-slate-300 font-mono">
                +14 trending hashtags captured
              </div>
            </div>

            <div
              onClick={() => setActiveStep(2)}
              className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                activeStep === 2
                  ? "border-sky-400/60 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                  : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold text-sky-300 mb-1">
                <span>2. Claude Scripting</span>
                <Cpu className="h-3.5 w-3.5" />
              </div>
              <div className="text-xs text-slate-300 font-mono">
                Script generated &amp; synced
              </div>
            </div>

            <div
              onClick={() => setActiveStep(3)}
              className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                activeStep === 3
                  ? "border-sky-400/60 bg-sky-950/40 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                  : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold text-sky-300 mb-1">
                <span>3. Make &amp; Trello</span>
                <Share2 className="h-3.5 w-3.5" />
              </div>
              <div className="text-xs text-slate-300 font-mono">
                Voiceover + Approval card
              </div>
            </div>
          </div>

          {/* Dynamic Console Output */}
          <div className="rounded-xl border border-white/5 bg-[#061325]/80 p-4 font-mono text-xs text-slate-300">
            {activeStep === 1 && (
              <div>
                <span className="text-sky-400">&gt; GET /api/v2/trends</span>
                <p className="mt-1 text-slate-400">
                  Modash &amp; Social Firehose analyzed: High surge detected in #FinTechAI (+340% velocity).
                </p>
                <div className="mt-2 text-emerald-400">
                  [SUCCESS] Data normalized &amp; dispatched to Claude prompt engine.
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <span className="text-sky-400">&gt; POST /anthropic/claude-3-5/generate</span>
                <p className="mt-1 text-slate-400">
                  &ldquo;Why 90% of SaaS founders are switching to autonomous content queues in 2026...&rdquo;
                </p>
                <div className="mt-2 text-emerald-400">
                  [SUCCESS] 3 localized hook variants generated (TikTok, Reels, LinkedIn).
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div>
                <span className="text-sky-400">&gt; RUN make.com/scenario/publish-hook</span>
                <p className="mt-1 text-slate-400">
                  ElevenLabs cloned voice rendering completed (0.84s). Card created on board: &ldquo;Weekly Review &mdash; High Priority&rdquo;.
                </p>
                <div className="mt-2 text-emerald-400">
                  [SUCCESS] Ready for 1-click human approval or autonomous scheduled dispatch.
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
