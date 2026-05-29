/**
 * Single source of truth for site copy + config.
 * Components read from here so future routes (/work, /about) reuse the same data.
 */

export const site = {
  name: "Optivise",
  tagline: "AI strategy and builds for businesses that refuse to fall behind",
  description:
    "Optivise is a creative technology studio. We advise on AI strategy and build the websites and AI-powered products that put businesses ahead of their competitors.",
  url: "https://optivise.com",
  location: "Barbados — building globally",
  email: "hello@optivise.com",
  // Replace with your real Cal.com / Calendly link. Centralized so every CTA uses it.
  schedulingUrl: "https://cal.com/optivise/intro",
} as const;

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Work", href: "#work" },
  ],
  cta: { label: "Schedule a call", href: site.schedulingUrl },
} as const;

export const hero = {
  // Split for oversized display treatment / line breaks.
  headlineLines: ["The future of innovation", "at Optivise."],
  subhead:
    "A creative technology studio bringing AI strategy and engineering to the businesses that build the real world.",
  primaryCta: { label: "Schedule a call", href: site.schedulingUrl },
  secondaryCta: { label: "See the work", href: "#work" },
} as const;

export const services = {
  eyebrow: "What we do",
  heading: "Two ways we move you forward.",
  intro:
    "Strategy and engineering, weighted equally. We help you decide what to build — then we build it.",
  items: [
    {
      title: "Consulting",
      summary:
        "Advising on AI strategy and technical direction — and scoping the work before a single line is written.",
      points: [
        "AI opportunity assessments and roadmaps",
        "Technical direction and architecture",
        "Scoping and planning ahead of a build",
      ],
    },
    {
      title: "Building",
      summary:
        "Designing and shipping the websites and AI-powered products that turn strategy into advantage.",
      points: [
        "High-craft marketing sites and web apps",
        "AI-powered products and integrations",
        "Fast iteration on live preview URLs",
      ],
    },
  ],
} as const;

export const approach = {
  eyebrow: "Why Optivise",
  heading: "We sell outcomes, not hours.",
  intro:
    "We're the generation that grew up fluent in AI, advising the industries that haven't yet. The advantage compounds the earlier you start.",
  steps: [
    {
      no: "01",
      title: "Assess",
      body: "A low-barrier audit maps your operations, finds the AI opportunities, and hands you a roadmap.",
    },
    {
      no: "02",
      title: "Build",
      body: "We design and ship the highest-leverage piece first — a site, a product, an integration — and prove the value.",
    },
    {
      no: "03",
      title: "Stay ahead",
      body: "An ongoing partnership that brings new AI capabilities to your business before your competitors find them. Competitive intelligence, not upkeep.",
    },
  ],
} as const;

export const work = {
  eyebrow: "Selected work",
  heading: "Built to be measured.",
  intro:
    "We document outcomes, not deliverables. The portfolio is growing — here's where it starts.",
  items: [
    {
      client: "Wellness studio",
      type: "Website",
      result: "A complete brand site, designed and shipped end to end.",
    },
  ],
  note: "Your project could be next. Construction and real estate especially welcome.",
} as const;

export const ctaBand = {
  heading: "Get ahead before your competitors do.",
  body: "Start with a focused assessment. Low commitment, high signal — you'll leave with a roadmap whether or not we build it together.",
  cta: { label: "Schedule a call", href: site.schedulingUrl },
} as const;

export const footer = {
  blurb: "A creative technology studio. Strategy and AI builds.",
  links: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Work", href: "#work" },
    { label: "Schedule a call", href: site.schedulingUrl },
  ],
} as const;
