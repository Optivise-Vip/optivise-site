"use client";

import { motion } from "framer-motion";
import { faqPage } from "../lib/site";

export default function FaqHero() {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[40vh] max-w-3xl rounded-full opacity-18 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,106,26,0.25), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          className="font-mono text-xs tracking-widest uppercase text-accent mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {faqPage.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="font-display text-headline text-foreground leading-none mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {faqPage.hero.heading}
        </motion.h1>

        <motion.p
          className="font-sans text-muted text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {faqPage.hero.subhead}
        </motion.p>
      </div>
    </section>
  );
}
