import Link from "next/link";

export default function WorkCard({ w, i }) {
  const slot = w?.media?.thumbnail;
  const visible = !slot || slot.visible !== false;
  const media = visible && slot && typeof slot.image === "object" ? slot.image : null;
  const thumbUrl = media?.url || null;
  const thumbAlt = media?.alt || w.title;

  return (
    <Link
      href={`/work/${w.slug}`}
      className={`work-card reveal ${i % 2 === 1 ? "is-offset" : ""}`}
    >
      <div className="wc-thumb">
        {thumbUrl ? (
          <img
            src={thumbUrl}
            alt={thumbAlt}
            className="wc-img"
            loading="lazy"
          />
        ) : (
          <div className="thumb-placeholder" />
        )}
        <div className="wc-overlay">
          <span className="wc-cta">
            View case study <span className="arr">↗</span>
          </span>
        </div>
        <div className="wc-tag">
          <span>{w.client}</span>
          <span className="dot-tiny" />
          <span>{w.year}</span>
        </div>
      </div>
      <div className="wc-caption">
        <div className="wc-title">
          <span className="wc-idx">({w.idx})</span>
          <span className="wc-name">{w.title}</span>
          <em>— {w.italic}</em>
        </div>
        <div className="wc-foot">
          <span>{w.services}</span>
          <span className="wc-arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
