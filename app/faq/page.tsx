import type { Metadata } from "next";
import { site, faqPage } from "../lib/site";
import Starfield from "../components/Starfield";
import Nav from "../components/Nav";
import FaqHero from "../components/FaqHero";
import FaqItems from "../components/FaqItems";
import ClosingBand from "../components/ClosingBand";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  alternates: { canonical: "/faq" },
  description:
    "Common questions about how Optivise works — pricing, process, and what you need to get started.",
  openGraph: {
    title: `FAQ — ${site.name}`,
    description:
      "Common questions about how Optivise works — pricing, process, and what you need to get started.",
    url: `${site.url}/faq`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPage.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Starfield />

      <div className="relative z-10">
        <Nav />

        <main>
          <FaqHero />
          <FaqItems />
          <ClosingBand
            heading={faqPage.closing.heading}
            cta={faqPage.closing.cta}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
