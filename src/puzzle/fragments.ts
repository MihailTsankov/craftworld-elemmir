/** A single piece of the Farseer's prophecy, hidden behind one scene hotspot. */
export interface Fragment {
  /** Stable id persisted in localStorage. */
  readonly id: string;
  /** Route of the scene that hides this fragment. */
  readonly scene: string;
  /** Hotspot that carries the fragment, for reference. */
  readonly hotspot: string;
  /** The prophecy text; also used as the hotspot caption. */
  readonly text: string;
}

/**
 * The six fragments, listed in prophecy (lore) order — which is deliberately
 * independent of the order a player happens to collect them in.
 */
export const FRAGMENTS: readonly Fragment[] = [
  {
    id: "autarch-chamber",
    scene: "/dome",
    hotspot: "Autarch Chamber",
    text: "When the Crimson Hunter turns twice above the dome,",
  },
  {
    id: "rangers-temple",
    scene: "/hanging-gardens",
    hotspot: "Rangers Temple",
    text: "and the gardens drink the light of a dying sun,",
  },
  {
    id: "mountain-crown",
    scene: "/island-ocean",
    hotspot: "The top of the mountain structure",
    text: "the mountain shall lay its shadow upon still water,",
  },
  {
    id: "swooping-hawks",
    scene: "/small-island",
    hotspot: "Swooping Hawks hunting",
    text: "the hawks shall carry the last name of the fallen,",
  },
  {
    id: "exodite-temple",
    scene: "/exodite-planet",
    hotspot: "Exodite Temple",
    text: "and the world-that-remembers shall open its eye of stone —",
  },
  {
    id: "guardian-host",
    scene: "/back-side",
    hotspot: "Guardian Host",
    text: "seek then the hidden Chamber of Ulthanash.",
  },
];

export const FRAGMENT_COUNT = FRAGMENTS.length;

const BY_ID = new Map(FRAGMENTS.map((fragment) => [fragment.id, fragment]));

export function getFragment(id: string): Fragment {
  const fragment = BY_ID.get(id);
  if (!fragment) throw new Error(`Unknown prophecy fragment: ${id}`);
  return fragment;
}

/** Text of a fragment, for use as a hotspot caption. */
export function fragmentText(id: string): string {
  return getFragment(id).text;
}

/** The complete prophecy, assembled in lore order. */
export function assembleProphecy(): string {
  return FRAGMENTS.map((fragment) => fragment.text).join(" ");
}
