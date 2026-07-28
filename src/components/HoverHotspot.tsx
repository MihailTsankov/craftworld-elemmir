import { useState } from "react";
import "./HoverHotspot.css";

interface Props {
  readonly label: string;
  readonly left: string;
  readonly top: string;
  readonly width: string;
  readonly height: string;
  readonly glowColor: string;
  readonly hoverBg: string;
  readonly previewSrc?: string;
  readonly previewAlt?: string;
  readonly previewSide?: "left" | "right";
  readonly previewBorderColor?: string;
}

/**
 * An accessible, circular hover zone that shows a glow effect and
 * an optional cinematic preview image while focused or hovered.
 */
export default function HoverHotspot({
  label,
  left,
  top,
  width,
  height,
  glowColor,
  hoverBg,
  previewSrc,
  previewAlt,
  previewSide = "left",
  previewBorderColor,
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
            "--hotspot-glow": glowColor,
            "--hotspot-bg": hoverBg,
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
          style={
            { "--preview-border": previewBorderColor ?? glowColor } as React.CSSProperties
          }
        />
      )}
    </>
  );
}


