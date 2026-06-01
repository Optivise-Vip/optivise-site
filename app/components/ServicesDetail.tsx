"use client";

import { motion } from "framer-motion";
import { servicesPage } from "../lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesDetail() {
  return (
    <section className="py-8 pb-28 px-6 lg:px-10" aria-label="Services detail">
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
          {servicesPage.intro}
        </motion.p>

        {/* Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {servicesPage.offerings.map((item, i) => (
            <motion.article
              key={item.title}
              className="bg-surface border border-border rounded-2xl p-8 lg:p-10 flex flex-col gap-6 hover:border-accent/40 transition-colors duration-300"
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
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-5">
                  <span className="text-accent font-mono text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-display text-2xl text-foreground mb-3">
                  {item.title}
                </h2>
                <p className="font-sans text-muted leading-relaxed mb-4">
                  {item.summary}
                </p>
                <p className="font-sans text-sm text-muted/80 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="h-px bg-border" />

              <ul
                className="flex flex-col gap-3"
                aria-label={`${item.title} services`}
              >
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-sans text-sm text-foreground"
                  >
                    <span
                      className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Process */}
        <motion.h2
          className="font-display text-3xl text-foreground mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          How we work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesPage.process.map((step, i) => (
            <motion.div
              key={step.step}
              className="flex flex-col gap-4"
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
              <span className="font-display text-[3.5rem] leading-none font-bold text-accent/20 select-none">
                {step.step}
              </span>
              <div className="border-t border-border pt-5">
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-muted leading-relaxed text-base">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
