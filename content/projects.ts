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
    slug: "linkedingenie",
    title: "LinkedinGenie",
    subtitle: "AI-Powered LinkedIn Automation",
    description: "An AI-powered LinkedIn automation platform that helps professionals write, schedule, and publish posts seamlessly. Built with Next.js, Supabase, and Gemini AI, it integrates with LinkedIn APIs to automate content creation and post scheduling.",
    tags: ["Next.js", "Supabase", "Tailwind", "Gemini AI", "Cron Jobs"],
    links: { github: "https://github.com/vatsalgada", live: "#" },
    year: 2024,
  },
  {
    slug: "form-builder",
    title: "Form Builder",
    subtitle: "Drag-and-Drop Form Creator",
    description: "A full-stack drag-and-drop form creation tool featuring authentication, real-time saving, and server-side validation. Developed with Next.js, TypeScript, and Prisma, it provides a smooth user experience and a scalable backend architecture.",
    tags: ["Next.js", "TypeScript", "DnD Kit", "Prisma", "PostgreSQL"],
    links: { github: "https://github.com/vatsalgada", live: "#" },
    year: 2024,
  },
  {
    slug: "workipo-tools",
    title: "WorkIPO Tools",
    subtitle: "Enterprise SaaS Suite",
    description: "A suite of SaaS products and internal tools built for enterprise clients, improving automation and scalability. I led the engineering efforts, designed technical architecture, and mentored a team of 7 engineers to deliver performant solutions.",
    tags: ["Flask", "FastAPI", "React", "Tailwind", "Python"],
    links: { live: "#" },
    year: 2023,
  },
  {
    slug: "slimjim-websites",
    title: "Slimjim Websites",
    subtitle: "Shopify E-commerce Sites",
    description: "Managed and developed Shopify-based sites for multiple brands, maintaining consistency and performance across each. Built a custom email automation system that improved engagement rates from 3% to 17%, and optimized workflows to reduce manual effort.",
    tags: ["HTML", "CSS", "JavaScript", "Shopify"],
    links: { live: "#" },
    year: 2022,
  },
];


