/**
 * ConstellationRing — the module's signature element.
 *
 * Progress for an enrolled course is drawn as a small constellation:
 * points are placed evenly around a circle, one per "step" of the
 * course. Completed steps light up amber and are joined by lines,
 * unfinished steps stay dim and unjoined — literally a course you
 * are still connecting the dots on.
 */
function ConstellationRing({ progress, size = 76, points = 8 }) {
  const litCount = Math.round(progress * points);
  const radius = size / 2 - 8;
  const center = size / 2;

  const coords = Array.from({ length: points }, (_, i) => {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
      lit: i < litCount,
    };
  });

  const litCoords = coords.filter((c) => c.lit);

  return (
    <div className="constellation" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
        {litCoords.length > 1 &&
          litCoords.slice(1).map((c, i) => (
            <line
              key={`line-${i}`}
              x1={litCoords[i].x}
              y1={litCoords[i].y}
              x2={c.x}
              y2={c.y}
              stroke="var(--accent-amber)"
              strokeWidth="1"
              opacity="0.55"
            />
          ))}
        {coords.map((c, i) => (
          <circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={c.lit ? 3.2 : 2.2}
            fill={c.lit ? "var(--accent-amber)" : "var(--text-faint)"}
            opacity={c.lit ? 1 : 0.5}
          />
        ))}
      </svg>
      <span className="constellation__label">{Math.round(progress * 100)}%</span>
    </div>
  );
}

export default ConstellationRing;
