import "./Spaceship.css";
import crimsonHunterImg from "../assets/craftworld-elemmir-crimson-hunter.png";
import crimsonHunterReverseImg from "../assets/craftworld-elemmir-crimson-hunter-reverse.png";

type Props = Readonly<{
  /** CSS length for orbit radius, e.g. "32vw" */
  radius: string;
  /** scaleY of the orbital plane to produce an ellipse, e.g. 0.28 */
  tilt: number;
  /** Full orbit duration in seconds */
  duration: number;
  /** Starting angle offset (degrees) so ships don't begin at the same spot */
  startAngle?: number;
  /** Ship image width in px before perspective scaling */
  size?: number;
  /** Minimum scale when the ship is farthest away on the left side */
  minScale?: number;
  /** Maximum scale when the ship is closest on the right side */
  maxScale?: number;
  /** Orbit center — percentage of viewport (default: craftworld center) */
  centerX?: number;
  centerY?: number;
}>;

export default function Spaceship(props: Props) {
  const {
    radius,
    tilt,
    duration,
    startAngle = 0,
    size = 48,
    minScale = 0.15,
    maxScale = 1,
    centerX = 35,
    centerY = 50,
  } = props;
  const delay = `-${(startAngle / 360) * duration}s`;
  const shipStyle = {
    width: `${size}px`,
    ["--min-scale" as string]: minScale,
    ["--max-scale" as string]: maxScale,
  };

  return (
    <div
      className="orbital-plane"
      style={{
        left: `${centerX}%`,
        top: `${centerY}%`,
      }}
    >
      <div
        className="orbit-pivot"
        style={{
          ["--radius" as string]: radius,
          ["--tilt" as string]: tilt,
          ["--orbit-angle" as string]: `${startAngle}deg`,
          ["--orbit-duration" as string]: `${duration}s`,
          ["--orbit-delay" as string]: delay,
          animationDuration: `${duration}s`,
          animationDelay: delay,
        }}
      >
        <div className="ship" style={{ transform: `translateX(-50%) translateY(-50%)` }}>
          {/* going LEFT (bottom half, 0%→50% of orbit) */}
          <img
            className="ship-visual ship-visual--going-left"
            src={crimsonHunterImg}
            alt="Crimson Hunter"
            draggable={false}
            style={{ ...shipStyle, animationDuration: `${duration}s`, animationDelay: delay }}
          />
          {/* going RIGHT (top half, 50%→100% of orbit) */}
          <img
            className="ship-visual ship-visual--going-right"
            src={crimsonHunterReverseImg}
            alt=""
            aria-hidden={true}
            draggable={false}
            style={{ ...shipStyle, animationDuration: `${duration}s`, animationDelay: delay }}
          />
        </div>
      </div>
    </div>
  );
}

