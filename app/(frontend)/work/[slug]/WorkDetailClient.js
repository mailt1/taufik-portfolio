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

function CaseImage({ image, ratio = "16/9", className = "" }) {
  const media = image && typeof image === "object" ? image : null;
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

// Renders a title split into a roman part + an italic part, e.g. The *brief*.
function DisplayHeading({ title, italic }) {
  const hasTitle = !!(title && String(title).trim());
  const hasItalic = !!(italic && String(italic).trim());
  if (!hasTitle && !hasItalic) return null;
  return (
    <>
      {hasTitle ? title : null}
      {hasItalic ? (
        <>
          {hasTitle ? " " : null}
          <em>{italic}</em>
        </>
      ) : null}
      .
    </>
  );
}

function CaseSection({ subtitle, title, italic, body }) {
  const hasHeading = !!(title || italic);
  return (
    <section className="case-section shell">
      <div className="case-section-head reveal">
        {subtitle && <span className="t-eyebrow">{subtitle}</span>}
        {hasHeading && (
          <h2 className="case-section-heading t-display">
            <DisplayHeading title={title} italic={italic} />
          </h2>
        )}
      </div>
      {body && <p className="case-section-body reveal">{body}</p>}
    </section>
  );
}

function CaseStats({ subtitle, title, italic, items }) {
  const visible = (items || []).filter((s) => s && s.visible !== false);
  if (!visible.length) return null;
  return (
    <section className="case-stats shell reveal">
      <div className="case-stats-head">
        {subtitle && <span className="t-eyebrow">{subtitle}</span>}
        <h3 className="t-display">
          <DisplayHeading title={title} italic={italic} />
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

function ContentBlock({ block }) {
  if (!block || block.visible === false) return null;
  switch (block.blockType) {
    case "textSection":
      return (
        <CaseSection
          subtitle={block.subtitle}
          title={block.title}
          italic={block.italic}
          body={block.body}
        />
      );
    case "image":
      return (
        <div className="case-block shell">
          <CaseImage image={block.image} ratio={block.ratio || "16/9"} />
        </div>
      );
    case "imagePair": {
      if (!block.imageLeft && !block.imageRight) return null;
      const ratio = block.ratio || "1/1";
      return (
        <div className="case-block case-block-2 shell">
          {block.imageLeft && <CaseImage image={block.imageLeft} ratio={ratio} />}
          {block.imageRight && <CaseImage image={block.imageRight} ratio={ratio} />}
        </div>
      );
    }
    case "quote":
      return <CaseQuote quote={block.quote} />;
    case "stats":
      return (
        <CaseStats
          subtitle={block.subtitle}
          title={block.title}
          italic={block.italic}
          items={block.items}
        />
      );
    default:
      return null;
  }
}

export default function WorkDetailClient({ work, works, footer }) {
  useReveal([work.slug]);
  const total = works.length;
  const currentIdx = works.findIndex((w) => w.slug === work.slug);
  const next = works[(currentIdx + 1) % total];
  const blocks = Array.isArray(work.content) ? work.content : [];

  return (
    <article className="case-study">
      <CaseHero work={work} total={total} />

      {blocks.map((block, i) => (
        <ContentBlock key={block.id || i} block={block} />
      ))}

      <NextProject next={next} />

      <Footer email={footer?.email} socials={footer?.socials} />
    </article>
  );
}
