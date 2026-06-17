# Company Structure Analysis

## Executive Summary

This repository is a single Next.js application named `base-modules`. It uses the App Router at the repository root (`app/`), not `src/app/`, and keeps reusable code in root-level folders such as `components/`, `features/`, `hooks/`, `i18n/`, `lib/`, and `messages/`.

Confirmed stack: Next.js `16.2.2`, React `19.2.4`, TypeScript `5.9.3`, Tailwind CSS `4.2.2`, `next-intl` `4.9.1`, GSAP `3.15.0`, npm lockfile present, and a pnpm lockfile also present.

HIGH RISK: The migrated landing page is currently embedded directly in `app/page.tsx` and adds landing-specific global CSS to `app/globals.css`. This works against the emerging company structure where shared UI belongs in `components/ui`, feature code belongs in `features/*`, and routes stay thin.

NEEDS VERIFICATION: The repository has both `package-lock.json` and ``. `package.json` does not declare `packageManager`, so npm appears to be the active manager because `npm ls` succeeded against `package-lock.json`, but the intended company package manager should be confirmed.

## Current Stack

| Item | Confirmed Value | Source |
| --- | --- | --- |
| Project name | `base-modules` | `package.json` |
| Next.js | `16.2.2` | `package.json`, `npm ls` |
| React | `19.2.4` | `package.json`, `npm ls` |
| React DOM | `19.2.4` | `package.json`, `npm ls` |
| TypeScript | `5.9.3` installed, `^5` declared | `npm ls`, `package.json` |
| Tailwind CSS | `4.2.2` installed, `^4` declared | `npm ls`, `package.json` |
| next-intl | `4.9.1` installed, `latest` declared | `npm ls`, `package.json` |
| GSAP | `3.15.0` | `package.json`, `npm ls` |
| Node engine | Not declared | `package.json` |
| Router | App Router | `app/layout.tsx`, `app/page.tsx` |
| Source directory | No `src/`; root-level `app/` | repository tree |
| Workspace | No workspace config found | root configs |
| Package manager | npm likely; pnpm also present | `package-lock.json`, `` |

## Scripts

| Script | Command | Notes |
| --- | --- | --- |
| `dev` | `next dev` | Local development |
| `build` | `next build` | Production build |
| `start` | `next start` | Production server |
| `lint` | `eslint` | ESLint flat config |
| Tests | None | No `test` script found |
| Deploy | None | No deploy script or `vercel.json` found |

## Important Project Tree

```text
app/
  api/uploads/image/route.ts
  api/uploads/video/chunk/route.ts
  api/uploads/video/merge/route.ts
  api/uploads/video/store.ts
  globals.css
  layout.tsx
  not-found.tsx
  notifications/page.tsx
  page.tsx
  providers.tsx
components/
  motion/GsapAnimations.tsx
  ui/*.tsx
features/
  home/src/components/posts-list.tsx
  home/src/queries/posts.ts
  notifications/*
  uploads/*
hooks/use-mobile.ts
i18n/request.ts
lib/utils.ts
messages/en.json
public/
  firebase-messaging-sw.js
  file.svg, globe.svg, next.svg, vercel.svg, window.svg
```

Ignored during analysis: `.git/`, `.next/`, `node_modules/`, lockfile internals except package metadata.

## Folder Responsibilities

| Folder/File | Actual Purpose | Naming Convention | Server/Client | Used By | Notes |
| --- | --- | --- | --- | --- | --- |
| `app/` | App Router routes, root layout, global CSS, route handlers | Next special files | Mixed | Next.js | Routes are root-level, no locale segment |
| `app/layout.tsx` | Root layout, fonts, `next-intl`, direction, React Query provider | `layout.tsx` | Server | All routes | Uses `getLocale()` and `NextIntlClientProvider` |
| `app/providers.tsx` | React Query provider | PascalCase default export | Client | `app/layout.tsx` | Correctly isolates QueryClient in client boundary |
| `app/page.tsx` | Migrated landing page | `page.tsx` | Server | `/` | Very large route component; hardcoded Arabic |
| `app/notifications/page.tsx` | Firebase notification test UI | `page.tsx` | Client | `/notifications` | Browser APIs and hooks require client |
| `app/api/uploads/**/route.ts` | Upload route handlers | `route.ts` | Server | Upload feature | Stores chunks in in-memory module store |
| `components/ui/` | shadcn/radix-nova style primitives | lowercase filenames | Mixed | App/features | Uses `cn`, Radix/Base UI/lucide |
| `components/motion/` | Landing animation island | PascalCase file | Client | `app/page.tsx` | GSAP and DOM code |
| `features/home/src/` | Example posts query and list | feature-scoped `src` | Mixed | Not currently imported by app routes | Uses React Query and JSONPlaceholder |
| `features/notifications/` | Firebase messaging feature | components/hooks/services/types | Mixed | `/notifications` | Env names are `NEXT_PUBLIC_FIREBASE_*` |
| `features/uploads/` | Upload dialog, services, types | components/services/types | Client + services | Upload APIs | Feature folder follows domain organization |
| `hooks/` | Shared hooks | `use-*` | Client-intended | UI components | `use-mobile.ts` lacks `"use client"` but is imported by a client component |
| `i18n/` | `next-intl` request config | `request.ts` | Server | Next-intl plugin | Hardcodes locale |
| `messages/` | Translation JSON | locale JSON | Server-loaded/client-provided | `i18n/request.ts` | Only `en.json` exists |
| `lib/` | Shared utility functions | generic utilities | Shared | UI and features | Contains `cn` only |
| `public/` | Static assets and service worker | static files | Public | Browser/Next | Missing referenced `/assets/*` landing assets |

## Coding Conventions

Confirmed conventions:

- Root-level imports use `@/*` from `tsconfig.json`.
- shadcn aliases in `components.json`: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.
- UI primitives use `cn()` from `lib/utils.ts`.
- Feature modules are grouped by domain under `features/<feature>/`.
- Route handlers live under `app/api/**/route.ts`.
- Components are mostly named exports except route files and providers.
- Semicolons and quote style are inconsistent: many generated UI files use double quotes without semicolons; landing files use single quotes and semicolons.

## Import Conventions

Expected examples from actual code:

```ts
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UploadDialogProps } from "@/features/uploads/types/upload";
```

Relative imports are used inside feature internals, for example `features/notifications/hooks/use-fcm.ts` imports `../services/firebase-client`. This is acceptable for closely related feature files.

## Styling System

The project uses Tailwind CSS v4 with `@tailwindcss/postcss`, configured by `postcss.config.mjs`. There is no `tailwind.config.*`; shadcn is configured through `components.json` with `tailwind.css` set to `app/globals.css`.

`app/globals.css` contains both theme tokens and migrated landing-specific CSS. It defines `@theme` colors such as `--color-primary`, `--color-ink`, and custom classes including `.btn`, `.site-header`, `.mobile-menu`, `.surface`, `.faq-item`, `.toggle-track`, `.t-slide`, and marquee/flow classes.

HIGH RISK: Landing CSS is global and may collide with future app pages, especially generic classes such as `.btn`, `.surface`, `.check`, `.glow`, `.eyebrow`, and `.text-grad`.

## Providers

Actual hierarchy:

```text
RootLayout (app/layout.tsx)
└── html lang={locale} dir={direction}
    └── body
        └── Providers (React Query, app/providers.tsx)
            └── DirectionProvider (components/ui/direction.tsx)
                └── NextIntlClientProvider
                    └── Page
```

Provider notes:

- `Providers` is a Client Component because React Query context requires client-side React context.
- `DirectionProvider` is a Client Component wrapping Radix `Direction.Provider`.
- `NextIntlClientProvider` is mounted under direction provider and receives messages implicitly from request config.
- Provider order currently makes direction available outside `next-intl` consumers.

## Server/Client Architecture

Confirmed counts from TSX files under `app`, `components`, `features`, and `hooks`:

- Client Components: 44
- Server or unmarked TSX files: 20

Important Server Components:

| Component | Type | Reason | Dependencies | Client Boundary Risk |
| --- | --- | --- | --- | --- |
| `app/layout.tsx` | Server | Uses metadata, fonts, `getLocale()` | `next/font`, `next-intl/server` | Low |
| `app/page.tsx` | Server | Static landing markup | `next/image`, `GsapAnimations` | Medium: very large route file |
| `app/not-found.tsx` | Server | Static not found UI | `next/link` | Low |
| `components/ui/button.tsx` | Server/unmarked | Pure primitive | `cva`, `Slot`, `cn` | Low |

Important Client Components:

| Component | Type | Reason | Dependencies | Client Boundary Risk |
| --- | --- | --- | --- | --- |
| `app/providers.tsx` | Client | React Query provider | `@tanstack/react-query` | Low |
| `components/motion/GsapAnimations.tsx` | Client | DOM, window, event listeners, GSAP | `gsap`, `ScrollTrigger` | Medium |
| `app/notifications/page.tsx` | Client page | hooks, clipboard, FCM browser flow | Firebase, React state | Medium: whole page client |
| `features/uploads/components/upload-dialog.tsx` | Client | file inputs, object URLs, state | shadcn UI, upload services | Appropriate |

## Testing And Git Conventions

No test framework or test files were found. No Jest, Vitest, Playwright, Storybook, or coverage config was found. ESLint is configured with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

Git status at inspection time:

```text
## main...origin/main
```

Recent commit history contains one visible commit:

```text
621e14b nour
```

No PR template, issue template, CODEOWNERS, Husky, lint-staged, commitlint, Docker, CI, or Vercel config was found in tracked non-generated files.

