# Puzzle Ideas for Craftworld Elemmir

Brainstormed puzzle concepts that fit the Aeldari/Craftworld theme and can be
solved while exploring the site. Ordered roughly from easiest → most involved
to build on top of the existing tech (React Router pages, `HoverHotspot`,
`DecodingText` rune-script component, `Spaceship`, `Stars`).

> **Note:** `docs/` is the Vite build output directory (`vite.config.ts` →
> `build.outDir`), so this file is deleted by `npm run build`. Keep a copy
> elsewhere or move these notes out of `docs/`.

## 1. Rune Cipher Fragments (uses what already exists) — ✅ implemented
Instead of lorem ipsum, give each hotspot's caption a real fragment written in
Aelfa runes that doesn't auto-decode (or decodes to gibberish until solved).
Player collects fragments across all 6 scenes and assembles them into one
sentence/coordinate/name — a "Farseer's prophecy" revealing a hidden 7th
location or unlock code.

**How it was built**

* `src/puzzle/fragments.ts` — the six fragments and the assembled prophecy.
* `src/puzzle/PuzzleProvider.tsx` + `puzzleContext.ts` — collected ids, persisted
  to `localStorage` under `elemmir.puzzle.v1`.
* `DecodingText` gained `autoDecode` so a caption can be held in runes.
* `HoverHotspot` gained `fragmentId`: the hotspot glints, and clicking it
  collects the fragment and lets the caption decode.
* `FarseerCodex` — corner panel (`n/6`) present on every page.
* `/prophecy` — hidden seventh scene, unlocked only when all six are found.

| Scene | Hotspot | Fragment id |
| --- | --- | --- |
| `/dome` | Autarch Chamber | `autarch-chamber` |
| `/hanging-gardens` | Rangers Temple | `rangers-temple` |
| `/island-ocean` | The top of the mountain structure | `mountain-crown` |
| `/small-island` | Swooping Hawks hunting | `swooping-hawks` |
| `/exodite-planet` | Exodite Temple | `exodite-temple` |
| `/back-side` | Guardian Host | `guardian-host` |

## 2. Rune Alphabet Key Hunt
Hide a rune→Latin key somewhere subtle in the art (e.g., etched on the
Autarch Chamber, statue, or temple). Other hotspots show text in runes with
`DecodingText` disabled; player must find the key first, then manually
"translate" (simple substitution) to read hidden lore, which then reveals a
code/word.

## 3. Spaceship Orbit Clock Puzzle
The Crimson Hunter orbits with a set duration/angle. Make its position at a
specific real-world time (or after N seconds) point to a specific
hotspot/scene — "when the ship faces the Hanging Gardens, click there" — a
timing-based easter egg.

## 4. Seer's Constellation
`Stars` component background: hide a few stars that are clickable and, when
clicked in the correct order (order given cryptically via rune clues in
scenes), form a constellation that unlocks a secret page/scene.

## 5. Six Shards of the Soulstone
Tie into the `elemmir-the-star-jewel-symbol-bulky-soulstone.png` asset lore:
each of the 6 scenes hides one "shard" (a small clickable glint/hotspot not
labeled). Collecting all 6 lights up the Soulstone icon (could live in a
corner UI) and reveals a final secret scene/dialogue. The `PuzzleContext` and
`FarseerCodex` shell added for #1 can be reused here.

## 6. Path of the Seer Sequence
Require hotspots to be visited in a specific order implied by lore text
(Aeldari "Path" philosophy — Path of the Warrior, Seer, Artisan...); visiting
out of order resets progress, visiting correctly unlocks a hidden ending.

## Recommended Starting Point
Combine **#1** and **#5**: replace lorem ipsum with real rune-fragment clues
and hidden shard hotspots, track collected pieces in state/localStorage, and
show a completion reveal when all shards/fragments are found. This reuses the
existing `HoverHotspot`/`DecodingText` components and needs only a small
amount of new state management.
