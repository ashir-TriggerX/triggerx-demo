# TriggerX — Outbound Intelligence Demo

**TriggerX** is an intelligent outbound workflow that turns raw market data into verified leads, signal-scored prospects, personalized outreach, and booked meetings — fully managed, human-approved, no spray-and-pray.

This repository is a **frontend-only interactive product demo** built for client presentations. Every screen, dataset, and metric is simulated so the workflow can be opened on a laptop on a sales call and demoed end-to-end in under five minutes.

---

## What this demo shows

A complete 11-stage outbound workflow, presented as a live SaaS dashboard:

1. **Hero / onboarding** — product positioning and a guided entry to the demo
2. **ICP & campaign brief** — type a plain-English brief; the engine parses it into a structured target
3. **Lead sourcing** — live map of accounts that fit the brief, with 38 firmographic and signal data points per record
4. **Clean & verify** — raw capture in, CRM-ready records out, with confidence scoring
5. **ICP fit scoring** — every lead scored 0–100; Tier 1 / Tier 2 / Tier 3 routing
6. **Buying-signal intelligence** — seven signal types (hiring, funding, expansion, leadership, reviews, tech, web)
7. **AI personalization** — opening lines built from real signals, with a tone studio (Direct / Friendly / Executive / Short)
8. **Multi-channel sequence** — coordinated email, LinkedIn, and phone cadence by tier
9. **Outreach preview** — finished email / LinkedIn / phone outputs with copy-to-clipboard
10. **Execution pipeline** — replies inbox, activity timeline, mailbox health, funnel & state donut
11. **Analytics & ROI** — cost per meeting, signal performance, weekly trend, hours saved
12. **Final summary** — client takeaways, deliverables, 4-step launch plan

Every screen has its own micro-interactions: tier filters, region filters, tone swaps, channel swaps, regenerate buttons, copy buttons, light/dark theme toggle, and an interactive sidebar that lets the presenter jump anywhere.

---

## Why this matters

Most outbound demos rely on screenshots. This one lets a client click through the actual workflow on their own and feel what the product does. It is opinionated about three things that distinguish TriggerX from generic lead-list tools:

- **Signals before lists.** Every account in the dataset is paired with a real-world buying moment.
- **Multi-channel by design.** Email, LinkedIn, and phone reinforce each other instead of competing.
- **Human approval gate.** Compliance-aware sourcing, opt-out honored, every send reviewed before launch.

---

## Tech stack

- **React 18** (functional components, hooks, context)
- **Vite 5** for dev server and production builds
- **Vanilla CSS** with CSS-variable theming (no Tailwind, no UI library)
- **Inline SVG** icons and charts — zero icon/chart dependencies
- Inter + JetBrains Mono via Google Fonts

The full runtime is **two npm dependencies** (`react`, `react-dom`).

---

## Local setup

```bash
# 1. install dependencies
npm install

# 2. start the dev server (Vite, with HMR)
npm run dev
# open the URL Vite prints (typically http://localhost:5173)

# 3. build for production
npm run build

# 4. preview the production build
npm run preview
```

The demo runs entirely in the browser. **No backend, no API keys, no environment variables.**

---

## Project structure

```
triggerx-demo/
├── index.html                  # entry HTML, theme bootstrap script
├── package.json                # 2 deps: react, react-dom
├── vite.config.js
├── src/
│   ├── main.jsx                # React entry
│   ├── App.jsx                 # routing state + app shell
│   ├── styles.css              # design tokens + light/dark themes
│   ├── components/             # reusable primitives
│   │   ├── Icon.jsx            # 30+ inline SVG icons
│   │   ├── Primitives.jsx      # Button, Card, Stat, Pill, Bar, Tabs, Chips…
│   │   ├── Charts.jsx          # Sparkline, BarChart, Donut, FunnelChart
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   └── FootNav.jsx
│   ├── context/
│   │   └── ThemeContext.jsx    # light/dark with localStorage persistence
│   ├── data/                   # all simulated demo data
│   │   ├── icp.js
│   │   ├── leads.js
│   │   ├── signals.js
│   │   ├── messages.js
│   │   ├── sequence.js
│   │   └── analytics.js
│   └── screens/
│       ├── Hero.jsx
│       ├── IcpBrief.jsx
│       ├── Sourcing.jsx
│       ├── Verify.jsx
│       ├── Scoring.jsx
│       ├── Signals.jsx
│       ├── Personalization.jsx
│       ├── Sequence.jsx
│       ├── Preview.jsx
│       ├── Pipeline.jsx
│       ├── Analytics.jsx
│       └── Summary.jsx
```

---

## Theming

A single `data-theme` attribute on `<html>` switches between light and dark. All colors, surfaces, borders, and shadows are CSS variables defined in `src/styles.css`.

- Theme preference persists in `localStorage` under `triggerx-theme`.
- First load respects `prefers-color-scheme` if no preference is stored.
- The toggle lives in both the hero header and the in-app topbar.

To add a new theme, copy the `:root[data-theme="dark"]` block and override the variables.

---

## Responsiveness

- **Desktop (≥1100px):** full sidebar + topbar SaaS layout.
- **Tablet (800–1100px):** sidebar collapses into a slide-out drawer; multi-column grids stay two-up where useful.
- **Mobile (<800px):** grids stack, sequence steps become card-stacked, footer nav becomes full-width buttons, no horizontal overflow.

Tested visually on common breakpoints (375, 414, 768, 1024, 1440 px). The viewport meta + global `overflow-x: hidden` guard prevent accidental scroll bars.

---

## QA checklist

Manually verified before a client demo:

- [ ] Hero loads, theme toggle works, "Start Interactive Demo" enters the workflow
- [ ] Light theme — all text readable, all charts visible
- [ ] Dark theme — all text readable, all charts visible
- [ ] Theme preference persists after refresh
- [ ] Sidebar lets you jump to any stage
- [ ] Restart button returns to hero and resets state
- [ ] ICP brief: typing updates the parsed brief panel live
- [ ] Sample-brief chips load realistic copy
- [ ] Continue is disabled when brief is empty
- [ ] Region filter, tier filter, signal selector work
- [ ] Tone tabs swap email / LinkedIn / call output
- [ ] Channel tabs swap the preview view
- [ ] Regenerate button refreshes personalized icebreakers
- [ ] Copy buttons copy the message to clipboard
- [ ] Funnel, donut, bar chart, and sparkline render in both themes
- [ ] Sidebar drawer opens & closes cleanly on mobile
- [ ] No horizontal scroll on any breakpoint
- [ ] `npm run build` succeeds with no errors

---

## Suggested future backend integrations

If the engagement moves forward, the natural next-step integrations are:

- **Data sources:** Apollo / ZoomInfo / Cognism for firmographic enrichment, NeverBounce / ZeroBounce for verification, BuiltWith / Wappalyzer for tech stack
- **Signal feeds:** Crunchbase + PitchBook for funding, Predictleads / Live Data for hiring & expansion, Google Reviews / Yelp APIs for reputation
- **AI personalization:** Anthropic Claude / OpenAI GPT with retrieval over the signal stack, plus a hallucination filter
- **Sending infrastructure:** Instantly / Smartlead / Apollo for managed sends + warmup, plus owned domains via Google Workspace or Microsoft 365
- **CRM:** HubSpot, Salesforce, Pipedrive — round-robin meeting routing via Chili Piper or native calendar links
- **Reporting:** Segment → BigQuery / Snowflake → Metabase or in-product dashboard with the same visual system used here

---

## Demo positioning (talk track)

> *"TriggerX is the outbound engine that turns market data into booked meetings. We watch the market for the moments that mean a company just became ready to buy — hiring, expansion, funding, leadership changes — and we put your team in front of those companies first. Every message is personalized from a real event, every send is verified, and a human signs off before anything goes out."*

Run the demo top to bottom in five minutes. Stop on the screens the client cares about most.

---

**Demo only** — no backend, no real sends, no API keys. Designed to be opened, shown, and closed without leaving any production footprint.
