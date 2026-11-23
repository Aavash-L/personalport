# Aavash Lamichhane — Portfolio

Live at https://www.aavashlamichhane.com. Rutgers Computer Science and Economics double major, graduating May 2028, seeking summer 2027 software engineering internships.

## Homepage

The production homepage is authored in `public/portfolio/index.html`, `styles.css`, and `app.js`. A Next.js `beforeFiles` rewrite serves this static document at `/`, preserving the existing Vercel project and older `/work/[slug]` walkthroughs. The homepage loads no React runtime. Keep links from legacy React pages to the homepage as native anchors for full document navigation.

Assets, self-hosted fonts, portraits, and the resume are in `public/portfolio/assets/`. Attribution is in `public/portfolio/licenses/`.

Motion uses CSS transforms and opacity, one-time intersection reveals, and native scrolling. Reduced motion and a pause control are supported. ClearForge loads in an interactive iframe only after opening its preview and unloads on close. Rotgen uses clearly labeled public website snapshots because its live site blocks framing.

## Development and deployment

- `npm ci`
- `npm run dev`
- `npm run build` then `npm start` for a production check
- Push `main` to deploy through the existing Vercel integration.

The ClearForge repository allows this portfolio’s exact production origins to embed its public marketing pages. Its account routes remain restricted to same-origin framing.
