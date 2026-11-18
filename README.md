# AARAMBH 4.0 — Official Event Website

Official web platform for **AARAMBH 4.0** (**January 16–17, 2027**), the flagship annual technology and innovation festival organised by **IEDC, College of Engineering Karunagappally (CEK), Kerala**.

## Tech Stack
- **Next.js 15** (App Router, static & dynamic metadata, `sitemap.ts`, `robots.ts`)
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** with centralized CSS design tokens (`src/app/globals.css`)
- **Framer Motion** for component transitions, layout filtering, and scroll reveals
- **Lenis** + **GSAP ScrollTrigger** for smooth scrolling (respecting `prefers-reduced-motion`)
- **Lucide React** for crisp vector icons
- **Vercel-ready** deployment configuration

## Routes
- `/` — Home (Hero, Countdown, About & IEDC CEK, Highlights, Events, Schedule, Gallery, Sponsors, Committee, Map/Travel, FAQs)
- `/events` — Events hub with interactive category filtering
- `/events/[slug]` — Individual event detail pages (statically generated)
- `/schedule` — Interactive day-wise schedule (Day 1 Jan 16 & Day 2 Jan 17)
- `/gallery` — Visual gallery with accessible keyboard lightbox
- `/sponsors` — Institutional partners & sponsorship tiers
- `/about` — Festival story, IEDC CEK overview, Aarambh 3.0 highlights, Organising Committee
- `/contact` — Contact channels, Google Maps, Bus/Train Travel Guide, FAQs

## Centralised Data & Easy Re-Theming
- **Design tokens**: Update `:root` variables in `src/app/globals.css` to adjust colors, surfaces, or gradients site-wide.
- **Content & Registration URLs**: All site configuration, event details, schedules, sponsors, team members, gallery items, and FAQs live in `src/data/*` (typed in `src/types/index.ts`).

## Local Development
```bash
npm install
npm run dev
```

## Production Verification
```bash
npm run typecheck
npm run build
npm start
```
