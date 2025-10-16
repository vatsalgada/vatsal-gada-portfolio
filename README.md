# Vatsal Gada — Portfolio

## Snapshot
Hey, I’m Vatsal Gada — a full-stack engineer who loves crafting interactive web experiences that feel intentional, polished, and a little bit magical. This repository powers my public portfolio, showcasing how I think about product design, animation, and the engineering decisions that make high-performing interfaces possible.

## Why This Site Exists
Recruiters and collaborators often ask for a quick tour of my recent work. Rather than send slide decks, I built a living playground that demonstrates the kind of experiences I enjoy building. Every section here is a conversation starter: the Liquid Ether background explores motion and shader work, the project cards show how I approach micro-interactions, and the writing feed keeps me honest about documenting what I learn.

## Highlights at a Glance
- `Next.js 15` App Router with Turbopack for fast local feedback loops.
- Scroll-driven layouts using a custom `ScrollStack` component that keeps narrative sections in focus.
- Interactive cards combining Framer Motion, Three.js, and accessibility-friendly semantics.
- Tailored theming with Tailwind CSS 4 beta for a glassmorphism-inspired aesthetic without sacrificing performance.
- Resumé and project metadata sourced from TypeScript modules for easy iteration.

## Featured Projects
### Liquid Ether — R3F Background
A GPU-friendly liquid shader rendered with React Three Fiber. I focused on balancing visual richness with runtime performance, leaning on Framer Motion for subtle oscillations and constraint-based animation controls.

### Portfolio — Next.js 15 Experience
This site itself. I experimented with layered glass panels, animated scroll sections, and a narrative-first layout that adapts cleanly between desktop and mobile. It’s a good example of how I stitch together design systems, accessibility, and interaction design.

> Explore more projects in `content/projects.ts`. Each entry defines copy, tags, and external links, making it simple to expand the showcase without touching layout code.

## Visual Experiments & Motion
The `components` directory is where most of the playground lives:
- `ScrollStack` keeps sections pinned while the story advances.
- `InteractiveCard` adds hover tilt, lighting, and keyboard support for each project tile.
- `LiquidEther*` modules manage the Three.js scene and gradient layering for the hero background.

If you enjoy diving into motion design or WebGL, these components give a quick window into how I approach state management, performance, and polish.

## Tech Toolkit
- **Core:** Next.js 15, React 19, TypeScript 5, Tailwind CSS 4.
- **Motion & 3D:** Framer Motion, React Three Fiber, Drei, custom GLSL shaders.
- **Tooling:** Turbopack dev server, ESLint 9, pnpm, Vercel (deployment).
- **Content:** Type-safe metadata modules, Markdown-ready blog routes (under `/app/blog`).

## Writing & Learning
The blog section (`/app/blog`) will host ongoing notes on design systems, motion practices, and performance wins. Even when drafts are light, keeping the route live helps me iterate quickly on new ideas.

## Run It Locally
1. Install dependencies (pnpm is the default):
   ```bash
   pnpm install
   ```
2. Start the dev server:
   ```bash
   pnpm dev
   ```
3. Visit `http://localhost:3000` to explore the portfolio.
4. Customize content:
   - Update project entries in `content/projects.ts`.
   - Tweak hero copy and sections in `app/page.tsx`.
   - Add blog posts under `app/blog` (dynamic routes supported).

> Prefer npm, yarn, or bun? Swap the commands above — the project is tool-agnostic.

## Deploy
The repository is deployment-ready for Vercel. Run `pnpm build` to validate static optimizations locally, then connect the repo to Vercel for zero-config previews and production deployments.

## Connect
Curious about working together? Email me via the contact section on the site or grab the latest résumé from `public/resume.pdf`. I’m always up for conversations about frontend craft, motion design, and teams that care about the details.

Thanks for taking a look. Let’s build something remarkable.
