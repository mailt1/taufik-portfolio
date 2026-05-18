const PATHS = {
  "up-right": "M5 13L13 5M13 5H7M13 5V11",
  down: "M9 3V15M9 15L4 10M9 15L14 10",
  left: "M15 9H3M3 9L8 14M3 9L8 4",
  right: "M3 9H15M15 9L10 4M15 9L10 14",
};

export default function ArrowIcon({
  direction = "up-right",
  size = "1em",
  strokeWidth = 1.4,
  className = "",
  ariaHidden = true,
}) {
  const d = PATHS[direction] || PATHS["up-right"];
  return (
    <svg
      className={`icon icon-arrow icon-arrow--${direction} ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden={ariaHidden}
      focusable="false"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
