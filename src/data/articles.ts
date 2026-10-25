// Every article, newest first. The index, each article's header and the
// "more articles" row under it all read this list, so a new article is one
// entry here and one page in src/pages/articles/.
export type Article = {
  slug: string;
  kicker: string;     // the category, shown in mono caps
  title: string;
  blurb: string;
  date: string;       // ISO
  image: string;      // the card picture, under /public
  imageAlt: string;
  fit?: "contain";  // a diagram, shown whole rather than cropped
};

export const articles: Article[] = [
  { slug: "lightroom-alternatives-mac", kicker: "Guide", date: "2026-10-25",
    title: "Lightroom alternatives for the Mac, without a subscription",
    blurb: "What to look for when you leave Lightroom, what you lose and keep, and the questions worth asking any RAW editor before you move a library into it.",
    image: "/img/hero-home.webp", imageAlt: "Chili RAW's grid of photos on a Mac" },
  { slug: "cull-photos-faster", kicker: "Workflow", date: "2026-10-25",
    title: "How to cull a thousand photos in an evening",
    blurb: "A culling routine for big shoots: two passes, the keyboard, bursts collapsed into one tile, and focus checked before you open anything.",
    image: "/img/culling-full.webp", imageAlt: "A folder of photos being rated and flagged in the grid" },
  { slug: "film-emulation-vs-luts", kicker: "Film", date: "2026-10-25",
    title: "Film emulation: why a LUT is not a film look",
    blurb: "A film look is made by a negative, a print and the light between them. What each stage does, and why a single lookup table cannot hold all of it.",
    image: "/img/filmlabor.webp", imageAlt: "Film Labor open on a photograph, with the film stock and print chain beside it" },
  { slug: "portra-400-look", kicker: "Film", date: "2026-10-25",
    title: "How to get the Portra 400 look from a RAW file",
    blurb: "What Portra 400 actually does to skin, greens and highlights, how to shoot for it, and how to get it from a RAW file without a preset that fights you.",
    image: "/img/fl-stocks.webp", imageAlt: "A list of colour negative film stocks in Film Labor" },
  { slug: "halation", kicker: "Film", date: "2026-10-25",
    title: "Halation: the red glow around highlights on film",
    blurb: "Why a street light on film has a warm halo and the same light on a sensor does not, and how to add it so it looks like film and not a filter.",
    image: "/img/fl-halation.jpg", imageAlt: "A street at night under a railway bridge, with a warm glow around the lit signs" },
  { slug: "recover-blown-highlights", kicker: "Editing", date: "2026-10-25",
    title: "How to recover blown highlights in a RAW file",
    blurb: "What a RAW file keeps above white, how much of it can come back, and why the tone curve decides whether a bright sky rolls off or turns neon.",
    image: "/img/hero-tokyo.jpg", imageAlt: "Tokyo at dusk with Mount Fuji behind, open in Develop" },
  { slug: "raw-vs-jpeg", kicker: "Basics", date: "2026-10-25",
    title: "RAW vs JPEG: what you actually gain by shooting RAW",
    blurb: "White balance, highlights, shadows and noise: where a RAW file pulls ahead of a JPEG, where it does not, and whether RAW+JPEG is worth the card space.",
    image: "/img/versions-full-2.webp", imageAlt: "A RAW photo being edited in Chili RAW" },
  { slug: "xmp-sidecar-files", kicker: "Library", date: "2026-10-25",
    title: "XMP sidecar files: keeping your edits out of a database",
    blurb: "What a sidecar file is, why it matters when you change editors, and how to set up a photo library that does not depend on any one app.",
    image: "/img/catalog-full.webp", imageAlt: "The catalog view, showing folders on disk in the sidebar" },
  { slug: "geotag-photos-mac", kicker: "How to", date: "2026-10-25",
    title: "How to geotag photos on a Mac",
    blurb: "Three ways to put location on photos from a camera without GPS, which one to use when, and what gets written into the file.",
    image: "/img/geo-full-2.webp", imageAlt: "Photos placed on a map in the Geo Tag view" },
  { slug: "remove-sensor-dust", kicker: "How to", date: "2026-10-25",
    title: "How to find and remove sensor dust spots from your photos",
    blurb: "How to see dust you cannot see, why it is worst at f/16 against a sky, and how to clean a whole shoot without healing every frame by hand.",
    image: "/img/repair-heal-2.webp", imageAlt: "Dust spots being healed in the Repair tab" },
  { slug: "whats-next", kicker: "Roadmap", date: "2026-09-26",
    title: "What's next for Chili RAW",
    blurb: "Chili RAW for iPad and iPhone, syncing through the cloud storage you already have, tethered shooting, and where the AI tools are going.",
    image: "/assets/hero-macbook-home.png", imageAlt: "Chili RAW open on a MacBook Pro" },
  { slug: "compressed-dng", kicker: "Compressed DNG", date: "2026-09-19",
    title: "Chili RAW fully supports compressed DNG files, including the ones from DxO",
    blurb: "Compressed DNG files have been awkward for years. What JPEG XL does, why some software decodes them wrong, and how these files open properly here.",
    image: "/img/compressed-dng.png", imageAlt: "A bar showing how much of a compressed DNG file is image data", fit: "contain" },
  { slug: "why-a-new-raw-developer", kicker: "Introducing", date: "2026-09-13",
    title: "Why we built a new type of RAW developer toolbox for photographers",
    blurb: "A folder of twelve hundred frames, an afternoon gone before anyone reached the good ones, and a monthly fee for the privilege.",
    image: "/og/why-a-new-raw-developer.jpg", imageAlt: "A city skyline at dusk open in Develop" },
];

export const bySlug = (slug: string) => articles.find((a) => a.slug === slug)!;

export const longDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
