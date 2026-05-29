"use client";

import { motion } from "framer-motion";
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

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Points */}
              <ul className="flex flex-col gap-3" aria-label={`${item.title} services`}>
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
      </div>
    </section>
  );
}
