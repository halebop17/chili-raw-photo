---
title: "The Loupe & the viewer"
description: "Check focus at 1:1, and the full-screen Lightbox."
sidebar:
  order: 3
---

Chili RAW gives you two ways to inspect a shot up close without leaving the Grid workflow: a floating **Loupe magnifier** that samples real pixels as you hover thumbnails, and the **Lightbox**, a full-screen viewer you open by double-clicking a photo. Together they let you confirm critical focus on a whole burst fast, then jump into the winner at full size.

## The Loupe magnifier (over the grid)

The Loupe is a summoned mode: turn it on, then it follows your cursor across the grid. Wherever you hover a thumbnail, a circular magnifier shows the actual pixels under the pointer at roughly 1:1 — enough to judge whether the eyes are sharp — without opening a single frame.

**To use it:**

1. Go to the **Grid** view (⌘1).
2. Press the backtick key **`** or click the **Loupe** button in the grid toolbar (top right). The button turns amber while the Loupe is active.
3. Move the cursor over any thumbnail. The magnifier bubble appears beside the pointer and tracks it live. Slide across a burst to compare frames.
4. Press **`** again (or click the Loupe button) to dismiss it.

The Loupe reads a high-resolution preview, so it stays responsive even on RAW files. It works only in the Grid view while you're browsing thumbnails.

## Focus peaking

**Focus peaking** tints the sharpest (in-focus) edges **red** so critical focus is objective instead of eyeballed. It works wherever you look at a whole photo: the Loupe, the Lightbox, Compare, Survey, Versions and the Develop canvas.

- Press **e** to turn it on or off, or use **Focus peaking** in the grid toolbar's **View** panel. It's one switch for every surface, and it stays as you left it.
- In Compare and Survey every frame gets its own peaking, and it pans and zooms with the frames — so you can see which shot of a burst is sharp where it matters.
- On the Develop canvas it reads the photo when you open it and again after a crop, straighten or lens correction; dragging a tone or colour slider doesn't redo it. It's hidden while you crop.
- On the grid itself **e** only works while the Loupe is up.
- Peaking is **off by default**.

## Where the camera focused

Chili RAW can mark **where the camera focused**: the autofocus point or area it used, as the camera wrote it into the file. Focus peaking shows what *is* sharp; this shows what the camera was *trying* to make sharp. When the two disagree, the frame missed.

- Turn it on with **Show focus point** in the grid toolbar's **View** panel, or press **⇧E**. It stays on until you turn it off.
- It shows in the Lightbox, Compare, Survey and Versions, on the Develop canvas, and in the Loupe magnifier when you hover over the spot the camera focused on.
- It's a thin white box with a dark edge: a small square where the camera records a point, the real rectangle where it records an area. It follows your crop, straighten and lens correction, and when a crop cuts the point out there's simply no box. It's hidden while you crop.
- It works with photos from **Canon, Fujifilm, Nikon, Olympus / OM System, Panasonic and Sony** cameras. Nothing is drawn on photos with no focus data, such as phone pictures, files another app has stripped, or a manual-focus shot the camera recorded no point for.
- The first time a photo shows it, the file is read, so the box appears a moment after the picture. After that it's remembered.

The info box (**i**) gets a **Focus** row whenever the file says how the camera focused, whether or not the box is on: the focus mode, the AF area mode and, where the camera records them, the focus distance and its own verdict, for example *AF-C · Tracking · 8.19 m*.

## The Lightbox (full-screen viewer)

Double-clicking a photo opens it in the **Lightbox** — a distraction-free viewer with the photo big in the middle, a live filmstrip along the bottom, and a slim bar on top carrying the file name, its capture date, and its position in the folder ("214/380"). It is a surface for *looking*, not editing: Develop is a keystroke away with **⌘2** when you want the tools.

**To open and use it:**

- **Double-click** a thumbnail, or select one and press **Return**, to open it.
- **← / →** (or the on-screen side arrows) move to the previous or next photo. The filmstrip stays live — click any frame to jump straight to it.
- **Fold the filmstrip away** with the thin bar along its top edge, or with **⌥T**, when you want the whole window for the photo. The bar stays where it is with its chevron flipped, so the way back is exactly where the way out was. It is one setting across the Lightbox, Compare, Develop and Pixels, and it is remembered.
- **Scroll** to zoom, or use **↑ / ↓**. **Click the photo** to snap to about 1:1 on the exact point you clicked, and click again to fit. When zoomed, **drag** to pan.
- Press **z** (or **Space**) to snap back to Fit. The glass pill at the bottom-right carries **−**, the current magnification, **+** and **Fit**.
- Press **i**, or click the **info** button, to hide or show the floating metadata box (name, size, dimensions, date, GPS, flag and rating). It starts **shown**.
- **Rate and flag as you go** — the star and flag keys work here exactly as they do in the Grid, which is what the Lightbox is for.
- **Export…** sits in the top bar: your saved presets, and the full dialog under them. It writes **the photo you are looking at** — the point is not having to go back to the Grid, find the photo again and export it there. Batch export stays on the Grid page, where you can see the set you picked.
- **⌫** moves the photo to the Trash.
- **Esc**, or the **Back** button at the top-left, returns you to the Grid — landing exactly where you were, with the photo you were looking at still selected.

**One frame at a time.** Everything in the Lightbox acts on the single photo in front of you — rate it, flag it, export it, trash it. It has no select-all, and opening it sets any Grid selection **aside** — narrowed to the photo you opened, so a flag or a **⌫** can never quietly land on a folder you cannot see, and handed straight back when you return to the Grid, so peeking at one frame never costs you the set you built. Anything that acts on many photos at once belongs to the **Grid**, where the set you picked is visible.

## Video

Double-clicking a **video** plays it in the full-screen viewer with native transport controls — play/pause, scrub, volume and full-screen. Use the **← / →** arrows to move between clips, and **Esc** or the **Back** button (top-left) to return to the grid. Clips *can* be graded — see "Grading a video clip" in [chapter 5](/manual/develop/).

## Compare, Survey and Compare Versions

Three multi-pane modes sit beside Grid and Lightbox in the view-mode switch at the right of the grid toolbar. **Zoom and pan stay synced across every pane**, which is the whole point — two frames at 100 % on the same eye is a decision you can actually make.

| Mode | Key | What it does |
|---|---|---|
| **Compare** | **C** | Pins the current photo on the left and cycles candidates on the right. The keeper stays put while you audition the rest of the burst against it; promote the candidate to the pin when it wins. |
| **Survey** | **N** | Tiles the whole selection (two or more). Click a frame to *remove it from the survey* — cull by elimination until the keepers are what's left. |
| **Versions** | **V** | The same surface for one photo's own edit versions, side by side ([chapter 5](/manual/develop/)). Also on the right-click menu and in Develop's version menu. |

**Esc** leaves any of them. All three keys are rebindable in **Settings ▸ Shortcuts ▸ Comparison modes**.

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| **`** | Summon / dismiss the grid Loupe |
| **e** | Toggle focus peaking |
| **⇧E** | Show / hide where the camera focused |
| Double-click / **Return** | Open the selected photo in the full-screen viewer |
| **← / →** | Previous / next photo |
| **↑ / ↓** | Zoom in / out (viewer) |
| Scroll | Zoom (Loupe reads pixels under cursor; viewer zooms the image) |
| **z** / Space | Reset zoom to Fit (viewer) |
| **i** | Toggle the info box |
| **⌥T** | Fold the filmstrip away / bring it back |
| **Esc** | Leave the Lightbox, back to the Grid |

The Loupe, focus-peaking and focus-point keys are rebindable in **Settings → Shortcuts → Grid** ("Grid Loupe", "Focus peaking" and "Show focus point").

## Settings

Under **Settings → General → Browse**:

- **Grid Loupe (hover magnifier)** — turns the whole feature on or off, including the toolbar button and the **`** shortcut. **On by default**; switch it off to remove the Loupe entirely.
- **Focus peaking** — the same switch as the View panel's. **Off by default**; flip it live with **e**.

## Tips

- Sweep the Loupe across a rapid-fire burst to find the one frame with tack-sharp focus, then double-click it to confirm in the full viewer.
- Turn on focus peaking when depth of field is shallow — the red edges make it obvious whether focus landed on the eyes or the ear.
- Picking between near-identical frames? Put them in Compare or Survey with peaking on, and zoom in: the red shows which one is sharp where it counts.
- In the viewer, keep the tools collapsed and use **← / →** plus the filmstrip as a quick, keyboard-driven light-table; open the sliders panel only when you're ready to actually edit.
