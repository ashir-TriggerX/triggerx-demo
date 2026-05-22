import React, { useState } from "react";
import { Card, ScreenHeader, Button, CopyButton, TabRow, Pill } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { ICEBREAKERS, TONES } from "../data/messages.js";

const VARIATIONS = {
  direct: [
    {
      lead: "Travis Sharpe · Northwind Group",
      line: "Congrats on the Dallas terminal opening, Travis. Filling new capacity is the fun part and the hard part.",
      source: "expansion: new Dallas terminal · 5 days ago",
    },
    {
      lead: "Aisha Patel · Redstone Brokerage",
      line: "Six BDR roles open right after a $12M raise — that's the hunter-team playbook in motion.",
      source: "hiring + funding: $12M raise + 6 BDR roles",
    },
    {
      lead: "Wei Zhang · Mercator Cargo",
      line: "A new West-Coast distribution hub means new accounts to win and new tonnage to source.",
      source: "expansion: West-Coast hub",
    },
  ],
  friendly: [
    {
      lead: "Travis Sharpe · Northwind Group",
      line: "Travis — saw the Dallas terminal news, genuinely well-timed in this rate environment.",
      source: "expansion: new Dallas terminal · 5 days ago",
    },
    {
      lead: "Maria Delgado · Castlepoint Logistics",
      line: "Four open dispatcher roles — Castlepoint must be having a strong quarter on the freight side.",
      source: "hiring: 4 open dispatch roles",
    },
    {
      lead: "Devin Cole · Apex Freight",
      line: "Apex's review momentum keeps showing up in my feed — fast turnarounds clearly stick with shippers.",
      source: "reviews: +38% MoM review velocity",
    },
  ],
  executive: [
    {
      lead: "Travis Sharpe · Northwind Group",
      line: "The Dallas expansion puts a margin clock on capacity utilization — a familiar moment for brokerages your size.",
      source: "expansion: new Dallas terminal · 5 days ago",
    },
    {
      lead: "Marcus Hale · Skyway Transport",
      line: "An $8M growth round usually compresses every commercial decision into the next two quarters.",
      source: "funding: $8M growth round",
    },
    {
      lead: "Aisha Patel · Redstone Brokerage",
      line: "Standing up a hunter team after a raise is the right call — the bottleneck usually shifts to qualified pipeline.",
      source: "hiring + funding",
    },
  ],
  short: [
    {
      lead: "Travis Sharpe · Northwind Group",
      line: "Travis — congrats on Dallas. Big quarter.",
      source: "expansion",
    },
    {
      lead: "Maria Delgado · Castlepoint Logistics",
      line: "Castlepoint hiring 4 dispatchers — busy season?",
      source: "hiring",
    },
    {
      lead: "Devin Cole · Apex Freight",
      line: "Apex's review streak is hard to ignore.",
      source: "reviews",
    },
  ],
};

export default function Personalization({ tone, setTone }) {
  const [batchKey, setBatchKey] = useState(0);
  const items = VARIATIONS[tone] || ICEBREAKERS;

  return (
    <>
      <ScreenHeader
        step={6}
        total={11}
        eyebrow="AI Personalization"
        title="The intelligence becomes the opening line."
        lead="Every prospect gets a first sentence tied to something specific and true about their company — a recent hire, a new location, a funding round. Cold email reads warm because the opener is, by definition, not cold."
      />

      <Card
        title="Tone studio"
        actions={
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <TabRow
              options={TONES}
              value={tone}
              onChange={(v) => {
                setTone(v);
                setBatchKey((k) => k + 1);
              }}
              ariaLabel="Tone"
            />
            <Button variant="ghost" size="sm" iconLeft="refresh" onClick={() => setBatchKey((k) => k + 1)}>
              Regenerate
            </Button>
          </div>
        }
        style={{ marginBottom: 18 }}
      >
        <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          The tone you pick changes register, not facts. Every line stays anchored to the same
          real-world signal — we never invent details.
        </div>
      </Card>

      <div className="grid grid-2" key={`batch-${batchKey}-${tone}`}>
        {items.map((x, i) => (
          <Card key={i} className="rise-in" style={{ animationDelay: `${i * 0.07}s` }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--text-secondary)" }}>
                {x.lead}
              </span>
              <Pill tone="accent">Generated</Pill>
            </div>
            <blockquote
              style={{
                margin: 0,
                padding: "12px 14px",
                background: "var(--bg-inset)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: "0 8px 8px 0",
                fontSize: 14.5,
                color: "var(--text-primary)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              "{x.line}"
            </blockquote>
            <div
              style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontSize: 11.5,
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Icon name="spark" size={12} stroke={2} />
                {x.source}
              </div>
              <CopyButton text={x.line} label="Copy line" />
            </div>
          </Card>
        ))}
      </div>

      <div
        style={{
          marginTop: 18,
          padding: "14px 18px",
          background: "var(--accent-soft)",
          border: "1px solid var(--accent-soft-2)",
          borderRadius: 12,
          fontSize: 13.5,
          color: "var(--text-primary)",
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <Icon name="shieldCheck" size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }} />
        <span>
          <b>Quality control.</b> Every generated line is screened for hallucination, generic
          phrasing, and tone fit before it joins a campaign. Anything below the threshold goes back
          to the model with stricter prompts — your reviewers only see the keepers.
        </span>
      </div>
    </>
  );
}
