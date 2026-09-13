---
title: "Stacks"
description: "Bursts collapsed into one tile until you want to look inside."
sidebar:
  order: 4
---

When you shoot a burst — a run of frames a fraction of a second apart — the Grid can fill up with near-duplicates. **Stacks** collapse each burst into a single tile so you scan scenes instead of frames, then expand a burst only when you want to compare the shots inside it. Nothing is moved, renamed, or deleted; stacking is purely a way of viewing the Grid.

Stacks are **off by default** and live in the **Grid** view.

## Turning stacks on

In the title bar, click the **Stacks** pill (the stacked-squares icon). It highlights in amber when active.

Because a stack is a group of shots taken close together *in time*, turning Stacks on **forces a date sort**. If your Grid was on any other sort order, enabling Stacks switches it to newest-first date order automatically. Stacks only show while the Grid is date-sorted — if you later change the sort to something else (name, rating, and so on), the groups disappear until you return to a date sort.

Click the **Stacks** pill again to turn it off.

## The threshold slider

While Stacks is on, a small slider with a live readout appears next to the pill. It sets the **maximum gap between two shots that still counts as the same burst**:

- Drag left for a tight window; drag right for a loose one.
- The range runs from **1 second to 1 hour** (the readout shows `1s`, seconds, minutes, or `1h`). It starts at **10s**.
- Any two frames whose gap is within the threshold chain into one stack, so a long burst of small gaps stays together as a single group.
- The Grid **re-groups live** as you drag — widen the threshold and neighbouring frames merge; tighten it and stacks break apart.

A shot with no capture date is never stacked; it always stands on its own.

## Reading a stack in the Grid

A collapsed stack looks like a normal tile with two extra cues:

- A **shingle** — offset cards peeking out behind the tile — signalling there's more underneath.
- A **count pill** at the top of the tile showing the stacked-squares icon, the number of frames, and a chevron.

Single frames aren't decorated — only real groups of two or more get a pill and shingle.

## Expanding and collapsing

- **Click the count pill** on a collapsed tile (chevron pointing right) to expand the stack. Its frames spread back into the Grid as a connected block with a faint amber band behind them.
- On an expanded stack, the pill on the **first tile** points its chevron down — **click it to collapse** the group again. Collapsing while one of the inner frames is selected moves your focus to the stack's visible tile so your place isn't lost.

Expand and collapse is a viewing state only; it isn't saved, so reopening a folder shows every stack collapsed.

## The hero (which frame represents the stack)

The single tile shown when a stack is collapsed is its **hero**. Chili RAW picks the hero automatically:

1. the frame with the **highest star rating**, and
2. on a tie, the **earliest** frame in the burst.

So rating a burst's best shot instantly promotes it to the top of the stack.

**To choose the hero yourself:**

1. Expand the stack (click its count pill).
2. **Right-click** the frame you want and choose **Set as Stack Pick**.

That frame becomes the collapsed tile from then on. The command only appears on a frame that belongs to an expanded stack, so expand first.

## What's remembered

Stacking settings are stored **per folder**. When you reopen a folder, Chili RAW restores:

- whether **Stacks** was on,
- your **threshold** value, and
- any manual **Stack Pick** choices you made.

Switching folders clears stacking first, then each folder re-applies its own saved settings — so one folder's stacks never bleed into another.

## Shortcuts and controls

| Action | How |
| --- | --- |
| Turn stacking on / off | **Stacks** pill in the title bar |
| Change the burst window | Drag the **threshold** slider (1s–1h) |
| Expand a stack | Click its **count pill** (chevron right) |
| Collapse a stack | Click the pill on its first tile (chevron down) |
| Override the hero | Expand, then **right-click → Set as Stack Pick** |

There are no dedicated keyboard shortcuts for stacks; all of the controls above are mouse-driven in the Grid.

## Tips

- **Start loose, then tighten.** Open at a wide threshold to collapse whole scenes, then drag left to split a busy sequence into separate bursts.
- **Rate before you pick.** Since the hero defaults to the highest-rated frame, starring a burst's best shot usually saves you the manual Set-as-Stack-Pick step.
- **Lost your groups?** If the pills vanish, check the sort order — stacks only appear under a date sort. Toggling Stacks on again restores it.
