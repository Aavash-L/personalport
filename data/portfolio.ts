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
    screenshotPath: "/projects/wingsciti.svg",
  },
  {
    id: "truestar",
    name: "True Star Contracting",
    tagline: "NJ contractor site with 60+ programmatic SEO pages",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "PROGRAMMATIC SEO"],
    metric: "60+ LANDING PAGES",
    status: "LIVE",
    url: "https://truestarcontracting.com",
    screenshotPath: "/projects/truestar.svg",
  },
  {
    id: "urmi",
    name: "Urmi Threading Salon",
    tagline: "Beauty salon site with booking and gallery",
    stack: ["HTML", "CSS", "SEO", "VERCEL"],
    metric: "BOOKING + GALLERY",
    status: "LIVE",
    url: "https://urmithreadingsalon.com",
    screenshotPath: "/projects/urmi.svg",
  },
  {
    id: "mogfit",
    name: "Mogfit",
    tagline: "AI outfit analysis — aura scoring via vision-language models",
    stack: ["NEXT.JS", "TYPESCRIPT", "VLM INTEGRATION", "TAILWIND"],
    metric: "BETA — IN DEVELOPMENT",
    status: "BETA",
    url: "https://mogfit.xyz",
    screenshotPath: "/projects/mogfit.svg",
  },
  {
    id: "rotgen",
    name: "Rotgen",
    tagline: "AI-powered short-form video generation for creators",
    stack: ["NEXT.JS", "TYPESCRIPT", "PYTHON", "STRIPE", "OPENAI"],
    metric: "$30K MRR · SOLE DEVELOPER",
    status: "LIVE",
    url: "https://rotgen.org",
    screenshotPath: "/projects/rotgen.svg",
    openExternal: true,
  },
  {
    id: "mango",
    name: "Mango Trading",
    tagline: "Structured trading education ecosystem",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "DISCORD INTEGRATION"],
    metric: "MULTI-PAGE PLATFORM",
    status: "LIVE",
    url: "https://mangotrading.org",
    screenshotPath: "/projects/mango.svg",
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
// To add a new role: prepend an entry (most recent first).

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "rotgen",
    dateRange: "FEB 2026 — PRESENT",
    role: "Developer (Contract)",
    company: "Rotgen",
    location: "REMOTE",
    description:
      "Building and operating Rotgen.org — an AI video platform doing $30K MRR.",
  },
  {
    id: "verizon",
    dateRange: "JUN 2025 — AUG 2025",
    role: "Software Engineering Intern",
    company: "Verizon",
    location: "REMOTE",
    description:
      "Shipped React/TypeScript components to production on a payments team.",
  },
  {
    id: "portlock",
    dateRange: "JAN 2024 — PRESENT",
    role: "Founder & Lead Developer",
    company: "Portlock Labs",
    location: "REMOTE",
    description:
      "Subscription-based education platform. Closed $500K+ in partnership deals.",
  },
  {
    id: "squishy",
    dateRange: "JUN 2022 — DEC 2023",
    role: "Co-Founder",
    company: "Squishy Squad",
    location: "REMOTE",
    description:
      "Scaled an online community to 45K+ members. Raised $2M+. Closed $3M+ in brand deals.",
  },
];

// ─── STATS ───────────────────────────────────────────────────────────────────
// To update stats: edit the value strings below.

export const STATS: Stat[] = [
  { value: "$30K", label: "MONTHLY RECURRING REVENUE — ROTGEN" },
  { value: "45K+", label: "COMMUNITY MEMBERS BUILT — SQUISHY SQUAD" },
  { value: "$5M+", label: "IN DEALS CLOSED ACROSS VENTURES" },
];

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
    value: "linkedin.com/in/aavashlamichhane",
    href: "https://www.linkedin.com/in/aavashlamichhane/",
  },
  {
    platform: "GITHUB",
    value: "github.com/Aavash-L",
    href: "https://github.com/Aavash-L",
  },
];
