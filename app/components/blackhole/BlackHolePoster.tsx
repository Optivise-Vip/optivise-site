/**
 * Static, dependency-free black-hole visual.
 * Used as: (1) reduced-motion / no-WebGL fallback, (2) the loading state
 * while the 3D scene chunk streams in. Pure CSS so it never blocks paint.
 */
export default function BlackHolePoster() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* accretion glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[62vmin] w-[62vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,178,77,0) 38%, rgba(255,106,26,0.55) 47%, rgba(194,65,12,0.18) 62%, transparent 74%)",
          filter: "blur(6px)",
        }}
      />
      {/* event horizon */}
      <div className="absolute left-1/2 top-1/2 h-[34vmin] w-[34vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_140px_36px_rgba(255,106,26,0.22)]" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_52%,#060608_86%)]" />
    </div>
  );
}
