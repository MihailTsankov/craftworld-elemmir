import { useCallback, useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import DecodingText from "./DecodingText";
import { FRAGMENTS, FRAGMENT_COUNT, assembleProphecy } from "../puzzle/fragments";
import { usePuzzle } from "../puzzle/puzzleContext";
import "./FarseerCodex.css";

/** Rune-looking stand-in shown for fragments the player has not found yet. */
const UNKNOWN_FRAGMENT = "\u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022";

/**
 * Corner panel tracking the Rune Cipher Fragments puzzle. Collapsed it is a
 * soulstone sigil with a `n/6` counter; expanded it lists the prophecy in lore
 * order and, once complete, links to the hidden chamber.
 */
export default function FarseerCodex() {
  const { collected, isComplete, justCompleted, acknowledgeCompletion, reset } =
    usePuzzle();
  const [manuallyOpen, setManuallyOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const panelId = useId();

  // The final fragment throws the codex open until the player acknowledges it.
  const open = manuallyOpen || justCompleted;
  const peek = hovered && !open;

  const close = useCallback(() => {
    acknowledgeCompletion();
    setManuallyOpen(false);
    setHovered(false);
  }, [acknowledgeCompletion]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const toggle = () => {
    if (open) close();
    else setManuallyOpen(true);
  };

  return (
    <div
      className={`codex${justCompleted ? " codex--revealed" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        className="codex__sigil"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Farseer's Codex, ${collected.size}/${FRAGMENT_COUNT} fragments found`}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onClick={toggle}
      >
        <span className="codex__sigil-mark" aria-hidden="true" />
      </button>

      {peek && (
        <div className="codex__peek" aria-hidden="true">
          <span className="codex__peek-label">Farseer&rsquo;s Codex</span>
          <span className="codex__peek-count">
            {collected.size}/{FRAGMENT_COUNT}
          </span>
        </div>
      )}

      {open && (
        <div id={panelId} className="codex__panel">
          <h2 className="codex__title">Farseer&rsquo;s Codex</h2>
          <p className="codex__hint">
            {isComplete
              ? "The prophecy is whole."
              : `${FRAGMENT_COUNT - collected.size} rune fragments still lie unread among the domes.`}
          </p>

          <ol className="codex__list">
            {FRAGMENTS.map((fragment) => {
              const found = collected.has(fragment.id);
              return (
                <li
                  key={fragment.id}
                  className={`codex__item${found ? " codex__item--found" : ""}`}
                >
                  {found ? fragment.text : UNKNOWN_FRAGMENT}
                </li>
              );
            })}
          </ol>

          {isComplete && (
            <div className="codex__prophecy">
              <DecodingText text={assembleProphecy()} delay={400} speed={18} />
              <Link className="codex__link" to="/prophecy" onClick={close}>
                Walk the hidden path
              </Link>
            </div>
          )}

          <button type="button" className="codex__reset" onClick={reset}>
            Forget the prophecy
          </button>
        </div>
      )}
    </div>
  );
}
