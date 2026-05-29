/**
 * Site-wide starfield. Fixed behind all content (-z-10) so the whole landing
 * page sits in space, not just the black-hole intro. Pure CSS (tiled
 * radial-gradients) — crisp, cheap, and it never blocks paint.
 */
export default function Starfield() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 bg-background"
    >
      <div className="starfield-layer-a absolute inset-0" />
      <div className="starfield-layer-b absolute inset-0" />
      {/* Faint amber nebula echoing the accretion disk. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% -5%, rgba(255,106,26,0.07), transparent 60%)",
        }}
      />
      {/* Vignette for depth. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, transparent 55%, rgba(0,0,0,0.55))",
        }}
      />
    </div>
  );
}
