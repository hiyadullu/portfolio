/**
 * Circular rotating text badge — decorative element.
 * Shows text arranged in a circle that spins slowly.
 */
export default function RotatingBadge() {
  const text = "HIYA DULLU • PORTFOLIO • ENGINEER • ";
  const chars = text.split("");
  const radius = 42;

  return (
    <div className="relative w-24 h-24" aria-hidden="true">
      {/* Outer pink glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-40"
        style={{ backgroundColor: "var(--color-pink)" }}
      />
      {/* Spinning text ring */}
      <svg
        className="spin-slow w-full h-full"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {chars.map((char, i) => {
          const angle = (360 / chars.length) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "6.5px",
                fontWeight: 500,
                fill: "var(--color-ink)",
              }}
            >
              {char}
            </text>
          );
        })}
      </svg>
      {/* Centre dot */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full"
        style={{
          backgroundColor: "var(--color-pink)",
          border: "1px solid var(--color-ink)",
        }}
      />
    </div>
  );
}
