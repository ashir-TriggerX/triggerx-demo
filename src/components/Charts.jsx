import React, { useMemo } from "react";

/* Small dependency-free SVG charts that respect CSS theme variables. */

export function Sparkline({ data, height = 60, color = "var(--accent)", fill = true }) {
  const w = 320;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const step = w / (data.length - 1 || 1);
  const pts = data.map((v, i) => [i * step, height - ((v - min) / range) * height]);
  const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${d} L${w} ${height} L0 ${height} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} width="100%" height={height} preserveAspectRatio="none">
      {fill && (
        <>
          <defs>
            <linearGradient id="spark-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#spark-grad)" />
        </>
      )}
      <path d={d} fill="none" stroke={color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function BarChart({ data, height = 160, color = "var(--accent)", labels }) {
  const w = 320;
  const max = Math.max(...data.map((d) => d.value), 1);
  const gap = 8;
  const barW = (w - gap * (data.length - 1)) / data.length;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} width="100%" height={height} preserveAspectRatio="none">
      {data.map((d, i) => {
        const h = (d.value / max) * (height - 24);
        const x = i * (barW + gap);
        const y = height - h - 18;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={barW}
              height={h}
              rx={4}
              fill={d.color || color}
              opacity={d.dim ? 0.45 : 1}
            />
            <text
              x={x + barW / 2}
              y={height - 4}
              textAnchor="middle"
              fontSize="9.5"
              fill="var(--text-muted)"
              fontWeight="600"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function Donut({ segments, size = 160, thickness = 22, centerLabel, centerSub }) {
  const total = segments.reduce((acc, s) => acc + s.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = size / 2;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="chart-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={c} cy={c} r={r} stroke="var(--bg-subtle)" strokeWidth={thickness} fill="none" />
        {segments.map((s, i) => {
          const len = (s.value / total) * circ;
          const dasharray = `${len} ${circ - len}`;
          const node = (
            <circle
              key={i}
              cx={c}
              cy={c}
              r={r}
              stroke={s.color}
              strokeWidth={thickness}
              fill="none"
              strokeDasharray={dasharray}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              transform={`rotate(-90 ${c} ${c})`}
            />
          );
          offset += len;
          return node;
        })}
        {centerLabel && (
          <>
            <text
              x={c}
              y={c - 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="22"
              fontWeight="800"
              fill="var(--text-primary)"
            >
              {centerLabel}
            </text>
            {centerSub && (
              <text
                x={c}
                y={c + 18}
                textAnchor="middle"
                fontSize="10"
                fill="var(--text-muted)"
                fontWeight="600"
              >
                {centerSub}
              </text>
            )}
          </>
        )}
      </svg>
      <div className="chart-legend">
        {segments.map((s, i) => (
          <div className="chart-legend__row" key={i}>
            <span className="chart-legend__dot" style={{ background: s.color }} />
            <span>{s.label}</span>
            <span className="chart-legend__val">{s.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FunnelChart({ stages }) {
  const max = stages[0]?.value || 1;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {stages.map((s, i) => {
        const pct = (s.value / max) * 100;
        return (
          <div key={i}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 12.5, color: "var(--text-secondary)", fontWeight: 600 }}>
                {s.label}
              </span>
              <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 700 }}>
                {s.value.toLocaleString()}
              </span>
            </div>
            <div
              style={{
                background: "var(--bg-subtle)",
                borderRadius: 8,
                height: 18,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: s.color,
                  borderRadius: 8,
                  transition: "width 0.9s cubic-bezier(0.22, 0.61, 0.36, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 8,
                  color: "#fff",
                  fontSize: 10.5,
                  fontWeight: 700,
                }}
              >
                {pct > 28 ? `${Math.round(pct)}%` : ""}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
