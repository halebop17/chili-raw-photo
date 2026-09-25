---
title: "Browsing & culling"
description: "Rate, flag and thin a shoot down in the Grid, without the mouse."
sidebar:
  order: 2
---

The Grid (View → Grid, or ⌘1) is where you review a folder and cull it fast: resize thumbnails, select images, apply star ratings and pick/reject flags, reorder, rename in batches, and send rejects to the Trash. Almost everything here is driven from the keyboard so you can cull a whole shoot without leaving the grid.

## Sizing the thumbnails

Drag the slider at the top-left of the toolbar (the small grid icon on the left grows the tiles toward the large grid icon on the right). Photos are fit inside a square matte, so portraits and landscapes letterbox rather than crop. The same size is available in Settings → Browse → "Grid thumbnail size".

## Selecting images

The tile with the amber outline is the *focused* image; the highlighted tiles are the *selection*. Ratings, flags, Rename and Delete all act on the selection — or, if nothing is selected, on the focused tile.

- **Click** a tile to select just that one (and focus it).
- **⌘-click** to add or remove a tile from the selection.
- **⇧-click** to select a range from the focused tile through the one you click.
- **⌘A** selects every tile currently shown (respecting any active filter or search). The grid must have keyboard focus — click an empty part of it first if ⌘A doesn't respond.
- **Esc** clears the selection.
- **Arrow keys** move the focus one tile left/right or one row up/down, replacing the selection as they go.

Double-click a photo to open it full-screen in Develop; double-click a video to open it in the video player. Press **Return** to do the same with the focused tile.

## Rating (stars 1–5)

With one or more images active, press **1** through **5** to set that many stars; press **6** to clear the rating back to none. A rated tile shows a star badge with its count in the top-left corner.

## Flags: pick, reject, unflag

Flags are separate from stars, so an image can be both rated and flagged.

- **P** — Pick. A picked tile gets an amber badge in the top-right.
- **X** — Reject. A rejected tile gets a red flag badge and its thumbnail is dimmed and desaturated so rejects are obvious at a glance.
- **U** — Unflag (removes a pick or reject).
- **F** — Toggle reject on/off (Lightroom-style).
- **S** — Toggle pick on/off.

A typical pass: arrow through the folder, tap **X** on the throwaways and **P** (or a star) on the keepers, then use the sidebar filter to isolate the rejects and delete them.

## Deleting to Trash (and undo)

Press **Delete** (⌫ or ⌦) or click the trash button in the toolbar to move the active images to the macOS Trash. The toolbar button shows a count so you can see exactly how many will go. Nothing is erased — everything lands in the Finder Trash, and **⌘Z** (Edit → Undo) restores the most recent batch to its original place in the grid.

## Sorting and custom order

**Sort** in the grid toolbar opens the order list. Choose one of:

| Sort | Order |
| --- | --- |
| Filename (A → Z) | Alphabetical by name |
| Capture date (oldest first) | Earliest shots first |
| Capture date (newest first) | Latest shots first |
| File size (largest first) | Biggest files first |
| Custom | Your manual arrangement |

**Drag to reorder:** drag any tile onto another to drop it into that position. The grid switches to **Custom** automatically so your arrangement sticks. Picking any preset from the menu afterward overrides the custom order.

Under a second heading, **By likely keeper**, sit three orders that read a Vision score rather than a fact about the file — *Likely keepers first*, *Sharpest faces first*, and *My rating, then likely keepers*. They only light up once the folder has been scored (see below).

## The grid toolbar

The toolbar above the grid is split by what each button *does*, and that split is the rule: **Filter** decides which photos are in the grid, **Sort** decides what order they arrive in, and **View** decides how the tiles are drawn. Nothing else hides a photo. Each button opens a band under the toolbar rather than a menu, so you can keep culling with it open.

- **Select** — select all / none / invert, plus **Select only** by rating, flag or media type.
- **Sort** — the orders above, and the scoring controls.
- **Filter** — rating (*at least* or *exactly*), colour flags with live counts, media type, place, people (**All of them** / **Any of them**), *More than one edit version*, and *Screenshots & documents*. A line at the bottom counts what's showing, **Save as Smart Folder** turns the current rules into a saved one, and **Clear all filters** drops them. Closing the band **leaves the rules on** — the count in the toolbar tells you they're there, and **⌥F** reopens it.
- **View** — tile size, and what each tile carries: filename, file-type badge, rating & flag, sequence number, Vision score chip, and a tint on the photos that live directly in the selected folder rather than in a subfolder. Under **Panels** it also holds the metadata panel, **Focus peaking** and **Show focus point** ([chapter 3](/manual/loupe-and-viewer/)).
- **Stacks**, **Search** and **Loupe** open their own bands beside them (**⌥S** shows and hides the stack settings).
- The **view-mode switch** at the right end picks **Grid**, **Lightbox**, **Compare**, **Survey** or **Versions** — see [chapter 3](/manual/loupe-and-viewer/).

## Scoring photos (likely keepers)

**Catalog ▸ Score Photos** — or **Score folder** / **Whole library** in the Sort band — runs Apple Vision over your photos and gives each one a machine estimate of composition and technical faults, plus a face-quality score where there are faces. It is an *ordering* aid and nothing more: it never writes a rating, a flag, or anything into your files.

- Scores live in the catalog, so a scored folder stays scored.
- **Re-score** re-runs photos that already have a score (a plain score pass only picks up ones that have none).
- Turn on **View ▸ Vision score chip** to see each tile's score on the tile itself.
- Progress, a **Stop** button and a "scored *n* of *N*" readout sit in the Sort band while a pass runs.

## The right-click menu

Right-clicking a tile acts on the whole selection when you right-click inside it, and on just that photo when you don't:

- **Rename…**, **Show in Finder**, **Move to Trash**
- **Rating ▸**, **Flag ▸** (Pick / Reject / Unflag) and **Color Flag ▸**
- **Add to Collection ▸** / **Remove from Collection**
- **Versions ▸** — switch version, **Create New Version**, **Compare Versions**, or delete the active one ([chapter 5](/manual/develop/))
- **Find Similar Photos** — photos that *look* like this one, nearest first (needs the search index; see [chapter 9](/manual/catalog-and-search/))
- **Set as Stack Pick** and **Survey Stack (n frames)** on a stacked tile
- **Merge to HDR** on a selection of two or more frames, or **Merge Stack to HDR (n frames)** on a bracket that's already stacked — and under it **HDR Merge Preview…** *(Pro)*

**Merge to HDR** aligns the selected frames, weights each pixel by how well that frame exposed it, and writes a new **linear DNG** (TIFF where it can't) next to the originals — then opens it in Develop as its own photo, carrying the reference frame's capture date. Moving subjects are held to the reference frame rather than blended, so a person who walked through the bracket comes out sharp instead of transparent. The merged file has all the headroom of the bracket, so it wants developing from scratch: it is a *negative*, not a finished picture.

**HDR Merge Preview…** *(Pro)* shows the merge before anything is written, the way the file will look when it opens in Develop, and lets you decide how it is made:

- **Reference** — the frame the merge is anchored on. Its framing wins, anything that moved comes from it, and blown highlights are filled in only where *it* is blown. The automatic choice, the middle exposure, is marked.
- **Deghost** — None, Low, Medium or High: how readily a frame is left out where it disagrees with the reference. Medium is what Merge to HDR uses; None blends everything, ghosts included.
- **Show overlay** — red where a frame was left out because it disagreed with the reference (usually because something moved), blue where blown highlights were filled in from a darker frame.
- **Auto align** and **Auto crop** — switch alignment off for a tripod bracket, or keep the whole frame instead of trimming the edges the frames don't share.

JPEG brackets merge too. Each JPEG carries the camera's own contrast, and Chili RAW takes it back out of every frame before merging, so the frames line up the way raw ones do. A JPEG exported from an editor with local adjustments — Shadows, Highlights, Clarity — can still disagree with its neighbours in places, and shows red there. Raw keeps more of the scene, so shoot the bracket in raw when you can.

If the photos were all taken at the same exposure, the dialog says so: they are not a bracket, and merging them adds nothing. Some photos are left out, and the dialog names them (Merge to HDR says how many): one that records no exposure — an earlier merge, or an export that lost its camera details — when the others record one; and in a bracket shot RAW+JPEG, the JPEGs, since raw files and JPEGs don't merge together. The preview is a smaller copy, so judge fine shadow noise on the merged file itself. Merge to HDR keeps working exactly as before: nothing chosen in the dialog changes it.

## The info overlays

Two separate things show image details:

- **Per-tile info** — the filename and pixel dimensions appear along the bottom of a tile when you hover it. To pin this on for every tile, set Settings → Browse → "Grid image info" to "Always display for all images" (the default is "Display on hover").
- **The info panel** — click the **Info** toolbar button or press **I** to toggle a floating metadata panel in the top-right corner that describes the focused (or first selected) image. It's off by default in the grid.

## Batch rename

Select the images (or focus one) and click **Rename…** in the toolbar, or right-click a tile and choose **Rename…**. In the dialog:

- **File Naming** — pick a preset:
  - *Custom Name - Sequence* — your text plus a 4-digit number (e.g. `trip-0001`).
  - *Custom Name* — your text only (available when renaming a single file).
  - *Custom Name - Original Filename* — your text plus the existing name (e.g. `trip-IMG_1234`).
- **Custom Text** — the name stem to use (required).
- **Start Number** — the first sequence number (Sequence preset only).

An **Example** line previews the first name live. Click **OK** to rename on disk; each file keeps its own extension, and your ratings, flags, and staged edits carry over.

## Rate & advance (optional)

Turn on Settings → Browse → **Rate & advance** (off by default) to cull hands-free: after you rate or flag a *single* image, the focus jumps to the next one automatically, so you can hold position and tap ratings down a whole shoot. Multi-image (batch) ratings stay put so the selection doesn't run off.

## Videos in the grid

Video files (MOV, MP4, M4V) appear as a poster frame with a **▶** play badge and the clip's duration in the bottom-right corner, so they're easy to spot among photos. They rate, flag, rename, and delete exactly like photos; double-click (or Return) plays them in the built-in player. To *grade* a clip, open it in Develop with **⌘2** ([chapter 5](/manual/develop/)).

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| Arrows | Move focus / selection |
| Click | Select one |
| ⌘-click | Add / remove from selection |
| ⇧-click | Select a range |
| ⌘A | Select all shown |
| Esc | Clear selection |
| 1–5 | Set star rating |
| 6 | Clear rating |
| P | Pick |
| X | Reject |
| U | Unflag |
| F | Toggle reject |
| S | Toggle pick |
| Return / double-click | Open in Develop (video: player) |
| ⌫ or ⌦ | Move to Trash |
| ⌘Z | Undo last Trash (in Develop: undo the last adjustment) |
| I | Toggle info panel |
| ⌃⌘F | Darkroom (full-screen) |
| ⌥\ | Fold the sidebar away / bring it back |
| ? or ⌘/ | Keyboard cheat-sheet |

**Forgot a key?** Press **?** at any time for a cheat-sheet of every shortcut. It always shows your *current* keys, so it stays right even after you remap something.

**Every cull key above can be remapped.** Settings (⌘,) → **Shortcuts** → **Culling (Grid & Loupe)** lets you rebind ratings and flags to whatever suits your muscle memory — handy if you're coming from Lightroom or Photo Mechanic. The defaults are exactly as listed. Cull keys must stay plain letters or digits (no ⌘/⌥/⌃), and bindings are kept unique: if you assign a key another action already owns, the two swap.

## Thumbnail cache

Chili RAW keeps thumbnails on disk so folders you've seen before open instantly. Settings (⌘,) → **Cache** decides how much room it gets:

- **Automatic** (default) — Chili RAW sizes the cache from your actual library: how many photos you have × how big your thumbnails really are, plus headroom. It grows as your library grows, so you never have to guess.
- **Never use more than** — the ceiling Automatic will never cross, so it can't quietly fill your drive. Raise it if the panel says your library needs more.
- **Manual** — set the number yourself.

The panel tells you what your library needs and warns you if the cache is **too small** — when that happens, thumbnails get thrown away on every launch and rebuilt from scratch, which makes browsing feel slow. If you see that warning, raise the limit.

## Darkroom (distraction-free)

Press **⌃⌘F** for the **darkroom** — everything but the photo gets out of the way. The sidebar slides shut, the title bars disappear, and the window fills with near-black so nothing competes with the image. The window buttons fade out after a couple of seconds and reappear the moment you move the mouse. Press **⌃⌘F** again to bring everything back exactly as it was.

It works in any view. In Develop, collapse the tools panel first for a truly full-bleed image.
