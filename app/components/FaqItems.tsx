"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqPage } from "../lib/site";
import ScheduleButton from "./ScheduleButton";

export default function FaqItems() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="py-8 pb-28 px-6 lg:px-10" aria-label="FAQ">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">

          {/* Sticky sidebar label */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                Common questions
              </p>
              <p className="font-sans text-sm text-muted/60 leading-relaxed max-w-[14rem]">
                If your question isn&apos;t here, send it over — we&apos;ll answer it.
              </p>
              <div className="mt-8">
                <ScheduleButton
                  label={faqPage.askCta.label}
                  href={faqPage.askCta.href}
                  variant="ghost"
                />
              </div>
            </div>
          </div>

          {/* Q&A list */}
          <div>
            <ul className="flex flex-col divide-y divide-border">
              {faqPage.items.map((item, i) => (
                <motion.li
                  key={item.q}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-start justify-between gap-6 py-7 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                    aria-expanded={open === i}
                  >
                    <span className="font-display text-lg text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                      {item.q}
                    </span>
                    <span
                      className={`flex-shrink-0 mt-1 font-mono text-accent text-lg transition-transform duration-200 ${
                        open === i ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-muted leading-relaxed pb-7 max-w-2xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA — visible below the list on small screens */}
            <div className="mt-12 lg:hidden">
              <ScheduleButton
                label={faqPage.askCta.label}
                href={faqPage.askCta.href}
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
