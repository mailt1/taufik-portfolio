export default function MediaTag({
  media,
  alt = "",
  className = "",
  preferThumbnail = false,
  videoProps = {},
}) {
  if (!media || typeof media !== "object") return null;

  const isVideo =
    typeof media.mimeType === "string" && media.mimeType.startsWith("video/");

  const src =
    (preferThumbnail && media.sizes?.thumbnail?.url) || media.url || null;
  if (!src) return null;

  if (isVideo) {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        {...videoProps}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
