import React from "react";
import Icon from "./Icon.jsx";

export default function Sidebar({ stages, currentIndex, onJump, isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="scrim" onClick={onClose} aria-hidden="true" />}
      <aside
        className={`sidebar ${isOpen ? "sidebar--open" : ""}`}
        aria-label="Workflow navigation"
      >
        <div className="sidebar__brand">
          <div className="sidebar__brand-mark" aria-hidden="true">
            <Icon name="zap" size={18} stroke={2.4} />
          </div>
          <div className="sidebar__brand-text">
            <span className="sidebar__brand-name">TriggerX</span>
            <span className="sidebar__brand-sub">Outbound Intelligence</span>
          </div>
        </div>

        <nav className="sidebar__nav" aria-label="Demo workflow">
          <div className="sidebar__nav-label">Demo Workflow</div>
          {stages.map((s, i) => {
            const active = i === currentIndex;
            const done = i < currentIndex;
            return (
              <button
                key={s.key}
                className={`sidebar__item ${active ? "sidebar__item--active" : ""} ${
                  done ? "sidebar__item--done" : ""
                }`}
                onClick={() => {
                  onJump(i);
                  onClose && onClose();
                }}
              >
                <span className="sidebar__item-index">
                  {done ? <Icon name="check" size={12} stroke={3} /> : i + 1}
                </span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar__footer">
          <b>Demo mode</b> — all data, infrastructure, and outputs are simulated. No external APIs
          are called.
        </div>
      </aside>
    </>
  );
}
