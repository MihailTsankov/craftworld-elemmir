import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";
import { FRAGMENT_COUNT, FRAGMENTS } from "./fragments";
import { PuzzleContext, type PuzzleState } from "./puzzleContext";

const STORAGE_KEY = "elemmir.puzzle.v1";

const VALID_IDS = new Set(FRAGMENTS.map((fragment) => fragment.id));

/** Reads collected ids from localStorage, tolerating absent or corrupt data. */
function loadCollected(): Set<string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(
      parsed.filter((id): id is string => typeof id === "string" && VALID_IDS.has(id)),
    );
  } catch {
    return new Set();
  }
}

/** Persists collected ids; storage may be unavailable in private mode. */
function saveCollected(collected: ReadonlySet<string>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...collected]));
  } catch {
    /* Progress stays in memory for this session only. */
  }
}

/** Holds the Rune Cipher Fragments puzzle progress for the whole app. */
export default function PuzzleProvider({ children }: { children: ReactNode }) {
  const [collected, setCollected] = useState<ReadonlySet<string>>(loadCollected);
  const [justCompleted, setJustCompleted] = useState(false);
  const isComplete = collected.size >= FRAGMENT_COUNT;
  // Mirror of `collected` so collect() can build the next set without a
  // functional update, keeping the completion check out of a render pass.
  const collectedRef = useRef(collected);

  const collect = useCallback((id: string) => {
    if (!VALID_IDS.has(id)) return;

    const previous = collectedRef.current;
    if (previous.has(id)) return;

    const next = new Set(previous);
    next.add(id);
    collectedRef.current = next;
    saveCollected(next);
    setCollected(next);

    // Only a freshly completed prophecy triggers the reveal — progress
    // restored from storage stays quiet.
    if (next.size >= FRAGMENT_COUNT) setJustCompleted(true);
  }, []);

  const reset = useCallback(() => {
    const empty = new Set<string>();
    collectedRef.current = empty;
    setJustCompleted(false);
    setCollected(empty);
    saveCollected(empty);
  }, []);

  const acknowledgeCompletion = useCallback(() => setJustCompleted(false), []);

  const value = useMemo<PuzzleState>(
    () => ({
      collected,
      isCollected: (id: string) => collected.has(id),
      collect,
      isComplete,
      justCompleted,
      acknowledgeCompletion,
      reset,
    }),
    [collected, isComplete, collect, justCompleted, acknowledgeCompletion, reset],
  );

  return <PuzzleContext value={value}>{children}</PuzzleContext>;
}
