"use client";

import { usePathname, useRouter } from "next/navigation";

const LOGO_NAME = "Taufik Ismail";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const go = (e, id) => {
    e.preventDefault();
    const onHome = pathname === "/";
    if (onHome) {
      const el = id === "top" ? document.body : document.getElementById(id);
      if (el && window.__lenis) {
        window.__lenis.scrollTo(el, { offset: id === "top" ? 0 : -20 });
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.__pendingScroll = id;
      router.push("/");
    }
  };

  return (
    <header className="site-header">
      <a
        href="/"
        className="logo"
        aria-label="Taufik Ismail home"
        onClick={(e) => go(e, "top")}
      >
        <span className="dot" />
        <span className="logo-word" aria-hidden="true">
          {LOGO_NAME.split("").map((ch, i) => (
            <span
              key={i}
              className={`flip-letter${ch === " " ? " is-space" : ""}`}
              style={{ "--i": i }}
            >
              <span className="flip-top">{ch === " " ? " " : ch}</span>
              <span className="flip-bot">{ch === " " ? " " : ch}</span>
            </span>
          ))}
        </span>
        <em></em>
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="/#works" onClick={(e) => go(e, "works")}>
          Works
        </a>
        <a href="/#about" onClick={(e) => go(e, "about")}>
          About
        </a>
        <a href="/#contact" onClick={(e) => go(e, "contact")}>
          Contact
        </a>
      </nav>
      <a
        href="https://drive.google.com/file/d/1sSiEXzDWBcgCi2a6N9AhnYETLaePDcuO/view?usp=sharing"
        className="resume-link"
        target="_blank"
        rel="noopener"

      >
        Resume <span className="arr">↗</span>
      </a>
    </header>
  );
}
