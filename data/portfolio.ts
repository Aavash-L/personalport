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
    dateRange: "Feb 2026 — Present",
    role: "Developer",
    company: "Rotgen.org · Contract",
    location: "REMOTE",
    description:
      "Sole developer behind Rotgen.org — an AI-powered short-form video generator for creators. $30K MRR.",
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
    id: "renewal",
    dateRange: "May 2025 — Aug 2025",
    role: "Data Entry & Sales",
    company: "Renewal by Andersen",
    location: "ON-SITE",
    description: "Represented the brand at events and maintained customer data in CRM and Google Sheets.",
    bullets: [
      "Represented the brand at promotional events, generating leads and building brand awareness",
      "Entered and maintained customer data in Google Sheets and company CRM with high accuracy",
      "Communicated product benefits to diverse audiences, strengthening customer interest",
    ],
  },
  {
    id: "bestbuy",
    dateRange: "Nov 2024 — May 2025",
    role: "Retail Sales Associate",
    company: "Best Buy · Seasonal",
    location: "ON-SITE",
    description: "Seasonal retail sales associate — advised customers on electronics and drove in-store sales.",
  },
  {
    id: "portlock",
    dateRange: "Jan 2024 — Present",
    role: "Founder",
    company: "Portlock Labs",
    location: "REMOTE",
    description: "Subscription-based education platform for emerging crypto and AI markets. $500K+ in partnership deals.",
    bullets: [
      "Built a subscription-based educational company to help people learn about crypto and AI markets",
      "Closed over $500K in partnership deals by leveraging social platforms and networks",
      "Host weekly online events and publish a weekly newsletter on crypto and AI markets",
    ],
  },
  {
    id: "pals",
    dateRange: "Jan 2024 — Sep 2024",
    role: "Tutor",
    company: "PALS Learning Center",
    location: "ON-SITE",
    description: "Tutored English and Math to middle and high school students.",
    bullets: [
      "Tutored English and Math to middle and high school students",
      "Tracked and managed student progress data using the EdQuill database",
      "Adapted teaching methods to suit different learning styles and age groups",
    ],
  },
  {
    id: "amazon",
    dateRange: "Dec 2023 — Feb 2024",
    role: "Online Arbitrage",
    company: "Amazon Seller · Self-employed",
    location: "ON-SITE",
    description: "Managed an online resale business on Amazon, generating over $50,000 in sales.",
    bullets: [
      "Generated over $50,000 in sales through sourcing and listing products on Amazon",
      "Used market research and sales analytics to identify profitable opportunities",
    ],
  },
  {
    id: "squishy",
    dateRange: "Jun 2022 — Dec 2023",
    role: "Data Analyst & Co-Founder",
    company: "Squishy Squad",
    location: "REMOTE",
    description: "Scaled an online community to 45K+ members. Raised $2M+. Closed $3M+ in brand deals.",
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

export const STATS: Stat[] = [
  { value: "$30K", label: "MONTHLY RECURRING REVENUE — ROTGEN" },
  { value: "45K+", label: "COMMUNITY MEMBERS BUILT — SQUISHY SQUAD" },
  { value: "$3M+", label: "IN DEALS CLOSED ACROSS VENTURES" },
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
