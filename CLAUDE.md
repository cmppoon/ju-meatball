# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

**Must use `pnpm`** — `preinstall`/`predev`/`prebuild` hooks enforce this via `only-allow`.

Prettier runs automatically via `prettier-plugin-tailwindcss` (Tailwind class sorting). Format config: `.prettierrc`.

## Architecture

This is a **Next.js 16 App Router** static marketing site for ลูกชิ้นรสโอชา (Thai meatball brand). No backend, no database — purely presentational.

### Routing
- `app/page.tsx` — home page (assembles section components)
- `app/about/`, `app/articles/`, `app/contact/`, `app/products/` — standalone pages
- `app/services/oem/`, `/distributor/`, `/franchise/` — service detail pages
- `app/layout.tsx` — root layout: wraps all pages with `<Header>`, `<Footer>`, `<FloatingContact>`, and Vercel `<Analytics>`

### Components
- `components/` — page-section components (`hero-section`, `services`, `stats`, `product-slider`, `marquee-banner`, `whyChooseUs`, `scrollToLinkBtn`, `floating-contact`)
- `components/ui/` — shadcn/ui primitives (do not edit manually; regenerate via `shadcn` CLI)
- `hooks/use-mobile.ts` and `components/ui/use-mobile.tsx` — viewport hook for responsive behavior

### Styling
Tailwind CSS v4 with custom brand tokens defined in `app/globals.css` under `:root` and exposed via `@theme inline`:

| Token | Value | Usage |
|---|---|---|
| `maroon-theme` | `#890f02` | Primary brand color, CTAs |
| `dark-maroon-theme` | `#5d0000` | Labels, accents |
| `dark-yellow-theme` | `#D4A853` | Highlights, borders |
| `light-yellow-theme` | `#ECD7A2` | Subtle backgrounds |
| `black-theme` | `#0a0a0a` | Dark backgrounds, header |

Fonts: `--font-sans` = Sarabun (Thai + Latin body), `--font-display` = Bebas Neue (decorative headings). Both loaded via `next/font/google` in `app/layout.tsx`.

The site is Thai-language (`lang="th"`). All user-facing text strings are in Thai.

### Path aliases
`@/` maps to the project root (components, lib, hooks).
