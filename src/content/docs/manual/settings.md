---
title: "Settings"
description: "Every preference, tab by tab."
sidebar:
  order: 13
---

Open Settings with **⌘,** (or **Chili RAW → Settings…**). The window has six tabs: **General**, **Files**, **Backups**, **Shortcuts**, **Cache** and **AI**. Everything is saved the moment you change it.

## General

**Appearance**

- **Theme** and **Accent color** — the app's look. The default is the dark, neutral-grey theme the develop views are judged against.
- **Photo surround** — the colour behind the photograph itself, separately from the chrome. What surrounds a picture changes how you read it: against black, shadows look lighter than they are and you tend to darken too far; against white, highlights look duller. **Theme default** keeps the surround each page already had — with one exception: the area around the artwork in Pixels used to be the window grey, and now matches the other photo pages. **Black**, **White** and **Custom grey** override it on Develop, the Lightbox, Compare, Survey, Version Compare, Film Labor's stage and Pixels, all at once. Panels and the filmstrip do not change. Custom is a grey slider rather than a colour picker on purpose — a tinted surround biases your colour judgement the same way a dark one biases tone.

**Startup**

- **Reopen last folder on launch** — reopens whatever you were browsing when you last quit. On by default.
- **Default sort order** — how a newly opened folder is ordered: *Filename (A → Z)* (default), *Capture date (oldest first)*, *Capture date (newest first)*, or *File size (largest first)*. You can still re-sort any folder from the grid toolbar.
- **Folder loading** — **Catalog** (recommended) opens folders instantly from the index; **Live** re-reads every file from disk on open — always current, but slow on large folders. In Catalog mode, changes made outside the app appear after a right-click → **Synchronize Folder**.

**Modules**

- **People**, **Film Labor** and **Pixels** are off by default because they go beyond the core cull-and-develop workflow. Until you turn one on here, its sidebar row stays greyed-out (visible so you know it exists). Flip the toggle to activate the tab and its ⌘ shortcut.

**Places**

- **Look up place names for geotagged photos** — photos with GPS get a city, region and country from a table bundled inside the app; **no network request, ever**. Nothing within 50 km means no name rather than a wrong one. Names show up in the Geo tab's filter, the search row's **Place** field, and the grid's Filter band. Data © GeoNames, CC BY 4.0.

**RAW decoding**

These four decide what a RAW file looks like before you touch a slider. Changing one re-renders your edited raw thumbnails so the grid answers honestly — an *unedited* raw won't change, because its thumbnail is the preview your camera wrote into the file and no decoder ever runs for it.

- **Default look** — which tone-mapper a freshly-opened image starts on: **Chili RAW (AgX)** (the filmic default), **Standard** (Lightroom-style: the Adobe render plus your chosen profile), or **Neutral**. You can still switch per photo on the Edit tab.
- **DNG decoder** — how `.dng` files are decoded. The **Adobe DNG SDK** gives correct colour and orientation for DxO JPEG-XL and other DNGs; **Apple** is the fallback / comparison option.
- **Proprietary raw decoder** — for ARW / CR2 / CR3 / NEF. **LibRaw** renders through the DCP camera profile you pick below, for colour that follows your camera rather than macOS's default interpretation (falls back to Apple on failure); **Apple** is the default.
- **Colour profile** — which Adobe DCP profile the LibRaw path renders through, read from your Lightroom / ACR profiles. *Adobe Standard* is the neutral default; the *Camera* looks emulate the maker's JPEG rendering.

**DNG previews**

- **Embedded preview size** — the size of the JPEG preview written by **Catalog ▸ Update Embedded DNG Preview**: *Full* matches the image's pixel dimensions, *Medium* caps the long edge at 2048 px for smaller files and faster writes.

**Browse**

- **Grid thumbnail size** — drag from 96 px to 384 px (default 192 px). This is the same control as the size slider in the grid toolbar.
- **Grid image info** — whether each tile's filename + dimensions caption shows only when you hover (*Display on hover*, the default) or stays pinned on every tile (*Always display for all images*).
- **Grid Loupe (hover magnifier)** — on by default. When on, the Loupe button and the **`** key are available in the grid. Turn it off to remove the feature entirely.
- **Focus peaking in Loupe** — tints the in-focus edges inside the magnifier so critical focus is objective, not eyeballed. Off by default; you can also toggle it live with its shortcut while the loupe is up.
- **Rate & advance** — after you rate or flag a *single* photo, focus jumps to the next one so you can cull a whole shoot from the keyboard. Off by default. A multi-select batch stays put so it never runs away from you.
- **Confirm before deleting** — ask before moving files to the Trash with ⌫. The confirmation's *Don't Ask Again* button turns this off.

**People**

- **Automatically scan new photos for faces** — when you open a folder, its photos are scanned for faces in the background (results appear in the People tab). Off by default, because scanning loads a large model and is CPU-heavy.

**Develop**

- **Mask overlay color** — the tint used for the mask coverage overlay in the Develop view. *Blue* (default), *Red*, *Yellow*, *Green* — or **Grayscale**, which replaces the photo with the mask itself (white covers, black is free) and reads a soft edge far better than a tint over the picture.

## Files

**Write target** — where rating, keyword, and GPS edits are written:

- **Directly into file** (default) — modifies the original DNG/JPEG in place.
- **XMP sidecar file** — writes a `.xmp` file next to the original and leaves the photo itself untouched. When reading, Chili RAW merges both and the sidecar wins.

**Pairing**

- **RAW + JPEG pairing** — how a matching RAW and JPEG of the same frame are shown: *Show separately* (default), *Merge · prefer RAW*, or *Merge · prefer JPEG*. This affects newly opened folders — reopen the current folder to apply a change.

**Film LUTs**

- **LUT folder** — click **Choose…** to link a folder of `.cube` LUTs (scanned recursively). They then appear in the Develop view's Grading tab under the LUT picker. **Clear** unlinks it.

## Backups

Everything about copies of your work — the Vault, and the per-folder safety net.

- **Vault location** — the drive or folder your dated backups go to (an external drive is recommended). **Reveal in Finder** and *Change location* are on the right-click menu. Full details in [chapter 14](/manual/collections-and-backups/).
- **What to back up** — **Include photos (full mirror)** off means a small dated zip of your edits and database; on means the photo files are mirrored too (incremental — only changed files are copied).
- **Automatic backup** — on quit, Chili RAW can back up **Off**, **Remind** (asks first) or **Silent** (just does it), with a **Frequency** that limits how often it fires. Set a Vault location first.
- **Status** — freshness, progress, and a **Back Up Now** button.
- **Per-folder file backup** — a separate safety net: **Back up files before writing** (on by default) copies each original into a timestamped subfolder inside the active folder before metadata is written to it. **Backup subfolder** names that folder (default `.chiliraw-backups`).

## AI

Every AI feature runs **on-device — no image ever leaves your Mac.** The app ships with **no** AI models: each one is downloaded here on demand and can be deleted at any time. The built-in Subject and People masks use macOS directly and need no download.

- **Activate AI features** — the master switch. With it off, no model runs and the AI controls stay out of the way.
- **The model list**, grouped by what each does: **Download** fetches one (40–290 MB), **Cancel** stops a download, **Delete** removes it. A model whose download has moved on shows *“A newer version is available”* with an **Update** button — **nothing ever downloads by itself**, the model you have keeps working in the meantime, and a cancelled or failed update leaves it exactly where it was. No restart needed.
- **Storage** — how much the installed models take, **Model Licenses…** (every model's licence and author), and **Remove All AI Models**.
- Some entries are macOS-version-gated (*Upscale 4× (Apple)* needs macOS 26) and say so rather than disappearing.
- **Model location** — where the downloaded models live, `~/Library/Application Support/Chili RAW/models/` by default. Click **Move…** to put them on another drive (an external SSD, say) and save room on your boot disk. Models already downloaded are **moved, not fetched again**, and a model that is already present in the folder you pick is used where it is rather than copied over. **Reset to Default** brings them back. The models always land in a `Chili RAW/models` subfolder of whatever you choose, so picking a drive's root doesn't scatter a dozen folders across it.
- If you move the models to an external drive and then unplug it, the tab shows **Models unavailable** rather than failing quietly: nothing has been lost, and the models come back when the drive does. If the drive is gone for good, reset the location and download them again.

## Shortcuts

Every shortcut in this tab is rebindable. It groups them into **Main views**, **Grid** (Grid Loupe, focus peaking, select all), **Comparison modes** (Compare, Survey, Compare Versions), **Develop tabs** (Geometry, Grading, Repair, Masking), **Develop loupe** (before/after zoom), **Proof**, **Grid bands** (filter ribbon, stack settings), **Display** (Darkroom, cheat-sheet, sidebar, filmstrip) and **Culling** (the rating and flag keys).

To rebind: **click a shortcut chip**, then **press the new combination**. **Esc** cancels and keeps the current key; **Delete** resets that one row to its default. **Reset all to defaults** at the bottom restores every binding at once.

Only the actions listed on this tab are rebindable — the app-wide keys (⌘O, ⌘S, ⌘Z, ⌘F, copy/paste, Delete) and the in-viewer keys (I, Z, arrows) are fixed. The rating and flag keys *are* rebindable, under **Culling**.

## Cache

Chili RAW keeps a disk cache of thumbnails and previews so folders reopen instantly.

- **Cache size** — **Automatic** (with a *never use more than N GB* ceiling) or a fixed **Maximum thumbnail cache size**. When the cache exceeds the limit, the oldest folders are evicted on the next launch.
- **Current disk usage** and free space on the drive — click **Refresh** to measure, or **Clear cache** to wipe it (thumbnails regenerate as you browse).
- **Face thumbnails** — the small crops behind the People view. They're kept *out* of the size limit and never evicted (cheap to store, expensive to rebuild); **Clear face thumbnails** re-crops every photo with a face on your next visit to People.
- **Cache location** — click **Move…** to relocate the cache to another drive (for example an external SSD) to save room on your boot disk; existing thumbnails are moved, not regenerated. **Reset to Default** returns it to the standard location.
