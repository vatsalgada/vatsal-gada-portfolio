import Image from "next/image";
import { InteractiveCard } from "@/components/InteractiveCard";
import { ScrollStack, ScrollStackCard } from "@/components/ScrollStack";
import { projects } from "@/content/projects";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ScrollStack>
        <ScrollStackCard id="hero" cardClassName="p-8 md:p-10">
          <div className="flex flex-col items-start gap-6">
            <div className="text-xs uppercase tracking-[0.20em] text-indigo-400/80">Vatsal Gada</div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl">
              Building scalable web applications with precision and purpose.
            </h1>
            <p className="text-white/70 max-w-2xl leading-relaxed">
              Full-stack engineer focused on clean architecture, performance, and developer experience. I enjoy turning ideas into production-ready products that are fast, maintainable, and intuitive. Currently building tools that merge AI with web systems for smarter automation.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">View Projects</a>
              <a href="/resume.pdf" className="rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white">Download Resume</a>
            </div>
          </div>
        </ScrollStackCard>

        <ScrollStackCard id="projects" title="Projects" subtitle="Selected Work">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <InteractiveCard key={p.slug} as="a" href={p.links?.live ?? "#"} title={p.title} eyebrow={p.subtitle}>
                {p.description}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{t}</span>
                  ))}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </ScrollStackCard>

        <ScrollStackCard id="writing" title="Writing" subtitle="Notes & Posts">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <InteractiveCard key={i} as="a" href="/blog" title={`Post ${i}`} eyebrow="Blog">
                Small thoughts on design systems, motion, and performance.
              </InteractiveCard>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/blog" className="text-sm text-indigo-400 hover:text-indigo-300">View all posts →</Link>
          </div>
        </ScrollStackCard>

        <ScrollStackCard id="about" title="About">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image src="/next.svg" alt="Portrait placeholder" fill className="object-contain p-6 opacity-80" />
            </div>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                I&apos;m a full-stack engineer with experience building web products that are fast, reliable, and thoughtfully designed. I enjoy solving complex problems, simplifying workflows, and collaborating across design and product teams to ship impactful features.
              </p>
              <p>
                My experience spans startups and enterprise environments—leading teams, architecting SaaS solutions, and integrating AI into production systems. I&apos;m passionate about product polish, performance, and building software that scales gracefully.
              </p>
              <p>
                <span className="font-medium text-white">Tech I work with:</span> React, Next.js, TypeScript, Tailwind, Flask, FastAPI, Node.js, Supabase, Prisma, PostgreSQL, Python.
              </p>
            </div>
          </div>
        </ScrollStackCard>

        <ScrollStackCard id="contact" title="Contact">
          <div className="flex flex-col gap-4">
            <p className="text-white/80 leading-relaxed">
              I&apos;m always open to connecting with teams working on meaningful, high-impact products.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:contactvgada@gmail.com" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-indigo-400 transition-colors">
                <span className="text-indigo-400">📧</span> contactvgada@gmail.com
              </a>
              <a href="https://linkedin.com/in/vatsalgada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-indigo-400 transition-colors">
                <span className="text-indigo-400">💼</span> linkedin.com/in/vatsalgada
              </a>
              <a href="https://github.com/vatsalgada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-indigo-400 transition-colors">
                <span className="text-indigo-400">🧑‍💻</span> github.com/vatsalgada
              </a>
            </div>
          </div>
        </ScrollStackCard>
      </ScrollStack>
    </div>
  );
}
