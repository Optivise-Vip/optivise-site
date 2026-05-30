"use client";

/* eslint-disable react-hooks/set-state-in-effect --
   Capability detection (WebGL, reduced-motion, pointer/viewport) relies on
   window/document, which don't exist during SSR. We must start from "pending"
   to keep hydration consistent, then resolve the real mode in a mount effect.
   The setState here runs once on mount, not in a render loop. */

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import BlackHolePoster from "./blackhole/BlackHolePoster";
import type { SceneQuality } from "./blackhole/Scene";

// WebGL canvas can't be server-rendered. Poster covers the load.
const Scene = dynamic(() => import("./blackhole/Scene"), {
  ssr: false,
  loading: () => <BlackHolePoster />,
});

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

type Mode = "pending" | "animated" | "static";

export default function BlackHoleIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const barWrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("pending");
  const [quality, setQuality] = useState<SceneQuality>("high");
  // Whether the intro section is on (or near) screen. When false we pause the
  // WebGL render loop so it costs nothing for the rest of the page.
  const [active, setActive] = useState(true);

  // Decide how (or whether) to animate, client-side only.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !hasWebGL()) {
      setMode("static");
      return;
    }
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setQuality(coarse || window.innerWidth < 768 ? "low" : "high");
    setMode("animated");
  }, []);

  // Map scroll position within the tall container to progress 0 -> 1.
  useEffect(() => {
    if (mode !== "animated") return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 0));
      const p = total > 0 ? scrolled / total : 0;
      progressRef.current = p;

      // Drive the intro UI directly from the ref — no React re-render per frame.
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (barWrapRef.current)
        barWrapRef.current.style.opacity = p >= 0.995 ? "0" : "1";
      if (captionRef.current)
        captionRef.current.style.opacity = String(Math.max(0, 1 - p * 2.4));
      // Fade to the hero's background over the final stretch — this is the
      // morph, and it hides the core before the camera could reveal "inside".
      if (overlayRef.current)
        overlayRef.current.style.opacity = String(
          p <= 0.55 ? 0 : Math.min((p - 0.55) / 0.27, 1),
        );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mode]);

  // Pause the render loop whenever the intro is scrolled out of view. The
  // margin resumes it just before it re-enters so scroll-up has no visible
  // stall. By the time it leaves, the overlay fade has already hidden it.
  useEffect(() => {
    if (mode !== "animated") return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mode]);

  // Reduced-motion / no-WebGL: a single static frame, no scroll hijack.
  if (mode === "static") {
    return (
      <section aria-hidden className="relative">
        <BlackHolePoster />
      </section>
    );
  }

  // The tall container creates the scroll distance; the canvas stays pinned
  // while progress advances, then hands off to the hero below.
  return (
    <>
      {/* Intro progress bar — fills as you scroll through the black hole,
          then fades out once the intro completes. */}
      <div
        ref={barWrapRef}
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/5 transition-opacity duration-500"
      >
        <div
          ref={barRef}
          className="h-full w-full origin-left bg-gradient-to-r from-accent to-accent-bright"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <section ref={containerRef} aria-hidden className="relative h-[230vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {mode === "animated" ? (
            <Scene progressRef={progressRef} quality={quality} active={active} />
          ) : (
            <BlackHolePoster />
          )}

          {/* Black fade that completes the dive into the hero. */}
          <div
            ref={overlayRef}
            className="pointer-events-none absolute inset-0 bg-background"
            style={{ opacity: 0 }}
          />

          {/* Prompt to scroll; fades out as the dive begins. */}
          <div
            ref={captionRef}
            className="pointer-events-none absolute inset-x-0 bottom-14 flex justify-center"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              scroll to enter
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
