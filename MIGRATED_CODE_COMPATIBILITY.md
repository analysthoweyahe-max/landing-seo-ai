# Migrated Code Compatibility

## Location

The migrated landing page is currently located in:

- `app/page.tsx`
- `components/motion/GsapAnimations.tsx`
- landing-specific sections inside `app/globals.css`

It appears to be a migrated static Arabic RTL landing page adapted into a single Next.js route component with a separate GSAP client animation island.

NEEDS VERIFICATION: The original migration source is not present in the repository, so file-copy lineage is inferred from file contents, timestamps, and landing-specific CSS/comments.

## Compatibility Table

| Migrated File | Current Location | Company Convention Match | Issue/Risk | Recommended Future Action |
| --- | --- | --- | --- | --- |
| Landing page markup | `app/page.tsx` | Needs adaptation | One 93 KB page file with all sections and hardcoded copy | Split into feature/page-section components after owner approval |
| Animation island | `components/motion/GsapAnimations.tsx` | Mostly compatible | Correctly client-only, but large DOM script controls many concerns | Keep as client-only; later split into focused hooks/utilities |
| Landing global CSS | `app/globals.css` | Conflicting | Generic global classes and landing-only styles live globally | Move landing styles to scoped component patterns later |
| Referenced logo | `/assets/logo.webp` in `app/page.tsx` | Needs verification | File is missing from `public/` | Add/move assets to approved public location later |
| Referenced pattern | `/assets/digital_print.png` in `app/globals.css` | Needs verification | File is missing from `public/` | Add/move assets later |
| Referenced certification image | `/assets/ministry-commerce-certification 1.png` in `app/page.tsx` | Needs verification | File is missing from `public/`; name contains a space | Add/move/rename later according to asset convention |
| Hardcoded Arabic content | `app/page.tsx`, `app/not-found.tsx` | Conflicting | Bypasses `next-intl` messages | Move to messages after i18n strategy is confirmed |
| CTA/buttons | `.btn`, `.btn-primary`, `.btn-ghost` in `app/globals.css` | Conflicting | Duplicates `components/ui/button.tsx` button primitive | Reuse `Button` variants later |
| Header/mobile nav | `app/page.tsx` plus GSAP DOM handlers | Needs adaptation | Duplicates navigation patterns and uses raw anchors | Extract route/section navigation later |
| FAQ/pricing/testimonial interactions | DOM-controlled in `GsapAnimations.tsx` | Needs adaptation | React state is bypassed for UI state | Convert to interactive islands later if needed |

## Landing Sections Found

Section IDs preserved in `app/page.tsx`:

- `hero`
- `trusted`
- `usecases`
- `about`
- `stats`
- `pricing`
- `testimonials`
- `faq`

Other important IDs:

- `landing-root`
- `site-header`
- `menu-toggle`
- `mobile-menu`
- `showcase-flow`
- `flow-svg`
- `hero-ring`
- `billing-toggle`
- `t-track`, `t-prev`, `t-next`, `t-dots`
- `faq-list`

These IDs are used by `components/motion/GsapAnimations.tsx` for DOM queries, scrolling, counters, mobile menu behavior, pricing toggle, testimonials, FAQ, and flow animations.

## Client Boundary Analysis

Confirmed:

- `app/page.tsx` is not marked `"use client"`.
- `components/motion/GsapAnimations.tsx` is marked `"use client"`.
- GSAP imports are isolated to `components/motion/GsapAnimations.tsx`.
- Browser APIs including `document`, `window`, `history`, `matchMedia`, event listeners, and DOM mutation are only used in the client animation component.

Risk:

- The client island is broad and controls many unrelated interactions through DOM selectors.
- UI state for FAQ, menu, pricing, and testimonials is invisible to React.
- Cleanup is partially handled through `ctx.revert()` and a `cleanups` array, but future edits must preserve that cleanup discipline.

## GSAP And Animation Architecture

| File | Animation Purpose | GSAP API Used | Cleanup | Client Component | Risk |
| --- | --- | --- | --- | --- | --- |
| `components/motion/GsapAnimations.tsx` | Landing scroll reveals, counters, flow SVG, marquee support, testimonials, FAQ, pricing, mobile menu | `gsap.registerPlugin`, `gsap.context`, `gsap.to`, `gsap.fromTo`, `gsap.set`, `ScrollTrigger.create`, `ScrollTrigger.refresh` | Uses `cleanups` array and GSAP context | Yes | Medium: large imperative island |

`@gsap/react` is not installed and no `useGSAP()` usage was found, despite the migration brief mentioning it.

## Styling Compatibility

Confirmed migrated styles in `app/globals.css`:

- Zain font stack on `body`
- primary/ink CSS variables
- `.btn`, `.btn-primary`, `.btn-ghost`
- `.site-header`, `.mobile-menu`, `.nav-link`
- `.surface`, `.float-card`, `.hover-lift`
- `.faq-item`, `.toggle-track`, `.t-slide`, `.marquee`, `.flow-node`
- `@media (prefers-reduced-motion: reduce)`

HIGH RISK: `app/layout.tsx` loads Geist and Geist Mono, but `app/globals.css` sets `body { font-family: 'Zain', 'Segoe UI', Tahoma, sans-serif; }` without loading Zain via `next/font`. The configured `--font-Zain` references `var(--font-Zain)` but no Zain font variable is created.

HIGH RISK: `app/globals.css` references `/assets/digital_print.png`, and `app/page.tsx` references `/assets/logo.webp` and `/assets/ministry-commerce-certification 1.png`; `public/assets/` does not exist.

## Translation Integration

The migrated landing page is not integrated with `next-intl`.

Evidence:

- `app/page.tsx` does not import `getTranslations`.
- `components/motion/GsapAnimations.tsx` does not import `useTranslations`.
- `messages/en.json` only contains `HomePage.title`.
- No `messages/ar.json` exists.
- Hardcoded Arabic text appears throughout `app/page.tsx` and `app/not-found.tsx`.

## Route Integration

The migrated page is placed at `/` via `app/page.tsx`. It participates in the company root layout and receives React Query, Radix direction, and `NextIntlClientProvider`.

Needs adaptation:

- No locale-prefixed route exists.
- No metadata was added for the landing page.
- No locale-aware navigation is used.
- Raw hash anchors are used for section navigation.

## Risks And Conflicts

| Severity | File Paths | Problem | Currently Breaks App? | Recommended Future Correction | Tests Required |
| --- | --- | --- | --- | --- | --- |
| High | `app/page.tsx`, `app/globals.css` | Missing `/assets/*` files referenced by image and CSS URLs | Likely visual/image failures | Place assets in approved public location and update references | Build plus browser visual check |
| High | `app/page.tsx`, `app/not-found.tsx`, `messages/en.json` | Hardcoded Arabic bypasses i18n | Does not break rendering, breaks localization architecture | Move copy to synchronized message files | Locale render tests |
| High | `i18n/request.ts`, `messages/en.json` | Locale hardcoded to `ar` while English file is loaded | May create wrong `lang/dir` and message semantics | Confirm locale strategy and add proper routing/messages | i18n route tests |
| Medium | `app/globals.css` | Landing globals duplicate UI primitives and may collide | Not immediately | Scope styles or convert to component variants | Visual regression |
| Medium | `components/motion/GsapAnimations.tsx` | One broad imperative client island owns many interactions | Not immediately | Split into focused client components/hooks | Interaction tests |
| Medium | `app/layout.tsx`, `app/globals.css` | Geist loaded but Zain assumed globally | Visual/font mismatch | Configure Zain centrally if required | Browser font check |
| Low | `app/page.tsx` | Raw `<a href>` used instead of Next/intl navigation | Section anchors work | Use approved navigation for routes; keep hashes as needed | Navigation smoke test |

