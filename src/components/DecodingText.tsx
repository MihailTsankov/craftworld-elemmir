import { useEffect, useState } from "react";
import "./DecodingText.css";

interface Props {
  readonly text: string;
  /** Milliseconds each character takes to resolve. */
  readonly speed?: number;
  /** Milliseconds to wait before the decoding animation starts. */
  readonly delay?: number;
  /**
   * When false the text stays in unreadable Aelfa runes forever — used for
   * prophecy fragments the player has not collected yet.
   */
  readonly autoDecode?: boolean;
  /** Replaces the screen-reader copy, e.g. while the text is undeciphered. */
  readonly srText?: string;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Splits `text` into whitespace and word chunks, keeping absolute offsets. */
function segments(text: string) {
  const parts = text.split(/(\s+)/).filter(Boolean);
  let offset = 0;

  return parts.map((value) => {
    const start = offset;
    offset += value.length;
    return { value, start, isSpace: /^\s+$/.test(value) };
  });
}

/**
 * Renders `text` in the Aelfa Eldar script and resolves it into readable
 * Alice, one character at a time from left to right.
 *
 * Aelfa is a Latin-substitution rune font, so the string never changes —
 * only the font-family of each character does.
 *
 * Every character sits in a cell sized by an invisible Alice copy of itself,
 * and the visible glyph is overlaid on top of that cell. The oversized runes
 * therefore overflow instead of growing the line boxes, so the caption keeps
 * the same footprint from the first frame to the last.
 *
 * Remount (e.g. `key={text}`) to replay the animation for new text.
 */
export default function DecodingText({
  text,
  speed = 28,
  delay = 1000,
  autoDecode = true,
  srText,
}: Props) {
  const reducedMotion = prefersReducedMotion();
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!autoDecode || reducedMotion) return;

    let intervalId: number | undefined;
    let n = 0;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        n += 1;
        setRevealed(n);
        if (n >= text.length) window.clearInterval(intervalId);
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [text.length, speed, delay, reducedMotion, autoDecode]);

  // Held fragments never resolve; reduced motion skips straight to plain text.
  let decodedUpTo = revealed;
  if (!autoDecode) decodedUpTo = 0;
  else if (reducedMotion) decodedUpTo = text.length;

  return (
    <p className="decoding-text">
      <span aria-hidden="true">
        {segments(text).map(({ value, start, isSpace }) =>
          isSpace ? (
            <span key={start}>{value}</span>
          ) : (
            <span key={start} className="decoding-text__word">
              {Array.from(value).map((char, i) => (
                <span key={start + i} className="decoding-text__char">
                  <span className="decoding-text__sizer">{char}</span>
                  <span
                    className={
                      start + i < decodedUpTo
                        ? "decoding-text__glyph decoding-text__glyph--decoded"
                        : "decoding-text__glyph decoding-text__glyph--encoded"
                    }
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>
          ),
        )}
      </span>
      <span className="decoding-text__sr">{srText ?? text}</span>
    </p>
  );
}
