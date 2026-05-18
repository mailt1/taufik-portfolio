"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem("preloaded") === "1") {
      setDone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.__lenis?.stop?.();

    let value = 0;
    let timer;
    const tick = () => {
      const remaining = 100 - value;
      const step = Math.max(1.2, Math.random() * Math.max(3, remaining / 6));
      value = Math.min(100, value + step);
      setPct(Math.floor(value));
      if (value < 100) {
        timer = setTimeout(tick, 70 + Math.random() * 110);
      } else {
        setTimeout(() => setLeaving(true), 380);
      }
    };
    tick();

    return () => {
      if (timer) clearTimeout(timer);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const id = setTimeout(() => {
      sessionStorage.setItem("preloaded", "1");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.__lenis?.start?.();
      setDone(true);
    }, 950);
    return () => clearTimeout(id);
  }, [leaving]);

  if (done) return null;

  return (
    <div
      className={`preloader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="preloader-corner preloader-corner--top">
        <div className="preloader-name">Taufik Ismail</div>
        <div className="preloader-meta">Portfolio &mdash; 2026</div>
      </div>
      <div className="preloader-corner preloader-corner--bottom">
        <div className="preloader-pct">{String(pct).padStart(3, "0")}%</div>
      </div>
    </div>
  );
}
