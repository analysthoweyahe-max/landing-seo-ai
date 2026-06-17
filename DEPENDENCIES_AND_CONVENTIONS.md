# Dependencies And Conventions

## Dependency Summary

`npm ls --depth=0` completed and reported installed top-level packages. It also reported extraneous packages:

- `@emnapi/core@1.9.1`
- `@emnapi/runtime@1.9.1`
- `@emnapi/wasi-threads@1.2.0`
- `@napi-rs/wasm-runtime@0.2.12`
- `@tybys/wasm-util@0.10.1`

No dependency changes were made.

## Dependency Table

| Category | Package | Installed Version | Declared | Where Used / Why |
| --- | --- | --- | --- | --- |
| Core framework | `next` | `16.2.2` | `16.2.2` | App Router, route handlers, fonts, image |
| Core framework | `react` | `19.2.4` | `19.2.4` | React components |
| Core framework | `react-dom` | `19.2.4` | `19.2.4` | DOM rendering |
| Internationalization | `next-intl` | `4.9.1` | `latest` | `next.config.ts`, `i18n/request.ts`, `app/layout.tsx` |
| Styling | `tailwindcss` | `4.2.2` | `^4` | Tailwind v4 CSS |
| Styling | `@tailwindcss/postcss` | `4.2.2` | `^4` | PostCSS plugin |
| Styling | `tw-animate-css` | `1.4.0` | `^1.4.0` | Animation utility classes in generated UI |
| Styling | `clsx` | `2.1.1` | `^2.1.1` | `lib/utils.ts` |
| Styling | `tailwind-merge` | `3.5.0` | `^3.5.0` | `lib/utils.ts` |
| Styling | `class-variance-authority` | `0.7.1` | `^0.7.1` | UI variants |
| Animation | `gsap` | `3.15.0` | `^3.15.0` | `components/motion/GsapAnimations.tsx` |
| UI | `radix-ui` | `1.4.3` | `^1.4.3` | Many `components/ui/*` primitives |
| UI | `@base-ui/react` | `1.3.0` | `^1.3.0` | `components/ui/combobox.tsx` |
| UI | `lucide-react` | `1.7.0` | `^1.7.0` | Icons |
| UI | `cmdk` | `1.1.1` | `^1.1.1` | Command component |
| UI | `embla-carousel-react` | `8.6.0` | `^8.6.0` | Carousel primitive |
| UI | `input-otp` | `1.4.2` | `^1.4.2` | OTP input primitive |
| UI | `react-day-picker` | `9.14.0` | `^9.14.0` | Calendar primitive |
| UI | `react-resizable-panels` | `4.8.0` | `^4.8.0` | Resizable primitive |
| UI | `recharts` | `3.8.0` | `^3.8.0` | Chart primitive |
| UI | `sonner` | `2.0.7` | `^2.0.7` | Toast primitive |
| UI | `vaul` | `1.1.2` | `^1.1.2` | Drawer primitive |
| Theme | `next-themes` | `0.4.6` | `^0.4.6` | `components/ui/sonner.tsx`; no global ThemeProvider found |
| Data fetching | `@tanstack/react-query` | `5.99.2` | `^5.99.2` | `app/providers.tsx`, `features/home` |
| Services | `firebase` | `12.11.0` | `^12.11.0` | Notifications feature |
| Tooling | `shadcn` | `4.1.2` | `^4.1.2` | Component generation/tooling |
| Tooling | `eslint` | `9.39.4` | `^9` | Linting |
| Tooling | `eslint-config-next` | `16.2.2` | `16.2.2` | Next lint config |
| Tooling | `typescript` | `5.9.3` | `^5` | Type checking |
| Types | `@types/node` | `20.19.37` | `^20` | TypeScript Node types |
| Types | `@types/react` | `19.2.14` | `^19` | React types |
| Types | `@types/react-dom` | `19.2.3` | `^19` | React DOM types |
| Utility | `date-fns` | `4.1.0` | `^4.1.0` | No usage found in scanned source |

## Compatibility Findings

- React peer dependencies are deduped to `19.2.4` across inspected packages.
- `next-intl` is declared as `latest`, which reduces reproducibility even though lockfile currently resolves `4.9.1`.
- `@gsap/react` is not installed and no usage was found.
- `next-themes` is installed, but no app-level `ThemeProvider` was found.
- `date-fns` appears unused in scanned source.
- `package-lock.json` and `pnpm-lock.yaml` both exist.

## Scripts And Commands

| Purpose | Command |
| --- | --- |
| Development | `npm run dev` |
| Build | `npm run build` |
| Production start | `npm run start` |
| Lint | `npm run lint` |
| Tests | NEEDS VERIFICATION: no test command exists |
| Typecheck | NEEDS VERIFICATION: no dedicated typecheck command exists |

## Configuration Files

| File | Purpose | Notes |
| --- | --- | --- |
| `next.config.ts` | Next config | Wraps config with `next-intl/plugin` |
| `tsconfig.json` | TypeScript config | `baseUrl: "."`, alias `@/*` |
| `eslint.config.mjs` | ESLint flat config | Next core web vitals + TypeScript |
| `postcss.config.mjs` | PostCSS | Tailwind v4 plugin |
| `components.json` | shadcn/radix-nova setup | `rsc: true`, aliases configured |
| `AGENTS.md` | Agent rule | Requires reading local Next docs before code |
| `README.md` | Create Next App starter readme | Not company-specific |

No `.env.example`, Docker, CI/CD, Vercel, commitlint, lint-staged, Husky, CODEOWNERS, PR template, or issue template was found.

## Alias And Import Conventions

`tsconfig.json`:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./*"]
}
```

`components.json` aliases:

```json
"components": "@/components",
"utils": "@/lib/utils",
"ui": "@/components/ui",
"lib": "@/lib",
"hooks": "@/hooks"
```

Confirmed import styles:

- External imports first.
- Absolute app imports with `@/`.
- Relative imports inside feature internals.
- Type-only imports are used, for example `import type { UploadDialogProps, UploadItem }`.

Potential inconsistencies:

- Quote and semicolon style varies between files.
- `features/home/src/*` uses an inner `src/` structure while other features use direct `components/`, `hooks/`, `services/`, `types/`.
- `tsconfig.json` includes a malformed-looking extra include entry: `"features/uploads/hooks"` even though that folder does not exist.

## Naming Conventions

| Area | Convention Found |
| --- | --- |
| Routes | Next special files: `page.tsx`, `layout.tsx`, `route.ts`, `not-found.tsx` |
| UI primitives | lowercase filenames under `components/ui` |
| Feature components | PascalCase components in feature folders |
| Hooks | `use-*` file naming |
| Services | kebab-case service files |
| Types | feature-scoped `types` folders |
| Utilities | `lib/utils.ts` with `cn()` |

## Testing And Quality

No automated tests were found. Current quality gate is ESLint only.

Future tests should be placed according to a confirmed company test strategy. Based on current structure, feature-specific tests would likely sit near `features/<feature>/`, while route smoke tests would need a test framework decision first.

## Company Workflow Conventions

Confirmed:

- Current branch: `main`, tracking `origin/main`.
- Working tree was clean at inspection time.
- Recent commit pattern is not meaningful enough to infer policy: `621e14b nour`.

NEEDS VERIFICATION:

- Branch naming policy.
- Commit message convention.
- PR review requirements.
- Required CI checks.
- Package manager policy.

