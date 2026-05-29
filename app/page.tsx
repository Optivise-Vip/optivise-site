import BlackHoleIntro from "./components/BlackHoleIntro";
import Starfield from "./components/Starfield";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Work from "./components/Work";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Site-wide stars behind everything. */}
      <Starfield />

      {/* All content sits in a layer above the starfield; transparent
          sections let the stars show through. */}
      <div className="relative z-10">
        <Nav />

        {/* Scroll-driven black hole entry; morphs into the hero below. */}
        <BlackHoleIntro />

        <main>
          {/* Accent glow echoes the accretion disk, framing the hero. */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-48 mx-auto h-[60vh] max-w-5xl rounded-full opacity-25 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,106,26,0.22), transparent)",
              }}
            />
            <Hero />
          </div>

          <Services />
          <Approach />
          <Work />
          <CtaBand />
        </main>

        <Footer />
      </div>
    </>
  );
}
