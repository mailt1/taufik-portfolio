import { Fragment } from "react";

function LogoItem({ logo }) {
  const img = logo?.image && typeof logo.image === "object" ? logo.image : null;
  const url = img?.url || null;
  const alt = img?.alt || logo?.name || "";
  return (
    <span className="logo-mark">
      {url ? (
        <img
          src={url}
          alt={alt}
          className="logo-img"
          loading="lazy"
        />
      ) : (
        <span>{logo?.name}</span>
      )}
    </span>
  );
}

export default function Marquee({ logos }) {
  if (!logos || logos.length === 0) return null;
  const loop = [...logos, ...logos];
  return (
    <div
      className="marquee marquee-logos"
      aria-label="Selected clients"
      role="region"
    >
      <div className="marquee-track">
        {loop.map((l, i) => (
          <Fragment key={i}>
            <LogoItem logo={l} />
            <span className="ast" aria-hidden="true">
              ✻
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
