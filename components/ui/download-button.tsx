"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, Check, Loader2, Sparkles } from "lucide-react";

interface DownloadButtonProps {
  idleText?: string;
  loadingText?: string;
  successText?: string;
  onSuccess?: () => void;
  className?: string;
}

export function DownloadButton({
  idleText = "Request API Access",
  loadingText = "Connecting Pipelines...",
  successText = "Pipeline Connected",
  onSuccess,
  className = "",
}: DownloadButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (status !== "idle") return;
    setStatus("loading");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("success");
          if (onSuccess) onSuccess();
          setTimeout(() => {
            window.open("https://cal.com/tbtsocial/30min", "_blank");
            setStatus("idle");
            setProgress(0);
          }, 1800);
          return 100;
        }
        return prev + 15;
      });
    }, 120);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400/30 via-[#174276] to-sky-500/30 opacity-70 blur-lg transition duration-500 group-hover:opacity-100" />

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
        whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
        className="relative flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-b from-[#174276] to-[#0A2342] px-7 py-4 font-semibold text-white shadow-2xl transition-all duration-300 min-w-[240px]"
      >
        {/* Progress bar fill for download/pipeline loading animation */}
        {status === "loading" && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="absolute left-0 top-0 bottom-0 bg-sky-500/20 z-0"
          />
        )}

        {/* Content switch */}
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative z-10 flex items-center gap-2.5 text-sm md:text-base font-semibold"
            >
              <Sparkles className="h-4 w-4 text-sky-300 animate-pulse" />
              <span>{idleText}</span>
              <ArrowDownToLine className="h-4 w-4 text-sky-200 transition-transform group-hover:translate-y-0.5" />
            </motion.div>
          )}

          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative z-10 flex items-center gap-2.5 text-sm md:text-base font-semibold text-sky-200"
            >
              <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
              <span>{loadingText}</span>
              <span className="text-xs text-sky-300/80">({progress}%)</span>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative z-10 flex items-center gap-2 text-sm md:text-base font-semibold text-emerald-300"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span>{successText}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shimmer light effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 hover:translate-x-full pointer-events-none" />
      </motion.button>
    </div>
  );
}
