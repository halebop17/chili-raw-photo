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

- **Edits only (default)** — writes one small **dated zip**, e.g. `Chili RAW Database 2026-07-18.zip`, containing the catalog (search index + AI keywords), your Collections, develop presets, saved map places, and **every edit sidecar** (with their folder paths kept inside the zip). A few MB — store it anywhere. Each backup makes a new dated file, so you keep a history.
- **Include photos (full mirror)** — tick **"Include photos (full mirror)"** to *also* mirror the actual photo files (and their sidecars, in their folders) to the drive — a complete library backup. It's incremental: only files that changed since last time are copied.

Because it's all plain files, a Vault is a real, restorable copy (the photo mirror even opens in Finder / other apps). Restoring is manual for now — unzip the dated archive, or copy the mirrored tree back.
