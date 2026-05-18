"use client";

import Link from "next/link";
import ArrowIcon from "../../../_components/ArrowIcon";
import Footer from "../../../_components/Footer";
import MediaTag from "../../../_components/MediaTag";
import { useReveal } from "../../../_hooks/useReveal";

function CaseHero({ work, total }) {
  return (
    <section className="case-hero shell">
      <div className="case-hero-top reveal">
        <Link href="/" className="back-link">
          <ArrowIcon direction="left" className="arr" /> All works
        </Link>
        <span className="t-eyebrow">
          {work.idx} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="case-tag reveal">
        <span className="t-eyebrow">{work.tag}</span>
        <span className="dot-tiny" />
        <span className="t-eyebrow">{work.year}</span>
      </div>

      <h1 className="case-title t-display reveal">
        {work.title}
        <br />
        <em>— {work.italic}.</em>
      </h1>

      <p className="case-tagline reveal">{work.tagline}</p>

      <div className="case-meta reveal">
        <div className="case-meta-row">
          <span className="t-eyebrow">Client</span>
          <span>{work.client}</span>
        </div>
        <div className="case-meta-row case-meta-wide">
          <span className="t-eyebrow">Services</span>
          <span>{work.services}</span>
        </div>
        <div className="case-meta-row">
          <span className="t-eyebrow">Sector</span>
          <span>{work.sector}</span>
        </div>
      </div>
    </section>
  );
}

function CaseImage({ slot, ratio = "16/9", className = "" }) {
  const media = slot && typeof slot.image === "object" ? slot.image : null;
  const alt = media?.alt || "";
  return (
    <div
      className={`case-image ${className} reveal`}
      style={{ aspectRatio: ratio }}
    >
      {media ? (
        <MediaTag media={media} alt={alt} className="case-image-media" />
      ) : (
        <div className="thumb-placeholder" />
      )}
    </div>
  );
}

function CaseSection({ eyebrow, heading, body, children }) {
  return (
    <section className="case-section shell">
      <div className="case-section-head reveal">
        {eyebrow && <span className="t-eyebrow">{eyebrow}</span>}
        {heading && (
          <h2 className="case-section-heading t-display">{heading}</h2>
        )}
      </div>
      {body && <p className="case-section-body reveal">{body}</p>}
      {children}
    </section>
  );
}

function CaseStats({ stats }) {
  const visible = (stats || []).filter((s) => s && s.visible !== false);
  if (!visible.length) return null;
  return (
    <section className="case-stats shell reveal">
      <div className="case-stats-head">
        <span className="t-eyebrow">Outcome</span>
        <h3 className="t-display">
          By the <em>numbers.</em>
        </h3>
      </div>
      <div className="case-stats-grid">
        {visible.map((s, i) => (
          <div className="stat-cell" key={s.id || i}>
            <div className="stat-value t-display">{s.value}</div>
            <div className="stat-label t-eyebrow">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseQuote({ quote }) {
  if (!quote) return null;
  return (
    <section className="case-quote shell reveal">
      <span className="quote-mark">"</span>
      <blockquote className="t-display">{quote}</blockquote>
    </section>
  );
}

function NextProject({ next }) {
  return (
    <section className="case-next shell">
      <Link href={`/work/${next.slug}`} className="next-link reveal">
        <div className="next-meta">
          <span className="t-eyebrow">Next project</span>
          <span className="t-eyebrow">{next.idx} / 06</span>
        </div>
        <div className="next-title t-display">
          <span>{next.title}</span>
          <em>— {next.italic}</em>
          <ArrowIcon direction="up-right" className="next-arrow" />
        </div>
        <div className="next-meta">
          <span className="t-mono">
            {next.tag} · {next.year}
          </span>
          <span className="t-mono">{next.role}</span>
        </div>
      </Link>
    </section>
  );
}

const isVisible = (slot) => !!slot && slot.visible !== false;

export default function WorkDetailClient({ work, works, footer }) {
  useReveal([work.slug]);
  const total = works.length;
  const currentIdx = works.findIndex((w) => w.slug === work.slug);
  const next = works[(currentIdx + 1) % total];
  const m = work.media || {};

  return (
    <article className="case-study">
      <CaseHero work={work} total={total} />

      {isVisible(m.b1) && (
        <div className="case-block shell">
          <CaseImage slot={m.b1} ratio="16/8" />
        </div>
      )}

      {isVisible(m.b2) && (
        <div className="case-block shell">
          <CaseImage slot={m.b2} ratio="16/10" />
        </div>
      )}

      <CaseSection
        eyebrow="Overview"
        heading={
          <>
            The <em>brief</em>.
          </>
        }
        body={work.overview}
      />

      {(isVisible(m.b3a) || isVisible(m.b3b)) && (
        <div className="case-block case-block-2 shell">
          {isVisible(m.b3a) && <CaseImage slot={m.b3a} ratio="1/1" />}
          {isVisible(m.b3b) && <CaseImage slot={m.b3b} ratio="1/1" />}
        </div>
      )}

      {isVisible(m.b4) && (
        <div className="case-block shell">
          <CaseImage slot={m.b4} ratio="16/10" />
        </div>
      )}

      <CaseSection
        eyebrow="Context"
        heading={
          <>
            The <em>problem</em>.
          </>
        }
        body={work.problem}
      />

      {isVisible(m.b5) && (
        <div className="case-block shell">
          <CaseImage slot={m.b5} ratio="16/10" />
        </div>
      )}

      <CaseSection
        eyebrow="Approach"
        heading={
          <>
            The <em>solution</em>.
          </>
        }
        body={work.approach}
      />

      {(isVisible(m.b6a) || isVisible(m.b6b)) && (
        <div className="case-block case-block-2 shell">
          {isVisible(m.b6a) && <CaseImage slot={m.b6a} ratio="1/1" />}
          {isVisible(m.b6b) && <CaseImage slot={m.b6b} ratio="1/1" />}
        </div>
      )}

      <CaseQuote quote={work.quote} />

      {isVisible(m.b7) && (
        <div className="case-block shell">
          <CaseImage slot={m.b7} ratio="4/3" />
        </div>
      )}

      {isVisible(m.b8) && (
        <div className="case-block shell">
          <CaseImage slot={m.b8} ratio="4/3" />
        </div>
      )}

      <CaseStats stats={work.stats} />

      <NextProject next={next} />

      <Footer email={footer?.email} socials={footer?.socials} />
    </article>
  );
}
