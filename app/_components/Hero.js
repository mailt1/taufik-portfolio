"use client";

import { useClock } from "../_hooks/useClock";
import ArrowIcon from "./ArrowIcon";

const DEFAULT_TAGLINE =
  "Senior UI designer crafting pixel-perfect interfaces and scalable systems.";

export default function Hero({ tagline }) {
  const time = useClock();
  return (
    <section className="hero shell" id="top">
      <h1 className="hero-headline t-display" aria-label={tagline || DEFAULT_TAGLINE}>
        <div className="row">
          <span>UI/UX</span>
        </div>
        <div className="row">
          <span>
            <em className="t-italic">Designer</em>&nbsp;crafting
          </span>
        </div>
        <div className="row right">
          <span>pixel-perfect</span>
        </div>
        <div className="row">
          <span>interfaces &amp;</span>
        </div>
        <div className="row">
          <span>
            scalable <em className="t-italic">systems.</em>
          </span>
        </div>
      </h1>

      <div className="hero-foot">
        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="line" />
          <ArrowIcon direction="down" />
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="t-eyebrow" style={{ marginBottom: 6 }}>
            Jakarta — WIB
          </div>
          <div className="t-mono" style={{ color: "var(--fg)" }}>
            {time}
          </div>
        </div>
      </div>
    </section>
  );
}
