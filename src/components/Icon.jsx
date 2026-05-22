import React from "react";

const PATHS = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  spark: (
    <path d="M12 3 13.8 9.2 20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3z" strokeLinejoin="round" />
  ),
  shield: (
    <path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9 4.8-.6 8-4.5 8-9V6l-8-3z" strokeLinejoin="round" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  message: (
    <path d="M21 12a8 8 0 0 1-12.5 6.6L3 21l1.4-5.5A8 8 0 1 1 21 12z" strokeLinejoin="round" />
  ),
  phone: (
    <path d="M22 16.9V20a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-17.7-17.7A2 2 0 0 1 4 2h3.1a2 2 0 0 1 2 1.7l.6 3.3a2 2 0 0 1-.6 1.9L8 10.2a16 16 0 0 0 5.8 5.8l1.3-1.3a2 2 0 0 1 1.9-.6l3.3.6a2 2 0 0 1 1.7 2.2z" strokeLinejoin="round" />
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-5 3 3 5-7" />
    </>
  ),
  pie: (
    <>
      <path d="M12 3v9l8 4a9 9 0 1 1-8-13z" strokeLinejoin="round" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 11a3 3 0 1 0 0-6M21.5 20a5.5 5.5 0 0 0-5-5.5" />
    </>
  ),
  filter: <path d="M3 5h18l-7 9v6l-4-2v-4L3 5z" strokeLinejoin="round" />,
  check: <path d="m5 12 5 5L20 7" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </>
  ),
  refresh: <path d="M3 12a9 9 0 0 1 15.6-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.6 6.2L3 16M3 21v-5h5" strokeLinejoin="round" />,
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" strokeLinejoin="round" />,
  arrowLeft: <path d="M19 12H5m6 6-6-6 6-6" strokeLinejoin="round" />,
  arrowUp: <path d="m6 14 6-6 6 6" strokeLinejoin="round" />,
  arrowDown: <path d="m6 10 6 6 6-6" strokeLinejoin="round" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M6 18 18 6" />,
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </>
  ),
  trending: <path d="m3 17 6-6 4 4 8-8M14 7h7v7" strokeLinejoin="round" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4M12 16h.01" />
    </>
  ),
  inbox: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 13h5l2 3h4l2-3h5" />
    </>
  ),
  send: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinejoin="round" />,
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9 4.8-.6 8-4.5 8-9V6l-8-3z" strokeLinejoin="round" />
      <path d="m8 12 3 3 5-5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 10 6-10 6L2 8l10-6z" strokeLinejoin="round" />
      <path d="m2 14 10 6 10-6M2 11l10 6 10-6" />
    </>
  ),
  flag: <path d="M4 22V4l11 3-3 4 3 5H4" strokeLinejoin="round" />,
  download: <path d="M12 3v14m-6-6 6 6 6-6M4 21h16" strokeLinejoin="round" />,
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 10h18M8 2v4M16 2v4" />
    </>
  ),
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />,
};

export default function Icon({ name, size = 18, stroke = 1.7, style, className }) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
