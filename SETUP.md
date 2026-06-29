# LocalSpark AI — Setup Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Recommended: [Vercel](https://vercel.com) (zero-config for Next.js)

```bash
npm i -g vercel
vercel
```

## Customization

| What to change | File |
|---|---|
| Business name, copy | `components/*.tsx` |
| Colors & fonts | `tailwind.config.ts` |
| Pricing | `components/Pricing.tsx` |
| WhatsApp number | `components/FinalCTA.tsx` + `components/Footer.tsx` |
| Contact email | `components/Footer.tsx` |
| Form handler | `components/FinalCTA.tsx` → `handleSubmit()` |
| SEO metadata | `app/layout.tsx` |

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** — all animations
- **Lucide React** — icons
- **TypeScript**

## Sections

1. Navbar — sticky, animated entrance, mobile menu
2. Hero — animated WhatsApp mockup with floating cards
3. Problem — animated question bubbles
4. Solution — 3-step process
5. Coaching Use Case — batch-wise access visual
6. Access Control — security flow
7. Business Use Cases — 6 industry cards
8. Free Tools — 7 tool cards
9. How It Works — 5-step launch timeline
10. Pricing — 3-tier cards
11. Final CTA — demo booking form
12. Footer
