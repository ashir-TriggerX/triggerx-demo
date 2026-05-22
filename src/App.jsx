import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import FootNav from "./components/FootNav.jsx";

import Hero from "./screens/Hero.jsx";
import IcpBrief from "./screens/IcpBrief.jsx";
import Sourcing from "./screens/Sourcing.jsx";
import Verify from "./screens/Verify.jsx";
import Scoring from "./screens/Scoring.jsx";
import Signals from "./screens/Signals.jsx";
import Personalization from "./screens/Personalization.jsx";
import Sequence from "./screens/Sequence.jsx";
import Preview from "./screens/Preview.jsx";
import Pipeline from "./screens/Pipeline.jsx";
import Analytics from "./screens/Analytics.jsx";
import Summary from "./screens/Summary.jsx";

import { parseICP, SAMPLE_BRIEFS } from "./data/icp.js";

const STAGES = [
  { key: "icp", label: "ICP & campaign brief" },
  { key: "sourcing", label: "Lead sourcing" },
  { key: "verify", label: "Clean & verify" },
  { key: "scoring", label: "ICP fit scoring" },
  { key: "signals", label: "Buying signals" },
  { key: "personalization", label: "AI personalization" },
  { key: "sequence", label: "Sequence builder" },
  { key: "preview", label: "Outreach preview" },
  { key: "pipeline", label: "Execution pipeline" },
  { key: "analytics", label: "Analytics & ROI" },
  { key: "summary", label: "Final summary" },
];

function AppInner() {
  const [stage, setStage] = useState("hero"); // "hero" | numeric index
  const [text, setText] = useState(SAMPLE_BRIEFS[0].text);
  const [tone, setTone] = useState("direct");
  const [channel, setChannel] = useState("email");
  const [tier, setTier] = useState("tier-1");
  const [goal, setGoal] = useState("meetings");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const icp = useMemo(() => parseICP(text), [text]);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [stage]);

  const startDemo = () => setStage(0);
  const restartDemo = () => {
    setStage("hero");
    setText(SAMPLE_BRIEFS[0].text);
    setTone("direct");
    setChannel("email");
    setTier("tier-1");
    setGoal("meetings");
  };

  if (stage === "hero") {
    return <Hero onStart={startDemo} />;
  }

  const current = STAGES[stage];
  const isFirst = stage === 0;
  const isLast = stage === STAGES.length - 1;
  const prev = isFirst ? null : () => setStage((s) => s - 1);
  const next = isLast ? null : () => setStage((s) => s + 1);

  const renderScreen = () => {
    switch (current.key) {
      case "icp":
        return (
          <IcpBrief
            text={text}
            setText={setText}
            icp={icp}
            goal={goal}
            setGoal={setGoal}
            onContinue={next}
          />
        );
      case "sourcing":
        return <Sourcing icp={icp} />;
      case "verify":
        return <Verify />;
      case "scoring":
        return <Scoring />;
      case "signals":
        return <Signals />;
      case "personalization":
        return <Personalization tone={tone} setTone={setTone} />;
      case "sequence":
        return <Sequence tier={tier} setTier={setTier} />;
      case "preview":
        return (
          <Preview tone={tone} setTone={setTone} channel={channel} setChannel={setChannel} />
        );
      case "pipeline":
        return <Pipeline />;
      case "analytics":
        return <Analytics />;
      case "summary":
        return <Summary icp={icp} onRestart={restartDemo} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar
        stages={STAGES}
        currentIndex={stage}
        onJump={setStage}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="app-main">
        <Topbar
          title={current.label}
          sub={`${icp.industry} · ${icp.geo}`}
          onMenu={() => setDrawerOpen(true)}
          onRestart={restartDemo}
        />
        <main className="content" id="main-content">
          <div key={current.key} className="rise-in">
            {renderScreen()}
          </div>

          <FootNav
            current={stage + 1}
            total={STAGES.length}
            prev={prev}
            next={current.key === "icp" ? null : next}
            nextLabel={
              isLast
                ? null
                : `Next: ${STAGES[stage + 1].label}`
            }
            nextDisabled={current.key === "icp" && !text.trim()}
          />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
