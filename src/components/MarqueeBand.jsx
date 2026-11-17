/**
 * Full-bleed pink marquee band.
 * Continuously scrolls horizontally; pauses on hover.
 */
export default function MarqueeBand({ items }) {
  /* Double the items for seamless loop */
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="marquee-band w-full overflow-hidden select-none py-3"
      style={{
        backgroundColor: "var(--color-pink)",
        borderTop: "1px solid var(--color-ink)",
        borderBottom: "1px solid var(--color-ink)",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-4 whitespace-nowrap font-serif text-sm md:text-base"
            style={{ color: "var(--color-ink)" }}
          >
            {item}
            <span className="text-xs">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
