import React, { useState } from "react";
import { Button, Card, ScreenHeader, ChipGroup } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { SAMPLE_BRIEFS } from "../data/icp.js";

const GOAL_OPTIONS = [
  { value: "meetings", label: "Booked meetings", icon: "calendar" },
  { value: "pipeline", label: "Pipeline volume", icon: "trending" },
  { value: "renewals", label: "Account expansion", icon: "users" },
];

export default function IcpBrief({ text, setText, icp, goal, setGoal, onContinue }) {
  const [showSamples, setShowSamples] = useState(true);

  const insertSample = (sample) => {
    setText(sample);
    setShowSamples(false);
  };

  return (
    <>
      <ScreenHeader
        step={1}
        total={11}
        eyebrow="Campaign Brief"
        title="Describe your ideal customer, in plain English."
        lead="The whole engine is built from this brief. Tell us who you sell to, what they care about, and the moments that make them ready to buy — we translate it into a structured targeting map."
      />

      <div className="grid grid-2">
        <Card title="ICP Brief" actions={<span style={{ fontSize: 11, color: "var(--text-muted)" }}>Step 1 of 4</span>}>
          <label htmlFor="brief" className="label">
            Who do you sell to? What pain do you solve?
          </label>
          <textarea
            id="brief"
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. Mid-market freight brokerages in the United States. Decision-makers: owners, VP Sales, Operations directors. Pain: filling new capacity. Bonus if they are hiring or have recently opened a new terminal."
            aria-label="ICP brief"
          />

          {showSamples && (
            <>
              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                <Icon name="spark" size={14} />
                Try a sample brief
              </div>
              <div className="sample-row">
                {SAMPLE_BRIEFS.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    className="chip"
                    onClick={() => insertSample(s.text)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </>
          )}

          <div style={{ marginTop: 20 }}>
            <div className="label">Campaign goal</div>
            <ChipGroup
              options={GOAL_OPTIONS}
              value={goal}
              onChange={setGoal}
              ariaLabel="Campaign goal"
            />
          </div>

          <div
            style={{
              marginTop: 22,
              padding: "10px 12px",
              background: "var(--bg-inset)",
              borderRadius: 9,
              border: "1px solid var(--border)",
              display: "flex",
              gap: 10,
              alignItems: "center",
              fontSize: 12.5,
              color: "var(--text-secondary)",
            }}
          >
            <Icon name="shieldCheck" size={16} style={{ color: "var(--success)" }} />
            <span>
              <b style={{ color: "var(--text-primary)" }}>Human approval gate.</b> Nothing goes
              live until you sign off on the brief, the lead list, and the sequence.
            </span>
          </div>
        </Card>

        <Card title="Parsed Brief">
          <BriefField label="Industry" value={icp.industry} icon="building" />
          <BriefField label="Target geography" value={icp.geo} icon="globe" />
          <BriefField label="Company size" value={icp.size} icon="users" />
          <BriefField
            label="Decision-makers"
            value={icp.titles.join(", ")}
            icon="briefcase"
          />
          <BriefField
            label="Primary anchor signal"
            value={icp.industry === "B2B services" ? "growth signals" : `${icp.titles[0]} role + growth signals`}
            icon="spark"
          />

          <div
            style={{
              marginTop: 18,
              padding: 14,
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-soft-2)",
              borderRadius: 10,
              fontSize: 13,
              color: "var(--text-primary)",
              lineHeight: 1.6,
            }}
          >
            <b>What happens next:</b> we map every {icp.noun} in {icp.geo} that matches the
            brief, layer in live buying signals, and score each account from 0 to 100. The
            engine routes effort to the accounts most likely to reply this month.
          </div>
        </Card>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 22 }}>
        <Button
          variant="primary"
          size="lg"
          iconRight="arrowRight"
          onClick={onContinue}
          disabled={!text.trim()}
        >
          Build my engine
        </Button>
      </div>
    </>
  );
}

function BriefField({ label, value, icon }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 9,
          background: "var(--accent-soft)",
          color: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={15} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11.5, color: "var(--text-muted)", fontWeight: 600 }}>
          {label}
        </div>
        <div style={{ fontSize: 13.5, color: "var(--text-primary)", fontWeight: 600 }}>
          {value}
        </div>
      </div>
    </div>
  );
}
