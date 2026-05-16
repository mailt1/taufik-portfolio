"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Lenis controls scroll via its own internal target, so Next's default
// scroll-to-top on route change is a no-op once Lenis takes over. Reset
// Lenis's target explicitly whenever the pathname changes.
export default function ScrollReset() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    // Skip the reset when something else (Header nav, URL hash) wants to scroll
    // to a specific section after this navigation.
    if (window.__pendingScroll) return;
    if (window.location.hash && window.location.hash !== "#") return;
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
