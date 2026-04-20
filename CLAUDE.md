# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (runs on http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Run all tests (Vitest)
npm test

# Run tests in watch mode
npm run test:watch

# Run a single test file
npx vitest run src/test/example.test.ts
```

## Architecture

This is a **React + Vite + TypeScript** marketing website for "BYS Accounting" — a multi-page static site built with shadcn/ui and Tailwind CSS.

### Routing
React Router v6 with flat routes defined in [src/App.tsx](src/App.tsx):
- `/` → Index, `/services`, `/about`, `/insights`, `/contact`, `/careers`
- `/insights/:slug` → `InsightDetail` — individual blog post detail page
- Each route maps 1:1 to a file in `src/pages/`

### Styling System
- **Design tokens** are CSS custom properties defined in [src/index.css](src/index.css) under `:root` and `.dark` — all colors use HSL values referenced as `hsl(var(--token))`.
- **Primary** = dark navy, **accent** = warm orange (`hsl(20 78% 57%)`). These are the two brand colors used throughout.
- **Fonts**: `font-heading` → Playfair Display (serif, used for headings), `font-sans` → Inter (body). Both loaded from Google Fonts in `index.css`.
- All buttons use `rounded-none` (square corners) as a design convention — maintain this on any new UI.
- Custom Tailwind animations (`fade-in`, `fade-in-left`, `fade-in-right`) are defined in [tailwind.config.ts](tailwind.config.ts) and map to CSS keyframes.

### Custom Components
Two reusable animation primitives live in `src/components/`:

- **`ScrollReveal`** — wraps any content and reveals it on scroll via `IntersectionObserver`. Accepts `direction` (`up`/`left`/`right`) and `delay` (ms). Uses `useScrollReveal` hook from `src/hooks/`.
- **`CountUp`** — animates a number from 0 to `end` when scrolled into view. Accepts `suffix` and `duration`.

These are used extensively across all pages for entrance animations — wrap new sections with `<ScrollReveal>` to stay consistent.

### shadcn/ui
Pre-built components live in `src/components/ui/`. These are Radix UI primitives styled with Tailwind. Add new shadcn components via the CLI rather than manually creating files in that folder.

### Path Alias
`@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig`). Always use `@/` imports, never relative paths like `../../`.

### Page Structure Pattern
Every page follows the same shell: `<Navbar />` at the top, `<Footer />` at the bottom, with sections between. Sections use `bg-primary` (dark) or default background (light) alternating for contrast.

### Blog / Insights Data
All blog post data lives in [src/data/insights.ts](src/data/insights.ts) as a typed `Post[]` array. Each post has `slug`, `image`, `title`, `date`, `category`, `excerpt`, and `body` (array of paragraphs). Both `Insights.tsx` (listing) and `InsightDetail.tsx` (detail) import from this single source. Home page blog cards link to `/insights` (the listing), not individual posts.

### Contact Form — EmailJS
The contact form in [src/pages/Contact.tsx](src/pages/Contact.tsx) uses `@emailjs/browser` v4 to send submissions. Credentials are hardcoded:
- Service ID: `service_cegjcfh`
- Template ID: `template_uhy2y1o`
- Public Key passed as `{ publicKey: "FmcHkHLpQJq7vtmJ0" }`

The EmailJS account (emailjs.com) must have the production domain added under **Account → Security → Domains** before deploying, otherwise submissions will be blocked. Template variables expected: `name`, `email`, `phone`, `service`, `message`.

### Google Map — Contact Page
The map iframe in Contact.tsx is pinned to coordinates `23.192833, 79.928243` via a Google Maps embed URL. No API key required.

### Assets
Static images are imported directly into components from `src/assets/`. The hero on the Index page cycles through 6 images with a Ken Burns CSS animation at a 5-second interval.

### Testing
Vitest + jsdom configured in [vitest.config.ts](vitest.config.ts). Test files live in `src/test/`. There is currently only a placeholder test — the testing setup is ready but coverage is minimal.
