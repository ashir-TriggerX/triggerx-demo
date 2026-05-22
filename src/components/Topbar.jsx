import React from "react";
import { ThemeToggle, IconButton, Button } from "./Primitives.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Topbar({ title, sub, onMenu, onRestart }) {
  const { theme, setTheme } = useTheme();
  return (
    <header className="topbar">
      <div className="topbar__left">
        <button
          type="button"
          className="topbar__menu-btn"
          onClick={onMenu}
          aria-label="Open workflow navigation"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span className="topbar__title">{title}</span>
          {sub && <span className="topbar__sub">{sub}</span>}
        </div>
      </div>
      <div className="topbar__right">
        <span className="demo-badge" aria-label="Demo mode">
          <span className="demo-badge__dot" />
          <span className="demo-badge__text-long">Live Demo · No real sends</span>
        </span>
        <ThemeToggle theme={theme} onChange={setTheme} />
        {onRestart && (
          <Button variant="ghost" size="sm" iconLeft="refresh" onClick={onRestart}>
            Restart
          </Button>
        )}
      </div>
    </header>
  );
}
