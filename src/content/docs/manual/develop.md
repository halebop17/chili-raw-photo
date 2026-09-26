---
title: "Develop"
description: "Tone, colour, curves, masking and the RAW pipeline."
sidebar:
  order: 5
---

Develop is Chili RAW's non-destructive editor. You work on **one photo at a time** — the photo focused in the filmstrip along the bottom — using a large live preview on the left and a Lightroom-style adjustment panel on the right. Nothing is ever written into your RAW/DNG or JPEG: every edit is held per-file and saved automatically, so you can change or reset it at any time and the original pixels stay untouched. A video clip can be graded here too, with a reduced set of controls — see “Grading a video clip” below.

## Opening Develop and showing the tools

- Switch to Develop with **⌘2**, the left sidebar, or **View ▸ Develop**. Double-clicking a photo anywhere also lands here.
- The right-hand tool panel is **collapsed by default**, so Develop opens as a fast full-screen viewer. Click the **sliders** button at the top-right to show or hide the edit tools. With the tools hidden and no edits applied, the photo renders straight from the fast preview cache.
- The three floating buttons at the top-right are: **Copy Settings** (tag icon), **Info** (i — also the **I** key), and **Show/Hide edit tools** (sliders icon).
- **Drag the panel's left edge** to make it wider or narrower (310–390 px; it starts at 322 and remembers your choice). Only the slider tracks change length — every label, value, button and swatch keeps its size and place, so a wider panel just buys you finer slider control on a big screen.

## The preview: zoom, pan, and navigation

The preview keeps keyboard focus, so these keys work as soon as you're in Develop:

| Key / gesture | Action |
|---|---|
| **↑ / ↓** | Zoom in / out |
| Scroll wheel / trackpad | Zoom |
| Drag (when zoomed) | Pan |
| **Z** | Reset zoom to Fit |
| **← / →** | Previous / next photo |
| **I** | Toggle the floating info box |

The zoom readout at the bottom-right is also a menu: **Fit, 100%, 200%, 400%, 800%**. The info bar there shows the file name, format, dimensions, size and capture date.

## Working with the sliders

Every slider row behaves the same way. Drag the slider, type a number in the field, or use the small **up/down stepper** to nudge by a natural step. **Double-click the label or the slider** to reset that one control to its default. Temp, Tint, Vibrance and Saturation have colored tracks so you can see the direction of the change.

## Taking an edit back

**⌘Z** undoes your last adjustment on the photo you are looking at, and **⇧⌘Z** puts it back. The Edit menu names what it is about to do — *Undo Exposure*, *Undo Add Radial Mask*, *Undo Crop* — so you can see what you are taking back before you take it.

One continuous drag of a slider is **one** undo, not one per twitch of the mouse; the same goes for dragging a mask, a crop handle or a curve point, and for holding a stepper down. Each photo keeps its own history, so ⌘Z never reaches into the photo you were on a minute ago, and walking down the filmstrip and back finds that photo's history where you left it.

This is a working history, not a saved one. It lasts as long as the folder is open, it is not written to the sidecar, and it starts fresh when you switch to another **version** — a step you took on one version is not something to paste onto another. For deliberate save points, use Versions; for going back further than the session, your edits are non-destructive anyway and **Reset** returns the photo to how it came out of the camera.

⌘Z belongs to the page you are on. In Develop it walks back through your adjustments to the first one you made on that photo and then stops — it will not carry on into a photo you moved to the Trash from the Grid, which would bring a photo back where you cannot see it happen. When there is nothing left to take back, Edit ▸ Undo greys out. In the Grid, ⌘Z still means *undo the last Move to Trash*, exactly as before; in Pixels it means the Pixels document.

## The scopes

Pinned above the tabs is a graph of the photo as it currently looks — everything you have done to it, exactly as it appears on screen. Five glyphs under the graph switch what it shows, and your choice is remembered.

| Glyph | Scope | What it is for |
|---|---|---|
| Overlapping humps | **RGB Overlay** | The classic photo histogram. The three channels blended, overlaps reading yellow, cyan and magenta. |
| Three stacked curves | **RGB Split** | The same three channels in separate lanes, so you can read one channel's shape without the other two lying on top of it. |
| A band with a trace | **Waveform** | Brightness **across the frame**, left to right — which no histogram can show you. A blown sky and a blown highlight look identical in a histogram and completely different here. |
| Three blocks | **RGB Parade** | The three channels side by side. The white-balance instrument: a colour cast you cannot see in an overlay is obvious the moment the channels sit next to each other. |
| A circle | **Vectorscope** | Colour without brightness. Distance from the centre is saturation, direction is hue, and the amber line is where skin tones should fall. |

Waveform and Parade are marked **75 / 50 / 25** down the left — percentages, not the 0–1023 you may know from video tools, which measures something photographs do not have.

**The ghost.** A dim outline sits under the live trace: that is the same photo with none of your edits. Drag Exposure and you watch the trace move off it, rather than having to remember where it started. Turn it off by right-clicking the scope.

**Hover the graph** for a vertical line, the tone under the pointer, and how much of the photo is darker than that point.

**Drag the histogram to move a slider.** On the Edit tab, with RGB Overlay or RGB Split showing, the graph is divided into five zones, left to right: **Blacks, Shadows, Exposure, Whites, Highlights**. Hover and the zone under the pointer lights up with the name and value of its slider; drag left or right and that slider moves with you, in the panel as well. If you have hidden the Tone section, the histogram leaves those sliders alone too. The zones sit where each slider changes the picture most, which is why Highlights, not Whites, holds the right-hand end. One drag is one undo. On a video clip there are three zones, because Shadows and Highlights do not apply to video.

**The two percentages in the graph's top corners** are how much of the photo is pure black (left) and pure white (right) — detail that no longer exists. **Click one** and those pixels are painted on the photo, blue for the crushed shadows and red for the blown highlights, so you can see *where* rather than just how much. Click again to switch it off.

**Point at the photo to place it on the scope.** Move the pointer over the picture and a marker shows where that pixel sits: a tick per channel on the histogram, a horizontal rule at that brightness on the waveform and parade, a ring on the vectorscope. Its R/G/B values are printed in the corner as percentages.

This is the measurement your eye cannot make. Hover a grey card, a white wall or a backdrop on the **Vectorscope**: if the ring sits on the centre the shot is neutral, and if it does not you have a cast — your eye adapts to a cast within seconds, which is exactly why it cannot tell you. On a portrait, hover a cheek and see how far it falls from the skin-tone line.

**Faces plot separately.** If People has found faces in the photo, the **Vectorscope** dims the full frame and paints the face pixels brightly over it, against the skin-tone line. Otherwise a face is a small part of the picture and disappears into whatever the background is doing. Named or not, both count, and the cluster follows the face through a crop or a straighten.

**A bigger graph.** The chevron at the right of the glyph row — or a double-click anywhere on the graph — makes it about twice as tall, which is what the Vectorscope and Parade want when you are reading them properly rather than glancing.

Right-clicking the scope also moves the glyph row above the graph, if you prefer it there.

## The five tabs

The panel has five tabs. Each (except Edit) has a **toggle shortcut** — press once to open it, press again to jump back to Edit. These keys work only inside Develop and can be rebound in **Settings ▸ Shortcuts ▸ Develop tabs**.

| Tab | What it holds | Shortcut |
|---|---|---|
| **Edit** | White balance, tone, presence, dehaze, tone mapping, curve, colour mixer, detail, bokeh, blend | **W** (opens by default) |
| **Grading** | Film-stock looks, LUTs, film grain | **T** |
| **Geometry** | Crop, straighten, flip, transform, lens corrections | **R** |
| **Repair** | Heal, Clone and Generative Remove | **Q** |
| **Masking** | Eleven kinds of local mask + Quick Brush | **Y** |

Two buttons sit in a footer that's visible on every tab: the amber **Export…** button and **Reset All** (which clears all edits back to neutral). You can collapse any section by clicking its header. Presets live outside the panel entirely — the aperture button at the top-right of the photo.

## Rearranging the panel

**Edit** and **Grading** carry enough sections that the order is worth having your own way round. **Drag a section by its header** to move it, or **right-click a header** for **Move to Top**, **Move Up**, **Move Down**, **Move to Bottom** and **Reset Panel Order**.

Each tab keeps its own order and both survive a relaunch. Geometry, Repair and Masking have one or two sections apiece, so there is nothing to arrange and they are unchanged.

The order is how the panel is laid out and nothing more. It touches no edit, no version and no sidecar: two photos given the same adjustments look the same whichever order you keep the sections in.

## Showing and hiding sections

**Right-click any section header** on Edit or Grading and choose **Show/Hide Sections…**. A list of both tabs' sections opens beside the panel: untick one to take it out of the panel, tick it again to bring it back where it was, or click **Show All**.

Hiding a section only tidies the panel. Its edits stay on the photo, and a hidden section whose settings aren't at their defaults on the current photo is marked **Has edits** in the list. If you hide every section on a tab, the tab shows a **Show Sections…** button in their place.

## Edit tab

**Basic.** In Lightroom order:

- **Black & White** toggle at the top.
- **White balance:** Temp (−2000…+2000 K) and Tint (−100…+100). On RAW these adjust the as-shot value; on non-RAW files a note reminds you they're approximate.
- **Tone:** Exposure (−5…+5 EV, in quarter-stops), Contrast, Highlights, Shadows, Whites, Blacks (each −100…+100).
- **Highlight Recovery** (RAW only): a toggle plus an **Amount** slider (0…100, default 50) that reconstructs clipped highlights from the RAW's headroom.
- **Presence:** Texture, Clarity, Punch, Vibrance, Saturation (each −100…+100). **Texture** works on the finest detail (skin, fabric, foliage) and leaves edges alone; **Clarity** is mid-scale local contrast; **Punch** is the heavier, contrastier version of the same idea — reach for it when Clarity isn't enough.

**Dehaze.** Its own section, because it isn't a contrast slider: **Strength** (−100…+100) estimates how much haze sits in front of each part of the scene and removes (or adds) it, and **Distance** (0…100) sets how far into the scene that estimate reaches. Negative Strength puts atmosphere back.

**Curve.** A tone curve with **RGB** plus separate **R / G / B** channels. Click the line to add a point, drag to shape it, drag an interior point off the top or bottom to delete it. Below the graph is a **parametric** curve — four region sliders (**Highlights / Lights / Darks / Shadows**) that bend the curve *smoothly* within their tonal band instead of as a straight lift, so it never kinks. Hovering a region slider shades the stretch of the curve it reaches (widest where it bites, tapering to nothing at the ends). The three small handles under the graph move the boundaries between the four regions. The parametric layer stacks *on top of* the point curve — you can use either or both.

**Color Mixer (HSL).** Targeted, corrective color: eight color bands (**Red, Orange, Yellow, Green, Aqua, Blue, Purple, Magenta**) with **Hue / Saturation / Luminance** tabs — eight sliders per tab. Use it to fix a *specific* color in the photo: pull a too-loud sky's Blue Saturation down, nudge skin Hue, darken foliage Luminance. Greys are left alone, so a Luminance move on "Red" only touches actually-red pixels. (For adding a *creative* color wash to a whole tonal range, use the Color Grading wheels on the Grading tab instead.)

*As a curve.* The switch at the top of the section, **Sliders | Curve**, shows the same mixer as three curves — Hue, Saturation and Luminance, on the same tabs — with every hue from red to red across and flat through the middle meaning no change. The eight colored dots on the curve are the eight sliders: drag one up or down and its slider moves with it. Click anywhere on the curve to add a point of your own at that hue, for a color that falls between two bands — a sky between Aqua and Blue, skin between Red and Orange — and drag it wherever you like. A point only reaches as far as the points either side of it, so it changes that color and nothing else. Double-click a point you added, or drag it off the top or bottom, to remove it. The strip under the curve shows every hue, and the thinner strip below it what each becomes. While you're on the sliders, a dot on **Curve** means points have been added there. The section remembers which view you used last.

**Tone Mapping.** Sets the display tone transform. **Mode** is one of three:

- **AgX** (the default) — a hue-preserving filmic roll-off. In AgX you also get Toe (shadow roll-off), Shoulder (highlight roll-off) and Preserve Hue (0…100%, default 60). Contrast and Saturation are the ordinary Basic sliders; they feed AgX rather than having separate copies here.
- **Standard** — the Lightroom-style render: Adobe's own tone curve, applied with the camera profile you picked. Reach for it when you want a file to match what Lightroom or Camera Raw would have made of it.
- **Minimal** — no automatic tone at all. Your own adjustments still apply; what Minimal leaves out is the display curve the other two put on top.

Your Basic Contrast still applies in all three modes.

*What Minimal is for.* It is a **reference, not a look**: nothing is added, so what you see is what the decoder produced. Three reasons to reach for it.

**As the base for a film Look or a LUT.** A print emulation already contains its own curve. Run it on top of AgX's filmic shoulder and you get two filmic curves stacked — the look comes out flatter and more compressed than it was designed to be, and no amount of adjusting the Look itself fixes it. Minimal hands the Look a clean input, so it behaves the way it was built to.

**As a diagnostic baseline,** when you want to see what came off the sensor before any tone opinion — useful when you are judging a decoder setting or a camera profile and want nothing else in the way.

**As a base for your own tone,** if you would rather shape everything yourself with Curve and the Basic sliders.

*The trade.* With no automatic shoulder, blown highlights **clip hard instead of rolling off** — a bright sky can go to a flat white edge where AgX would have held gradation. That is the point of the mode, but it means highlight control is yours: use **Highlights** and **Highlight Recovery** in Basic when a frame needs it.

**AgX Primaries.** An advanced section that appears **only when Mode is AgX**. It exposes the color-science behind the look: a **Base** primaries picker (Rec2020, sRGB, P3, Adobe), per-channel **Purity** and **Rotate** for R/G/B, plus **Restore** and **Reverse** masters.

> **In general, don't change these at all.** The defaults *are* the tuned look, and 99% of the time you should leave every slider here untouched. This is a **repair panel** you reach for only to fix a specific, visible problem (see the table below) — not a routine editing panel. If nothing looks wrong, don't touch anything.

*What it's for.* Any strong tone curve compresses bright colors toward white, and saturated highlights tend to **skew hue and go neon** as they brighten — a blue sky drifting cyan, a red flower turning orange. AgX prevents this in two steps: it first **calms the colors down** before the tone curve runs (so hues stay put through the highlights), then **brings the saturation back** afterward once the danger has passed. The Primaries sliders let you tune both halves of that trick.

- **Purity (R / G / B)** — how much that color is *protected* in the highlights. Drag **right** for more protection (calmer, hue-stable brights); **left** for less (brighter but more likely to skew). This is the calm-them-down half. Reach for the channel that's misbehaving: **B** for skies, **R** for reds/oranges, **G** for foliage.
- **Restore** — overall saturation of the result (the bring-it-back half). Drag **right** for more vivid, **left** for a more muted, filmic look. Default 100%.
- **Rotate (R / G / B)** and **Reverse** — fine hue-steering controls. These matter rarely; leave them at their defaults for everyday work.
- **Base** — the working gamut the whole transform operates inside (not your export space). Wider gives the effect more room and better hue stability. **Stick with Rec2020** (the default and best all-rounder); step down to **P3** only if Rec2020's highlights ever feel too desaturated for a given image — though raising **Restore** is usually the better fix.

*Quick reference:*

| You see this | Move this slider | Direction |
|---|---|---|
| Blue sky going cyan/electric | **B Purity** | right |
| Red/orange skewing in the highlights | **R Purity** | right |
| Green foliage going weird | **G Purity** | right |
| Image looks flat / washed out | **Restore** | right |
| Colors too punchy / not filmic enough | **Restore** | left |
| Everything looks fine | *(leave it alone)* | — |

**Detail.** Two groups in one section — capture sharpening on top, noise and detail reconstruction below the divider.

- **Sharpening** (0…150), with **Radius** (0.5…3.0), **Detail** (0…100, default 25) and **Masking** (0…100). Sharpening starts at **40 on a RAW and 0 on a camera JPEG** — a JPEG was sharpened by the camera already. Masking holds the sharpening off flat areas like skies.
- **NR (Apple)** (0…100) — Apple's raw noise reduction. It only exists where Apple did the demosaic, so it disables itself (and says so) on the LibRaw and Adobe DNG SDK decode paths.
- **AI Denoise** (0…100, Pro) — works on **every** decode path, which is why it exists. It is blended against the un-denoised render, so the slider is a real strength control; around 40 % is roughly DxO's 25–30, and past ~60 it starts smoothing skin and fine texture rather than noise. Appears once the model is downloaded in **Settings ▸ AI**, and costs a second or two per render.
- **Deblur (rescue)** (0…100, Pro) — motion-blur rescue. It is not the Sharpening slider: use it on a frame that would otherwise be deleted.
- **AI Detail** (0…100, Pro) — runs the ×2 upscaling model and resamples straight back down, keeping the structure it restores and discarding the resolution it invents. **Judge it at 1:1** — at fit view you are looking at a proxy.

The three AI rows carry a violet dot: they run a model you downloaded yourself, on your own Mac.

**Vignette.** Darkens or lightens the corners on purpose, as a finishing touch. It follows your crop: the vignette is centred on the picture as you cropped and straightened it, not on the original frame. (Removing the darkening your *lens* put in the corners is a different job — that is **Lens Corrections** on the Geometry tab.)

- **Amount** (−100…+100) — negative darkens the corners, positive fades them towards white. 0 is off.
- **Midpoint** (0…100, default 50) — how far in the vignette reaches. Lower brings it in towards the centre; higher keeps it in the corners.
- **Roundness** (−100…+100) — 0 is an oval that fits the frame, +100 a circle, −100 a rounded rectangle.
- **Feather** (0…100, default 50) — how soft the transition is. 0 gives a hard edge.
- **Highlights** (0…100) — with a negative Amount, keeps bright things in the corners bright: a lamp or a window stays lit while the shadows around it darken.

The four sliders under Amount wait until Amount moves. The vignette isn't offered for video clips.

**Bokeh** *(Pro)*. A depth-based background blur, driven by the photo's own distance map — an optical blur, not a mask. It runs in scene-linear *before* the tone map, which is what keeps specular highlights as bright discs instead of grey smudges.

- **Analyze Depth** runs the depth model once for this photo; after that the sliders are instant. A strip shows the distance map it found.
- **Strength** (0…100) is the maximum defocus at the furthest point, as a percentage of the short edge — so what you see on the preview is what the exported file gets. 0 is off.
- **Focus Near / Focus Far** set the band that stays sharp; **Transition** sets how fast the blur grows outside it (small = a narrow plane of focus, large = a gradual falloff).
- **Pick Focus** then clicking your subject places that band for you — usually faster than the two sliders.
- **Aperture** picks the shape of the iris: round, or 5, 6 or 7 blades. A defocused point light is smeared into an image of the opening, so a 6-blade iris puts hexagons in the background. The chips draw the shape rather than naming a number.

**Blend** *(collapsed by default)*. Puts a second photo over this one as a layer. Drag a photo from the filmstrip onto the image, or add it from the panel, then set **Mode** (the usual blend modes), **Opacity**, **Scale** (50…200 %) and **X / Y Offset**. **Use layer's own edits** renders the other photo through *its* develop settings rather than raw. The blend happens after developing, so both photos arrive in the same rendering.

## Grading tab — color grading, LUTs and grain

## Color grading — three-way wheels

Three color wheels — **Shadows**, **Midtones**, **Highlights** — for adding a *creative* color wash to each tonal range (teal shadows and warm highlights, the classic cinematic split). This is the look-building counterpart to the Edit tab's Color Mixer, which is for correcting specific colors.

Each wheel works the same way:

- **Drag the puck out from the centre.** The **direction** you drag sets the **hue** you're adding; the **distance** from the centre sets the **saturation** (how strong the tint is). Centre = no tint.
- **Double-click** the wheel to recentre it (reset that range to neutral).
- Hold **⇧ Shift** while dragging for **fine control** — useful for dialling a subtle value on the small wheel.
- **The slider directly under each wheel is Luminance** (−100…+100) — it brightens or darkens *just that tonal range*. It is **not** saturation (saturation lives on the wheel itself).

Below the three wheels:

- **Blending** (0…100, default 50) — how softly the Shadows / Midtones / Highlights ranges hand off to each other. Higher blends them more gradually; lower makes the split more distinct.
- **Balance** (−100…+100) — shifts where the split between ranges falls. Positive pushes it toward the highlights (the Highlights wheel reaches further down into the midtones); negative toward the shadows.

- **LUTs.** Click **Choose LUT** to pick from a folder of your own `.cube` LUTs (with subfolders as submenus), or **Choose LUT Folder…** to link one. **Import .cube…** copies LUT files into Chili RAW's own library, where they appear under **Imported**. You can also link a LUT folder up front in **Settings ▸ Film LUTs ▸ LUT folder** (scanned recursively).
- **Strength** (0…100%, default 100) blends the LUT over the graded image — dial it down to mix the look with your straight develop. 0 is off.

## Grain — physically-based film grain

Adds real film grain, modelled on how silver-halide crystals actually develop rather than by laying a noise texture over the picture. That model is why the grain **clumps** like film instead of looking like flat digital speckle, and why its visibility follows the exposure on its own (see *Amount* below) with no curve to tune.

**The preview strip.** At the top of the Grain section is a small dark-to-light ramp — shadows on the left, highlights on the right — with the current grain baked in at full (1:1) size. **This strip is where you judge grain.** The main image on the canvas deliberately does **not** show grain while you edit: rendering it across the whole preview is slow, and at fit-to-screen zoom the grain would display at the wrong size and mislead you. The strip always shows grain at the true size it will export. **Grain is baked into your photo on export** — it appears in the exported file (any format), not on the editing canvas. It sits under any Pixels overlays (a frame or datestamp stays clean).

Watch the strip as you drag a slider: grain is strongest through the **mid-greys** (the centre of the ramp) and naturally **fades out toward pure black and pure white** at the two ends. That mid-tone peak with clean shadows and highlights is the hallmark of real grain — if you see it in the strip, the effect is working correctly.

**The sliders:**

- **Amount** (0–100%, default **0 = off**) — overall grain strength, blended over the ungrained image. Leave it at 0 and grain is completely off (and costs nothing). Turning it up is what switches grain on; the first time you do, Chili RAW assigns a random **Seed** (below) so your photo gets its own grain pattern.
- **Size** (100–6400 **ISO**) — the main character control, labelled in **film-speed (ISO)** because that is how photographers think about grain: a fast film has bigger, more visible grain. So higher ISO here = **coarser, chunkier** grain; lower ISO = **finer, tighter** grain. It is a familiar stand-in for the underlying grain radius — ISO 100 is very fine, ISO 6400 is heavy. The slider is spaced by stops (each doubling of ISO is an equal drag), like the Kelvin white-balance slider.
- **Variation** (0–60%, default **30%**) — how much the individual grains vary in size. At **0%** every grain is identical, which reads mechanical and slightly digital; a little variation (the default 30%) makes it look natural and organic. It changes the *character*, not the overall size.
- **Softness** (0.4–1.5 px, default **0.8**) — how sharp or diffuse each grain is, simulating the optical blur of the print/scan. Higher = softer and subtler; lower = crisper and more defined.
- **Seed** — the random number that fixes *this* photo's exact grain pattern. Film grain is placed by a random process (that's what makes it clump like real film instead of a repeating texture), and the seed is what drives that randomness. It does three things:
  - **Reproducibility.** Same seed + same settings = exactly the same grain, every time. It's saved with your edit, so the preview strip matches the export and re-exporting never rolls a different pattern.
  - **Per-photo uniqueness.** Each image gets its own seed (assigned the moment you first turn grain on), so two photos don't end up with the identical grain layout.
  - **Re-roll.** The button shuffles to a *different* pattern with the *same* character — same Size, Variation and Softness. Think of Amount/Size/Variation/Softness as choosing *what kind* of grain, and the seed as *this particular* sprinkling of it. Use Re-roll if the grain happens to clump somewhere it matters (a speckle on an eye, a cluster in smooth sky) until it lands nicely.

  You rarely touch the seed directly — that's why it's a readout with a Re-roll button rather than a slider.

**Presets.** **Fine / Medium / Coarse** set Size and Variation to sensible starting points (roughly ISO 200 / 800 / 3200). They deliberately leave **Amount** alone, so tapping a preset never silently switches grain on — you still raise Amount to enable it.

Tip: dial Amount up first to see grain in the strip, then set the character with Size and Variation, and use Softness to taste. The Size/Variation/Softness sliders are dimmed while Amount is 0, since they have nothing to act on.

## Geometry tab — crop, straighten, transform, lens corrections

Opening this tab shows the whole frame with the crop overlay so you can reframe; leaving it commits the crop so the other tabs render just the cropped area.

**Crop & Straighten.**
- **Crop / Done** toggles the crop overlay. Drag the corner handles to resize, drag inside to reposition; rule-of-thirds guides help you place the frame.
- **Reset** clears all geometry (crop, straighten, flips and transform). **Flip H** and **Flip V** mirror the frame.
- Aspect pills — **Free, 1:1, 3:2, 4:3, 16:9** — plus a **Portrait / Landscape** toggle to flip the ratio's orientation.
- **Angle** slider: −15…+15°, in 0.1° steps. The **Auto** pill beside it runs Vision horizon detection and straightens the shot automatically (it tells you if it can't find a horizon).

**Transform.** Vertical and Horizontal keystone correction (−100…+100), Rotate (−15…+15°), Aspect stretch (−100…+100), Scale (50…150%, default 100), and X/Y Offset (−100…+100).

**Lens Corrections.** Profile-based correction for the lens's own distortion, vignetting and colour fringing. It is **off until you turn it on** — tick **Enable Profile Corrections**.

- A status line under the tick always says what is happening: the lens it matched and where the profile came from (*"Matched FE 40mm F2.5 G · camera (Sony)"*), or why it can't correct — a zoom with no focal length recorded, no measured profile for that lens, no measurements at those settings, or a file that carries no built-in data.
- **Source** picks where the numbers come from. **Automatic** (the default) prefers the correction tables your camera wrote into the file and falls back to Lensfun; **Camera (built-in)** and **Lensfun profile** force one or the other, so you can compare the two on the same photo.
- The **lens picker** below it matches automatically, or you can name the lens yourself when the match is wrong or missing.
- **Distortion**, **Fringing** and **Vignetting** set how much of the profile to apply, one axis at a time. All three start at full, so ticking the box applies the profile as measured, the way Lightroom does. Pull one back toward 0 to apply less of that axis, or push past 1 to overdo it. **0 is exactly off** for each — the amount scales how far the correction departs from doing nothing, so a slider at 0 is bit-for-bit the uncorrected frame. Vignetting is the one people most often want less of, since corner darkening is sometimes the point.
- **Manual** — Distortion, Vignetting and Defringe by hand, for a lens nobody has measured, or when you want a correction the profile doesn't give you. A manual slider works *on top of* whatever your camera already corrected: reaching for one with **Enable Profile Corrections** switched off leaves the file's own built-in correction in place. A profile is the other way round — it replaces that built-in correction rather than stacking on it, so the frame is never corrected twice.
- **The frame is filled for you.** Straightening a bent frame pulls the picture in from the edges, which on its own would leave a thin empty border all the way round. Chili RAW zooms the corrected frame by exactly enough to cover that — the same thing Lightroom does quietly when you tick its profile corrections — so you never see a black edge and never have to crop one off. It is only ever as much zoom as the gap needs: a lens whose correction leaves no gap is not zoomed at all, and on a wide prime that does need it the cost is a sliver of the outermost edge, around 2–3%. Heal spots, Generative Remove regions and the detected masks move with it; the three masks you draw by hand — Radial, Linear and Brush — stay where you drew them, exactly as they already do when you switch the correction on or off. (The **Constrain** box under Transform is a different tool, for the empty wedges that Vertical, Horizontal and Rotate open up.)

The Lensfun database is bundled with the app and read at runtime; nothing is downloaded and nothing is sent anywhere.

Correcting a lens moves the photo, so anything pinned to it moves too — see **Masks and Lens Corrections** in the Masking section for which masks follow and which do not.


## Repair tab — dust, spots & Generative Remove

Three modes, picked with the tiles at the top of the panel. The panel itself stays quiet — this is where the modes are explained.

A **violet glyph** marks the mode that runs a downloaded AI model (Generative Remove); the two grey ones are plain arithmetic and are always available. It's the same colour code as the Masking tiles — violet for a model you downloaded in **Settings ▸ AI**, teal for one macOS ships, grey for what you do by hand.

**Heal.** Set the spot **Size**, then click a dust spot on the photo. A circle is placed, and a second, dashed circle nearby marks where the clean pixels come from — the patch is blended in, so the surrounding tone and colour carry across the join. Click a placed circle again to remove it. **Feather** (default 35%) sets how soft that join is.

**Clone.** Places the same pair of circles, but copies the source pixels straight in with no blending — the right choice when the area around the spot isn't smooth enough for Heal to fake. **Drag the dashed circle** to choose exactly what gets copied.

**Visualize Spots** turns the photo into a high-pass grey map where sensor dust stands out from the picture — the fastest way to find spots you'd never see on the image itself. **Amount** controls how hard that map is pushed. Turn it off to judge the result.

**Detect Spots** (under **Detect**) finds dust for you. It *proposes* and never heals: candidates appear as dashed rings, and you click one to accept it or ⌥-click to dismiss it — **Accept All** and **Dismiss** handle the whole set. **Sensitivity** (default 50) trades misses for false alarms. Detection corroborates each candidate against the neighbouring frames of the same session, since real sensor dust holds its position on the sensor and everything it gets confused with does not; the report line says how many candidates that check removed.

Heal and Clone work whatever crop, straighten, rotation or transform the photo carries. The circles are still *stored* on the uncropped frame — so a crop you apply later moves them with the picture instead of sliding them off — but you place them on the photo as you see it.

**Generative Remove** (Pro; needs the model downloaded in **Settings ▸ AI**) removes whole objects rather than specks. Paint over what you want gone and the background is rebuilt when you release. You can also **remove something you have already selected**: outline it with the Masking tab's Object tool (or use a Subject, Sky, Person or Depth mask you already have), then choose **Generative Remove** from that mask's menu — no painting over a thing the app had already outlined. The selection is copied into the removal, so retuning or deleting the mask afterwards leaves the removal alone. Big removals reconstruct at a higher resolution than small ones, so a large object against a treeline comes back as foliage rather than a smear. It continues the surroundings inward — it can't recover what was actually hidden, and there's no prompt: it makes things disappear, it doesn't add new ones. Each painted area becomes a **Region** row that can be switched **On/Off** or **Delete**d on its own; hover a row to light that region up on the photo, and paint over it again to extend it. **Show Regions** reveals the paint (it's hidden by default so you can judge the result), and **Clear All** drops every region. Painting is paused while a rotation, straighten, flip, transform or lens correction is active, because none of those can be undone back to the uncropped frame with a plain rectangle. A crop on its own is fine.

The bottom line of the panel counts what this photo carries — *"3 repairs on this photo"* — with **Clear All** beside it. Repairs live in the photo's sidecar, so the original file is never touched.

## Masking tab — local adjustments

Masks let you push an adjustment into just part of the frame. The tiles at the top of the panel add one. Their colour says who produces the selection: **teal** for the AI built into macOS, **violet** for a model you downloaded in **Settings ▸ AI**, and plain grey for the ones you drive yourself.

*Detected — the app finds it for you:*

| Tile | Selects | Marking |
|---|---|---|
| **Subject** | The main subject | teal (macOS) |
| **Person** | Everyone in the frame, or only the people you pick; a downloaded model can split a person into face, hair, skin and clothing parts | teal (macOS) |
| **Background** | Everything that isn't the subject | teal (macOS) |
| **Sky** | The sky, tuned side by side against Lightroom | violet (model) |
| **Object** | Click a thing and it is outlined (SAM 2) | violet (model) |
| **Depth** | A slice of the scene by distance — near, far, or a band in between | violet (model) |

*Computed — from the pixels, no model:*

- **Color** — click colours in the photo to sample them; the mask is every pixel like them. **Refine** widens or tightens the match.
- **Luminance** — a brightness range, set with a min/max pair: highlights only, shadows only, the midtones between.
- **Wand** — click a spot and the mask floods outward from it. **Tolerance** sets how far it spreads, and it can be held to the contiguous region or run over the whole frame.

*Drawn — you place it:*

- **Radial** — an ellipse. Drag it to move; the four side dots resize it.
- **Linear** — a gradient. Drag the two end points to set it; drag the middle to move the whole thing.
- **Brush** — paint coverage directly on the photo. The circle cursor shows the brush size; painted strokes stay faintly visible. Turn **Flow** down to build an area up gradually, stroke by stroke. With **Match Color** on, a stroke only takes on colours like the one under the brush where it starts: paint across the sky and the branches in front of it stay out.

**Masks can be combined.** Every mask starts as one part, and the **+ Add** / **− Subtract** row under it adds another of *any* kind to the same mask: Sky **minus** a Brush stroke over the mountain, Subject **intersected with** a Luminance range so only the lit half of a face is touched. Each part carries its own row, can be deleted on its own, and clicking a part's operator changes how it combines (**Add**, **Subtract**, **Intersect**).

**A Person mask can pick who.** With two to four people in the photo, a Person mask lists them under **People**: **Everyone**, then one button per person from left to right. Someone you have named in the People view shows by name; the rest are numbered. Click people to narrow the mask to them, and **Everyone** to widen it again. The face parts work with it, so the mask can be one person's lips rather than everyone's. **One Mask per Person** replaces the mask with one mask for each person it covers, with the same parts and adjustments, each named after who it covers — lift one face, cool another. Where people stand very close the app can take two of them for one, and their button then carries both names. With more than four people there is no list, and the mask covers everyone.

**Masks and Lens Corrections.** The detected masks — Subject, Person, Background, Sky, Object, Depth — bend with the picture when you switch **Lens Corrections** on, so a selection stays on the thing it selected. So do Color, Luminance and Wand, which are read from the pixels each time. The three you draw yourself — Radial, Linear and Brush — are placed on the photo as it looks while you draw, exactly like a crop: turning Lens Corrections on or off afterwards moves the picture under them. Draw them after you have settled the correction, or nudge them if you change it.

**Masks are named.** Each one is numbered as you make it — *Radial Mask 1*, *Radial Mask 2* — so two of a kind are never the same row twice. Open a mask and type over the name at the top to call it what it actually is; clear the name and it goes back to reading by type. Masks made before names existed read by type until you give them one.

**Every row shows what it selects.** Each mask in the list carries a small map of the frame with its own coverage lit up, in the same colour as the coverage overlay — so two radials in different corners are told apart at a glance, and a Sky mask never looks like a Subject mask. The map follows the mask: move a radial, repaint a brush or crop the photo and it redraws.

**Duplicating a mask.** Right-click one in the list for **Duplicate** and **Duplicate Inverted**. Both put the copy directly below the original with the same shape, the same adjustments and — for a detected mask — the same selection, copied rather than detected a second time. **Duplicate Inverted** flips which side is affected, which is the quick way to an inside/outside pair: one radial over the face, its inverted twin on everything else, each with its own exposure.

Click a mask in the list to select it (× deletes it). The selected mask's covered area is shown as a colored **coverage overlay** — the tint color is set in **Settings ▸ General ▸ Develop ▸ Mask overlay color** (Blue, Red, Yellow or Green; Blue is the default).

The coverage tint is a *targeting aid*: it shows while the mask is still empty, then **disappears the moment you make any adjustment**, so it never covers the edit you're trying to judge. Moving or resizing the mask keeps the tint (its outline and handles stay on screen regardless); resetting the mask's sliders back to zero brings it back. To re-check coverage on a mask you've already adjusted, **hold `O`** — the tint reappears while the key is held and fades again when you release it.

Each selected mask has its own controls:

- Radial / Linear: **Feather** (0…100%, default 50).
- Brush: **Size** (1…25%, default 6; `[` and `]` step it), **Hardness** (0…100%, default 50), **Flow** and **Strength** (1…100%, default 100), an **Erase** toggle, **Clear**, and **Match Color**. **Flow** is how much one stroke adds: at 20%, the first stroke over an area covers it 20%, and every stroke you paint over it again adds another 20% — five make it full. **Strength** is as far as a stroke can go, however often it is painted over. Erase works the same way in reverse, and each stroke keeps the Flow and Strength it was painted with. Strokes below 100% show as the coverage overlay rather than as a painted band, since the overlay is what shows how far they have built up. With Match Color on, a cross in the cursor marks where each stroke reads its colour, the coverage overlay shows what the stroke is taking while you paint, and **Tolerance** (0…100, default 50) widens or tightens the match — for strokes already painted too. Erasing obeys it as well, removing only the matching colour. The match follows the photo, so a stroke keeps its selection when you change exposure or white balance afterwards.
- Color: the sampled swatches, plus **Refine**. Luminance: the **min / max** brightness pair, plus **Feather**. Wand: **Tolerance** and a contiguous toggle.
- Detected masks (Sky, Object, Person): **Feather** softens the boundary, and **Edge** (−100…+100%, default 0) moves it — negative pulls the mask *in*, positive pushes it *out*. They fix different halves of a bad edge: Feather alone leaves a halo where the detection cut wide, Edge alone leaves a hard line. Small values do the work; ±100% is about 2% of the frame's short side. **Subject** and **Background** masks have Edge only — their detected edge is already fine-grained and is left as the model drew it. **Depth** has **Softness** instead, which widens the falloff at both ends of its distance band.
- **Invert** flips which side of the mask is affected.
- Local adjustments applied inside the mask: Exposure (−3…+3 EV), Contrast, Highlights, Shadows, Saturation, Temp, Clarity and Dehaze (Strength + Distance, the same module as the Edit tab's) — each −100…+100.

**Quick Brush** is a row of one-click tools that create a brush mask already loaded with an adjustment — just pick one and start painting:

| Tool | What it does |
|---|---|
| **Dodge** | Brightens (+0.5 EV) |
| **Burn** | Darkens (−0.5 EV) |
| **Polarize** | Deepens skies (contrast + saturation + clarity) |
| **Saturate** | Boosts saturation |
| **Contrast** | Adds punch |
| **Clarity** | Adds local contrast / texture |
| **Warm** | Warms the color temperature |

## Versions

A photo can carry several **versions** — separate sets of develop settings for the same file, the way DaVinci and Lightroom's virtual copies do it. Nothing is copied on disk; a version is just another set of numbers in the sidecar.

The **version chip** sits in the Develop toolbar above the photo (it also has a **Versions ▸** submenu in the grid's right-click menu):

- **Pick a version** from the list to make it live — the canvas changes to that version's edit immediately.
- **Create New Version** copies the current edit into a fresh one, so you branch rather than start over.
- **Rename “…”** and **Delete “…”** act on the active version. The last one can't be deleted.
- **Compare Versions…** opens them side by side, with zoom and pan synced ([chapter 3](/manual/loupe-and-viewer/)). **Esc** brings you back.

A **Film Labor Look belongs to the version that owns it**, like every other edit: put a Look on version 2 and version 1 is still your unfilmed photograph, Compare Versions draws each pane with its own film, and deleting a version takes its Look with it. Grid tiles carrying more than one version show a small versions mark in the corner — and **Filter ▸ More than one edit version** finds them.

## Before / After, and Proof

- Three ways to see the untouched photo, all off in crop mode:
  - **\\** flips the whole frame to the original (Lightroom muscle memory).
  - **⇧\\** (**|**) draws a **curtain** — before on one side of a wipe, after on the other.
  - **B** brings up a **before/after loupe** — a circle over the canvas showing the original underneath. **=** and **−** (or the wheel, or the on-screen ± buttons) resize it.

  Each key toggles: press it again to go back to your edit.
- **⌥P** enters **Proof**. The canvas is rendered through an **export recipe** — the output size, the AI upscale and the output sharpening exactly as the file will be written — so you judge a 2048 px web JPEG at actual size instead of guessing. A bar along the top carries the recipe and an **Actual size** button (one output pixel per screen pixel), and the sharpening level can be switched right there. Leave with **⌥P** or **Esc**.

## Editing several photos at once (Auto Sync)

Select a batch in the filmstrip (⌘-click and ⇧-click work there, and your selection survives moving between photos with the arrow keys), then turn on the **Auto Sync** switch in the panel footer. Moving one control now moves it on every selected photo, live.

- It syncs **the control you touched**, not the whole panel — nudge Contrast and a photo sitting at Exposure +1.0 keeps its exposure.
- It covers the Edit and Grading tabs, plus aspect ratio, rotation and flips on Crop. **Masking and Heal never sync** — that's per-photo work.
- White balance syncs the **temperature you see**, not the raw offset, so photos that were shot at different Kelvin end up matching. JPEGs in a RAW selection are skipped and reported: they have no as-shot value to work from.
- One **undo** covers the whole batch (**Photo ▸ Undo…**), and Auto Sync never survives leaving the page.
- **Photo ▸ Auto Level Selected** straightens a whole selection, measuring each photo on its own. Photos with no clear level reference are left alone rather than guessed at, and counted: *“Leveled 34 of 50 · 16 had no level reference.”*

## Grading a video clip

A clip opens in Develop like a photo, with the controls that survive frame-to-frame: white balance, exposure and the tone sliders, curve, colour mixer, tone mapping, LUTs, colour grading, and crop. What's absent is absent on purpose — Highlights and Shadows, Texture / Clarity / Punch / Dehaze, sharpening, noise reduction, every AI stage, grain, bokeh and blend layers are whole-frame or per-render passes that boil or crawl in motion. Export writes a graded clip: pick the **Codec** and **Container** in the export dialog, and the grade is applied frame by frame at the clip's own resolution.

## Presets and Lift & Stamp

Two ways to reuse a look:

- **Presets** (the aperture button, top-right of the photo, next to Lift & Stamp). Click a saved preset to apply it to the selection, × to delete one, or **Save current as preset…** to save the current photo's look.
  - **Saving** opens a window with a name, a category and the same tick list as Copy Settings (below), Edit and Grading side by side. Tick exactly what the preset carries — whole groups, or single sliders inside them. It starts with **White Balance and Exposure off**, so a look preset leaves each photo's colour temperature and brightness alone; tick them if you want them. The line above the ticks counts what the preset carries and names what it skips.
  - **Crop – aspect ratio only**, under Geometry, saves the ratio of the current photo's crop (say 4:5). Applied, it crops each photo to that ratio, centred on the photo itself — portrait or landscape. It's off unless you tick it, and only available when the photo is cropped. A preset never carries a crop's exact position, straighten, transform, masks, ratings or GPS: those belong to one photo.
  - **Categories.** Presets are listed under their category. Right-click a preset to **Apply**, **Change What It Carries…** (the same window, for a preset you already have), **Move to** another category or a **New Category…**, **Rename…** or **Delete**. Right-click a category heading to rename or remove it — removing keeps its presets, which move to Uncategorised. Each row notes what the preset carries, so you know before you click.
  - Presets saved before the tick list existed carry everything, exactly as they always did, until you change them.
- **Copy Settings** (the tag button, top-right). It opens the centred dialog listing exactly what carries over, in four columns — Edit, Grading, Geometry, Metadata. The look is ticked on by default; crop, transform, masks and metadata are off. **⌘C** copies the current photo, raising that dialog the first time in a folder, and **⌘V** stamps it onto the selection. **⌘⇧C** and the tag button bring the dialog back without re-lifting. See [Lift & Stamp](#6-lift--stamp) for every tick.

**Reset.** Use **Reset All** in the footer to clear everything, the Geometry tab's **Reset** for just crop/straighten/flip/transform, or double-click any single slider to reset that control.

## Export

Click **Export…** (in the footer, on any tab — in the Pixels inspector's footer, and in the Lightbox's top bar) to open the export dialog. Export renders the developed image at full resolution and can process a **batch** — your current selection, or the focused photo if nothing is selected.

| Setting | Options |
|---|---|
| **Preset** | Save the whole dialog as a named recipe — **Save Current as Preset…**, then Update / Rename / Delete. Proof uses the selected one. **Set as Favourite 1 / 2** puts the selected preset on **⌘E** / **⇧⌘E** — see below. |
| **Format** | JPEG (jpegli), JPEG XL, HEIC, TIFF · 16-bit, PSD · layered · (video: **Codec** and **Container**) |
| **Quality** | 1–100 (all formats except TIFF and PSD) |
| **Effort** | 1–9 (JPEG XL only) |
| **Layers** | TIFF only — **Keep Pixels layers** (see below) |
| **Resize** | Full size, or fit the **long edge / short edge / width / height** to a pixel count. The render is always done full-size and *then* resampled, so radius-based looks (Clarity, dehaze, sharpening) come out identical. |
| **Enlarge** | What happens when the target is bigger than the photo: don't enlarge, resample, or **AI upscale** (Pro). |
| **Sharpen** | Output sharpening — **None / Low / Standard / High**, applied *after* the resize. |
| **Frame** | Off, or a border added **around** every copy — any thickness, in white, black or grey, with a colour sampled from the photo and 1:1 / 4:5 / 9:16 shapes in Pro. |
| **Watermark** | Off, or a line of **text** or a **PNG** on every copy — font, size, colour, opacity, one of nine positions and a margin. |
| **Resolution** | The ppi written into the file's metadata (it doesn't change the pixels). |
| **Naming** | Original filename, a custom name, or a custom name with a **sequence** (separator, start number, extension case), plus **Include all versions** (see below). A **RESULT** block previews the names before you commit. Originals are never renamed. |
| **Metadata** | **All metadata** or **None**, with **Write GPS coordinates** and **Remove person info & faces** as separate switches — the two things you might not want to publish. |
| **If the file exists** | Add a number so nothing is overwritten (default), overwrite, or skip. |
| **Output** | Default is an **Exports/** subfolder inside each photo's folder; **Choose…** to override, **Default** to revert |

## Export favourites — ⌘E and ⇧⌘E

Two of your presets can sit on a key. In the export dialog's preset menu, pick a preset and choose **Set as Favourite 1** or **Set as Favourite 2**; from then on **⌘E** or **⇧⌘E** exports the current selection with that recipe immediately — no dialog, straight to the queue. The Export button's preset list shows which key each favourite is on.

Both keys are rebindable in **Settings → Shortcuts → Export favourites**, and the key belongs to the *slot*, not the preset: point Favourite 1 at a different preset whenever you like and the key follows. Delete the preset a slot points at and the slot is simply empty — the key says so rather than running something you didn't mean.

## Exporting every version

A photo can carry several **versions** ([chapter 5](/manual/develop/)). Normally an export writes the one that is live — the version you would see if you opened the photo — and nothing else.

Tick **Include all versions**, in the dialog's **File naming** section, and each version gets its own file instead. The name tells you which is which:

```
red_car_001_Warm.jpg
red_car_002_Cool.jpg
red_car_003_Punchy.jpg
```

The number is the version's place in the list and the name is the one you gave it, so two versions that happen to share a name still land as separate files. Photos with no versions are untouched — they write a single file, named as they always were — and the **RESULT** block shows you the whole expansion before you commit.

Each file is rendered with its own version's settings *and* its own Film Labor Look, so a version you filmed and a version you didn't come out as the two different photographs they are. Pixels overlays, frames and watermarks belong to the photo rather than to a version, so every copy carries the same ones.

When nothing in the selection has versions the note under the box says so, but the box itself stays live — it is part of the export recipe, and a preset on ⌘E runs it without showing you a dialog.

## Resizing, enlarging and output sharpening

Your Sharpening slider works on the full-size render, and a downsize throws most of it away — that's what **Sharpen** compensates for, on the pixels that actually get written. Start at **Standard** for web-sized JPEGs.

**Enlarge** is a plain three-way choice rather than a hidden checkbox, because one of the three invents detail. **AI upscale** (Pro, and only with a model installed) picks its engine for you by how far you're enlarging and how big the source is: one engine stays faithful on large photos, another invents convincing detail on small ones and on crops, and macOS's own 4× scaler handles very small sources. A **Strength** slider blends the model's result against a plain resample, and a **Compare** pane in the dialog shows you a crop of the result before you commit a batch. A note tells you how many of the selected photos will actually be enlarged.

To judge sharpening or an upscale on the *whole* photo rather than a crop, leave the dialog and press **⌥P** for Proof.

## Framing

Switch **Frame** on in the export dialog to put a border around every copy the export writes. It is off unless you turn it on, and it is one setting for the whole batch.

The canvas **grows** to make room: nothing is drawn over the photograph, and nothing is cropped off it. That is what separates this from the frames in Pixels, which paint over the edges of the picture at its own size — the two are different things and they can be used together.

- **Thickness** is a percentage of the photo's *short* side, not a pixel count, which keeps the border looking the same on a 2048 px web JPEG and on a full-size master.
- **Colour** is white, black or grey. A colour sampled from the photo itself, or one you pick by hand, lives in **Pixels** — see *Mounts* below.
- **Shape** (Pro) pads the photo onto a **1:1**, **4:5** or **9:16** canvas — the Instagram and Stories sizes — or a ratio you type. The photo is centred and padded, never cropped, so the border is deeper on two sides when the shapes disagree and the thickness you set is the minimum on the other two.
- **Orientation** decides which way up a shape stands. Left off, 4:5 and 9:16 are the portrait post and the Story whatever the photo is, so a landscape frame gets deep bars above and below. Turn it on and the shape follows the photo — 9:16 becomes 16:9 for a landscape frame, and the border stays even. A square is a square either way.

The **Preview** shows the whole framed canvas fitted in a fixed box, so a 3:2 and a 9:16 can be judged against the same frame of reference. What you are reading there is the proportion of border to picture, which is the thing "5 %" can't be pictured from.

A photo that carries its own **Mount** from Pixels keeps that instead of this frame, and the dialog says how many in the selection do.

If you also resize, the pixel count you type applies to the **photo**, and the border goes on after it — so a long edge of 2048 gives a 2048 px photograph with the border around it. A watermark is drawn **after** the frame, on the framed canvas, so it can sit on the border itself. Clips are always written unframed.

## Watermarking

Switch **Watermark** on in the export dialog to put a mark on every copy the export writes. It is off unless you turn it on, and it is the same setting for the whole batch, so one change marks all 200 files.

- **Text** — anything you type, in any installed font, in a colour and opacity you choose. `{year}` becomes the year the photo was taken, so `© {year} Your Name` dates each frame correctly.
- **Image** — a PNG, transparency and all. A logo with an alpha channel keeps its shape; anything else arrives as a rectangle. The file is copied into the app when you choose it, so moving or deleting the original later doesn't break the recipe.

**Size** and **Margin** are percentages of the *short* edge, not pixel counts, which is what keeps a mark looking the same on a 2048 px web JPEG and on a full-size master — and on a portrait frame as readily as a landscape one. With a **Frame** on, they are percentages of the framed canvas, since that is what gets written. For text, the size is the height of a capital letter. Nine positions place it in a corner, an edge or the middle; a centred mark ignores the margin.

The **Preview** shows the whole frame with the mark on it, so you can judge the placement before committing a batch. The mark is drawn last of all — after the resize and after output sharpening — so it comes out crisp at output size rather than resampled with the photo.

Saving all this into a preset carries the watermark with it; a preset that has one says so in the preset menu. Clips are always written unmarked.

## Exporting with layers

If a photo has **Pixels** layers on it, two formats can carry them to Photoshop or Affinity as a real, editable layer stack instead of flattening them in:

- **TIFF** with **Keep Pixels layers** ticked. The file stays an ordinary 16-bit TIFF with an embedded colour profile — anything that can't read layers just sees the finished photo — and the layer stack rides along beside it.
- **PSD · layered**, which is layered by nature.

Either way the photo itself goes in as the **bottom layer**, with each Pixels layer above it keeping its name, blend mode, opacity, visibility and clipping. A watermark arrives as its own layer on top, so you can move or remove it in Photoshop. **Layered files are roughly twice the size**, because the photo is stored twice: once as the flattened image every app can open, once as the bottom layer. Photos with no Pixels layers are written exactly as before.

PSD tops out at 30,000 pixels per side; past that, export TIFF.

Export is **non-blocking**: a processing panel slides in from the right showing each image's status (Queued, Processing, finished size, or an error), and the rest of the app stays interactive. Closing the panel doesn't cancel the run — a floating **Exports** chip reopens it. Metadata is copied from the original for every format except JPEG XL.

## Tips

- Leave the tools collapsed to use Develop as a fast, full-screen browser; the heavy render only kicks in when you open the tools or the photo already has edits.
- Dial **Strength** down on a LUT for a subtler, blended look rather than the full effect.
- Reach for a **Quick Brush** (Dodge/Burn) before building a mask by hand — it's one click to a paintable adjustment.
- Because everything is non-destructive, **Reset All** always returns you to the untouched original.
