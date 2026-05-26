# Aavash Lamichhane — Portfolio

Personal portfolio site. Built to be fast, clean, and easy to maintain.

**Live:** [aavashlamichhane.com](https://aavashlamichhane.com) &nbsp;·&nbsp; **Resume:** [PDF](./public/Aavash.Lamichhane_SWE_Resume.pdf)

---

## About

CS student at Rutgers University, minoring in Economics. I build products end-to-end — from landing pages to full-stack SaaS. Currently open to software engineering internships.

A few highlights from the work featured on this site:

- **Rotgen.org** — sole developer on an AI short-form video generator doing $30K MRR, with direct publishing to YouTube, TikTok, and Instagram via OAuth
- **Portlock Labs** — founder of a crypto/AI education platform; closed $500K+ in partnership deals
- **Squishy Squad** — scaled a community to 45K+ members, raised $2M+, closed $3M+ in brand deals
- **Verizon (SWE Intern)** — shipped React/TypeScript payment components to production on a payments team

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Features

- Typing animation hero with rotating role titles
- Scroll-synced progress bar in the navigation
- Project modal with live/GitHub links and tech stack tags
- Experience timeline with expandable accordion entries
- Animated skill marquee (Toolbox section)
- Custom cursor with hover states
- Fully responsive — mobile-first layout

---

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home page — assembles all sections
components/
  sections/           # Hero, About, Experience, Work, Toolbox, Contact
  ui/                 # Navigation, ProjectCard, ProjectModal, Marquee, etc.
data/
  portfolio.ts        # All content — projects, experience, stats, stack
  types.ts            # Shared TypeScript types
public/
  projects/           # Project screenshots
```

All site content lives in `data/portfolio.ts`. Adding a new project or experience entry is a one-line change there.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contact

[alamichhane158@gmail.com](mailto:alamichhane158@gmail.com) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/aavashlamichhane/) &nbsp;·&nbsp; [GitHub](https://github.com/Aavash-L)
