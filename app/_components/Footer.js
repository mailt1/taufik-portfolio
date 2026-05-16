"use client";

import { useClock } from "../_hooks/useClock";

const DEFAULT_EMAIL = "taufikismail891@gmail.com";
const DEFAULT_SOCIALS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/taufikismails/" },
  { label: "Instagram", url: "https://www.instagram.com/taufik.ismails/" },
  { label: "Dribbble", url: "https://dribbble.com/Mailtfk" },
];

export default function Footer({ email, socials }) {
  const time = useClock();
  const mailTo = email || DEFAULT_EMAIL;
  const links =
    Array.isArray(socials) && socials.length ? socials : DEFAULT_SOCIALS;
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-cta">
        <span className="t-eyebrow">Let's make something</span>
        <h2 className="footer-headline reveal">
          Have an idea?
          <br />
          <em>Let's talk.</em>
        </h2>
        <div className="email-row">
          <a className="email-link" href={`mailto:${mailTo}`}>
            {mailTo} <span className="arr">↗</span>
          </a>

          <ul className="socials">
            {links.map((s, i) => (
              <li key={s.url || i}>
                <a href={s.url} target="_blank" rel="noopener">
                  {s.label} <span className="arr">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-foot" style={{ display: "none" }}>
          <div>© 2026 — Taufik Ismail. All rights reserved.</div>
          <div className="time-pill">
            <span className="dot-tiny" /> Jakarta · {time} WIB
          </div>
          <div>Built in 2026 — v1.0</div>
        </div>
      </div>
    </footer>
  );
}
