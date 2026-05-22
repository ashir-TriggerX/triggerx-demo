import React from "react";
import { Card, ScreenHeader, TabRow, CopyButton, Pill } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import {
  TONES,
  CHANNELS,
  EMAIL_VARIANTS,
  LINKEDIN_VARIANTS,
  CALL_NOTES,
} from "../data/messages.js";

export default function Preview({ tone, setTone, channel, setChannel }) {
  return (
    <>
      <ScreenHeader
        step={8}
        total={11}
        eyebrow="Outreach Preview"
        title="What lands in the inbox."
        lead="A polished, finished message built from the signal stack. Switch tone or channel to see how the same intelligence adapts — every variant is reviewed by a human before it goes live."
      />

      <div className="row" style={{ marginBottom: 18, justifyContent: "space-between" }}>
        <TabRow
          options={CHANNELS.map((c) => ({ value: c.value, label: c.label }))}
          value={channel}
          onChange={setChannel}
          ariaLabel="Channel"
        />
        <TabRow options={TONES} value={tone} onChange={setTone} ariaLabel="Tone" />
      </div>

      {channel === "email" && <EmailPreview tone={tone} />}
      {channel === "linkedin" && <LinkedInPreview tone={tone} />}
      {channel === "call" && <CallPreview tone={tone} />}

      <div className="grid grid-2" style={{ marginTop: 18 }}>
        <Card title="Why this works">
          {[
            ["Personalized opening", "Built from a real, current event. Not a template."],
            ["Specific value", "Ties their exact situation to a clear outcome."],
            ["Soft CTA", "Invites a conversation — not a demo demand."],
            ["Reply-tested structure", "Length and framing modeled on what actually gets responses."],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{
                display: "flex",
                gap: 10,
                padding: "10px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  background: "var(--success)",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name="check" size={12} stroke={3} />
              </span>
              <div>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13.5 }}>
                  {t}
                </div>
                <div style={{ fontSize: 12.5, color: "var(--text-secondary)" }}>{d}</div>
              </div>
            </div>
          ))}
        </Card>

        <Card title="Compliance & control" inset>
          {[
            ["Human approval gate", "Nothing ships until you sign off on the message and the list."],
            ["Opt-out honored", "Replies with unsubscribe intent are removed from every channel automatically."],
            ["Source citation", "Every personalized line is auditable back to its source event."],
            ["No fabricated facts", "Generated content is screened for hallucinations before it goes near a campaign."],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{
                display: "flex",
                gap: 10,
                padding: "10px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <Icon name="shieldCheck" size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13.5 }}>
                  {t}
                </div>
                <div style={{ fontSize: 12.5, color: "var(--text-secondary)" }}>{d}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}

function EmailPreview({ tone }) {
  const e = EMAIL_VARIANTS[tone];
  const fullEmail = `Subject: ${e.subject}\n\nHi Travis,\n\n${e.opener}\n\n${e.body}\n\n${e.cta}\n\nBest,\nAshir`;
  return (
    <div className="email rise-in" key={tone}>
      <div className="email__head">
        <div>
          <b style={{ color: "var(--text-primary)" }}>From</b> outreach@trigger-x-mail.com{" "}
          <span style={{ color: "var(--text-muted)" }}>·</span>{" "}
          <b style={{ color: "var(--text-primary)" }}>To</b> t.sharpe@nwind.co
        </div>
        <CopyButton text={fullEmail} label="Copy email" />
      </div>
      <div className="email__body">
        <div className="email__subject">{e.subject}</div>
        <div>Hi Travis,</div>
        <div className="email__open">{e.opener}</div>
        <p style={{ margin: "10px 0" }}>
          {e.body.split("\n\n").map((p, i) => (
            <React.Fragment key={i}>
              {p}
              <br />
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="email__cta">{e.cta}</div>
        <p style={{ margin: 0 }}>
          Best,
          <br />
          Ashir
        </p>
      </div>
    </div>
  );
}

function LinkedInPreview({ tone }) {
  return (
    <Card key={tone} className="rise-in">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "var(--violet)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
            }}
          >
            in
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
              Connection request to Travis Sharpe
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
              VP Operations · Northwind Group
            </div>
          </div>
        </div>
        <Pill tone="violet">LinkedIn</Pill>
      </div>

      <div
        style={{
          background: "var(--bg-inset)",
          border: "1px solid var(--border)",
          borderLeft: "3px solid var(--violet)",
          borderRadius: "0 10px 10px 0",
          padding: 16,
          fontSize: 14,
          color: "var(--text-primary)",
          lineHeight: 1.65,
        }}
      >
        {LINKEDIN_VARIANTS[tone]}
      </div>

      <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end" }}>
        <CopyButton text={LINKEDIN_VARIANTS[tone]} label="Copy message" />
      </div>
    </Card>
  );
}

function CallPreview({ tone }) {
  return (
    <Card key={tone} className="rise-in" title="Talk track + signal brief">
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginBottom: 12,
          flexWrap: "wrap",
        }}
      >
        <Pill tone="signal">Phone</Pill>
        <Pill tone="success">Tier 1 only</Pill>
        <Pill tone="accent">Signal: Dallas terminal</Pill>
      </div>
      <pre
        style={{
          background: "var(--bg-inset)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: 16,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 13,
          color: "var(--text-primary)",
          lineHeight: 1.7,
          whiteSpace: "pre-wrap",
          margin: 0,
        }}
      >
        {CALL_NOTES[tone]}
      </pre>
      <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end" }}>
        <CopyButton text={CALL_NOTES[tone]} label="Copy brief" />
      </div>
    </Card>
  );
}
