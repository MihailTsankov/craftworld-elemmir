import "./Spaceship.css";

interface Props {
  /** CSS length for orbit radius, e.g. "32vw" */
  radius: string;
  /** scaleY of the orbital plane to produce an ellipse, e.g. 0.28 */
  tilt: number;
  /** Full orbit duration in seconds */
  duration: number;
  /** Starting angle offset (degrees) so ships don't begin at the same spot */
  startAngle?: number;
  /** Ship SVG width in px */
  size?: number;
  /** Orbit center — percentage of viewport (default: craftworld center) */
  centerX?: number;
  centerY?: number;
}

export default function Spaceship({
  radius,
  tilt,
  duration,
  startAngle = 0,
  size = 48,
  centerX = 35,
  centerY = 50,
}: Props) {
  const delay = `-${(startAngle / 360) * duration}s`;

  return (
    <div
      className="orbital-plane"
      style={{
        left: `${centerX}%`,
        top: `${centerY}%`,
        transform: `scaleY(${tilt})`,
      }}
    >
      <div
        className="orbit-pivot"
        style={{
          ["--radius" as string]: radius,
          animationDuration: `${duration}s`,
          animationDelay: delay,
        }}
      >
        <div
          className="ship"
          style={{ transform: `translateX(-50%) translateY(-50%) scaleY(${1 / tilt})` }}
        >
          <EldarCruiser size={size} />
        </div>
      </div>
    </div>
  );
}

function EldarCruiser({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 2.4}
      viewBox="0 0 40 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hull */}
      <path
        d="M20 2 L30 28 L28 62 L20 74 L12 62 L10 28 Z"
        fill="#c8dff5"
        stroke="#8ab8e8"
        strokeWidth="1.2"
      />
      {/* Wraithbone sail */}
      <path d="M20 10 L20 52" stroke="#f0da80" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 14 L33 36 L20 44 Z" fill="#f0da80" opacity="0.8" />
      <path d="M20 14 L7 36 L20 44 Z" fill="#f0da80" opacity="0.55" />
      {/* Engine glow */}
      <ellipse cx="20" cy="76" rx="6"   ry="3.5" fill="#7ad4ff" opacity="0.95" />
      <ellipse cx="20" cy="80" rx="4"   ry="6"   fill="#4ab8ff" opacity="0.65" />
      <ellipse cx="20" cy="87" rx="2"   ry="9"   fill="#c0eaff" opacity="0.4"  />
    </svg>
  );
}