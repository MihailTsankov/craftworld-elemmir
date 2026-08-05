---
name: main-page-hover
description: A skill that creates a new clickable hover zone on the main Craftworld page and a matching new page, when the user writes "Create a hover over the main page"
---

# Main Page Hover

Add a new clickable hotspot on the main page (`src/App.tsx`) that navigates to
a **brand new page**. Unlike the generic `hover-creation` skill, these hovers
do **not** show a preview image on hover — they are invisible clickable zones
(like the existing `.dome-button`) that lead to a new page built from the
shared `ScenePage` / `SceneFrame` components (see `src/pages/BackSidePage.tsx`).

## Parse the Prompt First

Before asking any questions, extract the following from the user's initial prompt
(if provided):

- **hover-location**: Exact percentages `left: X%`, `top: Y%`.
- **hover-size**: Exact percentages `width: X%`, `height: Y%` (or `aspect-ratio: 1`).
- **hover-color**: CSS color value for the glow.
- **page-name**: Human-readable name for the new page (e.g., "Autarch Chamber").
- **page-image**: Filename under `src/assets/` (e.g., `autarch-chamber.png`).

**Only ask (via `ask_user`) for any information not provided in the prompt.**

If the user provides vague descriptions (e.g., "middle-left") instead of exact
percentages for location, ask for clarification with exact % values.

- **ComponentName** = PascalCase of `page_name` + `Page` (e.g. `AutarchChamberPage`).
- **FileName** = `src/pages/<ComponentName>.tsx`.
- **RoutePath** = `/` + kebab-case of `page_name` (e.g. `/autarch-chamber`).
- **AriaLabel** = the raw `page_name` (e.g. `"Autarch Chamber"`).
- **Coordinates** = the exact `left %` and `top %` the user provided. Do **not** guess or invent coordinates from a vague description — always ask for exact values.
- **Size** = the exact `width %` and `height %` (or aspect-ratio) the user provided.
- **GlowColor** = the CSS color value for the hover glow; use it in both the `radial-gradient` and `box-shadow` declarations.

## Positioning Rule — CRITICAL

The main page background image is anchored to the top-left of the viewport at
`width: 100vw`, so its rendered height scales with the viewport width. To make
hotspots line up on **every screen size**, the hotspots MUST live inside the
existing `.dome-container` (which has `height: 106.53vw` — the exact aspect
ratio of the background image, 1408×1500).

Therefore percentages inside `.dome-container` are relative to the image
itself. Always use `%` for `top`, `left`, `width`, and `aspect-ratio: 1` (or a
`%` height) — **never** use `vw`, `vh`, or `px` for hotspot position/size.

Note: because `.dome-container` is taller than the viewport (`106.53vw` vs
`100vh`), a hotspot at `top: 70%` will be below the visible screen on most
monitors. Keep this in mind when estimating reasonable coordinate values.

## Implementation Recipe

### 1. Add a new clickable button in `src/App.tsx`

Inside the existing `<div className="dome-container">`, add another `<button>`
next to the current dome buttons. Give it **two classes**: the shared
`dome-hover` class plus a unique `dome-button-<slug>` class where `<slug>` is
the kebab-case page name:

```tsx
// ...existing code...
import { useNavigate } from "react-router-dom";
// ...existing code...
<div className="dome-container">
  {/* ...existing dome buttons... */}
  <button
    className="dome-hover dome-button-<slug>"
    aria-label="<AriaLabel>"
    onClick={() => navigate("<RoutePath>")}
  />
</div>
// ...existing code...
```

The shared `.dome-hover` class (already in `src/App.css`) handles all common
styles: `position: absolute`, `border-radius: 50%`, `background: transparent`,
`border: none`, `cursor: pointer`, `pointer-events: auto`, `z-index: 10`, and
the `transition`. The shared `.dome-hover::before` and `.dome-hover:hover::before`
rules handle the opacity toggle. **Do not repeat these in the new class.**

### 2. Add matching CSS in `src/App.css`

The new button only needs **two** rule blocks — one for position/size and one
for the glow color.

#### Step A — Add the button with DEBUG styles first

Start with a visible red tint and dashed border so the user can confirm the
position is correct before going invisible. Only override what differs from
`.dome-hover`:

```css
.dome-button-<slug> {
  top: <TOP>%;
  left: <LEFT>%;
  width: <WIDTH>%;
  height: <HEIGHT>%; /* use aspect-ratio: 1 instead if the zone is square */
  background: rgba(255, 0, 0, 0.35); /* DEBUG — overrides dome-hover transparent */
  border: 2px dashed rgba(255, 255, 255, 0.9); /* DEBUG — overrides dome-hover none */
}
```

Tell the user: *"I've added a red outlined box so you can see the hotspot.
Let me know if the position is correct, and I'll make it invisible."*

#### Step B — After the user confirms position, strip the debug overrides

Remove the `background` and `border` lines entirely (`.dome-hover` already sets
them to `transparent` / `none`), leaving only the position/size:

```css
.dome-button-<slug> {
  top: <TOP>%;
  left: <LEFT>%;
  width: <WIDTH>%;
  height: <HEIGHT>%; /* or aspect-ratio: 1 */
}
```

#### Hover glow — color-only `::before` override

The shared `.dome-hover::before` already sets `content`, `position`, `inset`,
`border-radius`, `opacity`, `transition`, and `pointer-events`. The per-button
`::before` block only needs to supply the **color** (gradient + box-shadow):

```css
.dome-button-<slug>::before {
  /* Use <GlowColor> (from the user's hover_color answer) in the gradient and shadows below */
  background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.35) 0%, <GlowColor-25%-opacity> 45%, transparent 75%);
  box-shadow:
    0 0 30px <GlowColor-70%-opacity>,
    0 0 60px <GlowColor-50%-opacity>;
}
```

Do **not** add a `.dome-button-<slug>:hover::before` rule — the shared
`.dome-hover:hover::before { opacity: 1; }` rule already handles this.

### 3. Create the new page `src/pages/<ComponentName>.tsx`

Use the shared `ScenePage` / `SceneFrame` components — they already provide the
black full-screen shell, the `BackToStarshipIcon`, and the radial-masked
centered image. **Do not hand-write those wrapper `<div>`s or inline styles.**

```tsx
import <slug>Image from "../assets/<page_image>";
import { ScenePage, SceneFrame } from "../components/ScenePage";

export default function <ComponentName>() {
  return (
    <ScenePage>
      <SceneFrame src={<slug>Image} alt="<AriaLabel>" />
    </ScenePage>
  );
}
```

See `src/pages/BackSidePage.tsx` for a minimal live example.

If the new page should also have hover hotspots on it, follow the
`hover-creation` skill: declare a `hotspots` array and render
`{hotspots.map((h) => <HoverHotspot key={h.label} {...h} />)}` inside
`<SceneFrame>`.

### 4. Register the route in `src/main.tsx`

```tsx
// ...existing imports...
import <ComponentName> from './pages/<ComponentName>.tsx'

// ...inside <Routes>:
<Route path="<RoutePath>" element={<<ComponentName> />} />
```

## Acceptance Checklist

- [ ] Parsed user's initial prompt for: hover-location, hover-size, hover-color, page-image, and page-name.
- [ ] Only asked (via `ask_user`) for information **not** provided in the prompt.
- [ ] The new hotspot is a `<button>` placed **inside** `.dome-container` in
  `src/App.tsx`, uses `navigate()` from `react-router-dom`, and has **two classes**:
  `dome-hover` (shared) and `dome-button-<slug>` (specific).
- [ ] Hotspot was first created with **debug overrides** (`background` + `border` on
  `.dome-button-<slug>`) so the user could confirm position, then those two lines
  were removed (the shared `.dome-hover` already sets them to `transparent`/`none`).
- [ ] `.dome-button-<slug>` in `src/App.css` only contains **position and size** — no
  repeated base styles that are already in `.dome-hover`.
- [ ] `.dome-button-<slug>::before` only contains **`background` (gradient) and
  `box-shadow`** — no repeated properties already set by `.dome-hover::before`.
  No separate `:hover::before` rule — `.dome-hover:hover::before` already handles it.
- [ ] Glow color is derived from the user's answer — **not** hardcoded
  and **not** `filter: drop-shadow` (which has no effect on transparent elements).
- [ ] Hotspot position/size in `src/App.css` uses **only percentages** so it tracks
  the background image on every screen size.
- [ ] A new page component was created at `src/pages/<ComponentName>.tsx` using
  the shared `<ScenePage>` + `<SceneFrame>` components — **no** hand-written
  wrapper `<div>`s, inline `maskImage` styles, or direct `BackToStarshipIcon`
  import (`ScenePage` already renders it).
- [ ] The page image is imported from `src/assets/` and the file exists (if
  it does not, tell the user to add it).
- [ ] A new `<Route>` was registered in `src/main.tsx`.
- [ ] TypeScript compiles with no new errors.
