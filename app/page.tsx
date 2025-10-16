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
            <div className="text-xs uppercase tracking-[0.20em] text-cyan-300/80">Vatsal Gada</div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl">
              Building delightful web experiences with motion, 3D, and craft.
            </h1>
            <p className="text-white/70 max-w-2xl">
              Full‑stack engineer focused on product polish and performance. Currently exploring Liquid Ether visuals and interactive cards.
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
            <Link href="/blog" className="text-sm text-cyan-300 hover:text-cyan-200">View all posts →</Link>
          </div>
        </ScrollStackCard>

        <ScrollStackCard id="about" title="About">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image src="/next.svg" alt="Portrait placeholder" fill className="object-contain p-6 opacity-80" />
            </div>
            <div className="text-white/80 leading-relaxed">
              <p>
                I’m a developer who enjoys building high‑quality frontends with a focus on
                smooth interactions and accessibility. I love working across the stack when needed, with an eye for product detail.
              </p>
              <p className="mt-4">
                Tech I like: Next.js, TypeScript, Tailwind, Framer Motion, R3F/Three.js.
              </p>
            </div>
          </div>
        </ScrollStackCard>

        <ScrollStackCard id="contact" title="Contact">
          <div className="flex flex-col gap-4">
            <p className="text-white/80">Want to collaborate or say hi? I’m open to interesting opportunities.</p>
            <a href="mailto:vatsal@example.com" className="inline-flex w-fit rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">
              Email me
            </a>
          </div>
        </ScrollStackCard>
      </ScrollStack>
    </div>
  );
}
