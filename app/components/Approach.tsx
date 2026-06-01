"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { approach } from "../lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-white/[0.015] py-28 px-6 lg:px-10"
      aria-label="Our approach"
    >
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs tracking-widest uppercase text-accent mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {approach.eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="font-display text-headline text-foreground mb-6 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {approach.heading}
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="font-sans text-muted text-lg max-w-xl mb-20 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {approach.intro}
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {approach.steps.map((step, i) => (
            <motion.div
              key={step.no}
              className="relative flex flex-col gap-6 md:pr-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Connecting line (desktop only, not on last) */}
              {i < approach.steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-7 left-full w-12 h-px bg-border -translate-y-1/2"
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <span className="font-display text-[5rem] leading-none font-bold text-accent/20 select-none">
                {step.no}
              </span>

              {/* Content */}
              <div className="border-t border-border pt-6 pb-8 md:pb-0">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-muted leading-relaxed text-base">
                  {step.body}
                </p>
              </div>

              {/* Mobile divider */}
              {i < approach.steps.length - 1 && (
                <div className="md:hidden h-px bg-border mb-4" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Learn more → full page */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={approach.more.href}
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent transition-colors duration-200 hover:text-foreground"
          >
            {approach.more.label}
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
