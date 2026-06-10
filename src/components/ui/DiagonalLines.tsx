export function DiagonalLines() {
  const lines = Array.from({ length: 8 });

  return (
    <svg
      className="pointer-events-none absolute -left-10 -top-10 hidden h-[420px] w-[420px] opacity-20 sm:block"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      {lines.map((_, i) => (
        <line
          key={i}
          x1={-100 + i * 60}
          y1={400}
          x2={300 + i * 60}
          y2={0}
          stroke="white"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
