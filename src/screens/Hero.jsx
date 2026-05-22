import React from "react";
import { Button, ThemeToggle } from "../components/Primitives.jsx";
import Icon from "../components/Icon.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const points = [
  ["Signal-triggered targeting, not stale lists"],
  ["Triple-verified contact data with confidence scores"],
  ["Coordinated email, LinkedIn, and phone sequences"],
  ["Owned sending infrastructure with managed deliverability"],
  ["Live pipeline + ROI reporting from day one"],
  ["Human approval before any message goes out"],
];

const previewStages = [
  ["Define ICP", "30 sec"],
  ["Source live signals", "2 min"],
  ["Clean & verify", "auto"],
  ["Score by fit", "auto"],
  ["Personalize at scale", "auto"],
  ["Launch sequence", "1 click"],
];

export default function Hero({ onStart }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="hero">
      <div className="hero__top">
        <div className="hero__brand">
          <div className="hero__brand-mark">
            <Icon name="zap" size={18} stroke={2.4} />
          </div>
          <span>TriggerX</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-muted)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: "var(--success)",
                display: "inline-block",
              }}
            />
            Interactive demo
          </span>
          <ThemeToggle theme={theme} onChange={setTheme} />
        </div>
      </div>

      <div className="hero__body">
        <div>
          <span className="hero__eyebrow">
            <Icon name="bolt" size={13} stroke={2.2} />
            Outbound Intelligence Platform
          </span>
          <h1 className="hero__title">
            Turn raw market data into{" "}
            <span className="accent">booked sales meetings</span>.
          </h1>
          <p className="hero__lead">
            TriggerX is the outbound engine that watches the market for buying moments, builds a
            verified list of decision-makers, personalizes every touch from real intelligence, and
            routes meetings to your calendar — fully managed, human-approved, no spray-and-pray.
          </p>
          <div className="hero__cta-row">
            <Button variant="primary" size="lg" iconRight="arrowRight" onClick={onStart}>
              Start Interactive Demo
            </Button>
            <Button variant="ghost" size="lg" iconLeft="external" onClick={onStart}>
              See the workflow
            </Button>
          </div>
          <div className="hero__points">
            {points.map(([t], i) => (
              <div className="hero__point" key={i}>
                <span className="hero__point-icon">
                  <Icon name="check" size={12} stroke={3} />
                </span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-card rise-in">
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Workflow Preview
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginTop: 4,
              }}
            >
              From brief to booked meeting
            </div>
            <div className="hero__stage-list">
              {previewStages.map(([label, t], i) => (
                <div className="hero__stage-row" key={label}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background:
                        i < 3 ? "var(--success-soft)" : "var(--accent-soft)",
                      color: i < 3 ? "var(--success)" : "var(--accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 800,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontWeight: 600 }}>{label}</span>
                  <b>{t}</b>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero__visual-card rise-in"
            style={{ animationDelay: "0.15s", maxWidth: 380 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Live signal
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--signal)",
                  background: "var(--signal-soft)",
                  padding: "3px 8px",
                  borderRadius: 99,
                }}
              >
                +3 hires · 5d ago
              </span>
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Northwind Group · Dallas terminal opening
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginTop: 6,
              }}
            >
              "Congrats on the Dallas terminal opening — filling new capacity is the fun part and
              the hard part…"
            </div>
            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <span className="pill pill--accent">VP Operations</span>
              <span className="pill pill--success">Score 94</span>
              <span className="pill pill--signal">Tier 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
