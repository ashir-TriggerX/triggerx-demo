/* ICP parsing — turns user free-text into a structured brief. */

const INDUSTRY_MAP = [
  { keys: ["freight", "logistic", "trucking", "carrier"], industry: "Freight & Logistics", noun: "brokerages", anchor: "shippers needing capacity" },
  { keys: ["insur", "broker"], industry: "Insurance", noun: "agencies", anchor: "renewing policies" },
  { keys: ["saas", "software", "platform"], industry: "B2B SaaS", noun: "companies", anchor: "expanding revenue teams" },
  { keys: ["manufactur", "industrial"], industry: "Manufacturing", noun: "manufacturers", anchor: "supply-chain growth" },
  { keys: ["construct"], industry: "Construction", noun: "contractors", anchor: "new project starts" },
  { keys: ["health", "clinic", "medical"], industry: "Healthcare", noun: "providers", anchor: "patient acquisition" },
  { keys: ["real estate", "realtor", "property"], industry: "Real Estate", noun: "firms", anchor: "new listings" },
  { keys: ["market", "agenc"], industry: "Marketing Services", noun: "agencies", anchor: "client retention" },
  { keys: ["recruit", "staffing"], industry: "Recruiting", noun: "firms", anchor: "open requisitions" },
  { keys: ["finan", "fintech"], industry: "Financial Services", noun: "firms", anchor: "growing AUM" },
  { keys: ["ecommerce", "retail", "shop"], industry: "eCommerce", noun: "brands", anchor: "scaling acquisition" },
  { keys: ["cyber", "security"], industry: "Cybersecurity", noun: "vendors", anchor: "post-breach buyers" },
];

const GEO_MAP = [
  { keys: ["canad"], geo: "Canada" },
  { keys: ["uk", "united kingdom", "britain"], geo: "the United Kingdom" },
  { keys: ["europe", "eu "], geo: "Europe" },
  { keys: ["australia"], geo: "Australia" },
  { keys: ["india"], geo: "India" },
  { keys: ["germany", "dach"], geo: "DACH" },
  { keys: ["singapore", "apac", "southeast asia"], geo: "APAC" },
  { keys: ["latam", "latin america", "mexico"], geo: "LATAM" },
];

export function parseICP(text) {
  const t = (text || "").toLowerCase();
  let industry = "B2B services";
  let noun = "companies";
  let anchor = "growth signals";
  for (const m of INDUSTRY_MAP) {
    if (m.keys.some((k) => t.includes(k))) {
      industry = m.industry;
      noun = m.noun;
      anchor = m.anchor;
      break;
    }
  }
  let geo = "the United States";
  for (const g of GEO_MAP) {
    if (g.keys.some((k) => t.includes(k))) {
      geo = g.geo;
      break;
    }
  }
  let size = "mid-market";
  if (t.includes("enterprise")) size = "enterprise";
  else if (t.includes("smb") || t.includes("small")) size = "SMB";

  const titles = [];
  const titleMap = [
    ["ceo", "CEO"],
    ["founder", "Founder"],
    ["owner", "Owner"],
    ["coo", "COO"],
    ["cfo", "CFO"],
    ["cto", "CTO"],
    ["vp", "VP"],
    ["director", "Director"],
    ["head of", "Head of"],
    ["manager", "Manager"],
  ];
  for (const [k, v] of titleMap) if (t.includes(k)) titles.push(v);
  if (titles.length === 0) titles.push("VP", "Director", "Owner");

  return { industry, noun, geo, size, titles, raw: text || "" };
}

export const SAMPLE_BRIEFS = [
  {
    label: "Freight brokerages",
    text:
      "Mid-market freight brokerages in the United States. Decision-makers: owners, VP Sales, Operations directors. Pain: filling new capacity. Bonus if hiring or expanding terminals.",
  },
  {
    label: "B2B SaaS",
    text:
      "B2B SaaS companies in North America with 50–500 employees. Decision-makers: VP Marketing or Head of Revenue Operations. Pain: paid channels getting more expensive. Bonus if recently raised a Series A or B.",
  },
  {
    label: "Insurance agencies",
    text:
      "Independent insurance agencies in the United States. Decision-makers: owners and producers. Pain: hard to win new commercial accounts at renewal. Bonus if licensed in multiple states.",
  },
  {
    label: "Cybersecurity",
    text:
      "Mid-market cybersecurity vendors in Europe. Decision-makers: CISO buyers at firms 200–2,000 headcount. Pain: long sales cycles. Bonus if a competitor's customer recently had a public incident.",
  },
];
