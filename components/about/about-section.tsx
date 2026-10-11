"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MarketingBadge } from "../ui/marketing-badge";
import { Plus, Minus, ShieldCheck, Sparkles } from "lucide-react";

export function AboutSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the tbtsocial AI content automation platform work?",
      a: "tbtsocial connects live trend signals and keyword spikes directly to the Claude API. Our engine drafts localized video scripts and captions, sends voiceover prompts to ElevenLabs, and queues approval cards in Trello via Make.com scenarios. You review with a single click, and content publishes automatically.",
    },
    {
      q: "Can I connect our custom agency tech stack via API?",
      a: "Yes. tbtsocial offers a native REST API, bidirectional webhooks, and pre-built Make.com connectors. You can plug in custom CRMs, Slack notifications, Google Drive asset vaults, or proprietary client dashboards in minutes.",
    },
    {
      q: "What do the SaaS retainer and subscription plans look like?",
      a: "We offer flexible monthly platform subscriptions based on active workflow pipelines and asset volume. Plans range from Starter (for boutique agencies running up to 5 automated pipelines) to Enterprise (unlimited custom pipelines, dedicated infrastructure, and fine-tuned brand models).",
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        {/* About tbtsocial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-7 space-y-6">
            <MarketingBadge text="Our Vision" variant="primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Where Marketing Strategy Meets{" "}
              <span className="bg-gradient-to-r from-sky-400 to-[#60a5fa] bg-clip-text text-transparent">
                Autonomous Intelligence
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We don&apos;t just run campaigns; we build autonomous software systems
              that manage the entire creative pipeline.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Founded on the belief that creative agencies spend far too many hours
              on repetitive coordination, tbtsocial blends{" "}
              <strong className="text-white">
                digital marketing expertise with advanced artificial intelligence
              </strong>
              . We replace disjointed spreadsheets and manual copywriting with
              intelligent, synchronized workflows that grow and adapt with your brand.
            </p>
          </div>

          {/* Founders Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#0A2342]/60 p-6 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
                  Founders &amp; Leadership
                </span>
                <span className="text-xs font-mono text-slate-400">
                  tbtsocial Labs
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-sky-400/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#174276] to-[#0A2342] text-base font-bold text-white border border-sky-400/30 shadow-md">
                    BF
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">
                      Burak Fidan
                    </div>
                    <div className="text-xs text-sky-300">
                      Co-founder &amp; Platform Architect
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-sky-400/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f315a] to-[#0A2342] text-base font-bold text-white border border-sky-400/30 shadow-md">
                    TM
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">
                      Taha Mis
                    </div>
                    <div className="text-xs text-sky-300">
                      Co-founder &amp; Operations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <MarketingBadge text="Frequently Asked Questions" variant="accent" className="mb-3" />
            <h3 className="text-3xl font-extrabold text-white">
              Platform &amp; Architecture Insights
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-[#0A2342]/40 backdrop-blur-md overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm md:text-base font-semibold text-white hover:text-sky-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-1">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
