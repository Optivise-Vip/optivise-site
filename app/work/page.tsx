import type { Metadata } from "next";
import { site, workPage } from "../lib/site";
import Starfield from "../components/Starfield";
import Nav from "../components/Nav";
import PageHero from "../components/PageHero";
import WorkDetail from "../components/WorkDetail";
import ClosingBand from "../components/ClosingBand";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
  description:
    "Selected work from Optivise — outcomes documented, not just deliverables. A young, growing portfolio of sites, AI products, and automation.",
  openGraph: {
    title: `Work — ${site.name}`,
    description:
      "Selected work from Optivise — outcomes documented, not just deliverables.",
    url: `${site.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <>
      <Starfield />

      <div className="relative z-10">
        <Nav />

        <main>
          <PageHero
            eyebrow={workPage.hero.eyebrow}
            headline={workPage.hero.headline}
            subhead={workPage.hero.subhead}
          />
          <WorkDetail />
          <ClosingBand
            heading={workPage.closing.heading}
            cta={workPage.closing.cta}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
