import type { Metadata } from "next";
import { site, servicesPage } from "../lib/site";
import Starfield from "../components/Starfield";
import Nav from "../components/Nav";
import PageHero from "../components/PageHero";
import ServicesDetail from "../components/ServicesDetail";
import ClosingBand from "../components/ClosingBand";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
  description:
    "AI strategy consulting and high-craft engineering — scoped to outcomes, not hours. See how Optivise advises and builds.",
  openGraph: {
    title: `Services — ${site.name}`,
    description:
      "AI strategy consulting and high-craft engineering — scoped to outcomes, not hours.",
    url: `${site.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Starfield />

      <div className="relative z-10">
        <Nav />

        <main>
          <PageHero
            eyebrow={servicesPage.hero.eyebrow}
            headline={servicesPage.hero.headline}
            subhead={servicesPage.hero.subhead}
          />
          <ServicesDetail />
          <ClosingBand
            heading={servicesPage.closing.heading}
            cta={servicesPage.closing.cta}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
