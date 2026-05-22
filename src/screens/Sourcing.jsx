import React, { useMemo, useState } from "react";
import {
  Card,
  ScreenHeader,
  Stat,
  Pill,
  Button,
  ChipGroup,
} from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { LEADS } from "../data/leads.js";

const REGION_FILTERS = [
  { value: "all", label: "All regions" },
  { value: "west", label: "West" },
  { value: "central", label: "Central" },
  { value: "east", label: "East" },
];

const regionOf = (region) => {
  const r = region.toLowerCase();
  if (/(ca|az|or|wa|id|nv|co|ut|mt)/.test(r)) return "west";
  if (/(tx|il|mn|oh|ks|mo|ok|ne|wi|in)/.test(r)) return "central";
  return "east";
};

export default function Sourcing({ icp }) {
  const [region, setRegion] = useState("all");
  const filtered = useMemo(
    () => (region === "all" ? LEADS : LEADS.filter((l) => regionOf(l.region) === region)),
    [region]
  );

  return (
    <>
      <ScreenHeader
        step={2}
        total={11}
        eyebrow="Lead Sourcing"
        title={`Live map of ${icp.industry.toLowerCase()} ${icp.noun} in ${icp.geo}.`}
        lead="No stale lists. The engine builds a fresh, total-addressable map of every account that fits your brief, then enriches each contact with 38 firmographic, role, and signal data points."
      />

      <div className="grid grid-3 grid-3--keep-tablet" style={{ marginBottom: 18 }}>
        <Stat
          value="11,840"
          label="Accounts mapped"
          sub="Total addressable market for this brief"
          icon="globe"
          tone="accent"
        />
        <Stat
          value="6,210"
          label="Verified contacts"
          sub="After de-dupe + verification"
          icon="users"
          tone="success"
          trend={{ dir: "up", text: "+18%" }}
        />
        <Stat
          value="38"
          label="Data points / record"
          sub="Firmographic · role · signal"
          icon="database"
          tone="violet"
        />
      </div>

      <Card
        title={`Live map · ${filtered.length} sample records`}
        actions={
          <ChipGroup options={REGION_FILTERS} value={region} onChange={setRegion} ariaLabel="Region filter" />
        }
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(180px, 1.4fr) 1fr 90px 1fr 90px",
            gap: 14,
            padding: "10px 0",
            borderBottom: "1px solid var(--border)",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
          className="sourcing-head"
        >
          <span>Contact</span>
          <span>Company</span>
          <span>Size</span>
          <span>Live signal</span>
          <span style={{ textAlign: "right" }}>Confidence</span>
        </div>

        {filtered.map((l) => (
          <div
            key={l.id}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(180px, 1.4fr) 1fr 90px 1fr 90px",
              gap: 14,
              padding: "13px 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "center",
              fontSize: 13,
            }}
            className="sourcing-row"
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{l.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{l.title}</div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>{l.company}</div>
              <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>{l.region}</div>
            </div>
            <div style={{ color: "var(--text-secondary)" }}>{l.employees}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {l.signals.length === 0 ? (
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>—</span>
              ) : (
                l.signals.map((s) => (
                  <Pill key={s} tone="signal">
                    {s}
                  </Pill>
                ))
              )}
            </div>
            <div
              style={{
                textAlign: "right",
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--text-secondary)",
              }}
            >
              {l.confidence.toFixed(2)}
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: 14,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>
            Showing {filtered.length} of {LEADS.length.toLocaleString()} sample records. Live
            dataset: 11,840 mapped accounts.
          </div>
          <Button variant="ghost" size="sm" iconLeft="download">
            Export sample (.csv)
          </Button>
        </div>
      </Card>

      <Card style={{ marginTop: 18 }} title="Where this data comes from" inset>
        <div className="grid grid-3 grid-3--keep-tablet" style={{ gap: 14 }}>
          {[
            {
              icon: "globe",
              title: "Live web sources",
              text: "Public company sites, job boards, news, filings, review sites — refreshed weekly per account.",
            },
            {
              icon: "shieldCheck",
              title: "Compliance-aware",
              text: "Permission-aware sourcing. We honor opt-outs and respect data residency rules.",
            },
            {
              icon: "database",
              title: "Confidence per record",
              text: "Every field carries a confidence score. Below 0.75 we re-verify before use.",
            },
          ].map((b) => (
            <div key={b.title} style={{ display: "flex", gap: 10 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name={b.icon} size={15} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>
                  {b.title}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginTop: 2,
                  }}
                >
                  {b.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
