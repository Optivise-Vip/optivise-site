"use client";

import { motion } from "framer-motion";
import { pricing } from "../lib/site";
import ScheduleButton from "./ScheduleButton";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function PricingTiers() {
  return (
    <section className="py-8 pb-28 px-6 lg:px-10" aria-label="Pricing tiers">
      <div className="mx-auto max-w-7xl">

        {/* Portfolio note banner */}
        <motion.div
          className="mb-16 rounded-xl border border-accent/25 bg-accent/8 px-6 py-5 flex flex-col sm:flex-row sm:items-start gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs tracking-widest uppercase text-accent shrink-0 pt-0.5">
            {pricing.portfolioNote.label}
          </span>
          <p className="font-sans text-sm text-muted leading-relaxed">
            {pricing.portfolioNote.body}
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {pricing.tiers.map((tier, i) => (
            <motion.article
              key={tier.tier}
              className={`relative rounded-2xl border flex flex-col p-8 transition-colors duration-300 ${
                tier.featured
                  ? "border-accent/40 bg-surface-2"
                  : "border-border bg-surface hover:border-accent/25"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label={tier.name}
            >
              {/* Featured accent bar */}
              {tier.featured && (
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                />
              )}

              {/* Header */}
              <div className="mb-6">
                <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                  {tier.tier}
                </p>
                <h3 className="font-display text-2xl text-foreground mb-5 leading-tight">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-display text-4xl text-foreground tracking-tight">
                    {tier.price}
                  </span>
                  {tier.priceUnit && (
                    <span className="font-sans text-base text-muted">
                      {tier.priceUnit}
                    </span>
                  )}
                </div>

                <p className="font-sans text-sm text-muted leading-relaxed mb-2">
                  {tier.cadence}
                </p>

                {tier.bonus && (
                  <p className="font-sans text-sm text-accent-bright font-medium">
                    {tier.bonus}
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Summary */}
              <p className="font-sans text-sm text-foreground/80 leading-relaxed mb-6">
                {tier.summary}
              </p>

              {/* Includes */}
              <div className="mb-2">
                <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                  What&apos;s included
                </p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span
                        className="text-accent shrink-0 mt-0.5 font-bold"
                        aria-hidden
                      >
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <ScheduleButton
                  label={tier.cta.label}
                  href={tier.cta.href}
                  variant={tier.featured ? "primary" : "ghost"}
                  className="w-full"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* KPI details — Tier 3 context */}
        <motion.div
          className="rounded-2xl border border-border bg-surface p-8 lg:p-10 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
                Tier 3
              </p>
              <h3 className="font-display text-2xl text-foreground mb-4">
                {pricing.kpis.heading}
              </h3>
              <p className="font-sans text-muted leading-relaxed">
                {pricing.kpis.body}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                Example KPIs
              </p>
              <ul className="flex flex-col gap-4">
                {pricing.kpis.examples.map((example) => (
                  <li key={example} className="flex gap-3 text-sm text-muted">
                    <span
                      className="text-accent shrink-0 mt-0.5 font-bold"
                      aria-hidden
                    >
                      →
                    </span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Not sure which fits */}
        <motion.div
          className="text-center max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-display text-2xl text-foreground mb-4">
            {pricing.notSure.heading}
          </h3>
          <p className="font-sans text-muted leading-relaxed mb-8">
            {pricing.notSure.body}
          </p>
          <ScheduleButton
            label={pricing.notSure.cta.label}
            href={pricing.notSure.cta.href}
            variant="ghost"
          />
        </motion.div>
      </div>
    </section>
  );
}
