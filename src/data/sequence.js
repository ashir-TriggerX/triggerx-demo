/* Multi-channel campaign sequence. */

export const SEQUENCES = {
  "tier-1": [
    {
      day: 1,
      channel: "email",
      title: "Personalized cold email",
      desc: "Custom icebreaker built from the live signal, plus a soft CTA. No attachments, plain text.",
    },
    {
      day: 2,
      channel: "linkedin",
      title: "Connection request, no pitch",
      desc: "Short note tied to the same signal. Builds familiarity before the next email lands.",
    },
    {
      day: 4,
      channel: "call",
      title: "Signal-based discovery call",
      desc: "Short call referencing the exact event. We coach reps with talking points and an objection cheat-sheet.",
    },
    {
      day: 6,
      channel: "email",
      title: "Follow-up with a new angle",
      desc: "Different value frame, plus a one-line proof point. Keeps the thread alive without nagging.",
    },
    {
      day: 8,
      channel: "linkedin",
      title: "Reference the email thread",
      desc: "Cross-channel context. Same person, two places — feels more human, harder to ignore.",
    },
    {
      day: 11,
      channel: "call",
      title: "Booking call",
      desc: "Direct ask to put time on the calendar. By now, the prospect has seen the message four times.",
    },
    {
      day: 14,
      channel: "email",
      title: "Polite close-out",
      desc: "Short, kind, low-pressure exit. 6% of these reignite later — we recycle them into a quarterly nurture.",
    },
  ],
  "tier-2": [
    {
      day: 1,
      channel: "email",
      title: "Personalized cold email",
      desc: "Custom icebreaker tied to a signal or recent post.",
    },
    {
      day: 3,
      channel: "linkedin",
      title: "Connection request",
      desc: "Familiarity build, no pitch.",
    },
    {
      day: 6,
      channel: "email",
      title: "Follow-up with proof",
      desc: "Switch angle, layer in social proof from a peer.",
    },
    {
      day: 10,
      channel: "email",
      title: "Polite close-out",
      desc: "Short exit message. Recycle to nurture.",
    },
  ],
  "tier-3": [
    {
      day: 1,
      channel: "email",
      title: "Light-touch cold email",
      desc: "Personalized by company only, lower-effort send.",
    },
    {
      day: 7,
      channel: "email",
      title: "Single follow-up",
      desc: "One bump, then route to nurture.",
    },
  ],
};

export const TIER_OPTIONS = [
  { value: "tier-1", label: "Tier 1 (score 80+)" },
  { value: "tier-2", label: "Tier 2 (50–79)" },
  { value: "tier-3", label: "Tier 3 (<50)" },
];
