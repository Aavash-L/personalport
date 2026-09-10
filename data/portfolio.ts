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
    stack: ["HTML", "CSS", "SEO", "VERCEL"],
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
    metric: "$30K MRR · SOLE DEVELOPER",
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

export const BIO = [
  "I build full-stack AI products and ship them. Currently the sole developer behind Rotgen, an AI video platform doing $30K MRR, and the founder of Portlock Labs, an education company in emerging markets.",
  "I'm a CS student at Rutgers, minoring in Economics, graduating in 2028. I've been writing code since high school and shipping real software since 2022 — first NFTs and Web3 communities, now AI-native consumer products.",
  "What I care about right now: small teams, fast iteration, products that earn revenue from day one. I'm looking for SWE and product-data internships where I can build things people use.",
];
export const TOOLBOX = [
  {
    label: "FRONTEND",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Shadcn/ui", "Radix UI"],
  },
  {
    label: "BACKEND",
    items: ["Python", "Node.js", "PostgreSQL", "REST APIs", "OAuth", "SQL", "Supabase", "Prisma", "Express", "FastAPI"],
  },
  {
    label: "AI / LLM",
    items: ["OpenAI API", "Claude API", "LLM Integration", "Prompt Engineering", "Vision Models", "pandas", "NumPy", "LangChain"],
  },
  {
    label: "TOOLS & INFRA",
    items: ["Git", "GitHub", "Figma", "Stripe", "Vercel", "Docker", "Solidity", "Playwright", "Postman"],
  },
];

export const SITE = {
  name: "Aavash Lamichhane", initials: "AL", availability: "Open to internships",
  intro: "Hey, I’m Aavash.", subtitle: "CS student at Rutgers. Full-stack & AI developer.",
  location: "New Jersey", education: "Rutgers University · CS + Economics minor · 2028",
  resume: "/Aavash.Lamichhane_SWE_Resume.pdf", portrait: "/story/poster.webp", portraitOriginal: "/Aavash_PFP.png",
  logo: "/brand/al.svg", manifest: "/story/manifest.json",
  workTitle: "Ideas are a start.\nShipping is the work.",
  aboutTitle: "A person behind\nevery product.", experienceTitle: "Built on experience.",
  toolboxTitle: "The tools change.\nThe curiosity stays.",
  contactTitle: "Let’s build\nsomething useful.",
  contactText: "Looking for SWE and product-data internships. Have a role or a project in mind? Let’s talk.",
  chapters: [
    { label: "01 / NICE TO MEET YOU", title: "Hey, I’m\nAavash.", body: "CS student at Rutgers. Full-stack & AI developer.", detail: "New Jersey · Class of 2028", link: "Explore the work", href: "#work" },
    { label: "THE PRODUCT", title: "From idea\nto shipped.", body: "Rotgen. AI-powered short-form video generation for creators.", detail: "$30K MRR · Sole developer", link: "Visit Rotgen", href: "https://rotgen.org" },
    { label: "THE RANGE", title: "Built for\nreal businesses.", body: "Restaurant ordering. Contractor discovery. Salon booking. Software with a purpose.", detail: "Wings Citi Cafe · True Star · Urmi", link: "See selected work", href: "#work" },
    { label: "WHAT I BRING", title: "More than\nthe interface.", body: "Production experience at Verizon. End-to-end product ownership at Rotgen.", detail: "Experience + toolbox", link: "Read the experience", href: "#experience" },
    { label: "LET’S CONNECT", title: "Let’s build\nsomething useful.", body: "A conversation is a good place to start.", detail: "Open to internships", link: "Get in touch", href: "#contact" },
  ],
};
