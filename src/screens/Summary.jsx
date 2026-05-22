import React from "react";
import { Card, ScreenHeader, Button, Stat, Pill } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";

const NEXT_STEPS = [
  {
    title: "Sign off on the campaign brief",
    text: "Lock the ICP, channels, tone, and approval workflow. Takes 20 minutes on a call.",
  },
  {
    title: "Connect your CRM + calendar",
    text: "HubSpot, Salesforce, or Pipedrive. Round-robin or named-rep routing for booked meetings.",
  },
  {
    title: "Approve the launch list",
    text: "Review the first 500 leads, edit messaging templates, and authorize the first send.",
  },
  {
    title: "Go live with a 14-day pilot",
    text: "First sends within 7 days. A live dashboard, weekly review, and a clear pilot exit criteria.",
  },
];

const DELIVERABLES = [
  { icon: "users", label: "Verified contact list", value: "6,210 leads" },
  { icon: "spark", label: "Signal coverage", value: "7 signal types" },
  { icon: "mail", label: "Personalized messaging", value: "4 tones · 3 channels" },
  { icon: "shieldCheck", label: "Owned sending infrastructure", value: "50 mailboxes" },
  { icon: "calendar", label: "Booked meeting flow", value: "Round-robin routed" },
  { icon: "chart", label: "Live ROI dashboard", value: "Updated continuously" },
];

export default function Summary({ icp, onRestart }) {
  return (
    <>
      <ScreenHeader
        step={11}
        total={11}
        eyebrow="Final Summary"
        title={`Your TriggerX engine, ready to run on ${icp.industry.toLowerCase()}.`}
        lead="Here is exactly what you take away from this engagement — and the four concrete steps that move it from this screen to live revenue."
      />

      <div className="summary-grid">
        <Card title="What you get">
          <div className="grid grid-2" style={{ gap: 14 }}>
            {DELIVERABLES.map((d) => (
              <div
                key={d.label}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: 14,
                  background: "var(--bg-inset)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={d.icon} size={16} />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }}>
                    {d.label}
                  </div>
                  <div style={{ fontSize: 14.5, color: "var(--text-primary)", fontWeight: 800, marginTop: 2 }}>
                    {d.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              padding: 16,
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-soft-2)",
              borderRadius: 12,
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "var(--accent)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="flag" size={18} />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: 14 }}>
                14-day pilot exit criteria
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55, marginTop: 2 }}>
                Engine live, first 1,000 prospects in sequence, first 5 meetings booked, full
                dashboard transparency — or you walk away.
              </div>
            </div>
          </div>
        </Card>

        <Card title="Next 4 steps">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {NEXT_STEPS.map((s, i) => (
              <div key={s.title} className="summary-action">
                <span className="summary-action__num">{i + 1}</span>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13.5 }}>
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "var(--text-secondary)",
                      marginTop: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    {s.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button
              variant="primary"
              iconRight="arrowRight"
              href="https://www.triggerx.ai/book-a-call"
            >
              Book launch call
            </Button>
            <Button variant="ghost" iconLeft="download">
              Download summary
            </Button>
          </div>
        </Card>
      </div>

      <div className="grid grid-3 grid-3--keep-tablet" style={{ marginTop: 18 }}>
        <Stat value="14 days" label="To live engine" icon="bolt" tone="accent" sub="From signed brief to first send" />
        <Stat value="3 channels" label="Coordinated cadence" icon="layers" tone="violet" sub="Email · LinkedIn · Phone" />
        <Stat value="100%" label="Human-approved" icon="shieldCheck" tone="success" sub="Every list, every message" />
      </div>

      <div
        style={{
          marginTop: 22,
          padding: "20px 22px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Pill tone="accent">Demo complete</Pill>
          <div>
            <div style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: 16 }}>
              That's the full workflow.
            </div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>
              Run it again with a different brief — or jump back to any stage from the sidebar.
            </div>
          </div>
        </div>
        <Button variant="ghost" iconLeft="refresh" onClick={onRestart}>
          Restart demo
        </Button>
      </div>
    </>
  );
}
