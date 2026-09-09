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
| Animation | Native video chapters + CSS transitions |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Features

- Warm ivory and blue visual theme with prominent resume and contact links
- One scroll plays one video chapter, then pauses indefinitely for reading
- Accessible five-dot chapter navigation; Skip and reduced-motion fallback
- Native 60 fps video playback by default, with an optional upscaled/interpolated 4K 120 fps mode
- Server-rendered project, experience, and toolbox content
- Responsive project cards with live preview dialogs

Video sources were generated at 1440×1920 / 24 fps. Enhanced outputs use motion interpolation and scaling; 120 fps presentation depends on the browser, display, and device. The default avoids loading the larger 4K files. Playback runs in the browser video pipeline, without per-frame React renders or canvas image requests.

---

## Contact

[alamichhane158@gmail.com](mailto:alamichhane158@gmail.com) &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/aavashlamichhane/) &nbsp;·&nbsp; [GitHub](https://github.com/Aavash-L)
