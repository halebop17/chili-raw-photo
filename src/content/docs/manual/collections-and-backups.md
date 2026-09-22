---
title: "Collections & backups"
description: "Hand-picked sets, and Vault backups to another drive."
sidebar:
  order: 14
---

## Collections

A **Collection** is a hand-picked set of photos — "drag these into a named group" — separate from folders (physical, one place per file) and Smart Folders (rule-based). The same photo can be in many Collections, a Collection can span folders, and nothing is moved or copied on disk — it's just a named list.

- **Create** — in the sidebar's **COLLECTIONS** section, click **+**, name it (your current grid selection is added).
- **Add photos** — drag tiles from the grid onto a Collection row (drag a multi-selection to add them all at once), or right-click a photo → **Add to Collection ▸**.
- **View** — click a Collection to show its photos. **Remove** — right-click a photo in it → **Remove from Collection**. **Rename / Delete** — right-click the Collection row.

Collections are saved outside the catalog, so "Rebuild Catalog" never touches them.

## Backup (Vaults)

A **Vault** is a one-click backup of your work to another drive, set up in **Settings ▸ Backups**.

- **Set up** — choose a drive or folder as the **Vault location** (an external drive is recommended).
- **Update** — **Back Up Now** in the same tab. A small dot in the sidebar footer mirrors the Vault's freshness at a glance: **green** (backed up within a day), **amber** (within a week), **red** (older / never), dim (not set up). Click it to open Settings ▸ Backups.
- **Automatically** — on quit, Chili RAW can back up by itself: **Remind** asks first, **Silent** just does it, and **Frequency** stops it firing more often than you want.

**Two modes** (the "Include photos" checkbox):

- **Edits only (default)** — writes one **dated zip**, e.g. `Chili RAW Database 2026-07-18.zip`, containing the catalog (search index + AI keywords), your Collections, develop presets, saved map places, keyboard shortcuts, the LUTs you imported and starred, your saved Film Labor Looks, and **every edit sidecar** (with their folder paths kept inside the zip). Usually a few MB — more if you have imported a large LUT pack, since each one carries its own copy. Each backup makes a new dated file, so you keep a history — the ten most recent are kept and older ones removed after a backup that completed.
- **Include photos (full mirror)** — tick **"Include photos (full mirror)"** to *also* mirror the actual photo files (and their sidecars, in their folders) to the drive — a complete library backup. It's incremental: only files that changed since last time are copied.

**Restoring.** File ▸ Look Inside a Backup… shows what an archive holds — your edits, named faces, presets and albums — and flags any photo folder that is not on this Mac. **Restore…** puts your work back: presets, albums, Looks, LUTs, watermarks, both databases, your photo folders, and the edits that belong in each of them. Chili RAW closes, restores, and reopens; the work happens as it starts, because a database cannot be replaced while it is open. The confirmation lists what the backup will replace and what it is not holding, so nothing is a surprise. Your photo files themselves are never touched, and the archive itself is only ever read. If you backed up with **Include photos** on, the edits travel in the mirrored folder beside the zip rather than inside it — copy that folder back yourself.

**Walking back one folder.** A Vault restore rolls the whole library back to a backup date. For the commoner regret — an Auto Sync across two hundred photos, a paste onto the wrong selection — **File ▸ Earlier Copies of This Folder…** is the smaller tool. Chili RAW keeps a copy of each folder's edits every time you change something in it, and this lists them by date. Pick one, press **Put Back**, and only that folder changes. What was there is saved first, so the undo can itself be undone from the same list. Copies are kept per folder, so in a view that spans subfolders, open the subfolder you actually edited.

**If your backup drive hides your edits.** Some drives and sync folders quietly discard files whose names begin with a dot. That only matters with **Include photos** on — the edits travel beside the photos then, rather than inside the dated archive — and Settings ▸ Backups says so before you rely on it. Either choose a different drive, or turn Include photos off.

Because it's all plain files, a Vault is also readable by hand: unzip the dated archive and follow the `README.txt` beside the app data.
