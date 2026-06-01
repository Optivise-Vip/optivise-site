"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { work } from "../lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Work() {
  return (
    <section
      id="work"
      className="py-28 px-6 lg:px-10"
      aria-label="Selected work"
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
          {work.eyebrow}
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
          {work.heading}
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="font-sans text-muted text-lg max-w-xl mb-16 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {work.intro}
        </motion.p>

        {/* Work items — grid handles 1–3 gracefully */}
        <div
          className={`grid gap-6 ${
            work.items.length === 1
              ? "grid-cols-1 max-w-2xl"
              : work.items.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {work.items.map((item, i) => (
            <motion.article
              key={`${item.client}-${i}`}
              className="bg-surface-2 border border-border rounded-2xl p-8 lg:p-10 hover:border-accent/40 transition-colors duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Type tag */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                  {item.type}
                </span>
              </div>

              {/* Client */}
              <h3 className="font-display text-3xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {item.client}
              </h3>

              {/* Result */}
              <div className="h-px bg-border mb-6" />
              <p className="font-sans text-muted leading-relaxed">
                {item.result}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="font-sans text-sm text-muted mt-10 italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {work.note}
        </motion.p>

        {/* Learn more → full page */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={work.more.href}
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent transition-colors duration-200 hover:text-foreground"
          >
            {work.more.label}
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
