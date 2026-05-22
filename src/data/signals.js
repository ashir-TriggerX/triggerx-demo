/* Buying-signal catalog — used across sourcing & intelligence views. */

export const SIGNAL_TYPES = [
  {
    key: "hiring",
    label: "Hiring activity",
    icon: "users",
    tone: "signal",
    why: "New roles imply growth and active budget. Hiring sales, ops, or revenue roles is the strongest leading indicator of imminent vendor purchases.",
  },
  {
    key: "funding",
    label: "Funding & contracts",
    icon: "trending",
    tone: "accent",
    why: "A raise, large grant, or anchor contract means new spend authority. Reach the team in the 60-day window after the announcement.",
  },
  {
    key: "expansion",
    label: "Expansion & new locations",
    icon: "globe",
    tone: "violet",
    why: "A new office, terminal, or market signals fresh capacity to fill — and an open buying need to support it.",
  },
  {
    key: "leadership",
    label: "Leadership change",
    icon: "briefcase",
    tone: "success",
    why: "A new VP or director enters with budget and a 90-day mandate. They are 4x more likely to consider new vendors than seated leaders.",
  },
  {
    key: "reviews",
    label: "Reputation velocity",
    icon: "spark",
    tone: "warning",
    why: "A surge in 5★ reviews signals operational health and customer growth — these companies are scaling and need vendors that can keep pace.",
  },
  {
    key: "tech",
    label: "Tech-stack changes",
    icon: "layers",
    tone: "accent",
    why: "Adopting a new core platform (TMS, CRM, ERP) creates adjacent buying needs and replaces complacent vendor relationships.",
  },
  {
    key: "web",
    label: "Website + intent shifts",
    icon: "globe",
    tone: "signal",
    why: "Pricing-page visits, careers-page surges, and content shifts all reveal an account in research mode before they raise their hand.",
  },
];

export const LIVE_SIGNAL_FEED = [
  {
    company: "Northwind Group",
    type: "Hiring",
    tone: "signal",
    detail: "+3 operations roles in 30 days. Active growth phase, budget moving.",
    age: "2 days ago",
  },
  {
    company: "Northwind Group",
    type: "Expansion",
    tone: "violet",
    detail: "Announced a new Dallas regional terminal — new capacity to fill.",
    age: "5 days ago",
  },
  {
    company: "Northwind Group",
    type: "Leadership",
    tone: "success",
    detail: "New VP Operations started 6 weeks ago — fresh mandate, open to vendors.",
    age: "6 weeks ago",
  },
  {
    company: "Redstone Brokerage",
    type: "Funding",
    tone: "accent",
    detail: "Closed $12M growth round to expand cross-border lanes.",
    age: "9 days ago",
  },
  {
    company: "Mercator Cargo",
    type: "Tech adoption",
    tone: "accent",
    detail: "Listed McLeod TMS on careers page — replacing an in-house stack.",
    age: "3 weeks ago",
  },
];
