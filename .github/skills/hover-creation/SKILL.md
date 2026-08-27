---
name: hover-creation
description: A skill that demonstrates how to create a hover effect when writing "Create an image hover"
---

# Hover Creation

Add an interactive hover hotspot over a region of an image on a React page.
While the user hovers (or keyboard-focuses) the hotspot, a preview pop-up
image appears with a colored border and a soft glow in the same color.

All of this behaviour already lives in the shared `HoverHotspot` component —
**never hand-roll `useState` + inline styles.** Adding a hover means adding one
entry to a page's `hotspots` array.

## Usage

Parse the user's initial prompt for these parameters. Only ask (via `ask_user`)
for any information **not** provided:

- **color**: Highlight color for the glow and pop-up border (CSS color, e.g., `magenta`, `#7ecfff`, or `rgb(180,100,255)`).
- **page**: Which page/component file to edit (e.g., `CentralDomePage.tsx`).
- **hotspot-location**: Approximate position as `top: X%`, `left: Y%` (if not given, choose sensible values and let the user know they can tweak them).
- **preview-image**: Which image to show on hover (filename under `src/assets/`, e.g., `central-dome-bonesingers.png`).
- **label**: Accessible label for the hotspot (e.g., "Foo Building").
- **text** (optional): Caption shown above the preview image. It renders in the
  Aelfa Eldar script and decodes character-by-character into readable Alice.
  Only image hotspots (those with a `previewSrc`) show it. If the user has no
  copy yet, use a short Lorem Ipsum sentence as a placeholder.
- **background-image** (optional): Which background image the hotspot sits on top of (usually obvious from the page file).
- **popup-side** (optional): Which side the popup should appear (`left` or `right`; defaults to alternating with existing hovers).

For any missing information, use `ask_user` to prompt the user. **Do not** ask for information already provided in the initial prompt.

## Shared Components

| Component | File | Purpose |
| --- | --- | --- |
| `ScenePage` | `src/components/ScenePage.tsx` | Full-screen black page shell + `BackToStarshipIcon` |
| `SceneFrame` | `src/components/ScenePage.tsx` | Radial-masked image container; hotspot `%` coords are relative to it |
| `HoverHotspot` | `src/components/HoverHotspot.tsx` | Accessible `<button>` hotspot + hover preview pop-up |
| `DecodingText` | `src/components/DecodingText.tsx` | Eldar-script caption that decodes into readable text |

### The decoding caption

Aelfa (the vendored Eldar script in `src/assets/fonts/`) is a Latin-substitution
rune font, so the caption string never changes — only each character's
`font-family` flips from `Aelfa` to `Alice`, left to right. Just pass a plain
readable string as `text`; **do not** hand-write a cipher, a second "encoded"
string, or your own `useState` animation. `DecodingText` is rendered by
`HoverHotspot` automatically whenever `text` and `previewSrc` are both present.

### Colors are derived — pass only one

`HoverHotspot` takes a **single `color` prop**. Do **not** compute rgba
variants. `HoverHotspot.css` derives them via `color-mix`:

- glow (`box-shadow`) = `color` at 60%
- hotspot tint (`background`) = `color` at 8%
- preview border = `color` at 100%

This keeps the glow and the border permanently in sync. Any CSS color works
(hex, named, `rgb()`), so pass the user's value straight through.

## Implementation Recipe

### 1. Import the preview image

```tsx
import fooPreview from "../assets/foo.png";
```

No `useState` import is needed — hover state is internal to `HoverHotspot`.

### 2. Add an entry to the page's `hotspots` array

Each page declares its hotspots as data above the component:

```tsx
const hotspots = [
  // ...existing hotspots...
  {
    label: "Foo",
    left: "48%", top: "30%", width: "12%", height: "20%",
    color: "#7ecfff",
    previewSrc: fooPreview, previewSide: "right" as const,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
```

Coordinates are percentages so the hotspot scales with the image. Alternate
`previewSide` between `"left"` and `"right"` relative to the existing hotspots
so previews don't overlap.

### 3. Nothing else to do

The page already renders every entry:

```tsx
export default function FooPage() {
  return (
    <ScenePage>
      <SceneFrame src={background} alt="Foo Scene">
        {hotspots.map((h) => (
          <HoverHotspot key={h.label} {...h} />
        ))}
      </SceneFrame>
    </ScenePage>
  );
}
```

### If the page has not been migrated yet

If the target page still uses the old pattern (per-hotspot `useState`, inline
`position`/`boxShadow`/`background` styles, and conditional `<img>` previews),
**convert the whole page first**, then add the new hotspot. Reference
`src/pages/CentralDomePage.tsx` for the target shape.

## Acceptance Checklist

- [ ] Parsed user's initial prompt for: color, page, hotspot-location (top/left %), preview-image, label, background-image, and caption text.
- [ ] Only asked (via `ask_user`) for information **not** provided in the prompt.
- [ ] The hover was added as a **data entry** in the page's `hotspots` array — no new `useState`, no inline styles, no hand-written preview `<img>`.
- [ ] A **single `color`** prop was passed. No manually derived `rgba(...)` glow/tint values, and no `glowColor` / `hoverBg` / `previewBorderColor` props (these no longer exist).
- [ ] A `text` caption was supplied as a **plain readable string** (Lorem Ipsum if
  the real copy does not exist yet). No hand-rolled cipher, no second "encoded"
  string, and no custom decode animation — `DecodingText` handles it.
- [ ] The preview image is imported from `src/assets/` and the file exists (if it does not, tell the user to add it).
- [ ] Position and size use **percentages** so the hotspot tracks the image at any screen size.
- [ ] `previewSide` alternates with neighbouring hotspots so pop-ups don't overlap.
- [ ] The page renders hotspots via `<ScenePage>` → `<SceneFrame>` → `hotspots.map(...)`; if it did not already, it was migrated first.
- [ ] TypeScript compiles with no new errors (`npx tsc --noEmit`).
