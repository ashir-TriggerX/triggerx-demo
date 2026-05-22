import React from "react";
import { Card, ScreenHeader, Banner, Stat } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { RAW_BEFORE, CLEAN_AFTER } from "../data/leads.js";

const STEPS = [
  { icon: "filter", label: "De-duplicate", text: "Match across name, email, company. Merges variants automatically." },
  { icon: "mail", label: "Email verification", text: "MX check, SMTP ping, catch-all detection — three passes per address." },
  { icon: "briefcase", label: "Normalize titles", text: "Map 1,200+ title variants to a clean role + seniority taxonomy." },
  { icon: "shieldCheck", label: "Confidence scoring", text: "Each field gets a 0–1 score. Sub-0.75 records are flagged for review." },
  { icon: "database", label: "CRM-ready output", text: "Schema matches HubSpot, Salesforce, and Pipedrive imports out of the box." },
];

export default function Verify() {
  return (
    <>
      <ScreenHeader
        step={3}
        total={11}
        eyebrow="Clean & Verify"
        title="Raw capture in, CRM-ready records out."
        lead="Most outbound fails because the underlying data is messy. The engine de-duplicates, verifies, and normalizes every record so your team only ever touches contacts that are real, reachable, and ready to import."
      />

      <div className="grid grid-2" style={{ marginBottom: 18 }}>
        <Card title="Before · raw capture">
          <pre className="code code--bad">{RAW_BEFORE}</pre>
          <div
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "var(--text-muted)",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Icon name="alert" size={14} style={{ color: "var(--danger)" }} />
            Duplicates, mixed casing, fragmented fields — unusable in this state.
          </div>
        </Card>

        <Card title="After · clean & structured">
          <pre className="code code--good">{CLEAN_AFTER}</pre>
          <div
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "var(--text-muted)",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Icon name="check" size={14} style={{ color: "var(--success)" }} />
            Normalized fields, verified email, confidence 0.96 — drops straight into your CRM.
          </div>
        </Card>
      </div>

      <Card title="Cleaning pipeline" style={{ marginBottom: 18 }}>
        <div className="grid grid-3 grid-3--keep-tablet">
          {STEPS.map((s) => (
            <div
              key={s.label}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 14,
                background: "var(--bg-inset)",
                display: "flex",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name={s.icon} size={16} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: "var(--text-primary)" }}>
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--text-secondary)",
                    marginTop: 2,
                    lineHeight: 1.5,
                  }}
                >
                  {s.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-3 grid-3--keep-tablet" style={{ marginBottom: 18 }}>
        <Stat value="11,840" label="Raw records ingested" icon="database" tone="accent" />
        <Stat value="6,210" label="Verified, unique contacts" icon="shieldCheck" tone="success" sub="47% kept rate" />
        <Stat value="0.93" label="Avg. record confidence" icon="check" tone="accent" sub="Industry avg 0.71" />
      </div>

      <Banner tone="success">
        <span>
          <b>Cleaning complete.</b> 11,840 raw records consolidated to{" "}
          <b style={{ color: "var(--success)" }}>6,210 verified, deduplicated leads</b> — ready
          for fit scoring.
        </span>
      </Banner>
    </>
  );
}
