"use client";

import { PropsWithChildren, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

type ScrollStackProps = PropsWithChildren<{
  className?: string;
}>;

type StackCardProps = PropsWithChildren<{
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  cardClassName?: string;
}>;

export function ScrollStack({ className, children }: ScrollStackProps) {
  return (
    <div className={clsx("relative", className)}>
      {children}
    </div>
  );
}

function StackCardInternal({ id, title, subtitle, className, cardClassName, children }: StackCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.35]);

  return (
    <section id={id} ref={sectionRef} className={clsx("h-[200vh] md:h-[200vh]", className)}>
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : y,
          scale: prefersReducedMotion ? 1 : scale,
        }}
        className={clsx(
          "sticky top-14 sm:top-16 md:top-20 z-10",
          "mx-auto max-w-7xl px-4 sm:px-6",
        )}
        aria-labelledby={title ? `${id}-title` : undefined}
      >
        <div
          className={clsx(
            "rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden",
            "shadow-[0_20px_60px_rgba(0,0,0,var(--op))]",
            "[--op:0.28]",
            "min-h-[72vh] md:min-h-[78vh]",
            cardClassName ?? "p-8 md:p-12",
          )}
          style={{
            // interpolated box-shadow opacity
            // Using CSS var updated via inline style is tricky with motion values, so we approximate with class above
          }}
        >
          {(title || subtitle) && (
            <div className="mb-6">
              {subtitle && (
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300/70">{subtitle}</div>
              )}
              {title && (
                <h2 id={`${id}-title`} className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{title}</h2>
              )}
            </div>
          )}
          {children}
        </div>
      </motion.div>
    </section>
  );
}

export const ScrollStackCard = StackCardInternal;


