export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  links?: { github?: string; live?: string };
  image?: string;
  year?: number;
};

export const projects: Project[] = [
  {
    slug: "liquid-ether",
    title: "Liquid Ether",
    subtitle: "R3F Background",
    description: "A responsive, GPU-friendly liquid ether background built with Three.js and Framer Motion.",
    tags: ["three.js", "framer-motion", "react-three-fiber"],
    links: { github: "https://github.com", live: "#" },
    year: 2025,
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    subtitle: "Next.js 14",
    description: "Dark, glassy UI with interactive cards and smooth in-view animations.",
    tags: ["next.js", "tailwindcss", "ui/ux"],
    links: { github: "https://github.com", live: "#" },
    year: 2025,
  },
];


