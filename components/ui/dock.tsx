"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  Layers,
  Cpu,
  Mail,
  Workflow,
} from "lucide-react";

interface DockItemProps {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}

function DockIcon({ mouseX, title, icon, href }: DockItemProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [42, 68, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex aspect-square items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md border border-white/20 transition-colors hover:bg-[#174276]/80 hover:border-sky-400 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-sky-400/30 bg-[#0A2342]/95 px-2.5 py-1 text-[11px] font-semibold text-white shadow-xl backdrop-blur-md pointer-events-none"
          >
            {title}
            <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 border-4 border-transparent border-t-[#0A2342]" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex h-5 w-5 items-center justify-center">{icon}</div>
    </motion.a>
  );
}

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  const dockItems = [
    { title: "Home", icon: <Home className="h-5 w-5" />, href: "#hero" },
    { title: "Features", icon: <Layers className="h-5 w-5" />, href: "#features" },
    { title: "AI Demo", icon: <Cpu className="h-5 w-5 text-sky-400" />, href: "#demo" },
    { title: "Pipeline", icon: <Workflow className="h-5 w-5" />, href: "#pipeline" },
    { title: "Contact", icon: <Mail className="h-5 w-5" />, href: "#contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-3 rounded-3xl border border-white/15 bg-[#0A2342]/75 px-4 py-3 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:border-sky-400/30 transition-all duration-300"
      >
        {dockItems.map((item) => (
          <DockIcon
            key={item.title}
            mouseX={mouseX}
            title={item.title}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </motion.nav>
    </div>
  );
}
