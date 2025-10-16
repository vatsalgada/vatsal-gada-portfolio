"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren, useCallback } from "react";
import clsx from "clsx";

type InteractiveCardProps = PropsWithChildren<{
  as?: "div" | "a";
  href?: string;
  title?: string;
  eyebrow?: string;
  accentColor?: string;
  className?: string;
  media?: React.ReactNode;
}>;

export function InteractiveCard({ as = "div", href, title, eyebrow, accentColor = "#22d3ee", className, media, children }: InteractiveCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 150, damping: 20 });
  const percentX = useTransform(x, (v) => v * 100);
  const percentY = useTransform(y, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(600px circle at ${percentX}% ${percentY}%, ${accentColor}33, transparent 40%)`;

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  }, [x, y, prefersReducedMotion]);

  const onLeave = useCallback(() => {
    x.set(0.5);
    y.set(0.5);
  }, [x, y]);

  const Wrapper = as === "a" && href ? Link : ("div" as any);

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      tabIndex={0}
      style={{
        rotateX: prefersReducedMotion ? 0 : (rx as unknown as number),
        rotateY: prefersReducedMotion ? 0 : (ry as unknown as number),
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={clsx(
        "group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur will-change-transform",
        "transition-colors hover:bg-white/[0.08]",
        className
      )}
    >
      <motion.div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: glare }} />
      <div className="relative z-10 flex flex-col gap-3">
        {media && (
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
            {media}
          </div>
        )}
        <div className="flex flex-col">
          {eyebrow && (
            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
              {eyebrow}
            </div>
          )}
          {title && (
            <div className="text-lg font-semibold text-white">
              {title}
            </div>
          )}
        </div>
        <div className="text-sm text-white/70">
          {children}
        </div>
        {href && (
          <Wrapper href={href} className="mt-2 inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200">
            Visit →
          </Wrapper>
        )}
      </div>
    </motion.div>
  );
}


