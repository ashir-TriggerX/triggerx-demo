import React from "react";
import { Card, ScreenHeader, Stat, Pill } from "../components/Primitives.jsx";
import { Sparkline, BarChart } from "../components/Charts.jsx";
import Icon from "../components/Icon.jsx";
import { ROI_CARDS, WEEKLY_REPLIES, SIGNAL_PERFORMANCE, TOP_SIGNAL } from "../data/analytics.js";

export default function Analytics() {
  return (
    <>
      <ScreenHeader
        step={10}
        total={11}
        eyebrow="Analytics & ROI"
        title="Outcomes, not vanity metrics."
        lead="The dashboard answers the question every commercial leader asks: is this engine making us money? Every number ladders back to revenue impact and operating leverage."
      />

      <div className="grid grid-3 grid-3--keep-tablet" style={{ marginBottom: 18 }}>
        {ROI_CARDS.map((r) => (
          <Stat
            key={r.label}
            value={r.value}
            label={r.label}
            sub={r.sub}
            icon={r.icon}
            tone={r.tone}
            trend={r.trend}
          />
        ))}
      </div>

      <div className="grid grid-2">
        <Card title="Reply volume · last 8 weeks">
          <Sparkline data={WEEKLY_REPLIES.map((d) => d.value)} height={120} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 6,
              fontSize: 11,
              color: "var(--text-muted)",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            {WEEKLY_REPLIES.map((d) => (
              <span key={d.label}>{d.label}</span>
            ))}
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "var(--text-secondary)",
            }}
          >
            <b style={{ color: "var(--success)" }}>+388%</b> growth in weekly reply volume since
            launch — the curve flattens once the brief is fully tuned.
          </div>
        </Card>

        <Card title="Reply rate by signal type">
          <BarChart data={SIGNAL_PERFORMANCE} height={170} />
          <div
            style={{
              marginTop: 14,
              padding: 12,
              borderRadius: 10,
              background: "var(--signal-soft)",
              border: "1px solid var(--signal-soft)",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <Icon name="spark" size={18} style={{ color: "var(--signal)", flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 12.5, color: "var(--text-primary)", lineHeight: 1.55 }}>
              <b>Top signal: {TOP_SIGNAL.name}.</b> {TOP_SIGNAL.detail}
            </div>
          </div>
        </Card>
      </div>

      <Card title="Cost & efficiency snapshot" style={{ marginTop: 18 }}>
        <div className="grid grid-4">
          {[
            {
              label: "Manual SDR equivalent",
              value: "3.4 reps",
              sub: "Of work absorbed by the engine each month",
              tone: "accent",
              icon: "users",
            },
            {
              label: "Cost per booked meeting",
              value: "$184",
              sub: "Industry avg: $480",
              tone: "success",
              icon: "calendar",
              trend: { dir: "down", text: "−62%" },
            },
            {
              label: "Cost per verified lead",
              value: "$0.41",
              sub: "Including verification + signals",
              tone: "violet",
              icon: "database",
            },
            {
              label: "Hours saved / month",
              value: "186",
              sub: "Reclaimed from sourcing & cleanup",
              tone: "warning",
              icon: "bolt",
            },
          ].map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Card>

      <div
        style={{
          marginTop: 18,
          padding: "16px 18px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          display: "flex",
          gap: 14,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Pill tone="accent">Reporting cadence</Pill>
        <span style={{ fontSize: 13, color: "var(--text-secondary)", flex: 1, minWidth: 240 }}>
          Live dashboard, weekly snapshot email, and a monthly executive review. Every number is
          exportable, every datapoint is auditable to its source.
        </span>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
          <Icon name="external" size={12} stroke={2} style={{ marginRight: 4 }} />
          Slack alerts available for hot replies & meetings
        </span>
      </div>
    </>
  );
}
