"use client";

import { useEffect } from "react";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Works from "./Works";
import About from "./About";
import Footer from "./Footer";
import { useReveal } from "../_hooks/useReveal";
import { useTweaksContext } from "./TweaksContext";

export default function HomeClient({ works, settings, footer, logos }) {
  const { marquee } = useTweaksContext();
  useReveal([marquee, works.length]);

  useEffect(() => {
    const scrollToId = (id) => {
      requestAnimationFrame(() => {
        const el = id === "top" ? document.body : document.getElementById(id);
        if (!el) return;
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: id === "top" ? 0 : -20 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    };

    const pending = window.__pendingScroll;
    if (pending) {
      window.__pendingScroll = null;
      scrollToId(pending);
      return;
    }
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) scrollToId(hash);
  }, []);

  return (
    <>
      <Hero tagline={settings?.hero?.tagline} />
      {marquee && <Marquee logos={logos} />}
      <Works works={works} />
      <About lead={settings?.about?.lead} body={settings?.about?.body} />
      <Footer email={footer?.email} socials={footer?.socials} />
    </>
  );
}
