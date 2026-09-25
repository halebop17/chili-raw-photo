---
title: "Lift & Stamp"
description: "Copy a look, and the parts of it, onto other photos."
sidebar:
  order: 6
---

Lift & Stamp copies a photo's look — and, if you want, some of its metadata — onto other photos. You *lift* a snapshot from one frame, tick exactly which parts you want, then *stamp* those parts onto a whole selection. Everything you copy in the Develop groups is non-destructive; the metadata parts (rating, flag, GPS) are staged and written to your files when you Save.

## Where the controls are

- **In Grid:** **Lift** and **Stamp** sit side by side in the action row, the second row of the toolbar.
- **In Develop:** the **Copy Settings** button (tag icon) in the top-right viewer controls shows the tick list; ⌘V stamps.

Ticking is done in the **Copy Settings** dialog, which opens centred over the image. See [Copy and paste a look with ⌘C / ⌘V](#copy-and-paste-a-look-with-c--v) below for when it appears on its own.

## The three steps

1. **Focus the photo you like.** In Grid, click it so it's the focused tile; in Develop, it's the image you're viewing.
2. **Lift it.** Click **Lift** (or press ⌘C). A toast confirms the filename, and the Copy Settings dialog opens so you can see what will be carried.
3. **Choose targets, then Stamp.** Select the photos you want to change, then click **Stamp N** (N is how many photos will be affected), or press ⌘V. The button is greyed out until something is lifted *and* at least one photo is targeted.

**What counts as a target:** the current selection if you have one, otherwise the single focused photo. So in Grid you can select many photos and stamp them all at once; in Develop you can arrow through the filmstrip and stamp one image at a time.

## What each tick copies

The tick list has four columns. Toggle any row on or off; your choices stay put for the next stamp until you change them.

**EDIT and GRADING** — the look, grouped the way the Develop panel is, and **on by default**. Each group shows how many of its sliders are ticked; click the **›** beside it to open the group and tick or untick single sliders — say, everything in Tone except Exposure. A group that is partly ticked shows a dash. Color Mixer and Color Grading open as small grids (colour or tonal range down, Hue / Sat / Lum across).

| Group | Copies |
|---|---|
| White Balance | Temp and Tint |
| Tone | Exposure, Contrast, Highlights, Shadows, Whites, Blacks, Highlight Recovery and its Amount, the Makeup sliders and the Shadow grip sliders |
| Presence | Vibrance, Saturation, Texture, Clarity, Punch, Dehaze and its Distance, and the Black & White toggle |
| Tone Mapping | The mode (AgX / Standard / Minimal) and every AgX shaping and primaries control |
| Curve | The RGB and per-channel point curves, the four region sliders and their split points |
| Color Mixer | Hue, Saturation and Luminance for all eight colour bands, and the points added on its curves |
| Detail | Sharpening (Amount, Radius, Detail, Masking), NR (Apple) and the AI detail controls |
| Vignette | Amount, Midpoint, Roundness, Feather and Highlights |
| Color Grading | Hue, Saturation and Luminance for Shadows, Midtones and Highlights, plus Blending and Balance |
| LUT | The chosen LUT and its Intensity |
| Grain | Amount, Size, Variation, Softness and Mode — each photo keeps its own grain pattern |

**GEOMETRY** — **off by default**, because geometry and masks rarely transfer cleanly between different frames.

| Tick | Copies |
|---|---|
| Crop | Open it with **›** to choose: **Exact crop** (the default) copies the crop rectangle, Straighten angle, 90° turns and flips — the same part of every photo, for a series shot from a tripod. **Aspect ratio only** copies just the crop's shape and centres it on each photo, so a mix of portrait and landscape frames all get, say, 4:5. |
| Transform | Vertical & horizontal keystone, fine Rotate, Aspect, Scale, and X/Y offset |
| Masks | Every local-adjustment mask (radial, linear, brush) on the source, copied as fresh independent masks |

**METADATA** — all three are **off by default**, so a normal stamp never touches ratings, flags, or location unless you ask it to.

| Tick | Default | Copies |
|---|---|---|
| Rating | Off | The star rating |
| Flag (pick / reject) | Off | The pick / reject flag |
| GPS location | Off | The photo's coordinates |

Metadata parts are staged like any other edit — written into the files by the automatic save, or immediately with **Save Staged Edits** (⌘S).

> **Not yet included:** IPTC fields (caption, copyright, contact, and so on) and keywords are not copied by Lift & Stamp. Only the develop look plus rating, flag, and GPS transfer.

## Keyboard shortcuts

You don't have to open the panel at all. ⌘C copies the focused photo, and ⌘V pastes the current ticks onto your targets.

| Shortcut | Action |
|---|---|
| ⌘C | Copy the focused photo — the **Copy Settings** dialog appears the first time in a folder |
| ⌘⇧C | Copy, and always show the Copy Settings dialog |
| ⌘V | Stamp the ticked parts onto the selection (or the focused photo) |

**The Copy Settings dialog.** The first time you press ⌘C in a folder, a dialog opens centred over the image showing every tick in four columns — Edit, Grading, Geometry, Metadata — so you can see the whole list without scrolling. Change what you want, click **Copy**, and it closes.

After that it stays out of the way: every later ⌘C copies silently with the ticks you chose, so ⌘C → ⌘V is a two-keystroke copy of a look. Press **⌘⇧C** whenever you want the dialog back to change what gets copied. It also re-arms itself when you open a different folder, so a new shoot gets one look at the list.

**Check All / Check None** in the dialog's bottom-left tick or clear every box at once.

**⌘⇧C and Develop's tag button never re-lift.** They show the ticks for whatever is already on the board, so you can reopen the list after selecting your targets without the board quietly changing to one of them. To lift a different photo, focus it and press ⌘C (or click **Lift**).

(These shortcuts do the usual text copy/paste when a text field — like the Filter box — is focused. And in the **Geo Tag** view, ⌘C / ⌘V copy and paste GPS coordinates instead.)

## Tips

- **Cull a shoot fast:** nail the look on one frame, select the rest of that scene in Grid, and stamp all of them in a single click.
- **Keep geometry per-photo:** leave Crop and Transform off unless the shots are framed identically — a crop that suits one composition usually won't suit another. To give a mixed batch the same shape, use Crop's **Aspect ratio only**.
- **Copied masks are independent.** Each stamped photo gets its own copy, so tweaking a mask on one image won't disturb the others. A Person mask narrowed to certain people covers everyone on the photos it is stamped onto — the people it picked are in the other photo.
- **Re-lift any time:** focus a different photo and click **Lift** (or press ⌘C) again to replace what's on the board.
- **The Copy Settings dialog only nags once.** If you want it every time, press ⌘⇧C instead of ⌘C.
