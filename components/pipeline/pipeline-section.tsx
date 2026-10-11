"use client";

import React from "react";
import { motion } from "framer-motion";
import { MarketingBadge } from "../ui/marketing-badge";
import {
  Search,
  Cpu,
  Layers,
  LineChart,
  CheckCircle,
  Infinity as InfinityIcon,
  Zap,
} from "lucide-react";

export function PipelineSection() {
  const steps = [
    {
      num: "01",
      title: "Data Discovery",
      badge: "Real-Time Ingestion",
      desc: "Autonomous crawlers scan keyword spikes, competitor shifts, and viral patterns. Claude AI extracts actionable hooks and filters out market noise.",
      icon: <Search className="h-6 w-6 text-sky-400" />,
      bullets: [
        "Continuous social platform polling",
        "Algorithmic trend scoring & cluster filtering",
        "Target audience archetype matching",
      ],
    },
    {
      num: "02",
      title: "Content Generation",
      badge: "Multimodal AI",
      desc: "Claude API drafts tailored video scripts, captions, and ad hooks. ElevenLabs creates matching voiceovers, all formatted into platform-ready assets.",
      icon: <Cpu className="h-6 w-6 text-indigo-400" />,
      bullets: [
        "Dynamic script length & pacing adaptation",
        "Hyper-realistic neural voice synthesis",
        "Multi-lingual localization on demand",
      ],
    },
    {
      num: "03",
      title: "Automated Launch",
      badge: "Human-in-the-Loop",
      desc: "Everything syncs to your Trello boards for 1-click human review. Once approved, Make.com triggers instant cross-platform publishing.",
      icon: <Layers className="h-6 w-6 text-sky-400" />,
      bullets: [
        "Trello Kanban card generation with audio preview",
        "One-click approval or auto-scheduler",
        "Simultaneous multi-channel distribution",
      ],
    },
    {
      num: "04",
      title: "Performance Analytics & ML",
      badge: "Self-Optimizing",
      desc: "Engagement signals, watch time, and conversion metrics feed back into the models to continuously refine and amplify your content ROI.",
      icon: <LineChart className="h-6 w-6 text-emerald-400" />,
      bullets: [
        "Predictive viral performance scoring",
        "Continuous feedback loop model training",
        "Automated budget re-allocation triggers",
      ],
    },
  ];

  return (
    <section id="pipeline" className="relative py-28 px-4 border-t border-white/10 bg-[#061325]/50">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <MarketingBadge text="The Automation Pipeline" variant="primary" className="mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
            From Raw Signal to Published Asset in{" "}
            <span className="bg-gradient-to-r from-sky-400 to-[#60a5fa] bg-clip-text text-transparent">
              4 Automated Steps
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A software pipeline that replaces weeks of manual back-and-forth
            with sub-second automated executions.
          </p>
        </div>

        {/* 4 Pipeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-[#0A2342]/50 p-8 backdrop-blur-xl hover:border-sky-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-sky-400/40 transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-400">
                      PHASE {step.num}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-300">
                  {step.badge}
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {step.desc}
              </p>

              <div className="space-y-2 border-t border-white/10 pt-4">
                {step.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid: By the Numbers */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#0A2342]/70 via-[#174276]/40 to-[#0A2342]/70 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-sky-300 font-semibold">
              Real Impact
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              By the Numbers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="text-5xl font-black text-white tracking-tight">
                50<span className="text-sky-400">+</span>
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-300 mt-2">
                Automated Workflows
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Active pipelines running 24/7 across client accounts
              </p>
            </div>

            <div className="pt-6 md:pt-0">
              <div className="text-5xl font-black text-white tracking-tight">
                10K<span className="text-sky-400">+</span>
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-300 mt-2">
                AI-Generated Assets
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Scripts, audio voiceovers, and localized creatives produced
              </p>
            </div>

            <div className="pt-6 md:pt-0">
              <div className="text-5xl font-black text-white tracking-tight flex items-center justify-center">
                <InfinityIcon className="h-12 w-12 text-sky-400" />
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-300 mt-2">
                Hours Saved
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Eliminating manual bottlenecks across marketing ops
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
