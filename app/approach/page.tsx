import type { Metadata } from "next";
import { site, approachPage } from "../lib/site";
import Starfield from "../components/Starfield";
import Nav from "../components/Nav";
import PageHero from "../components/PageHero";
import ApproachDetail from "../components/ApproachDetail";
import ClosingBand from "../components/ClosingBand";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Optivise works: assess, build, stay ahead. Outcomes over hours, value proven before you commit to more.",
  openGraph: {
    title: `Approach — ${site.name}`,
    description:
      "How Optivise works: assess, build, stay ahead. Outcomes over hours, value proven before you commit to more.",
    url: `${site.url}/approach`,
  },
};

export default function ApproachPage() {
  return (
    <>
      <Starfield />

      <div className="relative z-10">
        <Nav />

        <main>
          <PageHero
            eyebrow={approachPage.hero.eyebrow}
            headline={approachPage.hero.headline}
            subhead={approachPage.hero.subhead}
          />
          <ApproachDetail />
          <ClosingBand
            heading={approachPage.closing.heading}
            cta={approachPage.closing.cta}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
