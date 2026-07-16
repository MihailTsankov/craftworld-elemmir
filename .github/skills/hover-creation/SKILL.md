---
name: hover-creation
description: A skill that demonstrates how to create a hover effect when writing "Create an image hover"
---

# Hover Creation

Add an interactive hover hotspot over a region of an image on a React page.
While the user hovers (or keyboard-focuses) the hotspot, a preview pop-up
image appears with a colored border and a soft glow in the same color.

## Usage

BEFORE writing any code, you MUST prompt the user for the highlight color
using the `ask_questions` tool. The question must be a **freeform color
input** (no preset `options`) so it behaves like a color picker and accepts
any CSS color the user types:

```
ask_questions([
  {
    header: "hover_color",
    question: "What color should the hover glow and pop-up border use? (Enter any CSS color, e.g. #7ecfff, rgb(180,100,255), or a named color)",
    allowFreeformInput: true
    // IMPORTANT: do NOT provide an `options` array — this must be freeform.
  }
])
```

Also confirm (or ask, if not obvious from the request):

- Which page/component file to edit.
- Which background image the hotspot sits on top of.
- Which preview image to show on hover (path under `src/assets/`).
- Approximate hotspot location on the image (if not given, choose sensible
  percentage values and tell the user they can tweak them).
- An accessible label for the hotspot (e.g. "Foo Building").

## Implementation Recipe

Given the answered color `C`, derive:

- **Border color** = `C` (used for the 2px solid pop-up border).
- **Glow color** = same color at ~60% alpha for `boxShadow`, and ~8% alpha for the hotspot `background`.
  - If `C` is `#rrggbb` or `#rgb`, convert to `rgba(r, g, b, 0.6)` and `rgba(r, g, b, 0.08)`.
  - If `C` is already `rgb(r,g,b)`, rewrite as `rgba(r,g,b,0.6)` / `rgba(r,g,b,0.08)`.
  - Otherwise (named color) fall back to using `C` for the border and a reasonable rgba approximation for the glow.

Then edit the target page component to add these three pieces.

### 1. State + imports

At the top of the component, add a boolean state flag named after the hotspot,
e.g. for a hotspot called "Foo":

```tsx
import { useState } from "react";
import fooPreview from "../assets/foo.png";

// ...inside the component:
const [fooHovered, setFooHovered] = useState(false);
```

### 2. Hotspot element

The hotspot must live inside a `position: relative` wrapper that also
contains the background `<img>`. If the page does not already have such a
wrapper, create one:

```tsx
<div style={{ position: "relative", display: "inline-block" }}>
  <img
    src={background}
    alt="..."
    style={{ display: "block", maxWidth: "100%", maxHeight: "100vh" }}
  />

  {/* Hotspot for Foo */}
  <div
    role="button"
    tabIndex={0}
    aria-label="Foo"
    onMouseEnter={() => setFooHovered(true)}
    onMouseLeave={() => setFooHovered(false)}
    onFocus={() => setFooHovered(true)}
    onBlur={() => setFooHovered(false)}
    style={{
      position: "absolute",
      left: "48%",   // tweak
      top: "30%",    // tweak
      width: "12%",  // tweak
      height: "20%", // tweak
      cursor: "pointer",
      borderRadius: "50%",
      boxShadow: fooHovered ? "0 0 30px 15px <GLOW_60>" : "none",
      background: fooHovered ? "<GLOW_08>" : "transparent",
    }}
  />
</div>
```

Replace `<GLOW_60>` and `<GLOW_08>` with the rgba values derived above.
Coordinates are percentages so the hotspot scales with the image.

### 3. Preview pop-up

At the end of the page container (a sibling of the image wrapper), add a
conditional fixed-position preview image. Alternate between bottom-left and
bottom-right when the page has multiple hotspots so previews don't overlap:

```tsx
{fooHovered && (
  <img
    src={fooPreview}
    alt="Foo"
    style={{
      position: "fixed",
      bottom: "24px",
      right: "24px", // or left: "24px" for the other side
      width: "560px",
      maxWidth: "calc(100vw - 48px)",
      border: "2px solid <BORDER_COLOR>",
      borderRadius: "12px",
      pointerEvents: "none",
    }}
  />
)}
```

Replace `<BORDER_COLOR>` with `C`.

## Acceptance Checklist

- [ ] User was prompted for a color via a freeform `ask_questions` call (no `options`).
- [ ] User was asked where the pop-up should go.
- [ ] User was asked which image should be shown in the pop-up.
- [ ] `useState` and the preview image are imported.
- [ ] Hotspot is inside a `position: relative` wrapper over the background image, uses percentage coordinates, and is keyboard-accessible (`role="button"`, `tabIndex={0}`, `aria-label`, `onFocus`/`onBlur`).
- [ ] Glow (`boxShadow` + translucent `background`) only shows while hovered/focused, using the derived rgba glow color.
- [ ] Pop-up `<img>` is fixed-position, has `pointerEvents: "none"`, `borderRadius: 12px`, `width: 560px` with `maxWidth: calc(100vw - 48px)`, and a 2px solid border in the chosen color.
- [ ] TypeScript compiles with no new errors.

