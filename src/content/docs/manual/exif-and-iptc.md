---
title: "EXIF & IPTC"
description: "Read your camera's data; write captions, keywords and copyright."
sidebar:
  order: 8
---

The EXIF/IPTC view is where you read your shooting data and write the descriptive metadata that travels with your photos: titles, captions, keywords, and copyright. Open it from the sidebar, the View menu, or with **⌘4**.

The screen has three parts: the file list on the left, a large preview at the top right, and the editable fields panel below it. A **Write** footer is pinned to the bottom of the right column.

## Choosing what you're editing

The fields panel always reflects an "active set":

- Select one or more photos in the left file list to edit them.
- If nothing is selected, the panel edits the single focused image.

The preview and the read-only EXIF always follow the first image in that set.

## Read-only EXIF

The top **EXIF** section shows the camera's own data, straight from the file — you can't change it here:

- **ISO**, **Focal** (focal length, with a 35mm-equivalent when it differs), **ƒ-stop**, **Shutter**
- **Camera** (make + model) and **Lens**

Any value the file doesn't carry shows as a dash (—).

At the bottom, a read-only **GPS** section shows **LAT** / **LON**. It's tagged either "SET IN GEO TAG VIEW" or "MISSING" — to add or change coordinates, use the Geo Tag view (⌘3), not this panel.

## Creation Date

Unlike the rest of the EXIF block, **Creation Date** is editable. It reads the capture time from the file and shows a date-and-time picker.

- Adjust the picker to change the capture time.
- If the file has no date, the row shows a dash and a **Set date** button — click it to start from the current time, then adjust.
- A small revert (circular-arrow) button appears once you've changed the date; click it to drop your edit.

Saving a new date writes it back to the capture-time, create, and modify fields together, so the photo sorts correctly everywhere.

## The editable fields

Below EXIF you'll find:

| Field | Notes |
|---|---|
| **Keywords** | A list of tag chips (IPTC / XMP subject) |
| **Title** | Single line |
| **Caption / Description** | Multi-line |
| **Creator** | Author of the photo |
| **Copyright** | Rights / copyright notice |
| **Source** | Where the image came from |

To edit a text field, click it and type. Your entry is **staged** (not yet written) when you press **Return** or click away from the field. A staged field is outlined in amber, and the photo's filename in the file list turns amber too — your cue that there are unsaved changes.

**Keywords** work a little differently:

- Type in the **Add keyword…** box and press **Return** to add a chip.
- Click the **×** on a chip to remove that keyword.
- Duplicates (ignoring case) are collapsed automatically.

## Editing several photos at once

Select multiple photos and every field pools their values:

- Where the whole selection shares a value, you see that value.
- Where they differ, the field shows **`<multiple values>`** in italic.

Type into a field and your entry is staged for **all** selected photos at once — a fast way to stamp the same copyright or add a keyword across a shoot. Leaving a field on `<multiple values>` keeps each photo's own value untouched. Clearing a field (emptying it) stages a "remove this tag" on save.

## AI keyword suggestions

For a **single** focused photo, a **SUGGESTED** row of dashed chips appears under Keywords. These come from an on-device Vision classifier — it runs locally, needs no internet, and looks at the image to propose tags like "beach", "dog", or "food".

- Click a suggestion (the dashed chip with a leading **+**) to **accept** it. Accepting stages it as a real keyword; it then moves up into your solid keyword chips.
- Suggestions are never written on their own — nothing lands in your file until you accept it and save.
- A suggestion already in your keyword list is hidden automatically.

Suggestions are hidden when you have more than one photo selected, since batching subjects together isn't useful.

## Saving your edits (⌘S)

Nothing touches your files until you save. The Write footer at the bottom right has:

- A **Write to file** button that shows a count once edits are staged (for example, **Write 12 to file**). Click it, or press **⌘S**, to write all staged changes. It's disabled while a save is in progress or when nothing is pending.
- A **revert** (circular-arrow) button that discards all staged caption/keyword/date edits on the active selection.

After a save, the panel re-reads the fresh values from disk and the amber highlights clear.

## Settings that matter

Open **Settings** (**⌘,**) and go to the **Files** tab:

- **Metadata write target** — choose where saves go:
  - **Directly into file** (default) — modifies the original DNG / JPEG in place.
  - **XMP sidecar file** — writes a `<name>.xmp` next to the original and leaves the image untouched. On read, the app merges both and the sidecar wins.
- **Back up files before writing** — on by default. Before each save batch, originals are copied into a timestamped subfolder (named `.chiliraw-backups` by default, editable) inside the active folder. Leave this on if you're writing directly into your originals.

## Tips

- Watch the filename color in the file list — amber means unsaved edits are waiting for ⌘S.
- To batch-stamp copyright or creator, select the whole shoot first, then type once.
- Prefer **XMP sidecar** if you want your originals bit-for-bit untouched; prefer **directly into file** if you want the metadata embedded and portable.
- Accept AI suggestions freely — they only become permanent when you save.
