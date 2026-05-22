/* AI-generated message variants — tone & channel selectors. */

export const TONES = [
  { value: "direct", label: "Direct" },
  { value: "friendly", label: "Friendly" },
  { value: "executive", label: "Executive" },
  { value: "short", label: "Short" },
];

export const CHANNELS = [
  { value: "email", label: "Email", icon: "mail" },
  { value: "linkedin", label: "LinkedIn", icon: "message" },
  { value: "call", label: "Call", icon: "phone" },
];

const FIRSTNAME = "Travis";
const COMPANY = "Northwind Group";

/* Email variants by tone */
export const EMAIL_VARIANTS = {
  direct: {
    subject: "Filling the new Northwind terminal",
    opener:
      "Congrats on the Dallas terminal opening — filling new capacity is the fun part and the hard part.",
    body: `New capacity usually creates a 60-day scramble for consistent freight. We've built outbound systems for two brokerages in your weight class that now book 12+ shipper conversations a month.\n\nNothing to install. Worth a 15-minute look at whether we could shorten the terminal ramp?`,
    cta: "Worth a quick look at whether this could fill Dallas faster?",
  },
  friendly: {
    subject: "Quick one — new Dallas terminal",
    opener: `Hey ${FIRSTNAME}, saw the Dallas terminal news — congrats. Genuinely impressive timing given the rate environment.`,
    body: `I run an outbound team that helps freight brokerages keep new capacity full. A couple of brokerages your size are booking 12–18 shipper conversations a month from us — no list buys, every touch is triggered by a real signal.\n\nIf the timing's bad, no stress. If it's not, I'd love 15 minutes.`,
    cta: "Open to a 15-min call next week?",
  },
  executive: {
    subject: "Capacity utilization — Northwind Dallas",
    opener: `${FIRSTNAME}, the Dallas expansion stood out — it's the kind of move that puts a margin clock on capacity utilization.`,
    body: `We've built a managed outbound program for two mid-market brokerages that compresses time-to-first-shipper-meeting from quarter-long to weeks. Signal-triggered targeting, three coordinated channels, fully managed deliverability — your team only sees qualified responses.\n\nIf utilization is the right metric to talk about, I'd welcome 15 minutes with you and the commercial lead.`,
    cta: "Worth aligning calendars for a 15-minute discussion?",
  },
  short: {
    subject: "Dallas terminal",
    opener: `${FIRSTNAME}, congrats on Dallas.`,
    body: `We help freight brokerages your size keep new capacity full with signal-triggered outbound — 12+ shipper conversations a month, fully managed.\n\nOpen to a 15-min look?`,
    cta: "15 min next week?",
  },
};

export const LINKEDIN_VARIANTS = {
  direct: `${FIRSTNAME} — saw the new Dallas terminal. Filling new capacity is exactly where our outbound program for mid-market brokerages tends to earn its keep. Worth a quick chat?`,
  friendly: `${FIRSTNAME}, congrats on Dallas — that's a real statement move in this market. Would love to swap notes on how brokerages your size are filling new capacity right now.`,
  executive: `${FIRSTNAME}, the Dallas expansion is a meaningful capacity bet. Happy to share how two peer brokerages are de-risking utilization with managed outbound.`,
  short: `${FIRSTNAME} — Dallas terminal is big. Help filling it?`,
};

export const CALL_NOTES = {
  direct: `${FIRSTNAME} — Northwind just opened Dallas (5 days ago). Hiring 3 ops roles. New VP Operations started 6 weeks ago.\n\nOpen with: "Saw the Dallas news — congrats. Curious how you're thinking about filling the new capacity."\n\nValue prop: managed outbound, 12+ qualified shipper conversations / month.\nObjection prep: "We already work with a list provider" → ours is signal-triggered, not list-based.`,
  friendly: `Hey ${FIRSTNAME} — congrats on Dallas, that's a great move. Quick reason for the call: we run an outbound program for mid-market freight brokerages, and the moment a new terminal opens is exactly when we tend to deliver the most. Would love to see if there's a fit.`,
  executive: `${FIRSTNAME}, this is [name]. Won't take much of your time. We help mid-market brokerages compress time-to-first-shipper-meeting on new capacity. With Dallas just live, I'd value 15 minutes to see if our model fits Northwind's commercial plan.`,
  short: `${FIRSTNAME} — saw Dallas. Help filling it? 15 min?`,
};

export const ICEBREAKERS = [
  {
    lead: "Travis Sharpe · Northwind Group",
    line: "Congrats on the Dallas terminal opening, Travis. Filling new capacity is the fun part and the hard part.",
    source: "expansion: new Dallas terminal · 5 days ago",
  },
  {
    lead: "Maria Delgado · Castlepoint Logistics",
    line: "Looks like Castlepoint is hiring four dispatchers right now — usually means freight volume is moving in the right direction.",
    source: "hiring: 4 open dispatch roles",
  },
  {
    lead: "Devin Cole · Apex Freight",
    line: "Your customers keep mentioning how fast Apex turns loads around. That reputation is worth protecting as you grow.",
    source: "reviews: Google review velocity +38% MoM",
  },
  {
    lead: "Aisha Patel · Redstone Brokerage",
    line: "Saw the BDR roles opening at Redstone — building a hunter team right after a growth round is the playbook.",
    source: "hiring + funding: $12M raise + 6 BDR roles",
  },
];
