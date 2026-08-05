import { useState } from "react";
import "./HoverHotspot.css";

interface Props {
  readonly label: string;
  readonly left: string;
  readonly top: string;
  readonly width: string;
  readonly height: string;
  /** Any CSS color value (hex, named, rgb…). Used for the glow, background tint, and preview border. */
  readonly color: string;
  readonly previewSrc?: string;
  readonly previewAlt?: string;
  readonly previewSide?: "left" | "right";
}

/**
 * An accessible, circular hover zone that shows a glow effect and
 * an optional cinematic preview image while focused or hovered.
 * Pass a single `color` — the component derives glow opacity (60 %)
 * and background tint (8 %) automatically via color-mix.
 */
export default function HoverHotspot({
  label,
  left,
  top,
  width,
  height,
  color,
  previewSrc,
  previewAlt,
  previewSide = "left",
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <button
        type="button"
        className="hotspot"
        aria-label={label}
        style={
          {
            left,
            top,
            width,
            height,
            "--hotspot-color": color,
          } as React.CSSProperties
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      />
      {hovered && previewSrc && (
        <img
          src={previewSrc}
          alt={previewAlt ?? label}
          draggable={false}
          className={`hotspot-preview hotspot-preview--${previewSide}`}
          style={{ "--hotspot-color": color } as React.CSSProperties}
        />
      )}
    </>
  );
}


