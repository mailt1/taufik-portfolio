"use client";

import { useEffect } from "react";

export default function LenisProvider() {
  useEffect(() => {
    let lenis;
    let rafId;
    let cancelled = false;

    const start = async (intensity) => {
      if (cancelled) return;
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      const presets = {
        subtle: { duration: 0.9, wheelMultiplier: 1.0 },
        moderate: { duration: 1.4, wheelMultiplier: 1.0 },
        heavy: { duration: 2.0, wheelMultiplier: 0.9 },
      };
      const p = presets[intensity] || presets.moderate;
      lenis = new Lenis({
        duration: p.duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: p.wheelMultiplier,
      });
      window.__lenis = lenis;
      const raf = (time) => {
        if (!lenis) return;
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    window.__resetLenis = start;
    start(window.__motionIntensity || "moderate");

    // In-page anchor smooth-scroll. Internal page nav uses Next <Link>, so
    // this only fires for plain <a href="#id"> within the same route.
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target && window.__lenis) {
        e.preventDefault();
        window.__lenis.scrollTo(target, { offset: -20 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelled = true;
      document.removeEventListener("click", onClick);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
      delete window.__lenis;
      delete window.__resetLenis;
    };
  }, []);

  return null;
}
