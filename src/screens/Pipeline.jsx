import React from "react";
import { Card, ScreenHeader, Stat, Pill } from "../components/Primitives.jsx";
import { Donut, FunnelChart } from "../components/Charts.jsx";
import Icon from "../components/Icon.jsx";
import {
  PIPELINE_FUNNEL,
  PIPELINE_DONUT,
  ACTIVITY_TIMELINE,
  MAILBOX_HEALTH,
} from "../data/analytics.js";
import { REPLY_ACTIVITY } from "../data/leads.js";

const STATUS_COLOR = {
  Healthy: "var(--success)",
  "Cooling down": "var(--warning)",
  "Re-warming": "var(--danger)",
};

export default function Pipeline() {
  return (
    <>
      <ScreenHeader
        step={9}
        total={11}
        eyebrow="Execution Dashboard"
        title="The campaign, running live."
        lead="Every prospect, every message, every reply — in one operating view. This is where ops sees what is firing right now and which accounts need a human touch."
      />

      <div className="grid grid-4" style={{ marginBottom: 18 }}>
        <Stat value="4,120" label="Leads in sequence" icon="users" tone="accent" />
        <Stat value="9,842" label="Touches delivered" icon="send" tone="violet" sub="Last 30 days" />
        <Stat value="312" label="Replies received" icon="message" tone="signal" trend={{ dir: "up", text: "+38%" }} />
        <Stat value="47" label="Meetings booked" icon="calendar" tone="success" sub="Auto-routed to calendar" />
      </div>

      <div className="grid grid-2">
        <Card title="Conversion funnel">
          <FunnelChart stages={PIPELINE_FUNNEL} />
        </Card>

        <Card title="Pipeline state">
          <Donut
            segments={PIPELINE_DONUT}
            centerLabel="4,120"
            centerSub="active leads"
          />
        </Card>
      </div>

      <div className="grid grid-2" style={{ marginTop: 18 }}>
        <Card title="Reply inbox · awaiting reps">
          {REPLY_ACTIVITY.map((r) => (
            <div
              key={r.id}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13.5 }}>
                  {r.name}
                </div>
                <Pill tone={r.tone}>{r.status}</Pill>
              </div>
              <div style={{ fontSize: 11.5, color: "var(--text-muted)", margin: "2px 0 6px" }}>
                {r.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-primary)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                }}
              >
                "{r.message}"
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}>
                {r.time}
              </div>
            </div>
          ))}
        </Card>

        <Card title="Activity timeline">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ACTIVITY_TIMELINE.map((a, i) => (
              <div key={i} style={{ display: "flex", gap: 12 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: `var(--${a.tone}-soft)`,
                    color: `var(--${a.tone})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={a.icon} size={15} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-primary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {a.text}
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 2 }}>
                    {a.when}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Mailbox health · 50 monitored" style={{ marginTop: 18 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
          className="grid grid-2"
        >
          {MAILBOX_HEALTH.map((m, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                border: "1px solid var(--border)",
                borderRadius: 10,
                background: "var(--bg-inset)",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 12,
                    color: "var(--text-primary)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {m.domain}
                </div>
                <div
                  style={{
                    height: 5,
                    borderRadius: 99,
                    background: "var(--bg-subtle)",
                    overflow: "hidden",
                    marginTop: 6,
                  }}
                >
                  <div
                    style={{
                      width: `${m.health}%`,
                      height: "100%",
                      background: STATUS_COLOR[m.status],
                      borderRadius: 99,
                      transition: "width 0.9s ease",
                    }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 13,
                    color: STATUS_COLOR[m.status],
                  }}
                >
                  {m.health}%
                </div>
                <div style={{ fontSize: 10.5, color: "var(--text-muted)" }}>{m.status}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
