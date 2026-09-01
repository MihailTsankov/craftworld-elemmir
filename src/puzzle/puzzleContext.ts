import { createContext, useContext } from "react";

export interface PuzzleState {
  /** Ids of the fragments the player has collected. */
  readonly collected: ReadonlySet<string>;
  readonly isCollected: (id: string) => boolean;
  readonly collect: (id: string) => void;
  /** True once every fragment has been found. */
  readonly isComplete: boolean;
  /** True from the moment the last fragment lands until it is acknowledged. */
  readonly justCompleted: boolean;
  readonly acknowledgeCompletion: () => void;
  readonly reset: () => void;
}

export const PuzzleContext = createContext<PuzzleState | null>(null);

export function usePuzzle(): PuzzleState {
  const state = useContext(PuzzleContext);
  if (!state) throw new Error("usePuzzle must be used inside a PuzzleProvider");
  return state;
}
