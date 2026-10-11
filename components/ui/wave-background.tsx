"use client";

import React, { useEffect, useRef } from "react";

interface WaveBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  waveColor?: string;
  accentColor?: string;
}

export function WaveBackground({
  className = "",
  children,
  waveColor = "rgba(23, 66, 118, 0.45)",
  accentColor = "rgba(56, 189, 248, 0.25)",
}: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let step = 0;
    const linesCount = 7;

    const render = () => {
      step += 0.012;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Deep navy background fill with subtle celestial bloom radial gradient
      ctx.fillStyle = "#061325";
      ctx.fillRect(0, 0, width, height);

      // Celestial bloom light spot (mouse & center reactive)
      const bloomGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.6
      );
      bloomGrad.addColorStop(0, "rgba(23, 66, 118, 0.35)");
      bloomGrad.addColorStop(0.5, "rgba(10, 35, 66, 0.2)");
      bloomGrad.addColorStop(1, "rgba(6, 19, 37, 0)");
      ctx.fillStyle = bloomGrad;
      ctx.fillRect(0, 0, width, height);

      // Render layered harmonic sine wave ribbons
      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();
        const baseHeight = height * 0.55 + i * 28;
        const amplitude = 35 + i * 14;
        const frequency = 0.0018 + i * 0.0004;
        const phase = step * (0.8 + i * 0.2);

        for (let x = 0; x <= width; x += 6) {
          // Parallax mouse influence
          const distToMouse = Math.abs(x - mouse.x);
          const mouseLift =
            Math.max(0, 1 - distToMouse / 500) *
            Math.sin((mouse.y / height) * Math.PI) *
            25;

          const y =
            baseHeight +
            Math.sin(x * frequency + phase) * amplitude +
            Math.cos(x * 0.001 - phase * 0.5) * (amplitude * 0.6) -
            mouseLift;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = i % 2 === 0 ? waveColor : accentColor;
        ctx.lineWidth = i === 3 ? 2 : 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [waveColor, accentColor]);

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#061325] text-white ${className}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      />
      {/* Subtle tech grid mesh overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
