# Optivise — marketing site

Single-page marketing site for Optivise. Dark, bold, high-contrast brand; the
signature element is a scroll-driven 3D black-hole intro that morphs into the hero.

## Stack
- **Next.js 16** (App Router, Turbopack) · **React 19.2** · **TypeScript**
- **Tailwind v4** (config-in-CSS via `app/globals.css`)
- **3D:** `@react-three/fiber` 9, `@react-three/drei`, `@react-three/postprocessing`, `three`
- `framer-motion` for non-3D motion

## Commands
- `npm run dev` → http://localhost:3000 (Next 16 enforces one dev server per project dir)
- `npx tsc --noEmit` → typecheck
- `npm run lint` → eslint

## Folder Structure
- `app/page.tsx` — page composition only, no logic here
- `app/components/` — all UI components (PascalCase filenames)
- `app/components/blackhole/` — 3D intro system, see detail below
- `app/lib/site.ts` — ALL site content and copy lives here, nowhere else
- `public/` — static assets

## Layout
- `app/page.tsx` — composes the page: `Starfield` (CSS, fixed bg) + `Nav`, `BlackHoleIntro`, `Hero`, `Services`, `Approach`, `Work`, `CtaBand`, `Footer`
- `app/lib/site.ts` — site content/config
- `app/components/blackhole/` — the 3D intro:
  - `Scene.tsx` — the `<Canvas>` (Stars, event-horizon sphere, AccretionDisk, Bloom)
  - `AccretionDisk.tsx` — custom GLSL shader (fbm swirl + doppler)
  - `useScrollCamera.ts` — `Rig`: scroll-progress → camera dolly/orbit/fov + bloom (tune via `TUNING`)
  - `BlackHolePoster.tsx` — pure-CSS static fallback
- `BlackHoleIntro.tsx` — owns scroll progress (ref-driven, no per-frame React renders), quality/mode detection, and the `frameloop` gating

## Coding Rules
1. **TypeScript strict** — no `any`, no `@ts-ignore` under any circumstances
2. **All copy/content goes in `app/lib/site.ts`** — never hardcode strings in components
3. **Tailwind only** — no inline styles, no CSS modules outside `globals.css`
4. **Scroll/animation state in refs** — never `useState` for values that update per frame
5. **Components stay dumb** — logic belongs in hooks, not JSX
6. **Ask before installing packages** — no `npm install` without confirming first

## Do NOT
- Touch `app/components/blackhole/` unless explicitly asked to
- Add `console.log` — use a comment to flag something instead
- Break the mobile/reduced-motion fallback (`BlackHolePoster`) — always test this branch
- Change `next.config.ts` without asking
- Use `styled-components`, `emotion`, or any CSS-in-JS library

## Performance (non-negotiable)
- All new GPU/animation work must be gated behind the same `IntersectionObserver` pattern used in `BlackHoleIntro`
- DPR cap stays at 1.5 — do not raise it
- Low-quality tier must remain intact for coarse-pointer/mobile

## Critical Gotchas
- **Callback refs, not ref objects** — React 19 + `@react-three/postprocessing` serialises props via `JSON.stringify`; a ref holding a THREE effect is circular and crashes the Canvas. See `<Bloom>` in `Scene.tsx`. This is why `Lensing.tsx`/`wrapEffect` was removed.
- **Scroll state is ref-driven** — no per-frame React renders. Follow this pattern for any new scroll-driven UI.
- **Accessibility** — reduced-motion or no-WebGL must always render `BlackHolePoster` with no scroll hijack. Never remove this branch.
