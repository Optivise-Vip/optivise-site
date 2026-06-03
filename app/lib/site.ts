/**
 * Single source of truth for site copy + config.
 * Components read from here so future routes (/work, /about) reuse the same data.
 */

export const site = {
  name: "Optivise",
  legalName: "Optivise",
  tagline: "AI strategy and builds for businesses that don't want to get left behind",
  description:
    "Optivise is a creative technology studio. We help businesses figure out where AI actually fits, then build the websites and AI-powered products that get them there first.",
  url: "https://optivise.vip",
  location: "Barbados — building globally",
  email: "optivisevip@gmail.com",
  // Replace with your real Cal.com / Calendly link. Centralized so every CTA uses it.
  schedulingUrl: "https://cal.com/optivise/intro",
  // Brand eye-mark on dark (public/logo.png) — favicon is app/icon.png. Used as
  // the Organization logo in JSON-LD; dark tile stays visible on light backgrounds.
  logoPath: "/logo.png",
  // Google Search Console token (also set as a DNS TXT record on optivise.vip).
  googleSiteVerification: "BWaJIWZU21FfpCsP3JBf_PImEf1p2-59aNUqmEFJ9_Q",
  // Public profiles that prove this is the same Optivise entity. Fill in as each
  // goes live (LinkedIn, Crunchbase, etc.) — feeds schema.org `sameAs`.
  sameAs: [
    "https://www.linkedin.com/company/optivise-vip",
  ] as string[],
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
    "We're a small studio that helps real-world businesses figure out where AI fits, then builds it. Strategy and engineering, under one roof.",
  primaryCta: { label: "Book a call", href: site.schedulingUrl },
  secondaryCta: { label: "See pricing", href: "/pricing" },
} as const;

export const services = {
  eyebrow: "What we do",
  heading: "Two things, and we do them together.",
  intro:
    "We help you work out what's actually worth building, then we go build it. Both halves matter, so we treat them as equal.",
  items: [
    {
      title: "Consulting",
      summary:
        "We help you decide what AI is worth doing and how to do it, and we scope the work before anyone writes a line of code.",
      points: [
        "AI opportunity assessments and roadmaps",
        "Technical direction and architecture",
        "Scoping and planning ahead of a build",
      ],
    },
    {
      title: "Building",
      summary:
        "We design and ship the websites and AI-powered products that turn all that strategy into something real.",
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
  heading: "You're paying for outcomes, not hours.",
  intro:
    "We grew up using these tools every day, and most industries haven't caught up yet. That gap is the opportunity, and the sooner you start, the more it adds up.",
  steps: [
    {
      no: "01",
      title: "Assess",
      body: "A quick, low-stakes audit that maps how your business runs, spots where AI can help, and leaves you with a roadmap.",
    },
    {
      no: "02",
      title: "Build",
      body: "We ship the one piece that moves the needle most first, whether that's a site, a product, or an integration, and show you it works.",
    },
    {
      no: "03",
      title: "Stay ahead",
      body: "An ongoing partnership that brings new AI capabilities to your business before your competitors find them. Think competitive intelligence, not maintenance.",
    },
  ],
  more: { label: "See our approach", href: "/approach" },
} as const;

export const work = {
  eyebrow: "Selected work",
  heading: "Built to be measured.",
  intro:
    "We keep track of results, not just things we shipped. The portfolio is still growing, and this is where it starts.",
  items: [
    {
      client: "Wellness studio",
      type: "Website",
      result: "A complete brand site, designed and shipped end to end.",
    },
  ],
  note: "Yours could be next. We'd especially love to work with construction and real estate.",
  more: { label: "See our work", href: "/work" },
} as const;

export const ctaBand = {
  heading: "Find out what AI could do for you.",
  body: "Start with a focused assessment. It's a small commitment, and you'll come away with a roadmap whether or not we end up building it together.",
  cta: { label: "See pricing & assessment", href: "/pricing" },
} as const;

export const footer = {
  blurb: "A creative technology studio. We do AI strategy, and we build.",
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
      "Every engagement starts with a clear outcome in mind, not a scope document and a stopwatch. We only take on a few clients at a time, and we're honest about whether we're the right fit.",
  },
  portfolioNote: {
    label: "A note on portfolio pricing",
    body: "We'll be straight with you: these are early-client rates. We're still building our portfolio, and the pricing reflects that. Sign on now and your rate is locked in for the life of the engagement, so it won't jump when our standard rates do. It's how we say thanks for trusting us early.",
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
        "A proper look at how your business runs, so we can find where AI genuinely helps and where it's just a distraction. You get a written roadmap, not a slide deck full of buzzwords.",
      includes: [
        "Operations audit, one department or the whole business",
        "Prioritised list of AI opportunities, rated by effort vs. impact",
        "An order of play: what to do first and why",
        "A written deliverable that's yours to keep, whatever you decide next",
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
        "Fixed project. Usually 2–3 weeks. Includes the Assessment, so if you've already done one, you save $750.",
      bonus: "",
      summary:
        "Before you spend real budget building something, it's worth making sure it's the right something. We pin down the what, the why, and the how, so the build runs tight from day one.",
      includes: [
        "Full AI Opportunity Assessment (included, no need to buy it separately)",
        "Technical architecture recommendation",
        "Tool and vendor picks, with the reasoning behind them",
        "An ROI model so you can see success in actual numbers",
        "Phase-by-phase implementation roadmap",
        "A handoff package if you're building with another team",
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
        "A strategic partner who keeps your business ahead of what AI can do, before your competitors clock it. This isn't maintenance. It's competitive intelligence.",
      includes: [
        "A monthly AI briefing tailored to your industry",
        "One implementation or integration per quarter",
        "We come to you with the opportunities, you don't have to go hunting",
        "KPIs agreed at the start and tracked every month",
        "A performance bonus tied to results, so we share the upside",
        "Priority access when you need a fast strategic call",
      ],
      featured: false,
      cta: { label: "Discuss a retainer", href: site.schedulingUrl },
    },
  ],
  kpis: {
    heading: "How the KPIs work",
    body: "At the start of every retainer we agree on 2–3 measurable targets together. Your monthly fee stays flat either way. If we hit those targets in the quarter, the bonus kicks in. That way our success is tied to yours.",
    examples: [
      "Get quotes out in under 24 hours instead of 3 days, with AI-assisted estimating",
      "Bring in 20 qualified inbound enquiries a quarter through AI content and targeting",
      "Drop manual scheduling from 10 hours a week to under 2 with automation",
      "Try one new AI capability each quarter before any local competitor does",
    ],
  },
  notSure: {
    heading: "Not sure which one fits?",
    body: "The Assessment is the easiest place to start, and the lowest risk. Most people who take it walk away knowing exactly what to do next, including whether they want us doing it with them.",
    cta: {
      label: "Email us your situation",
      href: `mailto:${site.email}?subject=${encodeURIComponent(
        "Which tier fits my business?"
      )}`,
    },
  },
  closing: {
    heading:
      "Start with the assessment. Even if we never build a thing together, you'll walk away with a roadmap you can run yourself.",
    cta: { label: "Book a 15-minute call", href: site.schedulingUrl },
  },
} as const;

// ─── FAQ page ─────────────────────────────────────────────────────────────────

export const faqPage = {
  hero: {
    eyebrow: "FAQ",
    heading: "Questions, answered.",
    subhead: "The things people usually want to know before getting started.",
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
      a: "Because charging by the hour rewards us for taking longer, not for doing better work. We'd rather agree on what success looks like up front and get paid for actually getting there.",
    },
    {
      q: "What if I just want some advice, not a whole project?",
      a: "That's exactly what the Assessment is for. It's a low-commitment way to get a clear read on where AI can help your business, with zero pressure to carry on. Plenty of clients find it's worth it on its own.",
    },
    {
      q: "What if I want to negotiate the price?",
      a: "We don't discount, but we can narrow the scope. If the Assessment feels too broad, we can run it on a single department or problem area for less. The price reflects the value, so paying less means covering less.",
    },
    {
      q: "You're a small team. Why should I trust you with something this important?",
      a: "We grew up with these tools. We don't advise on AI from the sidelines, we use it every day to build real products. Our pricing reflects where we are right now, and we measure everything, so you never have to just take our word for it.",
    },
    {
      q: "What do you need from me to get started?",
      a: "A 15-minute call and an honest chat about where your business is right now. We'll take it from there.",
    },
  ],
  closing: {
    heading:
      "Still wondering about something? A 15-minute call usually sorts it out faster than email ever will.",
    cta: { label: "Book a call", href: site.schedulingUrl },
  },
} as const;

// ─── Services page ────────────────────────────────────────────────────────────
// Add to `offerings` / `process` to grow this page — components map over them.

export const servicesPage = {
  hero: {
    eyebrow: "Services",
    headline: "We figure it out, then we build it.",
    subhead:
      "We work at both ends: deciding what AI should actually do for your business, and building the thing that does it. Most studios pick one. We give both equal weight.",
  },
  intro:
    "Every engagement is scoped around an outcome, not a pile of hours. Here's the work we take on, and how the pieces fit together.",
  offerings: [
    {
      title: "Consulting",
      summary:
        "We help you decide what AI is worth doing and how to do it, and we scope the work before anyone writes a line of code.",
      detail:
        "We work out where AI genuinely moves the needle for you and where it's just a distraction. You leave with a prioritised roadmap and a clear sense of effort versus impact, whether or not we're the ones who build it.",
      points: [
        "AI opportunity assessments and roadmaps",
        "Technical direction and architecture",
        "Tool and vendor picks, with the reasoning behind them",
        "Scoping and planning ahead of a build",
      ],
    },
    {
      title: "Building",
      summary:
        "We design and ship the websites and AI-powered products that turn all that strategy into something real.",
      detail:
        "Polished front ends, AI integrations, and the plumbing in between. We ship to live preview URLs early and build in the open, so you're never stuck waiting months to see something real.",
      points: [
        "High-craft marketing sites and web apps",
        "AI-powered products and integrations",
        "Automation for the manual, repetitive stuff",
        "Fast iteration on live preview URLs",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Scope",
      body: "We agree on the outcome and the shape of the work before anything's committed. No open-ended timelines.",
    },
    {
      step: "02",
      title: "Build in the open",
      body: "Work goes up on a live preview URL early. You watch it come together and steer as we go.",
    },
    {
      step: "03",
      title: "Measure and hand off",
      body: "We track what matters, show you the value in real numbers, and leave you with something you fully own.",
    },
  ],
  closing: {
    heading: "Not sure which piece you need? That's exactly what the assessment is for.",
    cta: { label: "See pricing & assessment", href: "/pricing" },
  },
} as const;

// ─── Approach page ────────────────────────────────────────────────────────────
// Add to `principles` to grow this page — the component maps over them.

export const approachPage = {
  hero: {
    eyebrow: "Approach",
    headline: "You're paying for outcomes, not hours.",
    subhead:
      "We grew up fluent in AI, and we work with the industries that haven't caught up yet. The earlier you start, the more that edge adds up, so our whole process is built to start small and prove its worth fast.",
  },
  intro:
    "Three phases, each with a clear exit. You're never locked into the next one until the last has earned it.",
  steps: [
    {
      no: "01",
      title: "Assess",
      body: "A quick, low-stakes audit that maps how your business runs, spots the AI opportunities, and leaves you with a roadmap.",
      detail:
        "We look at where your time and money actually go, then rank the opportunities by effort versus impact. The deliverable is yours to keep, and you're free to walk away and run it yourself.",
    },
    {
      no: "02",
      title: "Build",
      body: "We ship the one piece that moves the needle most first, whether that's a site, a product, or an integration, and show you it works.",
      detail:
        "Starting with the single highest-leverage piece keeps the risk low and the feedback fast. You see a real, working result before you commit to anything bigger.",
    },
    {
      no: "03",
      title: "Stay ahead",
      body: "An ongoing partnership that brings new AI capabilities to your business before your competitors find them.",
      detail:
        "This is competitive intelligence, not upkeep. We keep an eye on what's newly possible in your industry and bring you the moves worth making, before anyone local does.",
    },
  ],
  principles: [
    {
      title: "Our success is tied to yours",
      body: "Where it makes sense, our upside is linked to your results. We'd rather share the risk than just bill you for time.",
    },
    {
      title: "Measure everything",
      body: "We track outcomes, so you never have to take our word for whether something worked.",
    },
    {
      title: "You own it",
      body: "Everything we hand over, strategy, code, documentation, is yours to keep and run without us.",
    },
  ],
  closing: {
    heading: "Start small, see it work, then decide how far to take it. That's the whole idea.",
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
      "We keep track of results, not just things we shipped. The portfolio is young and growing. What's here is real, and what's next is being built right now.",
  },
  intro: "A few of the things we've worked on. More on the way.",
  items: [
    {
      client: "Wellness studio",
      type: "Website",
      result: "A complete brand site, designed and shipped end to end.",
      detail:
        "A full brand-led marketing site, taken from blank page to live, with a fast, accessible front end the owner can update without us.",
    },
  ],
  engagements: [
    {
      title: "Marketing sites & web apps",
      body: "Fast, polished, accessible front ends that look the way your business should and load like they're weightless.",
    },
    {
      title: "AI-powered products",
      body: "Custom tools and integrations that put AI to work on a real workflow, not a demo.",
    },
    {
      title: "Automation & integrations",
      body: "The quiet wins: all that manual, repetitive work that AI and good plumbing can take off your plate.",
    },
  ],
  note: "Yours could be next. We'd especially love to work with construction and real estate.",
  closing: {
    heading: "Want to be the next case study?",
    cta: { label: "Book a call", href: site.schedulingUrl },
  },
} as const;
