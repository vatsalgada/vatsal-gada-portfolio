"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
}>;

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-8">
            {subtitle && (
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-indigo-400/70">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {title}
              </h2>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}


