"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subhead: string;
}

/**
 * Shared hero for structured sub-pages (Services / Approach / Work).
 * Mirrors the PricingHero treatment without a button.
 */
export default function PageHero({ eyebrow, headline, subhead }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 px-6 lg:px-10 overflow-hidden">
      {/* Accent glow — echoes the brand signature */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[50vh] max-w-4xl rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,106,26,0.28), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          className="font-mono text-xs tracking-widest uppercase text-accent mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          className="font-display text-headline text-foreground leading-none mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="font-sans text-muted text-lg leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {subhead}
        </motion.p>
      </div>
    </section>
  );
}
