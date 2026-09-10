import type { Project, ExperienceItem, Stat, ContactLink } from "./types";

// ─── PROJECTS ───────────────────────────────────────────────────────────────
// To add a new project: add an entry here and drop a screenshot at the path.
// Screenshot format: WebP, 1600×1000px (16:10 aspect ratio).
// Replace the .svg placeholder files in /public/projects/ with real screenshots.

export const PROJECTS: Project[] = [
  {
    id: "wingsciti",
    name: "Wings Citi Cafe",
    tagline: "Restaurant site with menu and online ordering",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "ORDERING SYSTEM"],
    metric: "MENU + ONLINE ORDERING",
    status: "LIVE",
    url: "https://www.wingsciticafe.com",
    screenshotPath: "/projects/wingsciti.png",
  },
  {
    id: "truestar",
    name: "True Star Contracting",
    tagline: "NJ contractor site with 60+ programmatic SEO pages",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "PROGRAMMATIC SEO"],
    metric: "60+ LANDING PAGES",
    status: "LIVE",
    url: "https://truestarcontracting.com",
    screenshotPath: "/projects/truestar.png",
  },
  {
    id: "urmi",
    name: "Urmi Threading Salon",
    tagline: "Beauty salon site with booking and gallery",
    stack: ["NEXT.JS", "TYPESCRIPT", "SUPABASE", "RESEND"],
    metric: "BOOKING + GALLERY",
    status: "LIVE",
    url: "https://urmithreadingsalon.com",
    screenshotPath: "/projects/urmi.png",
  },
  {
    id: "rotgen",
    name: "Rotgen",
    tagline: "AI-powered short-form video generation for creators",
    stack: ["NEXT.JS", "TYPESCRIPT", "PYTHON", "STRIPE", "OPENAI"],
    metric: "AI VIDEO PLATFORM",
    status: "LIVE",
    url: "https://rotgen.org",
    screenshotPath: "/projects/rotgen.png",
    openExternal: true,
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
// To add a new role: prepend an entry (most recent first).

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "rotgen",
    dateRange: "Feb 2026 — Present",
    role: "Developer",
    company: "Rotgen.org",
    location: "REMOTE",
    description:
      "Developer of Rotgen.org, an AI-powered short-form video platform for creators.",
    bullets: [
      "Built and shipped the full product end-to-end: Next.js 15, TypeScript, Tailwind, deployed on Vercel",
      "Integrated AI video generation pipeline with direct publishing to YouTube, TikTok, and Instagram via OAuth",
      "Implemented Stripe subscription billing, user auth, and creator dashboard with download/share workflows",
      "Maintain and iterate on the platform as it scales with users",
    ],
  },
  {
    id: "verizon",
    dateRange: "Jun 2025 — Aug 2025",
    role: "Software Engineering Intern",
    company: "Verizon",
    location: "REMOTE",
    description: "Shipped React/TypeScript components to production on a payments team.",
    bullets: [
      "Developed React.js components for payment processing workflows using TypeScript",
      "Enhanced two-installment payment feature with validation logic and modal confirmation flows",
      "Troubleshot cross-browser compatibility issues in payment forms and modal dialogs",
      "Collaborated with senior engineers to debug and improve internal systems",
    ],
  },
  {
    id: "portlock",
    dateRange: "Jan 2024 — Present",
    role: "Founder",
    company: "Portlock Labs",
    location: "REMOTE",
    description: "Subscription-based education company focused on crypto and AI markets.",
    bullets: [
      "Built a subscription-based educational company to help people learn about crypto and AI markets",
      "Closed over $500K in partnership deals by leveraging social platforms and networks",
      "Host weekly online events and publish a weekly newsletter on crypto and AI markets",
    ],
  },
  {
    id: "squishy",
    dateRange: "Jun 2022 — Dec 2023",
    role: "Data Analyst & Co-Founder",
    company: "Squishy Squad",
    location: "REMOTE",
    description: "Co-founded an online community and worked on its website and infrastructure.",
    bullets: [
      "Raised over $2M by connecting with 4,000+ people across social platforms",
      "Established $3M+ in partnership deals through leveraging social networks",
      "Managed the website, Twitter/X account, and server infrastructure",
      "First to create monetized crypto trading tools for NFTs and digital ownership assets",
    ],
  },
];

// ─── STATS ───────────────────────────────────────────────────────────────────
// To update stats: edit the value strings below.

export const STATS: Stat[] = []; // Publish engineering numbers only after measurement is confirmed.

// ─── TECH STACK ───────────────────────────────────────────────────────────────

export const TECH_STACK: string[] = [
  "TypeScript",
  "Python",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Stripe",
  "Vercel",
  "OpenAI API",
  "Git",
  "Figma",
  "PostgreSQL",
  "Solidity",
  "Framer Motion",
  "pandas",
  "NumPy",
  "SQL",
  "OAuth",
  "REST APIs",
  "AI/LLM Integration",
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────

export const CONTACT_LINKS: ContactLink[] = [
  {
    platform: "EMAIL",
    value: "alamichhane158@gmail.com",
    href: "mailto:alamichhane158@gmail.com",
  },
  {
    platform: "LINKEDIN",
    value: "linkedin.com/in/aavash-lamichhane-1068622a5",
    href: "https://www.linkedin.com/in/aavash-lamichhane-1068622a5/",
  },
  {
    platform: "GITHUB",
    value: "github.com/Aavash-L",
    href: "https://github.com/Aavash-L",
  },
];

export const BIO = [
  "I’m a junior studying Computer Science at Rutgers–New Brunswick, with an Economics minor, graduating in 2028. I’m targeting Summer 2027 software engineering internships.",
  "I previously shipped React and TypeScript components to production on a payments team at Verizon. My portfolio brings together product development, client work through ClearForge Labs, and source-linked technical walkthroughs.",
  "I’m based in New Jersey and open to New York City opportunities. I’m available full-time in summer and part-time during the semester, and open to a Fall 2026 co-op or winter program.",
];
export const TOOLBOX = [
  { label: "APPLICATION DEVELOPMENT", items: ["TypeScript", "JavaScript", "React", "Next.js", "React Native", "Tailwind CSS", "HTML / CSS"] },
  { label: "DATA, INTEGRATIONS & DELIVERY", items: ["PostgreSQL", "Supabase", "Stripe", "Resend", "Git", "Vercel", "Vitest"] },
];
export const SITE = {
  name: "Aavash Lamichhane", initials: "AL", availability: "Seeking Summer 2027 SWE internships",
  intro: "Hey, I’m Aavash.", subtitle: "CS student at Rutgers. Full-stack & AI developer.",
  location: "New Jersey", education: "Rutgers–New Brunswick · CS junior · Economics minor · 2028",
  resume: "/Aavash.Lamichhane_SWE_Resume.pdf", portrait: "/story/poster.webp", portraitOriginal: "/Aavash_PFP.png",
  logo: "/brand/al.svg", manifest: "/story/manifest.json",
  workTitle: "The work,\nand how it works.",
  aboutTitle: "A person behind\nevery product.", experienceTitle: "Built on experience.",
  toolboxTitle: "The tools change.\nThe curiosity stays.",
  contactTitle: "Let’s build\nsomething useful.",
  contactText: "Seeking Summer 2027 SWE internships. Full-time in summer; part-time during the semester. Also open to a Fall 2026 co-op or winter program. Based in NJ, open to NYC.",
  chapters: [
    { label: "01 / NICE TO MEET YOU", title: "Hey, I’m\nAavash.", body: "Rutgers CS junior. Previously SWE intern at Verizon. Building for the web.", detail: "Summer 2027 SWE internships · NJ / NYC · Class of 2028", link: "Explore the work", href: "#work" },
    { label: "THE PRODUCT", title: "From idea\nto shipped.", body: "Rotgen. AI-powered short-form video generation for creators.", detail: "$30K MRR · owner-reported product context", link: "Visit Rotgen", href: "https://rotgen.org" },
    { label: "THE RANGE", title: "Built for\nreal businesses.", body: "Restaurant ordering. Contractor discovery. Salon booking. Software with a purpose.", detail: "Wings Citi Cafe · True Star · Urmi", link: "See selected work", href: "#work" },
    { label: "WHAT I BRING", title: "More than\nthe interface.", body: "Production experience at Verizon. Product development at Rotgen.", detail: "Experience + toolbox", link: "Read the experience", href: "#experience" },
    { label: "LET’S CONNECT", title: "Let’s build\nsomething useful.", body: "A conversation is a good place to start.", detail: "Summer 2027 SWE internships", link: "Get in touch", href: "#contact" },
  ],
};
