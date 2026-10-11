"use client";

import React from "react";
import { ServicesCard } from "../ui/services-card";
import { MarketingBadge } from "../ui/marketing-badge";
import {
  Share2,
  LineChart,
  Palette,
  Dna,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "AI Social Media Automation",
      tag: "Autonomous Ops",
      techStack: "Claude API + Make.com",
      icon: <Share2 className="h-6 w-6" />,
      description:
        "Automated posting, intelligent scheduling, and conversational engagement powered by real-time trend signals and Claude's deep language reasoning.",
      features: [
        "Real-time social firehose trend ingestion",
        "Context-aware script & caption synthesis",
        "Make.com webhook sync across all channels",
      ],
    },
    {
      title: "Data-Driven Ad Generation",
      tag: "High Conversion",
      techStack: "AI Analytics + Modash",
      icon: <LineChart className="h-6 w-6" />,
      description:
        "Generate multi-variant high-performing ad copy and localized creative angles automatically tuned to audience demographics and conversion targets.",
      features: [
        "Predictive viral hook scoring algorithm",
        "Automated A/B creative permutation matrix",
        "Direct influencer demographic matching",
      ],
    },
    {
      title: "Generative Visual Workflows",
      tag: "Asset Pipeline",
      techStack: "ElevenLabs + GenAI",
      icon: <Palette className="h-6 w-6" />,
      description:
        "From raw campaign briefs to finished video assets. Generative concepting, brand-consistent visual styling, and synchronized ElevenLabs AI voiceovers.",
      features: [
        "High-fidelity voice synthesis & cloning",
        "Dynamic thumbnail & video storyboard generation",
        "Brand style guide preservation filters",
      ],
    },
    {
      title: "Brand DNA Analysis via AI",
      tag: "Living Model",
      techStack: "Neural Embeddings",
      icon: <Dna className="h-6 w-6" />,
      description:
        "Deep semantic analysis of your brand voice, visual aesthetics, and audience sentiment to build a living neural model that adapts with every campaign.",
      features: [
        "Tone-of-voice alignment scoring",
        "Audience resonance & sentiment vector tracking",
        "Zero-drift brand guardrail enforcement",
      ],
    },
  ];

  return (
    <section id="features" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header with Marketing Badges */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
            <MarketingBadge text="AI-Powered" variant="primary" />
            <MarketingBadge text="Automated" variant="accent" />
            <MarketingBadge text="Enterprise-Ready" variant="emerald" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
            Engineered for Autonomous{" "}
            <span className="bg-gradient-to-r from-sky-400 to-[#60a5fa] bg-clip-text text-transparent">
              Content Scale
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Four interconnected engines that replace fragmented agency overhead
            with unified, self-optimizing software workflows.
          </p>
        </div>

        {/* 2x2 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feat, index) => (
            <ServicesCard
              key={feat.title}
              title={feat.title}
              tag={feat.tag}
              techStack={feat.techStack}
              icon={feat.icon}
              description={feat.description}
              features={feat.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
