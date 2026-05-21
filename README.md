# Aavash Lamichhane — Portfolio

Personal portfolio site. Built with Next.js 15, Tailwind CSS v4, Framer Motion.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## How to add a new project

1. Add an entry to `PROJECTS` in `data/portfolio.ts`:

```ts
{
  id: "my-project",           // unique slug
  name: "My Project",
  tagline: "One-line description",
  stack: ["NEXT.JS", "STRIPE"],
  metric: "METRIC TEXT",
  status: "LIVE",             // "LIVE" | "BETA" | "DEVELOPMENT"
  url: "https://myproject.com",
  screenshotPath: "/projects/myproject.webp",
}
```

2. Drop a 1600×1000px WebP screenshot at `public/projects/myproject.webp`.

3. If you control the project's domain, update its `next.config.ts` to allow iframe embedding from your portfolio:

```ts
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://aavashlamichhane.com" }
    ]
  }]
}
```

---

## How to add a new experience entry

Edit `EXPERIENCE` in `data/portfolio.ts`. Entries are ordered most-recent first.

```ts
{
  id: "company-slug",
  dateRange: "JAN 2027 — PRESENT",
  role: "Software Engineer",
  company: "Company Name",
  location: "REMOTE",        // or "NEW YORK, NY" etc.
  description: "One sentence about what you shipped.",
}
```

---

## How to update stats

Edit `STATS` in `data/portfolio.ts`:

```ts
{ value: "$50K", label: "MRR — ROTGEN" },
```

---

## How to swap screenshots

Replace any file in `public/projects/` with a real WebP screenshot (1600×1000px, 16:10 aspect ratio). Keep the same filename.

Once all placeholders are replaced:
1. Remove `dangerouslyAllowSVG: true` from `next.config.ts` (no longer needed).

---

## Deploying to Vercel

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

Set your custom domain in the Vercel dashboard under **Domains**.

---

## File structure

```
app/
  layout.tsx          # Fonts, metadata, Nav, CustomCursor
  page.tsx            # Composes all sections
  globals.css         # Tailwind v4 + keyframes + utilities
  sitemap.ts
  robots.ts

components/
  sections/
    Hero.tsx
    About.tsx
    Work.tsx
    Experience.tsx
    Toolbox.tsx
    Contact.tsx
  ui/
    CustomCursor.tsx
    Navigation.tsx
    ProjectCard.tsx
    ProjectModal.tsx    # iframe preview with fallback
    Marquee.tsx
    SectionLabel.tsx
    StatBlock.tsx

data/
  portfolio.ts         # ALL content lives here — edit this file for updates
  types.ts             # TypeScript interfaces

lib/
  utils.ts

public/
  favicon.svg
  og.png               # Design and place your OG image here
  projects/            # Screenshot WebPs go here
```
