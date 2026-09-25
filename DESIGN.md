---
name: Stedman Halliday
description: A dark, quiet personal site whose surfaces wake only while the reader scrolls.
colors:
  accent-teal: "#61B3AF"
  accent-teal-deep: "#4c9e9a"
  ink: "#111418"
  ink-deep: "#0d0f12"
  paper: "#e8e8e8"
  slate-dark: "#64748b"
  slate: "#8996aa"
  slate-light: "#b8c0cc"
  glass-tint: "rgba(17, 20, 24, 0.55)"
typography:
  display:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-1px"
  headline:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "28px"
    fontWeight: 700
  title:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 700
  body:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0.14em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "12px"
spacing:
  unit: "32px"
  half: "16px"
  double: "64px"
  grid-pitch: "32px"
  content-width: "800px"
components:
  button-cta:
    backgroundColor: "transparent"
    textColor: "{colors.accent-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "6.4px 25.6px"
  button-cta-hover:
    backgroundColor: "{colors.accent-teal}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    padding: "1px 8px 2px"
  tag-hover:
    backgroundColor: "{colors.accent-teal}"
    textColor: "{colors.ink}"
  doc-card:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  glass-tile:
    backgroundColor: "{colors.glass-tint}"
    rounded: "{rounded.md}"
---

# Design System: Stedman Halliday

## Overview

**Creative North Star: "The Live Circuit"**

The site is a circuit board at rest. Nothing glows. Nothing floats. The reader sees a plain dark field, light text, and one teal accent. When the reader scrolls, current flows: a fine dotted grid of teal traces fades in, and the work sits on panes of soft glass above it. When the scroll stops, the current drains away and the board goes flat again.

The effect is proof of craft, not decoration. It appears only in answer to the reader's own motion, so it never competes with the content at rest. Density is low. Moves are few and strong. Every surface earns its depth by responding to something.

This is not an editorial cream-and-serif site, a Dribbble shot wall, or a bento template. The glass tiles never form a grid of boxes.

**Key Characteristics:**
- Flat dark rest state; depth exists only in motion.
- One accent (teal) that carries links, calls to action, focus, and the grid traces.
- Lato everywhere, in two weights, with a tight, bold heading voice.
- Hairline borders and small radii; no drop shadows.

## Colors

A cool near-black field with soft white text and a single desaturated teal.

### Primary
- **Circuit Teal** (`accent-teal`): links, the CTA outline, focus rings, tag hover fills, and the scroll grid traces. It is the only chromatic color.
- **Deep Circuit Teal** (`accent-teal-deep`): link hover. Never a fill.

### Neutral
- **Board Ink** (`ink`): the page background and the resting state of every surface. Also the text color on teal fills.
- **Deep Ink** (`ink-deep`): code blocks and recessed wells.
- **Paper** (`paper`): body text on dark, and the light site header band.
- **Slate Dark** (`slate-dark`): header hover text and post header rules.
- **Slate** (`slate`): meta text, tag outlines, blockquotes.
- **Slate Light** (`slate-light`): secondary text such as intros and card meta.
- **Glass Tint** (`glass-tint`): the tile fill in the Scroll state. It is Board Ink at 55%, so a tile only reads as glass when the grid is behind it.

### Named Rules
**The One Current Rule.** Teal is the only hue. The grid, the links, and the CTAs share it. Do not add a second accent for the motion layer.

## Typography

**Display Font:** Lato (with the system sans stack)
**Body Font:** Lato (with the system sans stack)

**Character:** One humanist sans in two weights. Bold headings with slight negative tracking read confident. Regular body reads calm.

### Hierarchy
- **Display** (700, 42px, 1.25): page and post titles. Max 24ch. Drops to 36px under 800px.
- **Headline** (700, 28px): section headings such as list headings.
- **Title** (700, 24px): project and post titles in lists.
- **Body** (400, 16px, 1.5): prose, inside the 800px content column.
- **Label** (400, 14px, 0.14em, uppercase): CTAs and card actions. Tags use the same size at 700 without tracking.

## Layout

A single centered column (800px content width) with a 32px spacing unit. Half (16px) sets vertical rhythm between blocks; double (64px) separates sections. Featured work breaks out to 1240px in a three-column grid; project rows use a 2:3 image-to-text split. Under 600px everything stacks to one column. The site header is a 64px light band.

The scroll grid uses its own pitch (`grid-pitch`, 32px), set equal to the spacing unit so traces line up with the vertical rhythm. The grid is fixed to the viewport, not the document, so it reads as a layer under the page, not as page content.

## Elevation & Depth

The system has no shadows. Depth is a material state that answers to scrolling. There are exactly three states.

### Rest
A flat Board Ink background. No grid. No glass. Tiles are invisible: they have the page color and no blur, border, or shadow. This is the state on load, on idle, and always under `prefers-reduced-motion: reduce`.

### Scroll
While the reader scrolls, a fixed layer of fine dotted teal lines fades in over the background, like traces on a circuit board. Lines run on the `grid-pitch` in both axes. Each line is a dotted stroke (1px dots on a 4px period) at `grid-line-opacity`. The layer fades in over `material-rise`.

At the same time, project rows, featured cards, and blog post entries sit on glass tiles. A tile fills with Glass Tint and applies `backdrop-filter: blur(glass-blur)`. The grid behind a tile softens into a haze; the grid between tiles stays sharp. That contrast, and nothing else, draws the tile edge.

### Decay
When no scroll event arrives for `scroll-idle`, the grid and the glass ease back to Rest over `material-decay` (750ms, inside the 600–900ms band) with the incumbent ease-out curve. Grid opacity, tile tint, and blur all decay together, so the page never holds a half state. A new scroll during decay reverses it from the current value; it does not restart.

The material tokens that the frontmatter schema cannot hold live in `.impeccable/design.json` under `extensions.material` and `extensions.motion`:

| Token | Value | Role |
|---|---|---|
| `grid-pitch` | 32px (frontmatter `spacing`) | Distance between trace lines |
| `grid-line-opacity` | 0.14 | Peak opacity of the teal traces |
| `grid-dot` | 1px dot, 4px period | Dotted stroke pattern |
| `glass-blur` | 12px | Backdrop blur radius on tiles |
| `glass-tint` | frontmatter `colors` | Tile fill in Scroll |
| `material-rise` | 200ms | Fade in from Rest to Scroll |
| `material-decay` | 750ms | Ease back from Scroll to Rest |
| `scroll-idle` | 150ms | Quiet time that counts as "scrolling stopped" |

### Named Rules
**The Flat At Rest Rule.** If the reader is not scrolling, the page is flat. No grid, glass, or shadow may persist at rest, and none may appear on load.

**The No Card Wall Rule.** Glass tiles have no border, no shadow, and no visible fill at rest. Only the blurred grid defines their edge. If a screenshot of the Scroll state reads as a bento or a wall of cards, the tile is too strong: lower the tint or blur, never add an edge.

**The Still Reader Rule.** Under `prefers-reduced-motion: reduce`, the page stays in Rest. The grid and glass never appear.

## Shapes

Small, precise corners: 2px on CTAs and the scrim plus, 4px on cards, code blocks, and glass tiles. Larger radii (8px, 12px) are reserved and rare. Borders are 1px hairlines in slate or a white overlay at 14%. Images are sharp-cornered 16:9 crops.

## Components

### Buttons
- **Shape:** crisp 2px corners.
- **CTA:** transparent with a 1px teal outline, teal uppercase label, 0.4rem by 1.6rem padding.
- **Hover / Focus:** fills teal with ink text over 0.2s. Focus is a 2px teal outline, 3px offset.

### Tags
- **Style:** 1px slate outline, slate bold 14px text, no fill.
- **Hover:** fills teal, ink text.

### Document Card
- **Style:** a 1px white-14% hairline, 4px radius, 16px by 20px padding, icon plus title, meta, and a teal uppercase action.
- **Hover:** border turns teal, fill takes teal at 6%.

### Glass Tile (signature)
- **Wraps:** project rows, featured cards, and blog post entries. Nothing else.
- **Rest:** identical to the page. No fill, blur, border, or shadow.
- **Scroll:** Glass Tint fill plus a 12px backdrop blur, 4px radius. See Elevation & Depth.
- **Padding:** the tile adds no layout. It must not shift content between states.

### Navigation
- **Style:** a light Paper header band with ink uppercase bold links (0.024em tracking), 1.5rem apart. The current page gets a slate "/" before it. Hover turns slate dark. It collapses to a menu trigger under 600px.

## Do's and Don'ts

### Do:
- **Do** keep the page flat Board Ink at rest and on load.
- **Do** tie the grid and glass to scroll activity only, and decay them together over 750ms.
- **Do** keep the grid fixed to the viewport, on a 32px pitch, in teal at 0.14 peak opacity.
- **Do** keep tile geometry identical across states so nothing moves when the material changes.
- **Do** honor reduced motion by staying in Rest.

### Don't:
- **Don't** give glass tiles a border, shadow, or resting fill. That makes a card wall.
- **Don't** arrange tiles into a bento or a dense box grid.
- **Don't** add a second accent color for the grid or glass.
- **Don't** use drop shadows anywhere for depth.
- **Don't** let the grid, blur, or tint hold after scrolling stops.
