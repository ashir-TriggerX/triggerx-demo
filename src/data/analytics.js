/* Pipeline + analytics mock data. */

export const PIPELINE_FUNNEL = [
  { label: "Leads in sequence", value: 4120, color: "var(--accent)" },
  { label: "Messages delivered", value: 9842, color: "var(--violet)" },
  { label: "Open / read", value: 5530, color: "var(--accent-hover)" },
  { label: "Replies", value: 312, color: "var(--signal)" },
  { label: "Meetings booked", value: 47, color: "var(--success)" },
  { label: "Opportunities created", value: 21, color: "var(--warning)" },
];

export const PIPELINE_DONUT = [
  { label: "In sequence", value: 2940, color: "var(--accent)" },
  { label: "Replied — needs action", value: 312, color: "var(--signal)" },
  { label: "Meetings booked", value: 47, color: "var(--success)" },
  { label: "Closed-lost / nurture", value: 821, color: "var(--text-muted)" },
];

export const WEEKLY_REPLIES = [
  { label: "W1", value: 18 },
  { label: "W2", value: 27 },
  { label: "W3", value: 41 },
  { label: "W4", value: 36 },
  { label: "W5", value: 52 },
  { label: "W6", value: 64 },
  { label: "W7", value: 71 },
  { label: "W8", value: 88 },
];

export const SIGNAL_PERFORMANCE = [
  { label: "Hiring", value: 28, color: "var(--signal)" },
  { label: "Expansion", value: 22, color: "var(--violet)" },
  { label: "Leadership", value: 18, color: "var(--success)" },
  { label: "Funding", value: 13, color: "var(--accent)" },
  { label: "Reviews", value: 9, color: "var(--warning)" },
  { label: "Tech", value: 7, color: "var(--text-muted)" },
];

export const ACTIVITY_TIMELINE = [
  { when: "2 min ago", text: "Travis Sharpe replied to follow-up email", tone: "success", icon: "mail" },
  { when: "14 min ago", text: "Sequence step queued · 38 messages going out", tone: "accent", icon: "send" },
  { when: "39 min ago", text: "Inbox health alert resolved · sales@trigger-x-send.com warmed back to 92%", tone: "accent", icon: "shieldCheck" },
  { when: "1 hr ago", text: "Maria Delgado booked a meeting for Friday 11:00 EST", tone: "success", icon: "calendar" },
  { when: "2 hrs ago", text: "New buying signal · Redstone Brokerage announced a $12M round", tone: "signal", icon: "trending" },
  { when: "3 hrs ago", text: "126 leads passed verification and joined the queue", tone: "accent", icon: "shieldCheck" },
];

export const ROI_CARDS = [
  {
    icon: "check",
    tone: "success",
    value: "6,210",
    label: "Verified leads",
    sub: "Triple-checked and CRM-ready",
  },
  {
    icon: "spark",
    tone: "signal",
    value: "7.6%",
    label: "Reply rate",
    sub: "vs. 1.3% industry average",
    trend: { dir: "up", text: "+4.8pt" },
  },
  {
    icon: "calendar",
    tone: "accent",
    value: "47",
    label: "Meetings booked",
    sub: "Last 30 days",
    trend: { dir: "up", text: "+22%" },
  },
  {
    icon: "briefcase",
    tone: "violet",
    value: "$184K",
    label: "Pipeline created",
    sub: "Forecasted ARR from booked meetings",
  },
  {
    icon: "shieldCheck",
    tone: "success",
    value: "97.2%",
    label: "Inbox placement",
    sub: "Across 50 monitored mailboxes",
  },
  {
    icon: "users",
    tone: "accent",
    value: "186 hrs",
    label: "Manual work saved",
    sub: "Per month across sourcing & ops",
  },
];

export const TOP_SIGNAL = {
  name: "Hiring activity",
  detail: "Drives 28% of all replies and 41% of booked meetings — by far the highest-converting signal across the engine.",
};

export const MAILBOX_HEALTH = [
  { domain: "outreach@trigger-x-mail.com", health: 100, status: "Healthy" },
  { domain: "hello@trigger-x-mail.com", health: 98, status: "Healthy" },
  { domain: "team@trigger-x-send.com", health: 97, status: "Healthy" },
  { domain: "contact@trigger-x-send.com", health: 94, status: "Healthy" },
  { domain: "intro@trigger-x-reach.com", health: 92, status: "Healthy" },
  { domain: "connect@trigger-x-reach.com", health: 66, status: "Cooling down" },
  { domain: "sales@trigger-x-send.com", health: 61, status: "Cooling down" },
  { domain: "hi@trigger-x-mail.com", health: 43, status: "Re-warming" },
  { domain: "reach@trigger-x-reach.com", health: 38, status: "Re-warming" },
];
