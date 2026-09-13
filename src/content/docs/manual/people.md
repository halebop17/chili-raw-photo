---
title: "People"
description: "Finding and naming faces, entirely on your own Mac."
sidebar:
  order: 10
---

People finds the faces in your photos, groups the ones that look like the same person, and lets you put a name to each face. Once someone is named, you can jump straight to every photo they appear in. All of the recognition runs on your Mac — nothing about your photos or the faces leaves your computer.

This is a personal-use extra, not part of the core culling workflow, so it ships **turned off** and needs a one-time model download before it can do anything. Treat it as a convenience for your own library rather than a polished, production face-management system.

## Turn it on first

People is hidden until you opt in:

1. Open **Settings → General**.
2. Under **Sidebar extras**, switch **People** on.

Until it is enabled, People appears greyed-out in the sidebar and in the View menu. Once on, open it from the sidebar, from **View → People**, or with its keyboard shortcut.

## Download the face model (one time)

Recognising and grouping faces needs a downloaded model, so **People is a Pro feature**. The first time you open it you get a gate: *"People recognition needs an AI model."* The model (about 170 MB) isn't bundled with the app, to keep the download small.

- Click **Download Model (~170 MB)**. A progress bar shows the download percentage.
- It downloads once, stays on your Mac, and nothing is uploaded.
- When it finishes you'll see *"Face model ready — you can scan for faces now."*

Until the model is present, scanning does nothing and the People tab stays on this gate.

## Scan your photos for faces

Scanning is what actually detects faces; it doesn't happen on its own unless you ask for it. You have several ways to start:

- **Whole library** — in the People toolbar, click **Scan for Faces**. This scans every image in your catalog.
- **Current folder** — choose **Catalog → Scan Faces (This Folder)**. The same menu shows the live count (*"Scanning Faces 12/340…"*), a **Cancel Face Scan** item while it runs, and a running **Faces: N** total.
- **A folder in the sidebar** — right-click any folder and pick **Scan for Faces**, or **Rescan for Faces** to redo photos that were already scanned.
- **Automatically** — in **Settings → General → People**, turn on **Automatically scan new photos for faces**. Off by default. With it on, opening a folder quietly scans its photos in the background. Scanning loads a large model and is CPU-heavy, so leave this off if you'd rather scan on demand.

Scanning is resumable and safe to stop: each photo is scanned completely or not at all, already-scanned photos are skipped, and you can hit **Cancel** at any time and pick up later. While a scan is running, the People toolbar shows a spinner with progress and a **Cancel** button.

## The People view

The view has two sections:

- **People** — everyone you've named, alphabetical, each shown as a cover face with a photo count.
- **Unnamed** — automatically grouped faces that don't have a name yet, largest group first. A number badge on each tile is how many faces are in that group.

A **Hidden** section appears only when you choose to reveal it (see below).

Handy toolbar controls (visible when a scan isn't running):

- A **tile-size slider** to make the face thumbnails larger or smaller.
- The **⋯ (more)** menu, which holds **Ignore single faces**, **Show Hidden**, and **Rebuild Face Thumbnails** (covered below).

For performance the Unnamed section caps at 400 groups; a **Show all … groups** button reveals the rest.

## Name a group

1. Click any tile in the **Unnamed** section. A sheet opens showing all the faces in that group.
2. Type a name in the **Name this person…** field and click **Name** (or press **Return**).
3. The group moves up into the **People** section under that name.

If you type a name that already exists (matching is case-insensitive), the faces are added to that existing person instead of creating a duplicate. As you name more people, future scans get smarter — new faces that clearly match someone you've already named are attached to them automatically.

Inside the group sheet you can also **right-click a face** to **Set as cover** (choose which face represents the group) or **Hide face** (drop a bad crop). Click **Done** to close.

## Merge and assign by dragging

Grouping isn't perfect — the same person often shows up as several groups. Fix it by dragging one tile onto another:

| Drag this | Onto this | Result |
| --- | --- | --- |
| An Unnamed group | Another Unnamed group | Combines them into one group |
| An Unnamed group | A named Person | Adds the whole group to that person |
| A named Person | Another named Person | Merges the two people into one |

Merges you make by hand stick — later scans won't undo them.

## Manage a named person

Right-click a person tile for:

- **Show Photos** — filter the grid to that person (same as clicking the tile).
- **Rename · Set cover…** — opens a sheet where you can rename (edit the field and press **Return**), and right-click any face to **Set as cover** or **Remove from person**. It also shows the person's photo count and a **Delete** button.
- **Delete Person** — removes the name; those faces return to the Unnamed pool, they're never thrown away.

## Hide and unhide junk

Scans pick up strangers in the background and other faces you don't care about. Nothing is ever deleted — hiding just tucks a group away:

- **Right-click an Unnamed group → Hide** to remove it from view.
- In the **⋯** menu, **Ignore single faces** hides every group that contains just one face (usually background-stranger noise) from the view.
- In the **⋯** menu, **Show Hidden (N)** reveals the **Hidden** section. Right-click any dimmed tile there and choose **Unhide** to bring the group back.

## See a person's photos in the grid

Click a person's tile (or right-click → **Show Photos**) to switch to the **Grid** filtered to just that person. The grid title reads **Person · Name**, and a filter chip appears — click its clear button to drop the filter and return to your normal view.

Once you've named at least one person, the **Search** panel also gains a person menu: pick a name (or **Anyone** to clear it) to combine a person filter with your other search terms.

## Fixing blank thumbnails

Face thumbnails live in a disposable cache, so they can occasionally go missing (for example after clearing caches). The **⋯ → Rebuild Face Thumbnails** command regenerates them from data already on disk — no re-detection, and your names, merges, and covers are left untouched. The app also rebuilds them automatically once per launch if it notices they're missing.

## Shortcut

| Action | Key |
| --- | --- |
| Open the People view | **⌘5** (default; rebind in Settings → Shortcuts) |
| Submit a name in a naming sheet | **Return** |

There are no other dedicated People shortcuts; naming, merging, hiding, and cover-setting are all done with clicks, drags, and right-click menus.

## Tips

- Name your most-photographed people first — each name you add helps the next scan sort itself out.
- Do a quick pass with **Ignore single faces** on to cut the clutter, then hide the obvious strangers before you start naming.
- Use **Set as cover** on a clear, front-lit face so people are easy to recognize at a glance in the grid.
- Leave auto-scan off on a big library and instead scan a folder at a time from the sidebar when you actually want faces for that shoot.
