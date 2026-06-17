# CRAM Finance — Product Requirements

## Original Problem Statement
> "make the best version you can of my website. Get creative with it, do your thing. you can keep the theme the same or change it if you want."

Source: existing static HTML/CSS/JS site for CRAM Finance — honest student banking comparison.

## User Choices (Jan 2026)
- Stack: **Rebuild as React app**
- Design: keep emerald/warm-cream fintech vibe **but elevate dramatically + go fully creative**
- New features: **Product detail pages**, **Real-time APY display**
- Contact form: **Keep EmailJS** (with mock fallback when key not configured)

## Architecture
- React 19 + react-router-dom v7 (BrowserRouter)
- Custom CSS variables system (no Tailwind theming — pure design tokens in `/app/frontend/src/index.css`)
- Fonts: Fraunces (serif display) + Outfit (sans UI) + JetBrains Mono (labels) via Google Fonts
- Libraries added: react-fast-marquee, @emailjs/browser (CDN), react-icons, lucide-react (existing), framer-motion (available, used sparingly)
- Data: hardcoded in `/app/frontend/src/data/products.js`; live APY stream simulated in `/app/frontend/src/data/apy.js`

## Pages / Routes
- `/` Home — hero w/ live APY widget, marquee, why pillars, top picks, dark stat strip, FAQ, CTA banner
- `/accounts` + `/accounts/:slug` — checking/savings tabbed list + detail pages
- `/apps` + `/apps/:slug` — budgeting/finance app tabbed list + detail pages
- `/cards` + `/cards/:slug` — student credit cards list + detail pages
- `/compare` — shimmer "coming soon" hero + 3 quick-entry guide cards
- `/about` — editorial about page
- `/contact` — EmailJS form (with mock fallback)
- `/disclosure`, `/privacy`, `/terms` — legal pages

## What's Been Implemented (Jan 2026)
- Full React rebuild from static HTML
- Editorial, asymmetric hero with floating tilted product card + tilted live-APY widget
- Animated live APY widget (6 banks, jitter every ~2.2s, glowing color dots, pulsing live dot)
- Bank marquee with gradient fade edges (react-fast-marquee)
- Asymmetric pillars, gradient-tinted "Editor's pick" rows
- Dark stat-strip with serif numerals on emerald-deep background
- Custom FAQ accordion with rotating + icon
- Product detail pages: hue-tinted hero, dark at-a-glance card, pull-quote "who it's for", bento pros/cons, conditional live APY widget (accounts only), bottom compare CTA
- Compare page: shimmering gold/cream "COMING SOON" text on emerald-deep panel + 3 cards
- Contact form: EmailJS integration with safe mock fallback when key is placeholder
- Fully responsive (burger menu < 860px)
- All interactive elements have `data-testid`

## Testing Status
- Frontend: 37/38 assertions passed (97%) — one minor contact fallback gate, now fixed
- All product detail slugs verified: chase-college-checking, sofi-savings, ynab, empower, discover-it-student-cash-back
- Live APY widget verified visible on home + account detail pages, hidden on app/card detail
- Mobile burger menu verified

## Backlog (P1)
- Real affiliate links (currently `href="#"` with preventDefault on detail pages)
- Move EmailJS IDs to REACT_APP_* env vars
- Account matcher quiz ("Find your account in 60s")
- Blog/articles section

## Backlog (P2)
- Extract Home subcomponents into /components/home/*
- Real APY data feed (e.g., DepositAccounts API)
- Comparison tool (currently shown as "coming soon")
- Light/dark theme toggle
