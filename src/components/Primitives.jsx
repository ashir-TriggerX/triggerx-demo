import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

/* ============================================================
   Button — primary / ghost / soft / icon variants
   ============================================================ */
export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled,
  ariaLabel,
  type = "button",
  href,
  target,
  rel,
}) {
  const cls = ["btn", `btn--${variant}`, size === "sm" && "btn--sm", size === "lg" && "btn--lg"]
    .filter(Boolean)
    .join(" ");
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={16} />}
    </>
  );
  if (href && !disabled) {
    const isExternal = /^https?:/.test(href);
    return (
      <a
        className={cls}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}

export function IconButton({ icon, onClick, ariaLabel, variant = "ghost" }) {
  return (
    <button
      type="button"
      className={`btn btn--${variant} btn--icon`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon name={icon} size={17} />
    </button>
  );
}

/* ============================================================
   Card
   ============================================================ */
export function Card({ children, title, actions, className = "", inset, elevated, style }) {
  return (
    <div
      className={`card ${inset ? "card--inset" : ""} ${elevated ? "card--elevated" : ""} ${className}`}
      style={style}
    >
      {title && (
        <div className="card__title">
          <span>{title}</span>
          {actions && <span className="card__title-actions">{actions}</span>}
        </div>
      )}
      {children}
    </div>
  );
}

/* ============================================================
   Pill (status / category)
   ============================================================ */
export function Pill({ children, tone = "neutral" }) {
  return <span className={`pill pill--${tone}`}>{children}</span>;
}

/* ============================================================
   Bar (progress meter)
   ============================================================ */
export function Bar({ pct, color }) {
  const fillStyle = color ? { background: color, width: `${pct}%` } : { width: `${pct}%` };
  return (
    <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
      <div className="bar__fill" style={fillStyle} />
    </div>
  );
}

/* ============================================================
   Stat (KPI tile)
   ============================================================ */
export function Stat({ value, label, sub, icon, tone = "accent", trend }) {
  const iconBg = `var(--${tone}-soft, var(--accent-soft))`;
  const iconFg = `var(--${tone}, var(--accent))`;
  return (
    <div className="stat">
      <div className="stat__top">
        {icon && (
          <div className="stat__icon" style={{ background: iconBg, color: iconFg }}>
            <Icon name={icon} size={16} />
          </div>
        )}
        {trend && (
          <span className={`stat__trend stat__trend--${trend.dir}`}>
            <Icon name={trend.dir === "up" ? "arrowUp" : "arrowDown"} size={11} stroke={2.4} />
            {trend.text}
          </span>
        )}
      </div>
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
      {sub && <div className="stat__sub">{sub}</div>}
    </div>
  );
}

/* ============================================================
   ScreenHeader
   ============================================================ */
export function ScreenHeader({ step, total, eyebrow, title, lead }) {
  return (
    <header className="screen-head rise-in">
      {(step || eyebrow) && (
        <div className="screen-head__step">
          {step ? `Step ${step}${total ? ` / ${total}` : ""}` : null}
          {step && eyebrow ? " · " : null}
          {eyebrow}
        </div>
      )}
      <h1 className="screen-head__title">{title}</h1>
      {lead && <p className="screen-head__lead">{lead}</p>}
    </header>
  );
}

/* ============================================================
   ThemeToggle — segmented sun / moon
   ============================================================ */
export function ThemeToggle({ theme, onChange }) {
  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      <button
        type="button"
        aria-label="Use light theme"
        className={`theme-toggle__btn ${theme === "light" ? "theme-toggle__btn--active" : ""}`}
        onClick={() => onChange("light")}
      >
        <Icon name="sun" size={15} stroke={2} />
      </button>
      <button
        type="button"
        aria-label="Use dark theme"
        className={`theme-toggle__btn ${theme === "dark" ? "theme-toggle__btn--active" : ""}`}
        onClick={() => onChange("dark")}
      >
        <Icon name="moon" size={15} stroke={2} />
      </button>
    </div>
  );
}

/* ============================================================
   Tabs / Chip group
   ============================================================ */
export function TabRow({ options, value, onChange, ariaLabel }) {
  return (
    <div className="tab-row" role="tablist" aria-label={ariaLabel}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="tab"
          aria-selected={value === opt.value}
          className={`tab ${value === opt.value ? "tab--active" : ""}`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function ChipGroup({ options, value, onChange, multi, soft = true, ariaLabel }) {
  const selected = multi ? value || [] : [value];
  const toggle = (v) => {
    if (multi) {
      const set = new Set(selected);
      set.has(v) ? set.delete(v) : set.add(v);
      onChange(Array.from(set));
    } else {
      onChange(v);
    }
  };
  return (
    <div className="toggle-group" role="group" aria-label={ariaLabel}>
      {options.map((opt) => {
        const active = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            className={`chip ${soft ? "chip--soft" : ""} ${active ? "chip--active" : ""}`}
            onClick={() => toggle(opt.value)}
          >
            {opt.icon && <Icon name={opt.icon} size={13} stroke={2} />}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   CopyButton
   ============================================================ */
export function CopyButton({ text, label = "Copy" }) {
  const [done, setDone] = useState(false);
  const timer = useRef();
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    setDone(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 1400);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <Button variant="ghost" size="sm" onClick={onCopy} iconLeft={done ? "check" : "copy"}>
      {done ? "Copied" : label}
    </Button>
  );
}

/* ============================================================
   useCountUp — animates a numeric value smoothly
   ============================================================ */
export function useCountUp(target, { duration = 900, key = "" } = {}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const from = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(from + (target - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, key, duration]);
  return val;
}

/* ============================================================
   Banner
   ============================================================ */
export function Banner({ children, tone = "success", icon = "check" }) {
  return (
    <div className={`banner banner--${tone}`}>
      <span className="banner--icon">
        <Icon name={icon} size={15} stroke={3} />
      </span>
      <span>{children}</span>
    </div>
  );
}

/* ============================================================
   Avatar
   ============================================================ */
export function Avatar({ name, size = 34 }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
  return (
    <span className="avatar" style={{ width: size, height: size, fontSize: size * 0.38 }}>
      {initials}
    </span>
  );
}
