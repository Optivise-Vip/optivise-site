# Optivise — marketing site

Single-page marketing site for Optivise. Dark, bold, high-contrast brand; the
signature element is a scroll-driven 3D black-hole intro that morphs into the hero.

## Stack
- **Next.js 16** (App Router, Turbopack) · **React 19.2** · **TypeScript**
- **Tailwind v4** (config-in-CSS via `app/globals.css`)
- **3D:** `@react-three/fiber` 9, `@react-three/drei`, `@react-three/postprocessing`, `three`
- `framer-motion` for non-3D motion

## Run
- `npm run dev` → http://localhost:3000 (Next 16 enforces one dev server per project dir)
- `npx tsc --noEmit` to typecheck · `npm run lint` (eslint)

## Layout
- `app/page.tsx` — composes the page: `Starfield` (CSS, fixed bg) + `Nav`, `BlackHoleIntro`, `Hero`, `Services`, `Approach`, `Work`, `CtaBand`, `Footer`
- `app/lib/site.ts` — site content/config
- `app/components/blackhole/` — the 3D intro:
  - `Scene.tsx` — the `<Canvas>` (Stars, event-horizon sphere, AccretionDisk, Bloom)
  - `AccretionDisk.tsx` — custom GLSL shader (fbm swirl + doppler)
  - `useScrollCamera.ts` — `Rig`: scroll-progress → camera dolly/orbit/fov + bloom (tune via `TUNING`)
  - `BlackHolePoster.tsx` — pure-CSS static fallback
- `BlackHoleIntro.tsx` — owns scroll progress (ref-driven, no per-frame React renders), quality/mode detection, and the `frameloop` gating

## Conventions & gotchas
- **Effects need callback refs, not ref objects.** Under React 19, `ref` is a normal
  prop, and `@react-three/postprocessing` does `JSON.stringify(props)` internally — a
  ref object holding a (circular) THREE effect throws "Converting circular structure to
  JSON" and crashes the Canvas. See the callback ref on `<Bloom>` in `Scene.tsx`. (This
  is why `Lensing.tsx`/`wrapEffect` was avoided/removed.)
- **Perf is deliberately tuned — don't regress:** the render loop pauses when the intro
  is offscreen (`IntersectionObserver` → `frameloop="never"` in `BlackHoleIntro`/`Scene`);
  DPR cap 1.5, `antialias:false` (composer renders its own buffers), low-quality tier for
  coarse-pointer/mobile, fbm 3 octaves. Keep new GPU work behind the same gates.
- **Accessibility/fallbacks:** reduced-motion or no-WebGL → static `BlackHolePoster`, no
  scroll hijack. Preserve this branch.
- Scroll/animation state lives in refs and imperative `useFrame`/`.style` mutations to
  avoid per-frame re-renders — follow that pattern for new scroll-driven UI.
