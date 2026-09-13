---
title: "Catalog & search"
description: "Smart Folders, search, and keeping the index in step with disk."
sidebar:
  order: 9
---

Behind the Grid, Chili RAW keeps a **catalog** — a fast, searchable index of every photo and video in your added folders, along with their keywords, ratings, GPS, capture dates and AI keywords. It's what makes search, folder counts and Smart Folders instant instead of re-reading every file from disk.

The catalog is a **rebuildable cache, never the source of truth.** Your original files, their embedded XMP, and the per-folder sidecars Chili RAW writes are always authoritative. If the catalog is ever deleted or corrupted, that's a rebuild, not data loss — nothing about your photos or edits lives only in the index.

The sidebar footer shows the catalog's state: a dot plus **"N INDEXED"**, or **"INDEXING X%"** while it's working through new files.

## Browsing folders (recursive, with counts)

Selecting a folder in the sidebar shows **everything beneath it** — the images directly in that folder plus every subfolder, all in one grid. Photos that live directly in the selected folder float to the top; deeper ones follow.

- Each folder row carries a **count** to its right: the total number of images in that folder *and all its subfolders*.
- A folder only shows a **disclosure caret** (▶) when it actually contains subfolders. Click the caret to expand or collapse; click the folder name to view its contents.

## Searching your library (⌘F)

Press **⌘F**, or click **Search** in the Grid toolbar, to reveal the **SEARCH:** row above the grid. Press ⌘F again (or the toolbar button) to hide it and clear the query.

The row carries the text field plus:

| Control | Options | What it does |
|---|---|---|
| **Look in** | **This folder** · **Whole library** | Search only the current folder subtree, or the whole catalog. |
| **Match against** | **Filename** · **IPTC** · **AI keywords** · **Place** | Which text to match. All four are on by default ("Everything"); each chip carries its own hit count, so you can see the query is mostly filename hits *before* unticking anything. You can't clear the last one. |
| **+** | — | Save the current query and settings as a Smart Folder. |
| **×** | — | Close the row. The query and the settings stay. |

To find photos **taken in** a place rather than ones that merely mention it, untick everything except **Place**. Place names come from a table bundled inside the app — no network request, ever — and are filled in by **Catalog ▸ Look Up Places**. The person filter now lives in the grid toolbar's **Filter** band, where it combines with the search as AND.

Type in the **Search…** field to run the query live; the **×** button clears it. Matching results replace the grid (like a Smart Folder), so you can rate, flag, cull and open them in the loupe just as in a normal folder.

**How matching works — this matters:**

- **Filename** is a *substring* match — "beach" finds `beach-01.raf` and `southbeach.jpg`.
- **IPTC** and **AI keywords** are *whole-word* matches against your tags. Searching **car** hits the keywords `car`, `race car` and `cable car`, but **not** `scared`, `cartoon` or `supercar`. IPTC matches your keyword tags.
- **AI keywords** only match photos you've already run **Compute AI Keywords** on (see the Catalog menu below) — they're a separate layer Vision generates, never written into your files.

**Search by what's in the picture** *(Pro)*. Below the exact matches, Chili RAW appends photos that match the query's *meaning* — "red car at sunset", "someone laughing", "empty road" — ranked by how well they fit, with no tags and no keywords involved. This needs the folder (or library) to have been indexed once: **Catalog ▸ Index Photos for Search**, or the **Compute folder** / **Whole library** buttons in the search row. Nothing is uploaded; the index is computed on your Mac and lives in the catalog.

**Find Similar Photos** — on any photo's right-click menu — is the same index used the other way round: it ranks the library by how much each photo *looks* like the one you picked. Useful for finding the other frames of a scene you'd forgotten you shot.

The **person filter** only appears once you've named at least one face in the People view.

> Tip: This Folder + Filename-only searches filter instantly in memory as you type. Any other combination (Library scope, IPTC/AI fields, or a person filter) runs a catalog query, so results appear a moment after you stop typing.

## Smart Folders

A **Smart Folder** is a saved search that keeps itself up to date. Its rules run against the catalog every time you open it (and its count refreshes as your library changes), so "5-star shots with no GPS" or "everything tagged *portrait* and *studio*" is always one click away.

**To create one**, click the **+** on the **Smart Folders** section header in the sidebar. The editor opens with:

- A **Name** field.
- A **Match** toggle: **all** (every rule must match — AND) or **any** (at least one rule matches — OR).
- A list of **rules**. Click **Add Rule** to add one, or the **×** to remove one.

Each rule's first menu picks its field:

| Rule | Choices | Matches |
|---|---|---|
| **Keywords** | **all of** / **any of** / **none of** + comma-separated keywords | Photos whose keyword tags contain all, any, or none of the listed words (case-insensitive). |
| **Rating** | ★ 1+ … ★ 5+ | Photos rated at least that many stars. |
| **GPS** | has GPS / no GPS | Photos that do (or don't) carry coordinates. |
| **Text** | free text | Matches the text against title, caption or keywords. |

Click **Save** to store it (or **Cancel** to discard). A Smart Folder with no rules deliberately matches nothing, so a brand-new empty one won't list your whole library.

**Using and managing them:** saved Smart Folders appear in the sidebar with a live match count. Click one to view its results in the grid. **Right-click** a Smart Folder for **Edit…** and **Delete**.

> Note: The top **Search bar is a live, one-off query — it isn't saved.** To keep a search you'll run again, build the equivalent as a Smart Folder using the rules above; it will also keep updating itself as you add and tag photos.

## Keeping the catalog in step: Folder Sync

Chili RAW watches your added folders in the background. When files change on disk outside the app — a card import, a copy in Finder, a delete — the folder (and its parents) get a small **amber dot** on their sidebar row. Hover it and you'll see *"Changed on disk — right-click → Synchronize Folder."*

The dot is only an advisory flag ("look here"). To reconcile, **right-click the folder → Synchronize Folder.** Chili RAW re-scans that folder tree, indexes new and changed files, drops rows for files that are gone, refreshes the folder tree and counts, and clears the badge. A toast reports the result, e.g. **"Synced Trip: +12 · −3"** (twelve added/updated, three removed).

Synchronize is the authoritative step — the badge just tells you where to point it.

## The Catalog menu

The **Catalog** menu in the menu bar drives the whole index:

- **Rebuild Catalog…** — wipes the index and re-reads everything from disk. Use this if counts or search ever look wrong; your files and sidecars are untouched. Disabled while indexing is already running.
- A status line shows **"Indexing X%…"** or **"N indexed"**.
- **Compute AI Keywords (Whole Library)** and **Compute AI Keywords (This Folder)** — run Apple's on-device Vision over your photos to generate searchable AI keywords. These are stored in the catalog only and are **never written to your files**. "This Folder" is available only when a folder is selected. The pass is resumable and skips already-computed photos; while it runs, a **Cancel AI Computation** item appears, along with a **"AI keywords: computed / total"** readout.
- **Index Photos for Search (Whole Library / This Folder)** — builds the index behind search-by-meaning and *Find Similar Photos*.
- **Score Photos (Whole Library / This Folder)** — the Vision cull score behind **Sort ▸ By likely keeper** ([chapter 2](/manual/browsing-and-culling/)).
- **Look Up Places (Whole Library / This Folder)** — fills in city, region and country for geotagged photos from the bundled offline table, for the **Place** search field and the Filter band's place list.
- **Update Embedded DNG Preview** — rewrites the JPEG preview inside your DNGs so other apps show your develop edits. Size is set in **Settings ▸ General ▸ DNG previews**.
- **Rebuild Thumbnails (This Folder)** — re-renders this folder's grid thumbnails.

Every one of these passes is resumable, skips work it has already done, and offers a **Cancel** item while it runs. None of them writes anything into your photos.

## Shortcuts

| Shortcut | Action |
|---|---|
| **⌘F** | Show / hide the Search bar (and focus it) |
| **⌘O** | Add Folder to the sidebar |

## Practical tips

- Run **Compute AI Keywords (This Folder)** on a shoot before searching the **AI keywords** field there — un-computed photos simply won't match.
- Narrow noisy searches by unchecking fields: leave only **IPTC** on to match your own tags and ignore filenames and AI guesses.
- If a folder's count looks stale after copying files in outside the app, look for the amber dot and **Synchronize Folder** rather than rebuilding the whole catalog.
