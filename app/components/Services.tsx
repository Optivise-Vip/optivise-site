"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 lg:px-10"
      aria-label="Services"
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
          {services.eyebrow}
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
          {services.heading}
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
          {services.intro}
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.items.map((item, i) => (
            <motion.article
              key={item.title}
              className="bg-surface border border-border rounded-2xl p-8 lg:p-10 flex flex-col gap-6 hover:border-accent/40 transition-colors duration-300"
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
              {/* Card header */}
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-5">
                  <span className="text-accent font-mono text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-muted leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Learn more → full page */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={services.more.href}
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent transition-colors duration-200 hover:text-foreground"
          >
            {services.more.label}
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
