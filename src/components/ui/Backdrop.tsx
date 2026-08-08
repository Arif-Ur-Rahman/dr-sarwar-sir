/**
 * Page-wide atmosphere: aurora blooms, a fading grid, and a fine grain layer.
 * Fixed behind everything so sections share one continuous ground.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />

      {/* Aurora blooms */}
      <div
        className="absolute -left-[15%] -top-[25%] h-[75vh] w-[75vw] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(76,201,240,0.20) 0%, transparent 68%)",
          animation: "aurora-drift 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[18%] top-[4%] h-[65vh] w-[60vw] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(106,125,255,0.17) 0%, transparent 66%)",
          animation: "aurora-drift 32s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[25%] h-[60vh] w-[70vw] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(76,201,240,0.10) 0%, transparent 70%)",
          animation: "aurora-drift 38s ease-in-out infinite",
        }}
      />

      {/* Fading grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 0%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 0%, black 10%, transparent 70%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
      />

      {/* Vignette to settle the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 40%, transparent 40%, rgba(7,11,18,0.75) 100%)",
        }}
      />
    </div>
  );
}
