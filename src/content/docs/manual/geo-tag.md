---
title: "Geo Tag"
description: "Put photos on the map and write real GPS data."
sidebar:
  order: 7
---

The **Geo Tag** view lets you put GPS coordinates onto your photos by clicking a map. It's split into two panes: a **file table** on the left and a live **map** on the right. Open it from the sidebar, the View menu, or **⌘3**.

Every location change you make here is *staged* first — the latitude/longitude columns update instantly and pins move on the map, and the write follows a second or so after you stop (or immediately, on **⌘S**). So you can lay down and correct locations freely; only the last state you leave a photo in reaches the file.

## The layout

**Left — the file table.** Each row shows a thumbnail, filename, timestamp, and **Latitude / Longitude** columns. Above the table:

- A count (`X of Y`) of how many rows are showing.
- An **Untagged only** toggle (pin icon) that hides every photo that already has GPS — handy for working through a big folder one un-located batch at a time.
- A **Filter…** field to narrow the list by filename.

**Right — the map.** A floating toolbar sits at the top-left, the place search at the top-right, and a **Write to file** button along the bottom.

## Choosing which photos to tag

Whatever you do on the map is applied to your current **target**:

- **Select rows in the table** — click a row, ⌘-click to add individual rows, or Shift-click for a range. The selection is the target.
- If nothing is selected, the single **focused** row (the last one you clicked) is the target.
- **Clicking a pin on the map** selects just that one photo and focuses it.

The Apply button always tells you the count, so you can confirm you're about to tag the right number of photos.

## Placing a location by clicking the map

1. Select the photo(s) you want to place in the table.
2. **Left-click anywhere on the map.** A pending amber pin drops there, with an **Apply to N photos** chip underneath showing the exact coordinates.
3. Not quite right? **Click again** to move the pin, or **right-click the pin** to remove it.
4. Click **Apply to N photos**. The coordinates are staged onto your target photos — the Latitude/Longitude columns fill in amber, and a toast confirms `Staged GPS on N images · ⌘S to write`.

If nothing is selected, the Apply chip is dimmed and reminds you to *select photos in the table first*.

## Searching for a place

Use the **Search place…** box at the top-right to fly the map somewhere without scrolling.

- Type a place name or address; a suggestion list appears. Click one, or press **Return** to take the top hit.
- The map recenters on the result and drops a distinct **pink labeled marker** so you can see exactly where it landed.
- This is navigation only — searching **does not tag any photos**. Once you're in the right spot, click the map to drop a pin as usual. Dismiss the pink marker with its **×**.

## Saving and recalling map viewports (Places)

If you shoot the same locations often, save the current map view so you can jump back to it later.

- Open the **Places** menu (star icon) in the toolbar and choose **Save this place…**. Give it a name (or leave it blank to use the coordinates) and click **Save**. The current center and zoom are remembered.
- Saved places appear under **Recall** in the same menu — pick one to fly there.
- To delete a place, use the **Remove** submenu.

Saved places persist across sessions and folders. Separately, each folder also remembers where you last left the map, so returning to a folder puts you back in the same area.

## Basemap and fit

- **Standard / Hybrid** button (globe icon) toggles the basemap between the plain map and satellite imagery. It starts on **Standard**.
- The **fit** button (aperture icon, *Fit pins to view*) zooms the map so all of the folder's tagged photos are visible at once.

## Copy and paste GPS

To reuse one photo's location on others:

1. Focus a photo that already has coordinates and press **⌘C** — its GPS is copied (a toast shows the coordinates).
2. Select the photos you want to give the same location and press **⌘V** — the coordinates are staged onto all of them, exactly like a map click.

If the focused photo has no GPS, or nothing has been copied yet, a toast tells you why nothing happened.

## Removing GPS

To strip location from photos:

- Select the rows, **right-click**, and choose **Remove location**.
- The Latitude/Longitude cells change to an **amber dash**, meaning "removal staged." Press **⌘S** to write the removal to the files. Rows that had no GPS to begin with are simply skipped.

## Saving to your files (⌘S)

Staged photos are easy to spot — their filename and coordinates show in **amber** in the table, and staged pins on the map carry a **dashed ring**. The amber clears itself: staged coordinates are written automatically a second or so after you stop working.

- To write immediately, click **Write N to file** in the footer at the bottom of the map pane, or press **⌘S**.
- The button (and shortcut) are disabled when there's nothing pending.
- Only a manual **⌘S** makes the per-write file backups described in **Settings ▸ Backups**; the automatic save skips them (it would flood the backup folder, and your edits are already in a crash-safe sidecar).

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| ⌘3 | Open the Geo Tag view |
| Left-click map | Drop / move a pending pin |
| Right-click pin | Remove the pending pin |
| ⌘C | Copy GPS from the focused photo |
| ⌘V | Paste GPS onto the selected photos |
| ⌘S | Save all staged edits to the files |

## Tips

- **Read the pin colors.** The focused photo's pin is red, selected photos are amber, and other already-tagged photos are green. Any pin with a dashed ring is staged but not yet saved.
- **Batch by location.** Turn on **Untagged only**, select a batch shot in one spot, click the map once, and Apply — then move to the next batch.
- **Search first, then click.** The place search only moves the map; the pink marker just shows you where to aim your actual GPS pin.
- **Correct a pin before the save runs** by clicking a new spot or removing the pending pin — and afterwards, placing it again simply writes the new coordinate over the old one.
