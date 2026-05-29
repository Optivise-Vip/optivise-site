"use client";

import { motion } from "framer-motion";
import { hero } from "../lib/site";
import ScheduleButton from "./ScheduleButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex flex-col justify-end pb-20 px-6 lg:px-10"
      aria-label="Hero"
    >
      {/* Transparent background — lets 3D canvas behind show through */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
        >
          {/* Headline */}
          <h1 className="font-display text-display leading-none tracking-tight mb-8">
            {hero.headlineLines.map((line, i) => (
              <motion.span
                key={i}
                className={`block ${
                  i === 1
                    ? "text-accent"
                    : "text-foreground"
                }`}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Subhead */}
          <motion.p
            className="font-sans text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScheduleButton
              label={hero.primaryCta.label}
              href={hero.primaryCta.href}
              variant="primary"
            />
            <a
              href={hero.secondaryCta.href}
              className="font-sans text-sm font-semibold text-muted hover:text-foreground transition-colors duration-200 underline-offset-4 hover:underline"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-50">
          scroll
        </span>
        <motion.div
          className="w-px h-8 bg-muted/40"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
