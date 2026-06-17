# I18N And Routing Analysis

## Routing Summary

This project uses the Next.js App Router from root-level `app/`. It does not use `src/app/`, Pages Router, route groups, dynamic routes, catch-all routes, parallel routes, or intercepting routes.

Route count: 5 public routes were found.

| Public URL | App Router File | Locale Aware | Layout | Dynamic Params | Authentication | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | `app/page.tsx` | Partially via root `lang/dir`; URL is not locale-prefixed | `app/layout.tsx` | None | None | Migrated landing page |
| `/notifications` | `app/notifications/page.tsx` | Partially via root `lang/dir`; URL is not locale-prefixed | `app/layout.tsx` | None | None | Firebase notification test page |
| `/api/uploads/image` | `app/api/uploads/image/route.ts` | No | Route handler only | None | None | Image upload endpoint |
| `/api/uploads/video/chunk` | `app/api/uploads/video/chunk/route.ts` | No | Route handler only | None | None | Video chunk endpoint |
| `/api/uploads/video/merge` | `app/api/uploads/video/merge/route.ts` | No | Route handler only | None | None | Video merge endpoint |

Special routing files:

| File | Purpose |
| --- | --- |
| `app/layout.tsx` | Root layout for all routes |
| `app/page.tsx` | Home page route |
| `app/not-found.tsx` | Global not-found UI |
| `app/notifications/page.tsx` | Notifications route |
| `app/api/**/route.ts` | API route handlers |

Not found:

- `proxy.ts`
- `middleware.ts`
- `loading.tsx`
- `error.tsx`
- `template.tsx`
- `default.tsx`
- `sitemap.ts`
- `robots.ts`
- `manifest.ts`
- route groups
- `[locale]` route segment

## Real Request Flow

```text
Incoming request
→ no proxy.ts/middleware.ts found
→ App Router route match under app/
→ app/layout.tsx
→ getLocale() from next-intl/server
→ html lang/dir computed in RootLayout
→ Providers (React Query)
→ DirectionProvider
→ NextIntlClientProvider
→ matched page or route handler
```

For `/`, the page flow is:

```text
/ request
→ app/layout.tsx
→ app/page.tsx
→ static landing markup
→ components/motion/GsapAnimations.tsx client island hydrates and attaches DOM/GSAP behavior
```

For `/notifications`, the page flow is:

```text
/notifications request
→ app/layout.tsx
→ app/notifications/page.tsx as a Client Component
→ Firebase messaging hooks run in browser
```

## next-intl Configuration

| Item | Confirmed Value |
| --- | --- |
| Version | `4.9.1` |
| Plugin | `createNextIntlPlugin()` in `next.config.ts` |
| Request config | `i18n/request.ts` |
| Supported locales | NEEDS VERIFICATION: no routing config declares supported locales |
| Default locale | `ar` is hardcoded in `i18n/request.ts` |
| Message file loaded | `messages/en.json` |
| Locale prefix behavior | No locale-prefix routing found |
| Locale detection | No proxy/middleware or `defineRouting` found |
| Navigation helpers | No `createNavigation`, locale `Link`, `redirect`, `useRouter`, or `usePathname` helpers found |
| Server translation usage | No `getTranslations()` usage found |
| Client translation usage | No `useTranslations()` usage found |
| Metadata translation usage | None found |
| Static rendering | No `generateStaticParams()` found |

## next-intl Responsibility Table

| File | next-intl Responsibility | Server/Client | Imported By | Notes |
| --- | --- | --- | --- | --- |
| `next.config.ts` | Wraps Next config with `createNextIntlPlugin()` | Build config | Next.js | Uses default plugin lookup for request config |
| `i18n/request.ts` | Returns locale and messages via `getRequestConfig()` | Server | next-intl plugin/runtime | Hardcodes `locale = 'ar'` while importing `messages/en.json` |
| `app/layout.tsx` | Reads locale with `getLocale()` and provides `NextIntlClientProvider` | Server layout | All routes | Computes `dir` from locale |
| `messages/en.json` | Translation messages | Data | `i18n/request.ts` | Contains only `HomePage.title` |

## Locale And Message Flow

1. Locale detection: No route-level or middleware-driven detection was found. `i18n/request.ts` always returns `ar`.
2. Locale reaches the route: `app/layout.tsx` calls `getLocale()` and receives the locale from next-intl request config.
3. Messages are loaded: `i18n/request.ts` imports `../messages/en.json`.
4. Server Components access translations: No current examples. Future Server Components should use `getTranslations()` from `next-intl/server`.
5. Client Components access translations: No current examples. Future Client Components should use `useTranslations()` from `next-intl`.
6. Locale-aware navigation: No configured locale-aware navigation helpers currently exist.

HIGH RISK: The locale is `ar`, but the only message file is `messages/en.json`. This creates a misleading i18n state where `html lang="ar"` and `dir="rtl"` are set, but English message storage is the only configured JSON file.

## RTL/LTR Flow

`app/layout.tsx` defines:

- `RTL_LOCALES = new Set(['ar', 'fa', 'he', 'ur'])`
- `getDirection(locale)` strips region and returns `rtl` for RTL locales
- `<html lang={locale} dir={direction}>`
- `DirectionProvider dir={direction}`

With the current hardcoded locale, all pages render with `lang="ar"` and `dir="rtl"`.

## Translation Conventions

Confirmed:

- Message files live in `messages/`.
- Existing namespace example: `HomePage.title` in `messages/en.json`.

NEEDS VERIFICATION:

- There is no `messages/ar.json`.
- There is no company routing file using `defineRouting`.
- There is no locale switcher.
- There is no established namespace pattern beyond `HomePage`.

Future localized content should not be hardcoded in route components. Based on current structure, add English keys to `messages/en.json` and add Arabic keys to a future `messages/ar.json` only after the technical owner confirms locale file strategy. Keys must remain synchronized by namespace and key name.

## Hardcoded Text Findings

HIGH RISK: `app/page.tsx` contains extensive hardcoded Arabic landing copy, headings, navigation labels, pricing text, FAQ text, testimonials, and button text. It does not call `getTranslations()` or `useTranslations()`.

HIGH RISK: `app/not-found.tsx` contains hardcoded Arabic text and global landing classes.

`app/notifications/page.tsx` contains hardcoded English test UI text. Since it appears to be a development/test route, localization expectations need owner confirmation.

## Metadata Localization

`app/layout.tsx` exports static metadata:

```ts
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
```

No `generateMetadata()` was found. No localized metadata helper exists. For future localized metadata, add route-level `generateMetadata()` in Server Components and use `getTranslations()` after the i18n routing approach is confirmed.

## Instructions For Adding Future Localized Content

| Future Need | Correct Current Location | Notes |
| --- | --- | --- |
| New translation namespace | `messages/*.json` | Keep key names synchronized across locales |
| Server translated page | `app/<route>/page.tsx` or feature section imported into it | Use `getTranslations()` |
| Client translated component | `features/<feature>/components/*` or `components/*` | Use `useTranslations()` under `NextIntlClientProvider` |
| Locale-aware link | NEEDS VERIFICATION | No navigation helpers exist yet |
| Locale-prefixed route | NEEDS VERIFICATION | No `[locale]` segment or proxy exists yet |
| RTL-aware component | Use `DirectionProvider` context/Radix direction where applicable | Root layout already sets `dir` |

