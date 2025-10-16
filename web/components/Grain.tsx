export function Grain() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] mix-blend-soft-light"
    >
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
}


