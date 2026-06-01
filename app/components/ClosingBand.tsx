"use client";

import { motion } from "framer-motion";

interface ClosingBandProps {
  heading: string;
  cta: { label: string; href: string };
}

export default function ClosingBand({ heading, cta }: ClosingBandProps) {
  return (
    <section
      className="relative overflow-hidden bg-accent py-24 px-6 lg:px-10"
      aria-label="Call to action"
    >
      {/* Depth layers — match CtaBand */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(255,178,77,0.35),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-bright/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-deep/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <motion.h2
            className="font-display text-headline text-background leading-none flex-1"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {heading}
          </motion.h2>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold font-sans tracking-wide bg-background text-foreground hover:bg-surface-2 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              {cta.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
