import React from "react";
import { Button } from "./Primitives.jsx";

export default function FootNav({ current, total, prev, next, prevLabel, nextLabel, nextDisabled }) {
  return (
    <div className="foot-nav">
      <div>
        {prev && (
          <Button variant="ghost" iconLeft="arrowLeft" onClick={prev}>
            {prevLabel || "Back"}
          </Button>
        )}
      </div>
      <div className="foot-nav__progress">
        Step <b>{current}</b> of <b>{total}</b>
      </div>
      <div>
        {next && (
          <Button variant="primary" iconRight="arrowRight" onClick={next} disabled={nextDisabled}>
            {nextLabel || "Continue"}
          </Button>
        )}
      </div>
    </div>
  );
}
