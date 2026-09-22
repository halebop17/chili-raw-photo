# Feature glyphs

One file per feature, named for its slug in `src/data/features.json`. They are
drawn on a 32-unit grid at a single pen weight (2.2), with round caps and
corners that overshoot — that is the hand, and a new one has to match it or the
set stops looking deliberate.

The colour is not decoration. Exactly one element in each glyph is coloured, and
it says who does the work:

    var(--teal)     macOS Vision, nothing to download
    var(--violet)   a model you downloaded
    var(--accent)   the app on its own

Everything else is `currentColor`, so a glyph takes the colour of whatever it
sits in.

Used in two places, both reading this folder:

  * `src/pages/features/index.astro` — the features index
  * the homepage grid, injected by `tools/design-to-site.py` in the app repo,
    matched to each card by its title

Adding a feature means adding a file here with the slug as its name. Nothing
else needs editing.
