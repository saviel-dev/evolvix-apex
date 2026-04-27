/**
 * Minimalist EVOLVIX line-mark — a circle with a precise inner crosshair
 * and an "E" geometry, drawn purely with strokes (used for loader animation).
 */
export function EvolvixMark({
  size = 96,
  className,
  strokeWidth = 1.25,
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      aria-hidden
    >
      {/* outer circle */}
      <circle cx="50" cy="50" r="46" />
      {/* inner ring */}
      <circle cx="50" cy="50" r="32" opacity="0.5" />
      {/* horizontal axis */}
      <line x1="4" y1="50" x2="96" y2="50" />
      {/* vertical axis */}
      <line x1="50" y1="18" x2="50" y2="82" opacity="0.5" />
      {/* E geometry */}
      <path d="M34 30 L66 30 M34 30 L34 70 M34 50 L60 50 M34 70 L66 70" />
    </svg>
  );
}
