import React from "react";
import { Card, ScreenHeader, Pill, TabRow } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { SEQUENCES, TIER_OPTIONS } from "../data/sequence.js";

const channelTone = {
  email: "accent",
  linkedin: "violet",
  call: "signal",
};

const channelIcon = {
  email: "mail",
  linkedin: "message",
  call: "phone",
};

export default function Sequence({ tier, setTier }) {
  const steps = SEQUENCES[tier];

  return (
    <>
      <ScreenHeader
        step={7}
        total={11}
        eyebrow="Multi-Channel Sequence"
        title="One coordinated cadence across email, LinkedIn, and phone."
        lead="Channels reinforce each other. The same prospect sees you in two or three places, in roles that match how they actually work — not five emails into a void."
      />

      <Card
        title="Sequence builder"
        actions={
          <TabRow options={TIER_OPTIONS} value={tier} onChange={setTier} ariaLabel="Tier" />
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {steps.map((s, i) => (
            <div className="seq-step rise-in" key={`${tier}-${i}`} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="seq-step__day">
                <b>Day {s.day}</b>
                <span>Step {i + 1}</span>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 7,
                        background: `var(--${channelTone[s.channel]}-soft)`,
                        color: `var(--${channelTone[s.channel]})`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon name={channelIcon[s.channel]} size={13} />
                    </span>
                    <Pill tone={channelTone[s.channel]}>
                      {s.channel === "email"
                        ? "Email"
                        : s.channel === "linkedin"
                        ? "LinkedIn"
                        : "Phone"}
                    </Pill>
                  </span>
                  <div className="seq-step__title" style={{ marginBottom: 0 }}>{s.title}</div>
                </div>
                <div className="seq-step__desc">{s.desc}</div>
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: "var(--text-muted)",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}
              >
                Automated
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-3 grid-3--keep-tablet" style={{ marginTop: 18 }}>
        {[
          {
            icon: "mail",
            title: "Email — the workhorse",
            text: "Personalized first line, soft CTA, plain text. We A/B test subject lines weekly.",
          },
          {
            icon: "message",
            title: "LinkedIn — the warmth layer",
            text: "Short, signal-anchored notes. No pitch decks, no automation that smells like a bot.",
          },
          {
            icon: "phone",
            title: "Phone — the human touch",
            text: "Tier-1 only. Reps get a one-page brief with the signal, recent context, and objection cheat-sheet.",
          },
        ].map((b) => (
          <div
            key={b.title}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 16,
              display: "flex",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--accent-soft)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name={b.icon} size={16} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13.5 }}>
                {b.title}
              </div>
              <div style={{ fontSize: 12.5, color: "var(--text-secondary)", marginTop: 3, lineHeight: 1.5 }}>
                {b.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
