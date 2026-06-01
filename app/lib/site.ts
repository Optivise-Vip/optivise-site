/**
 * Single source of truth for site copy + config.
 * Components read from here so future routes (/work, /about) reuse the same data.
 */

export const site = {
  name: "Optivise",
  tagline: "AI strategy and builds for businesses that refuse to fall behind",
  description:
    "Optivise is a creative technology studio. We advise on AI strategy and build the websites and AI-powered products that put businesses ahead of their competitors.",
  url: "https://optivise.vip",
  location: "Barbados — building globally",
  email: "optivisevip@gmail.com",
  // Replace with your real Cal.com / Calendly link. Centralized so every CTA uses it.
  schedulingUrl: "https://cal.com/optivise/intro",
} as const;

export const nav = {
  links: [
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Book a call", href: site.schedulingUrl },
} as const;

export const hero = {
  // Split for oversized display treatment / line breaks.
  headlineLines: ["The future of innovation", "at Optivise."],
  subhead:
    "A creative technology studio bringing AI strategy and engineering to the businesses that build the real world.",
  primaryCta: { label: "Book a call", href: site.schedulingUrl },
  secondaryCta: { label: "See pricing", href: "/pricing" },
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
  more: { label: "Explore services", href: "/services" },
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
  more: { label: "See our approach", href: "/approach" },
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
  more: { label: "See our work", href: "/work" },
} as const;

export const ctaBand = {
  heading: "Get ahead before your competitors do.",
  body: "Start with a focused assessment. Low commitment, high signal — you'll leave with a roadmap whether or not we build it together.",
  cta: { label: "See pricing & assessment", href: "/pricing" },
} as const;

export const footer = {
  blurb: "A creative technology studio. Strategy and AI builds.",
  links: [
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

// ─── Pricing page ────────────────────────────────────────────────────────────

export const pricing = {
  hero: {
    eyebrow: "Pricing",
    headline: "You're not paying for hours. You're paying for what's next.",
    subhead:
      "Every engagement starts with a clear outcome in mind — not a scope document and a clock. We work with a small number of clients at a time, and we're selective about fit.",
  },
  portfolioNote: {
    label: "A note on portfolio pricing",
    body: "We're being transparent: these are our early-client rates. We're building our portfolio and pricing reflects that. If you engage now, your rate is locked in for the life of the engagement — it won't go up on you when our standard rates do. This is our way of rewarding early trust.",
  },
  tiers: [
    {
      tier: "Tier 1",
      name: "AI Opportunity Assessment",
      price: "$750",
      priceUnit: "",
      cadence: "One-time. Fixed scope. No surprises.",
      bonus: "",
      summary:
        "A structured review of your operations to find where AI can actually help — and where it's a distraction. You get a written roadmap, not a slide deck full of buzzwords.",
      includes: [
        "Operations audit — one department or the whole business",
        "Prioritised list of AI opportunities with effort vs. impact rating",
        "Implementation sequence — what to do first and why",
        "Written deliverable, yours to keep regardless of what comes next",
        "30-minute walkthrough call included",
      ],
      featured: false,
      cta: { label: "Book the assessment", href: site.schedulingUrl },
    },
    {
      tier: "Tier 2",
      name: "Strategy & Scoping",
      price: "$2,500",
      priceUnit: "",
      cadence:
        "Fixed project. Typically 2–3 weeks. Includes the Assessment — if you've already completed one, you save $750.",
      bonus: "",
      summary:
        "Before you commit budget to building something, make sure you're building the right thing. We define the what, the why, and the how — so execution is tight from day one.",
      includes: [
        "Full AI Opportunity Assessment (included — no need to buy separately)",
        "Technical architecture recommendation",
        "Tool and vendor selection with rationale",
        "ROI model — what success looks like in numbers",
        "Phase-by-phase implementation roadmap",
        "Handoff package if you're building with another team",
      ],
      featured: true,
      cta: { label: "Scope your project", href: site.schedulingUrl },
    },
    {
      tier: "Tier 3",
      name: "Strategic AI Retainer",
      price: "$1,200",
      priceUnit: "/ month",
      cadence: "Month-to-month. No lock-in.",
      bonus: "+ $500/quarter performance bonus if agreed KPIs are met",
      summary:
        "An ongoing strategic partner that keeps your business ahead of what AI can do — before your competitors figure it out. This is not maintenance. It's competitive intelligence.",
      includes: [
        "Monthly AI capability briefing relevant to your industry",
        "One implementation or integration per quarter",
        "Proactive opportunity identification — we bring ideas to you",
        "KPIs agreed at the start, tracked monthly",
        "Performance bonus tied to results — we share the upside",
        "Priority access for urgent strategic decisions",
      ],
      featured: false,
      cta: { label: "Discuss a retainer", href: site.schedulingUrl },
    },
  ],
  kpis: {
    heading: "How the KPIs work",
    body: "At the start of every retainer we agree on 2–3 measurable targets together. Your monthly fee stays flat. If we hit those targets in the quarter, the performance kicker applies. We have skin in the game.",
    examples: [
      "Reduce quote turnaround from 3 days to under 24 hours via AI-assisted estimation",
      "Generate 20 qualified inbound enquiries per quarter via AI content and targeting",
      "Cut manual scheduling from 10 hours/week to under 2 using automation",
      "Pilot one new AI capability per quarter before any local competitor does",
    ],
  },
  notSure: {
    heading: "Not sure which fits?",
    body: "The Assessment is the lowest-risk place to start. Most clients who take it come away with a clear picture of what to do next — including whether they want us involved in doing it.",
    cta: {
      label: "Email us your situation",
      href: `mailto:${site.email}?subject=${encodeURIComponent(
        "Which tier fits my business?"
      )}`,
    },
  },
  closing: {
    heading:
      "The best time to start was six months ago. The second best time is before your competitors do.",
    cta: { label: "Book a 15-minute call", href: site.schedulingUrl },
  },
} as const;

// ─── FAQ page ─────────────────────────────────────────────────────────────────

export const faqPage = {
  hero: {
    eyebrow: "FAQ",
    heading: "Questions, answered.",
    subhead: "Everything you need to know before getting started.",
  },
  askCta: {
    label: "Email your question",
    href: `mailto:${site.email}?subject=${encodeURIComponent(
      "A question for Optivise"
    )}`,
  },
  items: [
    {
      q: "Why don't you charge hourly?",
      a: "Because hourly billing aligns our incentives with taking longer, not with delivering better. We'd rather agree on what success looks like and get paid for achieving it.",
    },
    {
      q: "What if I just want some advice — not a full project?",
      a: "The Assessment is designed for that. It's a low-commitment way to get a clear picture of where AI can help your business, with no pressure to continue. A lot of clients find the Assessment alone is worth it.",
    },
    {
      q: "What if I want to negotiate the price?",
      a: "We don't discount — but we can narrow scope. If the Assessment feels too broad, we can run it on a single department or problem area for less. The price reflects value; reducing it means reducing what we cover.",
    },
    {
      q: "You're a small team. Why should I trust you with something this important?",
      a: "We're the generation that grew up with these tools — we don't advise on AI from the outside, we use it every day to build real products. We price to reflect where we are, and we measure everything so you don't have to take our word for it.",
    },
    {
      q: "What do you need from me to get started?",
      a: "A 15-minute call and an honest conversation about where your business is. We'll take it from there.",
    },
  ],
  closing: {
    heading:
      "The best time to start was six months ago. The second best time is before your competitors do.",
    cta: { label: "Book a call", href: site.schedulingUrl },
  },
} as const;

// ─── Services page ────────────────────────────────────────────────────────────
// Add to `offerings` / `process` to grow this page — components map over them.

export const servicesPage = {
  hero: {
    eyebrow: "Services",
    headline: "Strategy that decides. Engineering that ships.",
    subhead:
      "We work at both ends — figuring out what AI should do for your business, and building the thing that does it. Most studios pick one. We weight them equally.",
  },
  intro:
    "Every engagement is scoped to an outcome, not a stack of hours. Here is the work we take on, and how each piece fits together.",
  offerings: [
    {
      title: "Consulting",
      summary:
        "Advising on AI strategy and technical direction — and scoping the work before a single line is written.",
      detail:
        "We map where AI genuinely moves the needle for your operations and where it is a distraction. You leave with a prioritised roadmap and a clear-eyed view of effort versus impact — whether or not we are the ones who build it.",
      points: [
        "AI opportunity assessments and roadmaps",
        "Technical direction and architecture",
        "Tool and vendor selection with rationale",
        "Scoping and planning ahead of a build",
      ],
    },
    {
      title: "Building",
      summary:
        "Designing and shipping the websites and AI-powered products that turn strategy into advantage.",
      detail:
        "High-craft front ends, AI integrations, and the glue in between. We ship to live preview URLs early and iterate in the open, so you are never waiting months to see something real.",
      points: [
        "High-craft marketing sites and web apps",
        "AI-powered products and integrations",
        "Automation of manual, repetitive workflows",
        "Fast iteration on live preview URLs",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Scope",
      body: "We agree on the outcome and the shape of the work before anything is committed — no open-ended timelines.",
    },
    {
      step: "02",
      title: "Build in the open",
      body: "Work ships to a live preview URL early. You see progress continuously and steer as we go.",
    },
    {
      step: "03",
      title: "Measure & hand off",
      body: "We instrument what matters, prove the value in numbers, and leave you with something you fully own.",
    },
  ],
  closing: {
    heading: "Not sure which piece you need? That is what the assessment is for.",
    cta: { label: "See pricing & assessment", href: "/pricing" },
  },
} as const;

// ─── Approach page ────────────────────────────────────────────────────────────
// Add to `principles` to grow this page — the component maps over them.

export const approachPage = {
  hero: {
    eyebrow: "Approach",
    headline: "We sell outcomes, not hours.",
    subhead:
      "We are the generation that grew up fluent in AI, advising the industries that haven't yet. The advantage compounds the earlier you start — so our whole process is built to start small and prove value fast.",
  },
  intro:
    "Three phases, each with a clear exit. You are never locked into the next one until the last has earned it.",
  steps: [
    {
      no: "01",
      title: "Assess",
      body: "A low-barrier audit maps your operations, finds the AI opportunities, and hands you a roadmap.",
      detail:
        "We look at where time and money actually go, then rank the opportunities by effort versus impact. The deliverable is yours to keep — including the option to walk away and run it yourself.",
    },
    {
      no: "02",
      title: "Build",
      body: "We design and ship the highest-leverage piece first — a site, a product, an integration — and prove the value.",
      detail:
        "Starting with the single highest-leverage piece keeps risk low and feedback fast. You see a real, working result before committing to anything larger.",
    },
    {
      no: "03",
      title: "Stay ahead",
      body: "An ongoing partnership that brings new AI capabilities to your business before your competitors find them.",
      detail:
        "This is competitive intelligence, not upkeep. We track what is newly possible in your industry and bring you the moves worth making — before anyone local does.",
    },
  ],
  principles: [
    {
      title: "Skin in the game",
      body: "Where it fits, our upside is tied to your results. We would rather share the risk than bill you for time.",
    },
    {
      title: "Measure everything",
      body: "We instrument outcomes so you never have to take our word for whether something worked.",
    },
    {
      title: "You own it",
      body: "Every deliverable — strategy, code, documentation — is yours to keep and run without us.",
    },
  ],
  closing: {
    heading: "The advantage compounds. The best time to start is before your competitors do.",
    cta: { label: "Book a call", href: site.schedulingUrl },
  },
} as const;

// ─── Work page ────────────────────────────────────────────────────────────────
// Add real engagements to `items` as the portfolio grows — no placeholders.

export const workPage = {
  hero: {
    eyebrow: "Work",
    headline: "Built to be measured.",
    subhead:
      "We document outcomes, not deliverables. The portfolio is young and growing — what is here is real, and what comes next is being built now.",
  },
  intro: "Selected engagements. More on the way.",
  items: [
    {
      client: "Wellness studio",
      type: "Website",
      result: "A complete brand site, designed and shipped end to end.",
      detail:
        "Full brand-led marketing site taken from blank page to live, with a fast, accessible front end the owner can update without us.",
    },
  ],
  engagements: [
    {
      title: "Marketing sites & web apps",
      body: "High-craft, fast, accessible front ends that look the way your business should and load like they're free.",
    },
    {
      title: "AI-powered products",
      body: "Custom tools and integrations that put AI to work on a real workflow — not a demo.",
    },
    {
      title: "Automation & integrations",
      body: "Quiet wins: the manual, repetitive work that AI and good plumbing can take off your plate.",
    },
  ],
  note: "Your project could be next. Construction and real estate especially welcome.",
  closing: {
    heading: "Want to be the next case study?",
    cta: { label: "Book a call", href: site.schedulingUrl },
  },
} as const;
