"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [active, setActive] = useState<string>("#hero");
  const observer = useMemo(() => {
    if (typeof window === "undefined") return null;
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActive(id);
          }
        });
      },
      { rootMargin: "-55% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
  }, []);

  useEffect(() => {
    if (!observer) return;
    const sectionIds = links.map((l) => l.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];
    sections.forEach((el) => observer.observe(el));
    return () => {
      sections.forEach((el) => observer.unobserve(el));
    };
  }, [observer]);

  const handleAnchor = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget.getAttribute("href");
    if (!target || !target.startsWith("#")) return;
    e.preventDefault();
    const id = target.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-30"
   >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-2">
            <Link href="#hero" onClick={handleAnchor} className="text-sm font-semibold tracking-tight text-white">
              Vatsal Gada
            </Link>
            <div className="hidden gap-6 md:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={handleAnchor} className={
                  [
                    "text-sm transition-colors",
                    active === l.href ? "text-white" : "text-white/80 hover:text-white",
                  ].join(" ")
                }>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 transition-colors"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center gap-5 px-4 pb-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={handleAnchor} className={
                [
                  "text-xs transition-colors",
                  active === l.href ? "text-white" : "text-white/80 hover:text-white",
                ].join(" ")
              }>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}


