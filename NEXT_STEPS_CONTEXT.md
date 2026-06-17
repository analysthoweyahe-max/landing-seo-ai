# Next Steps Context

## What Is Currently Implemented

- A Next.js `16.2.2` App Router application named `base-modules`.
- Root layout in `app/layout.tsx` with Geist fonts, `NextIntlClientProvider`, Radix direction provider, and React Query provider.
- A migrated Arabic RTL landing page at `/` in `app/page.tsx`.
- A GSAP animation and interaction island in `components/motion/GsapAnimations.tsx`.
- A Firebase notification test page at `/notifications`.
- Upload API route handlers under `app/api/uploads`.
- shadcn/radix-nova style UI primitives under `components/ui`.
- Feature folders for `home`, `notifications`, and `uploads`.

## What Is Correctly Integrated

- The migrated landing page is route-integrated at `/`.
- The landing page remains a Server Component; GSAP/browser code is isolated to a Client Component.
- React Query provider is mounted through a client provider component.
- Direction is applied at both `<html dir>` and Radix `DirectionProvider`.
- Tailwind v4 is wired through `@tailwindcss/postcss`.
- `next-intl` plugin is present in `next.config.ts`.

## What Needs Adaptation

HIGH RISK: i18n is incomplete. `i18n/request.ts` hardcodes `ar` but loads `messages/en.json`, no Arabic message file exists, and the landing page hardcodes Arabic copy.

HIGH RISK: Referenced landing assets are missing from `public/`: `/assets/logo.webp`, `/assets/digital_print.png`, and `/assets/ministry-commerce-certification 1.png`.

HIGH RISK: Global landing CSS in `app/globals.css` duplicates button and design primitives and may affect unrelated future pages.

Needs adaptation:

- Split `app/page.tsx` into company-appropriate section components.
- Move landing copy into synchronized translation files after locale strategy is confirmed.
- Establish `next-intl` routing with supported locales, default locale, and locale prefixes if required.
- Add localized metadata using the project’s eventual i18n pattern.
- Decide whether Zain should be loaded centrally with `next/font`.
- Decide whether interaction-heavy sections should become React client islands instead of DOM-controlled selectors.
- Add tests once test tooling is chosen.

## What Must Not Be Changed Without Owner Approval

- Do not change locale routing until supported locales and URL policy are confirmed.
- Do not rename or move migrated landing files until the owner approves the adaptation plan.
- Do not modify translation keys without a locale synchronization plan.
- Do not remove either lockfile until the package manager policy is confirmed.
- Do not replace GSAP interactions without visual and behavior acceptance criteria.
- Do not expose Firebase env values; only env variable names should be documented.

## Correct Future Development Locations

| Future Work Type | Correct Folder/File Pattern | Existing Example | Notes |
| --- | --- | --- | --- |
| New route | `app/<route>/page.tsx` | `app/notifications/page.tsx` | Keep route files thin |
| New API endpoint | `app/api/<domain>/<action>/route.ts` | `app/api/uploads/image/route.ts` | Route handlers only |
| New shared UI primitive | `components/ui/<name>.tsx` | `components/ui/button.tsx` | Use `cn()` and variant patterns |
| New landing section | `features/<landing-or-home>/components/<Section>.tsx` | `features/uploads/components/upload-dialog.tsx` | Requires owner-approved feature name |
| New feature service | `features/<feature>/services/<service>.ts` | `features/uploads/services/image-upload.ts` | Keep API logic out of components |
| New feature hook | `features/<feature>/hooks/use-*.ts` | `features/notifications/hooks/use-fcm.ts` | Client-only hooks need client import boundary |
| Shared hook | `hooks/use-*.ts` | `hooks/use-mobile.ts` | Used by multiple features/components |
| Shared utility | `lib/*.ts` | `lib/utils.ts` | Keep generic |
| Static messages | `messages/<locale>.json` | `messages/en.json` | Add `ar.json` only after i18n policy confirmed |
| Images/assets | `public/<approved-folder>/...` | `public/*.svg` | Current landing `/assets` folder is missing |
| GSAP code | `components/motion/*` or feature client hook | `components/motion/GsapAnimations.tsx` | Keep browser APIs in client files |
| Metadata | `app/<route>/page.tsx` or `layout.tsx` exports | `app/layout.tsx` | Use Server Component metadata APIs |
| Tests | NEEDS VERIFICATION | None | Choose Jest/Vitest/Playwright first |

## Ordered Recommended Next Steps

1. Confirm package manager policy: npm or pnpm.
2. Confirm i18n URL strategy: locale-prefixed routes or single-locale Arabic.
3. Confirm supported locales and default locale.
4. Fix the conceptual mismatch in `i18n/request.ts` after confirmation: locale and message file should align.
5. Add missing landing assets to an approved `public` location or update references.
6. Decide whether Zain is required globally, then configure it centrally with `next/font` if approved.
7. Extract landing page sections from `app/page.tsx` into feature/page-section components.
8. Move hardcoded landing copy into synchronized translation namespaces.
9. Scope or replace landing global CSS with company component conventions.
10. Add route metadata and localized SEO conventions.
11. Add smoke/visual tests for the landing page and interaction tests for pricing, FAQ, testimonials, and mobile menu.
12. Run `npm run lint` and `npm run build` after implementation changes.

## Questions Requiring Confirmation

- Should public URLs be `/`, `/ar`, `/en`, or another locale-prefix pattern?
- Is Arabic the only launch locale, or should English be active now?
- Should `messages/en.json` be renamed/supplemented with `messages/ar.json`?
- Is Zain the intended brand font, or should Geist remain the application font?
- Where should brand assets live under `public/`?
- Should the migrated landing page become a `features/home` module or a dedicated landing feature?
- Are the upload and notifications features production features or scaffold/test modules?
- Which test framework should be adopted?
- Which lockfile is authoritative?

