"use client";

import { motion } from "framer-motion";
import { workPage } from "../lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkDetail() {
  return (
    <section className="py-8 pb-28 px-6 lg:px-10" aria-label="Work detail">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <motion.p
          className="font-sans text-muted text-lg max-w-2xl mb-16 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {workPage.intro}
        </motion.p>

        {/* Items — grid handles 1–3 gracefully */}
        <div
          className={`grid gap-6 mb-24 ${
            workPage.items.length === 1
              ? "grid-cols-1 max-w-2xl"
              : workPage.items.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {workPage.items.map((item, i) => (
            <motion.article
              key={`${item.client}-${i}`}
              className="bg-surface-2 border border-border rounded-2xl p-8 lg:p-10 hover:border-accent/40 transition-colors duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs tracking-widest uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                  {item.type}
                </span>
              </div>
              <h2 className="font-display text-3xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {item.client}
              </h2>
              <div className="h-px bg-border mb-6" />
              <p className="font-sans text-muted leading-relaxed mb-4">
                {item.result}
              </p>
              <p className="font-sans text-sm text-muted/80 leading-relaxed">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>

        {/* What we build */}
        <motion.h2
          className="font-display text-3xl text-foreground mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          What we build
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {workPage.engagements.map((e, i) => (
            <motion.div
              key={e.title}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="font-display text-xl text-foreground mb-3">
                {e.title}
              </h3>
              <p className="font-sans text-muted leading-relaxed text-sm">
                {e.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="font-sans text-sm text-muted italic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {workPage.note}
        </motion.p>
      </div>
    </section>
  );
}
