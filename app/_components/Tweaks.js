"use client";

import { useEffect } from "react";
import {
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakColor,
  TweakToggle,
  useTweaks,
} from "./TweaksPanel";
import { TweaksContext } from "./TweaksContext";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  theme: "light",
  accent: "#c2562e",
  motion: "moderate",
  marquee: true,
} /*EDITMODE-END*/;

export default function TweaksProvider({ children }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "theme-dark",
      t.theme === "dark"
    );
  }, [t.theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  useEffect(() => {
    window.__motionIntensity = t.motion;
    if (window.__resetLenis) window.__resetLenis(t.motion);
    document.documentElement.dataset.motion = t.motion;
  }, [t.motion]);

  return (
    <TweaksContext.Provider value={{ marquee: t.marquee }}>
      {children}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Mode"
            value={t.theme}
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
            ]}
            onChange={(v) => setTweak("theme", v)}
          />
          <TweakColor
            label="Accent"
            value={t.accent}
            options={["#c2562e", "#3d5a3a", "#2f4a8a", "#7a5cff", "#1a1a1a"]}
            onChange={(v) => setTweak("accent", v)}
          />
        </TweakSection>

        <TweakSection label="Motion">
          <TweakRadio
            label="Scroll"
            value={t.motion}
            options={[
              { value: "subtle", label: "Subtle" },
              { value: "moderate", label: "Moderate" },
              { value: "heavy", label: "Heavy" },
            ]}
            onChange={(v) => setTweak("motion", v)}
          />
          <TweakToggle
            label="Marquee strip"
            value={t.marquee}
            onChange={(v) => setTweak("marquee", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </TweaksContext.Provider>
  );
}
