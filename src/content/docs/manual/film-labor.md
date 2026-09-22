---
title: "Film Labor"
description: "The darkroom: stocks, halation, grain, paper and print."
sidebar:
  order: 12
---

Film Labor renders your photograph the way film would have: exposed onto a negative, scattered inside the emulsion, and printed onto paper. It is not a filter laid over the image — it is a chain of physical stages, and the order of that chain is physics rather than preference.

Film Labor is a **Pro** feature. Turn it on in **Settings → General → Modules**, then open it from the sidebar, from **View → Film Labor**, or with **⌘6**.

## The chain

Across the top sits the chain, one card per stage:

**Lens → Negative → Halation → Grain → Print → Viewing**

Click a card to bring its controls into the panel on the right. Each card also carries two small buttons:

- **◉** — read the scopes at that point in the chain, so the histogram describes the negative rather than the finished print.
- **⊘** — switch that stage off. Lens, Halation, Grain and Viewing have one; Negative and Print are the chain itself and are not optional.

## Lens

The first card, and the only one that is not chemistry: it is the glass on the front of the camera, before any light has reached the film.

- **Bloom** — how much light the lens spreads. A diffusion glow: bright things bleed into what surrounds them, and the darks near them lift. At 0 the stage does nothing at all.
- **Spread** — how far it spreads, as a percentage of the frame's height, so a preview and an exported file agree.

This is not Halation, which is further down the chain. Halation is light scattering *inside* the film and comes out red around highlights; Bloom is the lens, so it is neutral, much wider, and it happens before the film — which means the film's own curve then shapes the glow, the way a diffusion filter on the lens really does. A night frame often wants both.

Bloom feeds on the light that is actually in the scene, so a sunlit or neon-lit frame blooms far more than a flat overcast one. If you cannot see it, try it on a photograph with something genuinely bright in it.

One quirk worth knowing: the Lens card's thumbnail looks the same as the Negative card's. Nothing in this chain can be shown before the film exists, so "the frame at the lens" can only be drawn by putting it through the film — which is exactly what the next card shows.

Clicking a card also changes the picture on screen to *what the image looks like at that point*. Tap **Negative** and you are looking at a negative; tap **Print** and you are looking at the print. The stages before the print are shown as a lab scan of the negative rather than as an orange strip, because at thumbnail size an orange rectangle shows you nothing.

**Bypass** turns the whole chain off, so you can compare against your unfilmed photograph.

## A Look

Everything the panel holds — the two stocks and every slider — is one **Look**, saved **per version** of a photo ([chapter 5](/manual/develop/)) — switch version and the film on the canvas switches with it; delete a version and its Look goes too. Name it in the **LOOKS** box at the bottom of the panel and it joins the library; from there you can apply it to a whole grid selection at once.

**LOOK** in the footer is how much of the entire chain is in the photograph. A film you have just chosen arrives at 75 %: push the slider to 100 % for the full rendering, or down to 0 % for your untouched photograph back, exactly as if Film Labor were switched off. It does not start at the top because a stock at full strength is more film than most photographs want, and it is the control to reach for when you want *less* of it. It is a different thing from **Character** in the Print group.

**A photo carrying a Look is marked.** A good Look is supposed to read as a photograph, which means the picture itself cannot tell you film has been through it. So a small amber filmstrip appears in the top-right corner of the grid tile, beside the versions and GPS marks, and a **Film** pill sits in the bottom-right of the Develop canvas. The mark follows the Look: clear it and the mark goes.

## The ring-around

A darkroom judges a correction by printing its neighbours beside it. The tray below the image does the same: pick an axis and it renders your frame at a row of steps either side of where you are, with the current setting marked. The **Negative** and **Print** axes are the exception — stocks are not a continuum, so those two show every stock rather than a sweep.

---

## Film (the negative)

**The stock.** Pick from colour negatives, slide films and the cine stocks. Slide film is the finished positive: it is viewed directly, so choosing one removes the print stage entirely.

## Format — the frame it was shot on

Super 8, 16 mm, 35 mm, 645, 6×6, 6×7 or 4×5.

**It does not change the film's colour or tone.** The stock is the stock. It changes exactly two things: **how wide the halation glow is, and how big the grain is** — both as a proportion of your picture.

The reason is that both are fixed *physical* sizes. A halation halo is about **0.24 mm** on the film whatever the film is, and a grain particle is a few microns whatever the film is. On a big negative that same 0.24 mm covers a smaller fraction of the frame, and you enlarge the negative less to reach a given print size, so its grain looks finer. On Super 8 it is the other way round — a tiny frame, so the same halo is a large fraction of it and the grain is coarse. That is why Super 8 looks grainy and a 4×5 contact print looks glassy: the same chemistry on a different frame.

Relative to 35 mm:

| Format | Frame height | Halo & grain |
|---|---|---|
| Super 8 | 4.0 mm | **6.0×** bigger |
| 16 mm | 7.5 mm | 3.2× |
| **35 mm** | **24 mm** | **1× (the reference)** |
| 645 | 41.5 mm | 0.58× |
| 6×6 | 56 mm | 0.43× |
| 6×7 | 56 mm | 0.43× |
| 4×5 | 97 mm | 0.25× |

So **a bigger format gives subtler halation and finer grain; a smaller one gives stronger, coarser**. 6×6 and 6×7 share a figure because they are the same 56 mm tall and differ only in how far they extend sideways.

On screen the difference used to disappear on the larger formats — grain finer than one pixel cannot be drawn, so everything from 35 mm upward looked the same until you exported. It no longer does: sub-pixel grain now fades out in proportion instead of being drawn at full strength, so a 6×7 preview really does show finer, gentler grain than a 35 mm one, and the preview agrees with the exported file.

The Halation **Size** slider is calibrated at 35 mm, which is why it keeps reading in 35 mm terms — this picker converts it.

Two things worth knowing:

- **With Halation and Grain both at 0, the picker does nothing at all.** It has nothing to scale.
- **On screen, formats larger than 35 mm all show the same grain.** At preview size their grain is finer than a single screen pixel, so it cannot be drawn; it does differ in an export. Halation is unaffected and changes on screen at every format.

It defaults to 35 mm and never guesses from your file's metadata — choosing a format is always your decision, so that opening an old Look never silently re-renders it.

| control | range | what it does |
|---|---|---|
| **Exposure** | −3 … +3 EV | How much light the film received. |
| **Temp** | 2500 … 10000 K | The colour of the light it was shot under. |
| **Tint** | −4 … +4 | Green ↔ magenta, across the same axis. |

**As shot** returns all three to neutral.

## Development

How the film was processed, as opposed to which film it was.

| control | range | what it does |
|---|---|---|
| **Push** | −2 … +3 EV | Developing time. Pushing makes the emulsion **faster *and* harder**, so a push renders lighter as well as contrastier — set the Exposure slider to match, as you would have rated the film. Fitted against Kodak's own measured push curves for Portra 800. |
| **Contrast** | 0.5 … 2.0 × | Development contrast alone, with no speed change — what a compensating developer does. It pivots about mid-grey, so it opens or closes the ends of the scale without moving the midtone. |
| **R / G / B** | 0.5 … 2.0 × | The same, per layer. Pulling the three layers' contrasts apart is what cross-processing does, and no colour control can imitate it. |

Where a film has *measured* push data, that data wins by being its own stock: Portra 800 ships with Kodak's real @1600 and @3200 curves as separate films, and those are the accurate way to render a pushed Portra 800. The slider is what makes push available on everything else.

---

## Halation

Light that reaches the film, passes through it, reflects off the base and comes back to expose the emulsion a second time. It is why a street light on film has a warm bloom around it and a sensor does not — and it happens *inside* the film, between exposure and printing, which is why it sits where it does in the chain and why no LUT can express it.

| control | range | what it does |
|---|---|---|
| **Amount** | 0 … 100 % | How much light comes back. |
| **Size** | 0.2 … 5 %h | How far it spreads, as a percentage of frame height — so a preview and an export agree. Read at 35 mm; the Format picker converts it. |
| **Bounce** | 1 … 4 | How many reflections to accumulate. Each is twice as wide and weaker than the last, which is what gives a halo a tight core and a wide soft skirt. |
| **Decay** | 0.1 … 0.9 | How quickly those bounces fade. Lower keeps the halo tight; higher lets it reach further. |

A frame with bright highlights — street lights, sun through leaves — shows this strongly. A flatly-lit landscape shows very little, and that is the film behaving correctly rather than the control failing.

---

## Grain

Grain applied **in the negative**, so the print stage renders it rather than it sitting on top of the finished image. Develop has its own grain control which works the other way; both can be used together.

| control | range | what it does |
|---|---|---|
| **Amount** | 0 … 100 % | How much. |
| **Reseed** | — | A different random grain pattern. The seed is stored with the Look, so grain never crawls between renders. |

The grain's size follows the **Format** picker: a 6×7 negative is enlarged less than a 35 mm one, so its grain is finer.

**It also follows the stock.** A fast film is grainy because it is fast — speed comes from bigger silver crystals, so a bigger crystal is what makes it fast *and* what makes it grainy. Natura 1600 therefore renders noticeably coarser and stronger grain than Portra 160 at the same Amount. Pushing makes it grainier still, whether the push is baked into the stock (Portra 800 @3200) or dialled on the **Push** slider, which reaches grain on every stock. The two effects compose: Portra 800 @3200 on Super 8 is the grainiest combination available, Vision3 50D or Velvia 50 on 4×5 the cleanest.

The spread is deliberately **realistic rather than dramatic** — about **2.4×** between the slowest and fastest stocks (Velvia 50 to Natura 1600), against an ISO span of 32×. Grain does not rise anywhere near as fast as film speed does. Push widens it further: Portra 800 @3200 is about 2.8× the slowest stock.

One honest note on where the number comes from: only Fuji still publishes grain figures for its colour films, so each stock's grain is **derived from its ISO**, using the relationship fitted to Fuji's published measurements, rather than measured stock by stock. It is a real relationship measured on real film, but it is a rule applied to every stock rather than a datasheet reading for each one. Where a manufacturer does publish a figure, that will take precedence over the rule.

---

## Print

**Print or Scan.** Two genuinely different renderings. **Print** goes through a paper stock, the way a darkroom print is made. **Scan** measures the negative directly the way a lab scanner does, and needs no paper — this is what most people picture when they think of a film look. A slide film uses neither.

**The paper.** Eight papers, each with its own character.

| control | range | what it does |
|---|---|---|
| **Exposure** | −2 … +2 EV | The enlarger's exposure time, shown as brightness: **up is lighter**. In a darkroom more exposure means more density on the paper and a darker print, but the negative's own Exposure slider brightens the print as it rises — so both read the same way here rather than fighting each other. |
| **Character** | 0 … 100 % | How much of the paper's own character is in the print. At 0 you still get a properly rendered print, just on an idealised paper rather than this one. It is *not* a fade back to your unfilmed photograph — that is **LOOK** in the footer. |

**On negative EV: FOLLOW / HOLD.** With **HOLD**, moving the negative's Exposure moves the print exposure the other way, so re-exposing the film does not drag the print's brightness with it. With **FOLLOW** (the default) the two are independent.

## Printer lights

The lab's own colour control, in **points** of 1/12 stop — the increment a lab technician actually works in. Raising a light puts more of that colour through the negative, and a negative is inverted, so **+R prints cyaner, not redder**. Range −12 … +12 points per channel.

## Developer

| control | range | what it does |
|---|---|---|
| **Grade** | 0.5 … 2.0 × | The paper's contrast, pivoting about mid-grey. This is grade in the darkroom sense — raising it hardens the paper. |
| **R / G / B** | 0.5 … 2.0 × | The same per layer, multiplying with Grade. |
| **Exhaustion** | 0 … 100 % | Tired chemistry. A spent developer stops building density where density is hardest won, which on a print is the shadows — so the blacks go grey and muddy while the midtone holds exactly where it was. It is not a contrast slider; a contrast slider moves both ends. |

## Preflash

Fogging the paper with a brief, even exposure *before* the image is projected onto it — the classic darkroom trick for holding highlights. It lifts the paper's least-exposed areas off the toe, so highlight detail that would have printed as blank paper survives. It costs a little highlight contrast, which is the trade you make knowingly.

| control | range | what it does |
|---|---|---|
| **Amount** | 0 … 8 % | The size of the flash, as a percentage of a mid-grey exposure. A few per cent is already a lot. |
| **Yellow** | −1 … +1 EV | Filtration on the **flash only**, not on the printing light. More yellow removes blue from it. |
| **Magenta** | −1 … +1 EV | The same, removing green. |

## Scan balance

Shown instead of the printer lights when the output is set to **Scan**: a per-channel offset on the scan, ±0.15. Zero is neutral by construction rather than by convention — it is the value at which the chain's own mid-grey anchor comes back exactly neutral.

---

## Viewing

The print as an object in a room, rather than as a file. This is the one stage in the chain that is not photochemical, and it is deliberately a stage of its own rather than three more sliders under Print — because it happens *after* everything else, and because you will want to switch it off and on.

| control | range | what it does |
|---|---|---|
| **Glare** | 0 … 6 % | How much of the room the paper's surface reflects straight back at you. It is why a print's blacks are never as black as the paper could manage. 1 % is a glossy print in a good room; 4 % is a matte one under bright light. |
| **Surface** | 0 (glossy) … 1 (matte) | A matte surface scatters the room evenly, so its veil is flat. A glossy one also returns a soft image of the print's own bright areas, which reads as a bloom around the highlights rather than an even wash. |
| **Spread** | 0.2 … 10 %h | How wide that glossy bloom is, as a percentage of frame height. |

Glare only ever *adds* light, so it lifts the shadows and leaves white exactly where it was.
