import type { Metadata } from "next";
import { site, pricing } from "../lib/site";
import Starfield from "../components/Starfield";
import Nav from "../components/Nav";
import PricingHero from "../components/PricingHero";
import PricingTiers from "../components/PricingTiers";
import ClosingBand from "../components/ClosingBand";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, outcome-based pricing. One-time assessments, fixed-scope projects, and a strategic retainer — no hourly billing, ever.",
  openGraph: {
    title: `Pricing — ${site.name}`,
    description:
      "Transparent, outcome-based pricing. No hourly billing. Early-client rates locked for the life of your engagement.",
    url: `${site.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <Starfield />

      <div className="relative z-10">
        <Nav />

        <main>
          <PricingHero />
          <PricingTiers />
          <ClosingBand
            heading={pricing.closing.heading}
            cta={pricing.closing.cta}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
