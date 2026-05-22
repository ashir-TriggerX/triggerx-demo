import React, { useMemo, useState } from "react";
import {
  Card,
  ScreenHeader,
  Pill,
  Bar,
  Stat,
  ChipGroup,
} from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { LEADS } from "../data/leads.js";

const TIER_INFO = [
  {
    tier: "Tier 1",
    range: "Score 80+",
    channels: "Email · LinkedIn · Phone",
    color: "var(--success)",
    softBg: "var(--success-soft)",
    desc: "Best-fit accounts with active buying signals. They get the full three-channel sequence.",
  },
  {
    tier: "Tier 2",
    range: "Score 50–79",
    channels: "Email · LinkedIn",
    color: "var(--accent)",
    softBg: "var(--accent-soft)",
    desc: "Solid fit, weaker timing. Two-channel cadence keeps cost down while staying visible.",
  },
  {
    tier: "Tier 3",
    range: "Score < 50",
    channels: "Email only",
    color: "var(--warning)",
    softBg: "var(--warning-soft)",
    desc: "Low-fit or no-signal accounts. Light-touch outreach, then routed to a quarterly nurture.",
  },
];

const TIER_FILTER = [
  { value: "all", label: "All tiers" },
  { value: "Tier 1", label: "Tier 1" },
  { value: "Tier 2", label: "Tier 2" },
  { value: "Tier 3", label: "Tier 3" },
  { value: "Filtered", label: "Filtered out" },
];

const tonePerTier = {
  "Tier 1": "success",
  "Tier 2": "accent",
  "Tier 3": "warning",
  Filtered: "neutral",
};

export default function Scoring() {
  const [filter, setFilter] = useState("all");

  const rows = useMemo(() => {
    const sorted = [...LEADS].sort((a, b) => b.score - a.score);
    return filter === "all" ? sorted : sorted.filter((l) => l.tier === filter);
  }, [filter]);

  return (
    <>
      <ScreenHeader
        step={4}
        total={11}
        eyebrow="ICP Fit Scoring"
        title="Every lead is scored from 0 to 100 against your brief."
        lead="The score decides the channel mix. Spend goes where intent is highest, instead of being spread evenly across a cold list. You see exactly why each lead landed where they did."
      />

      <div className="grid grid-3 grid-3--keep-tablet" style={{ marginBottom: 18 }}>
        {TIER_INFO.map((t) => (
          <div
            key={t.tier}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 18,
              borderTop: `3px solid ${t.color}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <div style={{ fontWeight: 800, color: t.color }}>{t.tier}</div>
              <div style={{ fontSize: 11.5, color: "var(--text-muted)", fontWeight: 600 }}>
                {t.range}
              </div>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-primary)",
                marginTop: 8,
              }}
            >
              {t.channels}
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "var(--text-secondary)",
                marginTop: 6,
                lineHeight: 1.5,
              }}
            >
              {t.desc}
            </div>
          </div>
        ))}
      </div>

      <Card
        title="Scored leads"
        actions={
          <ChipGroup options={TIER_FILTER} value={filter} onChange={setFilter} ariaLabel="Tier filter" />
        }
      >
        {rows.map((r) => (
          <div
            key={r.id}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(180px, 1fr) 1fr 120px 50px 90px",
              gap: 14,
              alignItems: "center",
              padding: "12px 0",
              borderBottom: "1px solid var(--border)",
              opacity: r.tier === "Filtered" ? 0.55 : 1,
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13.5 }}>
                {r.name}
              </div>
              <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>{r.title}</div>
            </div>
            <div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{r.company}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{r.signalDetail}</div>
            </div>
            <Bar
              pct={r.score}
              color={
                r.tier === "Tier 1"
                  ? "var(--success)"
                  : r.tier === "Tier 2"
                  ? "var(--accent)"
                  : r.tier === "Tier 3"
                  ? "var(--warning)"
                  : "var(--text-muted)"
              }
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                color:
                  r.tier === "Tier 1"
                    ? "var(--success)"
                    : r.tier === "Tier 2"
                    ? "var(--accent)"
                    : r.tier === "Tier 3"
                    ? "var(--warning)"
                    : "var(--text-muted)",
                textAlign: "right",
              }}
            >
              {r.score}
            </div>
            <div style={{ textAlign: "right" }}>
              <Pill tone={tonePerTier[r.tier]}>{r.tier}</Pill>
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
          className="grid-3 grid-3--keep-tablet"
        >
          <Stat value="1,820" label="Tier 1 accounts" icon="trending" tone="success" />
          <Stat value="2,300" label="Tier 2 accounts" icon="users" tone="accent" />
          <Stat value="2,090" label="Tier 3 / nurture" icon="filter" tone="warning" />
        </div>
      </Card>

      <div
        style={{
          marginTop: 18,
          padding: "14px 18px",
          background: "var(--bg-inset)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          fontSize: 13,
          color: "var(--text-secondary)",
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        <Icon name="alert" size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }} />
        <span>
          <b style={{ color: "var(--text-primary)" }}>How the score is built.</b> Fit (industry,
          size, region, role) sets the baseline. Live buying signals add up to 25 points. Quality
          signals (verified email, complete record, valid title) add the rest. Every weight is
          tunable per campaign.
        </span>
      </div>
    </>
  );
}
