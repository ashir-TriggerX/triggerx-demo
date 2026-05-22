import React, { useState } from "react";
import { Card, ScreenHeader, Pill, ChipGroup } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { SIGNAL_TYPES, LIVE_SIGNAL_FEED } from "../data/signals.js";

export default function Signals() {
  const [active, setActive] = useState(SIGNAL_TYPES[0].key);
  const selected = SIGNAL_TYPES.find((s) => s.key === active);

  return (
    <>
      <ScreenHeader
        step={5}
        total={11}
        eyebrow="Buying-Signal Intelligence"
        title="Real-time intent layered on top of fit."
        lead="Fit tells you who could buy. Signals tell you who is buying right now. The engine watches every account for the seven highest-converting buying moments and prioritizes the ones that just lit up."
      />

      <div className="grid grid-2">
        <div className="stack-12">
          <Card title="Signals we track">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SIGNAL_TYPES.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActive(s.key)}
                  className="signal-card"
                  style={{
                    cursor: "pointer",
                    borderColor: active === s.key ? `var(--${s.tone})` : "var(--border)",
                    background: active === s.key ? `var(--${s.tone}-soft)` : "var(--bg-card)",
                    textAlign: "left",
                    width: "100%",
                  }}
                  aria-pressed={active === s.key}
                >
                  <div
                    className="signal-card__icon"
                    style={{
                      background: `var(--${s.tone}-soft)`,
                      color: `var(--${s.tone})`,
                    }}
                  >
                    <Icon name={s.icon} size={17} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="signal-card__title">{s.label}</div>
                    <div className="signal-card__desc">{s.why}</div>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        <div className="stack-12">
          <Card
            title="Why this signal matters"
            actions={
              <span
                style={{
                  fontSize: 11,
                  color: `var(--${selected.tone})`,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {selected.label}
              </span>
            }
          >
            <div
              style={{
                fontSize: 14,
                color: "var(--text-primary)",
                lineHeight: 1.65,
                marginBottom: 16,
              }}
            >
              {selected.why}
            </div>
            <div
              style={{
                background: "var(--bg-inset)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: 14,
                fontSize: 12.5,
                color: "var(--text-secondary)",
                lineHeight: 1.55,
              }}
            >
              <b style={{ color: "var(--text-primary)" }}>How we detect it.</b> Continuous
              monitoring across public sources (careers pages, news, filings, social, review
              sites) with weekly re-scoring. Signals expire after their useful buying window so
              you don't chase stale events.
            </div>
          </Card>

          <Card title="Live signal feed">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {LIVE_SIGNAL_FEED.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: 12,
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9,
                      background: `var(--${f.tone}-soft)`,
                      color: `var(--${f.tone})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon name="spark" size={15} stroke={2.2} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13.5 }}>
                        {f.company}
                      </span>
                      <Pill tone={f.tone}>{f.type}</Pill>
                    </div>
                    <div
                      style={{
                        fontSize: 12.5,
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                        marginTop: 4,
                      }}
                    >
                      {f.detail}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        marginTop: 4,
                      }}
                    >
                      {f.age}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
