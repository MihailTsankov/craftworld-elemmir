import { useState } from "react";
import DecodingText from "./DecodingText";
import { fragmentText } from "../puzzle/fragments";
import { usePuzzle } from "../puzzle/puzzleContext";
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
  /** Caption shown above the preview image; decodes from Eldar script into readable text. */
  readonly text?: string;
  /**
   * Marks this hotspot as the keeper of a prophecy fragment. Its caption stays
   * in unreadable runes until the player clicks the hotspot to collect it.
   */
  readonly fragmentId?: string;
}

const UNDECIPHERED_SR_TEXT =
  "An undeciphered rune fragment. Activate this hotspot to record it in the Farseer's Codex.";

/**
 * An accessible, circular hover zone that shows a glow effect and
 * an optional cinematic preview image while focused or hovered.
 * Pass a single `color` — the component derives glow opacity (60 %)
 * and background tint (8 %) automatically via color-mix.
 *
 * With `fragmentId` the hotspot also becomes a puzzle pickup: its caption is
 * held in Aelfa runes until it is clicked, which adds the fragment to the
 * Farseer's Codex.
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
  text,
  fragmentId,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const { isCollected, collect } = usePuzzle();

  const collected = fragmentId ? isCollected(fragmentId) : false;
  const caption = fragmentId ? (text ?? fragmentText(fragmentId)) : text;
  const decoded = !fragmentId || collected;

  const className = [
    "hotspot",
    fragmentId ? "hotspot--fragment" : "",
    fragmentId && collected ? "hotspot--collected" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={
          fragmentId && !collected ? `${label} — an unread rune fragment glimmers here` : label
        }
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
        onClick={fragmentId ? () => collect(fragmentId) : undefined}
      />
      {hovered && (previewSrc || caption) && (
        <div
          className={`hotspot-card hotspot-card--${previewSide}`}
          style={{ "--hotspot-color": color } as React.CSSProperties}
        >
          {caption && (
            <DecodingText
              key={`${caption}:${decoded}`}
              text={caption}
              autoDecode={decoded}
              srText={decoded ? undefined : UNDECIPHERED_SR_TEXT}
            />
          )}
          {previewSrc && (
            <img
              src={previewSrc}
              alt={previewAlt ?? label}
              draggable={false}
              className="hotspot-preview"
            />
          )}
        </div>
      )}
    </>
  );
}
