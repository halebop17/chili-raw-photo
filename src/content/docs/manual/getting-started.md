---
title: "Getting started & the workspace"
description: "Opening a folder, the seven views, and how the window is laid out."
sidebar:
  order: 1
---

Chili RAW opens as a single window with a dark sidebar on the left and a large work area on the right. The sidebar is your home base: it holds the list of views, your folders, your saved searches, and quick filters. The work area shows whichever view you've selected, for whichever folder you've clicked.

When you first launch with nothing added, the work area simply reads **"Add a folder to get started."** with an amber **Add Folder…** button. That's your starting point.

## Adding a folder

Chili RAW works on folders of photos and videos that already live on your disk — it never imports or copies them. You point it at a folder and it reads what's there.

To add one, do any of the following:

- Click the amber **Add Folder…** button in the empty work area.
- Press **⌘O**.
- Choose **File → Add Folder…** from the menu bar.
- Click the small **+** button to the right of the **FOLDERS** heading in the sidebar.

A macOS folder chooser appears — pick a folder and click **Add**. It's added to the sidebar, expanded, selected, and its contents load in the work area. You can add as many top-level folders as you like; each becomes its own entry under **FOLDERS**.

By default Chili RAW **reopens your last folder on launch**, so you can pick up where you left off. You can turn this off in **Settings → General → Startup** ("Reopen last folder on launch").

## The folder tree

Each folder you add appears as a root in the **FOLDERS** list, and every folder that contains subfolders shows a small caret (**›**) to its left.

- **Expand / collapse** a folder by clicking its caret. Subfolders load the moment you open it.
- **Open a folder** by clicking its name (or its icon). The name highlights, and the work area fills with that folder's photos in the current view.
- **Recursive count** — the number on the right of each row is how many images that folder holds, counting everything in its subfolders too. Counts appear on every row once the catalog has finished indexing.
- **Note icon** — a small note icon between a folder's name and its count means the folder has notes (see *Folder notes* below).
- **Amber dot** — a small amber dot on a folder row means something in it **no longer matches the catalog**: photos added, changed, moved or deleted outside Chili RAW (even while it was closed), or deleted from inside it. Right-click the row and choose **Synchronize Folder** to bring it back in step.

**Right-click any folder** for its menu:

| Menu item | What it does |
|---|---|
| **Synchronize Folder** | Re-reads the folder from disk and updates counts and thumbnails |
| **Scan for Faces** / **Rescan for Faces** | Detects faces in the folder (only shown when People is enabled) |
| **Folder Notes** | Opens the folder's notes beside the grid (see below) |
| **Reveal in Finder** | Opens the folder in the macOS Finder |
| **Remove from Sidebar** | Drops the folder from the list (your files are untouched) |

You can also drag the thin divider between the sidebar and the work area to make the sidebar wider or narrower; the width is remembered between launches.

**Folding the sidebar away.** The **‹** button in the sidebar's top-right corner folds the whole thing down to a thin rail, giving the work area the full width of the window. The rail's **›** brings it back. **⌥\** does the same from the keyboard, and it works on every page — Grid, Develop, Geo Tag, EXIF/IPTC, Film Labor. Whether you leave it folded or open is how it comes back next launch, and your chosen width is remembered either way.

## Folder notes

Every folder can keep a page of notes: where you went, the map links, the names and details you will want again later. The notes are written in a **Markdown editor** built into Chili RAW and saved as a plain **Markdown** file inside the folder, so they move, copy and back up along with the photos.

**Opening them.** With a folder open, do any of the following:

- Click **Notes** at the right end of the grid toolbar.
- Right-click the folder in the sidebar and choose **Folder Notes**.
- Choose **File ▸ Folder Notes**. You can give it a key in **Settings → Shortcuts**.

The notes open in a panel on the right of the grid, so you can read them while you look at the photos. Notes belong to one folder, so they are not offered for search results, Smart Folders or Collections.

**Three views.**

- **Read** is where the notes open: a formatted page with titles, bullet points and bold text. Click a link to open it in your browser.
- **Edit** shows the same formatting while you type, with no Markdown symbols in the way. Select some text and press a shortcut, or use the toolbar at the top of the panel: **Title**, **Bold**, **Italic**, **Bullet list** and **Link**. Pasting a web address over selected text turns it into a link.
- **Code**, a switch inside Edit, shows the Markdown itself, for writing it by hand.

Press **Done** to save and go back to Read. The notes are also saved when you close the panel, open another folder or quit.

| Key | Action |
|-----|--------|
| ⌘B | Bold |
| ⌘I | Italic |
| ⌘K | Link: uses the web address on the clipboard if there is one, otherwise asks for one |
| ⌥⌘1 / ⌥⌘2 / ⌥⌘3 | Title, levels 1 to 3 |
| ⌥⌘L | Bullet list |

The editor draws titles, bold, italic, bullet and numbered lists, and links. Anything else in the file, such as a table or a block of code, is shown as plain text and kept exactly as it was written. Typing in the notes never rates, flags or picks a photo, and **⌘A** there selects the text.

**The file.** The notes are saved inside the folder, as the folder's name followed by `_notes.md`. It is an ordinary Markdown file. Quick Look shows it, and any text editor or Markdown app can open and change it; if it was changed elsewhere, Chili RAW reads it again when you open the panel.

- **No file until there is text.** Opening the notes of a folder that has none shows an empty Edit view, and the file appears the first time you save. Delete all the text and save, and the file is removed, along with the sidebar icon.
- **Reading leaves the file alone.** Opening the notes or switching views changes nothing on disk until you edit something.
- **A folder that holds other folders can have notes too.** One page for the whole trip, and one for each day inside it.
- **Renamed the folder in Finder?** The notes keep their old file name, and Chili RAW still opens them as long as the folder holds only one file ending in `_notes.md`. The next save renames the file to match the folder.
- On a drive that is offline or read-only, **Notes** says why it cannot open them.

**Backups.** Folder notes are backed up with your edits: a Vault backup carries them in their folders, a restore puts them back, and **File ▸ Earlier Copies of This Folder…** can bring back an earlier version ([chapter 14](/manual/collections-and-backups/)).

## Switching views

Near the top of the sidebar is the **view switcher** — the same tool available to whatever folder you have open. Click a row to switch, or use the keyboard shortcut shown as a chip on the right of each row. The **View** menu in the menu bar mirrors these.

| View | Shortcut | What it's for |
|---|---|---|
| **Grid** | ⌘1 | Browse, cull, rate and flag your photos as a grid of thumbnails |
| **Develop** | ⌘2 | Non-destructive RAW/photo editing — tone, color, crop, masks |
| **Geo Tag** | ⌘3 | Place photos on a map and write GPS coordinates |
| **EXIF / IPTC** | ⌘4 | View and edit metadata fields (captions, keywords, copyright…) |
| **People** | ⌘5 | Face clusters and named people (opt-in — see below) |
| **Film Labor** | ⌘6 | The darkroom — lens, negative, halation, grain, print, viewing (opt-in — see below) |
| **Pixels** | ⌘7 | Retro overlay / paint canvas (opt-in — see below) |

Most views act on the folder you have selected, so open a folder first. **People** is the exception — it works across your whole library, so it doesn't need a folder selected.

If you switch off a view you're currently in (via Settings), Chili RAW drops you back to **Grid** so you're never stranded on a hidden screen.

## Smart Folders, Collections and Keywords

Below your folders the sidebar has three more sections:

- **SMART FOLDERS** — saved searches that collect matching photos from across your library. Click the **+** beside the heading to create one; click a smart folder to view its results. Right-click to **Edit…** or **Delete**. The number on each row is how many photos currently match.
- **COLLECTIONS** — hand-picked sets of photos ([chapter 14](/manual/collections-and-backups/)). Click **+** to make one from the current selection, or drag tiles onto a Collection row.
- **KEYWORDS** — a panel in three parts. Click its heading to fold the whole panel away, and again to bring it back.
  - **The keyword line** at the top holds the selected photos' keywords, separated by commas. Type more and press **Return**, or click away, to put them on every selected photo; delete one to take it off them. A keyword marked **\*** is on only some of them: take the **\*** away to put it on all. **Places > Japan > Kyoto** files a keyword under another, and a bare **Kyoto** goes where it already lives. The line grows as it fills.
  - **SUGGESTIONS** — nine keywords to click onto the selected photos, picked from the photos taken around the same time and from the keywords that usually go with the ones these photos have. Keywords they all carry already are left out.
  - **KEYWORD LIST** — every keyword your photos carry, nested the way you filed them (**Places › Japan › Kyoto**), with how many photos carry each one or a keyword inside it. Click a keyword to see those photos. With photos selected, each keyword gets a box: tick it to tag them, untick it to take it off; a dimmed box means they carry a keyword inside it. Drag photos onto a keyword to tag them, and drag a keyword onto another to file it inside. Right-click for **New Keyword Inside…**, **Rename…**, **Move to the Top Level** and **Delete…**; the **+** makes a keyword at the top. The list shows ten rows and scrolls past that, and the filter box above it narrows it.

Changes made in the Keywords panel are written to the photos' files straight away rather than waiting to be saved, and a rename, move or delete that rewrites photos tells you how many first.

**Filtering by rating, flag, colour, people or place happens in the grid's own Filter band**, not in the sidebar — one place decides what is in the grid ([chapter 2](/manual/browsing-and-culling/)).

## The status footer

At the very bottom of the sidebar is a small status line. On the left it shows how many images are loaded (for example **"248 IMGS"**). On the right, a colored dot and label report the catalog: **"INDEXING 42%"** while Chili RAW is cataloging your folders in the background, or **"… INDEXED"** with the total once it's done. Indexing runs quietly — you can keep working while it finishes.

## Turning on People, Film Labor and Pixels

**People**, **Film Labor** and **Pixels** go beyond the core culling workflow, so they're **off by default**. Until you enable them they still appear in the view switcher but greyed-out with a small lock — clicking one just reminds you to turn it on.

To enable them:

1. Open **Settings** (**⌘,** or **Chili RAW → Settings…**).
2. Go to the **General** tab.
3. Under **Modules**, switch on the ones you want.

They immediately become clickable in the sidebar and the View menu.

**Tip:** If you plan to use People, also visit **Settings → General → People** — turning on "Automatically scan new photos for faces" lets Chili RAW find faces in the background as you open folders, so the People view fills in on its own. It's off by default because face scanning is CPU-heavy.

## A quick first run

1. Press **⌘O** and choose a folder of photos → its thumbnails appear in **Grid**.
2. Cull with the keyboard — **P** to pick, **X** to reject, **1–5** to rate.
3. Open **Filter** in the grid toolbar and tick **Picked** to see just your keepers.
4. Press **⌘2** to jump a photo into **Develop**, or **⌘3** to place it on the map in **Geo Tag**.
