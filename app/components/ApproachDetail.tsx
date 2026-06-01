"use client";

import { motion } from "framer-motion";
import { approachPage } from "../lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function ApproachDetail() {
  return (
    <section className="py-8 pb-28 px-6 lg:px-10" aria-label="Approach detail">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <motion.p
          className="font-sans text-muted text-lg max-w-2xl mb-20 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {approachPage.intro}
        </motion.p>

        {/* Steps — stacked rows with number + body + detail */}
        <div className="flex flex-col gap-12 mb-24">
          {approachPage.steps.map((step, i) => (
            <motion.div
              key={step.no}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 border-t border-border pt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: 0.05 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="font-display text-[4rem] leading-none font-bold text-accent/20 select-none">
                {step.no}
              </span>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">
                  {step.title}
                </h2>
                <p className="font-sans text-foreground/90 leading-relaxed mb-3 max-w-2xl">
                  {step.body}
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed max-w-2xl">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <motion.h2
          className="font-display text-3xl text-foreground mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          What we hold to
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approachPage.principles.map((p, i) => (
            <motion.div
              key={p.title}
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
                {p.title}
              </h3>
              <p className="font-sans text-muted leading-relaxed text-sm">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
