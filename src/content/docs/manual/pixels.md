---
title: "Pixels"
description: "Overlays, borders, date stamps and paint on top of a photo."
sidebar:
  order: 11
---

Pixels lets you drop retro, Deluxe-Paint-style graphics on top of a photo: text, a glowing film date stamp, shapes, borders, and dithered gradient washes. Everything is **non-destructive** — the overlays sit on top of your developed image, and your RAW (and the original file) are never touched. They only get baked into pixels when you export.

## Turning it on

Pixels is a **Pro** feature, and an opt-in extra that starts off. Enable it in **Settings → General → Modules** by switching on **Pixels**. Until you do, it stays greyed-out in the sidebar.

Once enabled, open it from the sidebar, from **View → Pixels**, or with **⌘7** (the default; you can rebind it in Settings → Shortcuts). Pick a photo in the filmstrip along the bottom to paint on it — it always works on the currently focused photo. Pixels is not available for video; if a clip is selected you'll see a note asking you to pick a photo instead.

## The workspace

The view has four parts:

- **Tool palette** (far-left strip) — the drawing tools.
- **Canvas** (center) — your developed photo with the overlays drawn on top, live.
- **Inspector** (right) — the layer list and the editor for whatever is selected.
- **Filmstrip** (bottom) — switch photos without leaving Pixels.

**Export…** sits at the bottom of the inspector, the same button Develop has in the same place — Pixels is the last creative step, so you don't have to leave it to write the file. Your overlays are baked into the exported copy automatically; the original is never touched.

## Tools

Every tool lives in one well at the top of the inspector. Hover any square for its name and keyboard shortcut.

**The top group arms a mode** — one is lit at a time, and it stays armed until you drag on the photo.

| Tool | Key | What it does |
|------|-----|--------------|
| **Select** | `V` | Click a layer to select it; drag to move or resize it. Click empty canvas to deselect. |
| **Brush** | `B` | Paint freehand — only onto a paint canvas. |
| **Rectangle** | `R` | Drag to draw a rectangle. |
| **Line** | `L` | Drag to draw a straight line. |
| **Ellipse** | `O` | Drag to draw an ellipse. |
| **Enlarge** | `E` | Click a thing in the photo and make it bigger — the larger copy sits exactly over the original. Pro; needs the AI object model. |

**The bottom group acts at once** — it drops a layer in, selects it, and hands you back to Select.

| Tool | Key |
|------|-----|
| **Text** | `T` |
| **Date Stamp** | `D` |
| **Frame** | `F` |
| **Gradient Wash** | `G` |
| **Paint Canvas** | `P` |

With a shape tool active, the inspector shows a **New shape** panel — set the stroke, fill and colour there first, and every shape you draw picks up that style. A tiny click that doesn't drag is ignored, so you won't create stray dots.

## Zooming the canvas

Same keys as Develop and Film Labor: **↑** and **↓** step the zoom, **Z** returns to fit, and the slider sits bottom-right of the canvas with the true magnification beside it.

- **Hold Space and drag to pan.** Not a plain drag, unlike the other two pages — here a drag draws a shape or moves a layer, so Space is what tells the canvas you mean the picture and not the tools.
- **The slider ends at 100 %** — one pixel of your photo per pixel of screen, which is as far as there is anything to see. How much magnification that takes depends on the window, so the range adjusts itself rather than stopping at some arbitrary number.
- Zoom is for **aiming**: clicking a small object for Enlarge, placing a date stamp exactly. The canvas holds a working copy of the photo sized to your window, not the file itself, so at 100 % it is a little soft. That never reaches an export — those are rendered fresh at full resolution and never touch it.
- Switching photos returns to fit.

## Enlarge

Click something with **Enlarge** (`E`) and the app selects it and puts it back as a layer pinned exactly over itself — then make it bigger with the **Scale** slider (100–400 %) or the corner handle. The moon over a night skyline, the distant subject that deserved a longer lens: bigger, without touching the pixels around it.

- **Nothing is rebuilt or invented.** The object never leaves the spot it was cut from, so the larger copy covers the original. That is the whole trick — no reconstruction, no AI fill, no model beyond the object selector. One shape can peek through: a ring or arch enlarged about its centre can show a sliver of the original inside its opening — nudge the Scale up a little further and it goes.
- **Scope — Part · Medium · Whole.** The model genuinely has three answers (the wheel, the bike, the bike and rider), so you get all three rather than one it picked for you. Switching is instant. ⌥-click takes an area back out; **New object** starts the next one.
- The layer stores its **outline, not its pixels**, so it stays sharp in an export — the colour is read from the full-resolution photo when the file is written. It also travels as its own editable layer into a layered PSD or TIFF.
- Works whatever crop, straighten or perspective the photo carries — nothing has to be mapped back to the uncropped frame.
- Why no shrink, and no dragging it elsewhere? Either would expose the original underneath, and filling that in convincingly needs a class of model the app doesn't ship yet. When it does, moving comes back.

## Adding other overlays

Shapes are drawn directly with the tools above; the rest are one click each in the tool well:

- **Text**
- **Date stamp**
- **Frame**
- **Gradient wash**
- **Paint canvas** — a 256-colour indexed painting surface (see below)

Each new overlay appears selected, ready to edit.

## The paint canvas

A **Paint canvas** is a genuine indexed surface in the Deluxe Paint sense: its pixels store *palette slot numbers*, not colours. That one difference is what makes the palette live — **change a slot and every pixel using it recolours at once**, which is how the Amiga-era look was actually made.

A new canvas starts as the photo **crushed** into its palette, so there's something to work with straight away. Its editor has:

- **Canvas** — the pixel grid, derived from your photo's shape.
- **Size** — 320, 640 or 1280 pixels on the long edge. Smaller means chunkier; the canvas is always drawn with hard pixel edges, never smoothed.
- **Colours** — 16, 32, 64, 128 or 256 palette slots. 32 is the classic.
- **Dither** — **None** (hard bands), **Ordered** (a fixed 8×8 screen — the crisp, tiling, DPaint-looking one) or **Diffuse** (Floyd–Steinberg error diffusion, which mixes neighbouring pixels to fake colours the palette doesn't have).

Changing any of those three **rebuilds the canvas from the photo straight away**, so they're reversible: drop to 16 colours, go back to 64, and you get the 64-colour version back.

Two buttons:

- **Back to photo colours** — throws away the ramp and any slot edits and rebuilds the palette from the photo. This is the undo for everything below.
- **Clear** — empties the canvas to transparent but keeps the palette.

## Colour palette

Every slot, always ordered **darkest to brightest**. Click a slot to select it, then click the big swatch at the top to open the colour picker, or type a hex value. Changing a slot repaints every pixel using it — that is what an indexed canvas is for.

## Palette ramp

The fast way to a look: instead of editing slots one at a time, lay a **ramp** across the whole palette. Every slot takes a colour from the ramp, darkest to brightest, so the photo keeps its shapes and tones and takes the ramp's colours — a **gradient map**, computed over 32 palette entries rather than millions of pixels, which is why it's instant.

- **Presets** — Sunset, Ice, Sepia, Neon, Mono. One click each.
- **The ramp strip** — click a stop to select it, then set its colour with the well below.
- **Stops** — 2 to 8. Two gives a duotone; more gives you room for a colour to turn through the midtones.
- **Spread** — blends the ramp evenly end to end, Deluxe Paint's own word for it.

The ramp starts as a sample of your photo's own palette, so you're always editing from the picture rather than from an unrelated default. Changes apply live — watch the photo, not the panel. **Back to photo colours** undoes the whole thing.

**Slot 0 is always transparent** — the photo shows through wherever the canvas uses it, so a canvas can sit over your photo instead of hiding it.

## Painting on the canvas

**With a paint canvas selected, the Brush, Rectangle, Line and Ellipse tools draw into it** instead of making a shape layer. They paint with whichever palette slot is selected — the same slot you're editing, exactly as Deluxe Paint worked.

The **Paint** card sets how they paint:

- **Fill** — **Solid** (the selected slot) or **Gradient**.
- **Range** — for a gradient, the two palette slots it runs between.
- **Dither** — **0 to 7**, Deluxe Paint's own scale. 0 leaves hard bands; 7 fully stipples the boundary between neighbouring slots so they read as a blend. This is the signature DPaint sky.
- **Direction** — vertical, horizontal, diagonal or radial.
- **Fill shapes** — off draws outlines instead.
- **Brush size** — 1 to 12 canvas pixels.

**⌘Z undoes a whole stroke**, not a few pixels of one. There's also an **Undo stroke** button.

## Colour cycling

The Amiga trick: rotate a run of palette slots and the picture appears to move, though **not one pixel changes**. A waterfall or a flowing sky costs a palette update, not a redraw.

- **Add range** — picks a run of slots around the one you have selected.
- **Range** — the two slots it spans; **Speed** 1–15; **Reverse** to flow the other way; the switch turns each range on and off.
- The canvas **shimmers live** while you watch.
- **Bake phase** freezes the shimmer where it is now. An exported still is a single frame, so bake the moment you like before exporting.
- **Half-brite** is the Amiga's EHB: the palette's top half becomes automatic half-bright twins of its bottom half — 32 real colours reading as 64.

## The Layers list

The inspector's **Layers** card lists every overlay on the photo, newest on top, each with a thumbnail, a name, and an eye button to show/hide it. From here you can:

- **Select** a layer by clicking it (also selects it on the canvas).
- **Reorder** by dragging layers up or down — higher layers paint over lower ones. A drag grip appears at the left of a row as you hover it.
- **Hide/show** with the eye icon.
- **Lock / unlock** with the padlock beside the eye. A locked layer's padlock stays lit, so you can see at a glance which layers are protected.
- **Delete** — right-click a layer, or use the **Delete layer** button in its editor.
- **Clear** — the button in the card's header removes every layer at once.

Each row's second line shows what the layer is, plus its opacity and blend mode when they aren't the defaults — so a layer that looks wrong explains itself without being selected.

## The Layer card — settings every layer has

Select any layer and the inspector shows a **Layer** card above its own editor. These five settings work the same on text, date stamps, shapes, frames and gradient washes alike:

- **Name** — type your own name for the layer; the row shows it instead of the kind ("Text", "Rectangle" …). Clear the field to go back to the kind name.
- **Blend** — Normal, Multiply, Screen, Overlay or Soft Light. Each kind starts on the mode that suits it (a Quartz Glow date stamp on **Screen**, so it reads as light added to the scene; a gradient wash on **Soft Light**), and you can override it freely.
- **Opacity** — 0–100%.
- **Clip to layer below** — the layer paints **only where the layer beneath it does**, so a shape below acts as a cut-out: a gradient wash clipped to a rectangle fills just that rectangle, text clipped to an ellipse is trimmed to it. Several layers in a row can clip to the same one. The layer below is used as the cut-out **even when it's hidden**, so you can use a shape purely as a stencil. Greyed out on the bottom layer, which has nothing underneath.
- **Lock** — protects the layer: it can't be dragged on the canvas, edited or deleted until you unlock it. (The **Clear** button still removes everything.)

## Editing on the canvas

With the **Select / move** tool:

- **Text** and **date stamps** — drag to reposition. A selected item shows a dashed amber outline.
- **Shapes** — drag the body to move; drag the round amber handle at the corner to resize.
- **Gradient wash** with a mask — drag the handles that appear on the photo to aim a linear gradient or size a radial one.

## Text

Select a text layer to edit it:

- **Text** — the words to display.
- **Font** — System, or any font family installed on your Mac.
- **Size** — cap height as a share of the photo (roughly 2–40%).
- **Rotation** — −45° to +45°.
- **Fill** — choose **Solid**, **Dither**, **Halftone**, or **Pattern**. Solid and Halftone use a plain **Colour** well; Dither shows a gradient swatch and Pattern a pattern swatch — click either to open the Deluxe Paint panel (below).
- **1-bit outline** — adds a hard retro outline; turn it on to pick an **Outline** colour.

## Date stamp

A film-camera date stamp, glowing 7-segment digits by default. Editor options:

- **Use photo's capture date** — on by default, printing the photo's real EXIF date. If there's no date it falls back to manual entry. Turn it off to type your own **Date** (e.g. `'99 12 29`).
- **Style** — **Quartz Glow** (the classic orange glow), **Minimal**, **LCD** (little grey panel), or **Print** (small serif ink).
- **Format** — `'YY MM DD`, `MM DD 'YY`, `DD MM 'YY`, or `MM-DD-'YY`.
- **Size**, **Glow** (halation strength), and **Colour**.

New stamps land in the bottom-right corner; drag on the canvas to move them anywhere.

## Shapes

Whether you're setting the New-shape style or editing an existing shape:

- **Kind** — switch between Rectangle, Line and Ellipse (existing shapes only).
- **Stroke width** and **Stroke colour**.
- **Fill shape** — toggle a fill for rectangles and ellipses, then choose **Solid**, **Dither**, **Halftone**, or **Pattern** just like text fills.

## Frames & borders

A frame draws a border around the whole photo. Options:

- **Style** — **Solid**, **Dithered edge** (fades inward with a retro stipple), **Film frame** (dark film base with sprocket holes and an orange edge code), or **Mount** (see below).
- **Thickness** (1–15% of the short side).
- **Colour** (called **Film base** for the film style).
- **Frame number** — for the film style, the little edge code, e.g. `24A`.

## Mounts

The first three styles paint **on** the photo — they cover its edges. A **Mount** does the opposite: the canvas grows and the photo sits inside it, so nothing is covered and nothing is cropped. It is the border you want for Instagram, and it is where the clever colours live.

- **Thickness** — a percentage of the photo's short side.
- **Colour** — white, black or grey, a colour you pick, or **Sampled from the photo**, which reads the picture's edges so the mount belongs to it. **Shade** then nudges that lighter or darker.
- **Shape** — pad onto **1:1**, **4:5**, **9:16** or a ratio you type. **Turn shape to the photo** makes 9:16 become 16:9 for a landscape frame, so the border stays even instead of adding deep bars.

A mount appears in the layer list as **Background**, always at the foot of the stack — it is the page your other layers sit on, so it has no position to move to. Select it to edit, or right-click to delete. Switching its Style back to one of the other three turns it into an ordinary frame layer again.

A photo with a mount keeps it when you export, in place of the frame set in the export dialog.

## Gradient wash

A full-photo colour effect blended over the image — great for skies, vignettes and cross-processed looks.

- **Gradient** — click the swatch to build the ramp in the Deluxe Paint panel.
- **Blend** — in the **Layer** card above; a wash starts on **Soft Light**.
- **Mask** — **None (whole photo)**, **Linear** (graduated), or **Radial**. Radial adds a **Feather** control, and either masked mode adds **Invert mask**. Drag the handles on the photo to position the mask.

## Colours & patterns — the Deluxe Paint panel

Clicking any gradient or pattern swatch opens the Deluxe Paint popover, with two stacked modules.

**Colour palette (32 slots).** A grid of 32 colours in four rows of eight. Click a slot to select it, then fine-tune it with the vertical **R G B** and **H S V** sliders or type a **hex** value. Three helpers act on the selected slot's row of eight:

- **Spread** — blends the eight slots evenly between the two ends.
- **Exchange** — reverses the row's colour order.
- **Copy → ramp** — pushes the row into the gradient ramp below.

(The **Range 1–6** buttons and colour cycling are marked "coming soon".)

**Gradient / fill.** Pick the **Fill mode**: **Solid**, **Gradient**, or **Pattern** (a gradient wash is locked to Gradient).

- *Gradient* — the ramp strip shows each colour stop. Tap a stop, then tap a palette colour to set it; drag across the ramp to select a range. **Spread** blends the selected range, **Even** blends the whole ramp, and the **Colours** stepper sets how many stops (2–16). Choose a **Direction** (vertical, horizontal, radial, diagonal) and a **Dither** amount (0 = hard bands, 7 = full stipple).
- *Pattern* — pick one of ten classic 1-bit tiles: **Checker, Dots, Brick, Grid, Diagonal, Crosshatch, Verticals, Horizontals, Weave, Scales**. Set the **Ink** and **Paper** colours and a **Scale** (1–6) for how chunky the tile reads.

Click **Apply fill** to commit and close. Plain **Colour** wells (for solid fills, strokes and text) open the standard macOS colour picker with its wheel, hex field and eyedropper.

## How it saves

You never "save" a painting by hand. Every change auto-saves a moment after you make it, into a hidden sidecar kept alongside the photos in that folder — reopen the folder later and your overlays are exactly as you left them. Because the file itself is untouched, the overlays are invisible outside Chili RAW until you **export** the photo: at export time they're flattened onto the full-resolution developed image, and the original RAW or file stays clean.

## Tips

- Build your look once in the **New shape** panel, then draw several shapes that all match.
- Keep the **Date stamp** on **Use photo's capture date** for authentic, per-shot dates across a whole roll.
- A subtle **Gradient wash** on **Soft Light** at reduced layer **Opacity** is an easy vintage tint.
- Turn a layer's **eye** off to compare with and without, instead of deleting it.
- Higher **Dither** with only a few ramp colours gives the most convincing old-school stipple.
