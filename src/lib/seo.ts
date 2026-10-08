// The structured data (JSON-LD) every page carries. Built from the site's own
// data, so the version and the feature list follow the changelog and the
// features page instead of being a second copy to forget.
import features from "../data/features.json";
import changelog from "../data/changelog.json";

export const SITE = "https://www.chiliraw.com";
export const LANG = "en-GB";
export const DOWNLOAD = "https://github.com/halebop17/chili-raw-photo/releases/latest";
// The share picture for any page that has none of its own: 1200 × 630 JPEG.
export const SHARE_IMAGE = { src: "/og/chiliraw.jpg", width: 1200, height: 630,
  alt: "Chili RAW open on a MacBook Pro, with a neon sign in the editor" };

const abs = (path: string) => new URL(path, SITE).href;
const ID = { org: `${SITE}/#organization`, site: `${SITE}/#website`, app: `${SITE}/#app` };

// Google reads each page on its own, so the publisher is spelled out on every
// page rather than left as a bare reference to the homepage.
const organization = {
  "@type": "Organization",
  "@id": ID.org,
  name: "Chili RAW",
  url: abs("/"),
  logo: { "@type": "ImageObject", url: abs("/logo-512.png"), width: 512, height: 512 },
  sameAs: ["https://github.com/halebop17/chili-raw-photo"],
};

const website = {
  "@type": "WebSite",
  "@id": ID.site,
  url: abs("/"),
  name: "Chili RAW",
  inLanguage: LANG,
  publisher: { "@id": ID.org },
};

const version = changelog.flatMap((p) => p.sections.map((s) => s.version))
  .find((v) => /^\d+\.\d+\.\d+$/.test(v));

/** The app itself. On the homepage, the Pro page and the feature pages. */
export const app = {
  "@type": "SoftwareApplication",
  "@id": ID.app,
  name: "Chili RAW",
  url: abs("/"),
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "Photo editing",
  operatingSystem: "macOS 15 or later",
  processorRequirements: "Apple silicon",
  ...(version ? { softwareVersion: version } : {}),
  downloadUrl: DOWNLOAD,
  image: abs("/logo-512.png"),
  screenshot: abs("/img/hero-home.webp"),
  featureList: features.map((f) => f.title),
  publisher: { "@id": ID.org },
  // No rating and no review until real ones exist.
  offers: [
    { "@type": "Offer", name: "Chili RAW", price: "0", priceCurrency: "USD",
      url: abs("/"), availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Chili RAW Pro", price: "29.00", priceCurrency: "USD",
      url: abs("/pro/"), availability: "https://schema.org/InStock" },
  ],
};

const SECTIONS: Record<string, string> = {
  features: "Features", manual: "Manual", articles: "Articles", changelog: "Changelog",
};

/** Home › Section › Page, from the path. The homepage has none. */
function breadcrumb(path: string, name: string, url: string) {
  const segs = path.split("/").filter(Boolean);
  if (!segs.length) return null;
  const crumbs = [{ name: "Home", url: abs("/") }];
  if (SECTIONS[segs[0]] && segs.length > 1) crumbs.push({ name: SECTIONS[segs[0]], url: abs(`/${segs[0]}/`) });
  crumbs.push({ name, url });
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
  };
}

interface PageLd {
  path: string;
  /** The page's own name: the breadcrumb and the WebPage name. */
  name: string;
  description: string;
  image: string;
  /** "WebPage" unless the page is something more specific. */
  pageType?: string;
  /** An article: TechArticle for the manual, BlogPosting for the blog. */
  article?: { type: "TechArticle" | "BlogPosting"; headline: string; published?: string };
  /** The page is about the app: carries the SoftwareApplication node. */
  aboutApp?: boolean;
  /** A page kept out of search (the 404) is not placed in the site's hierarchy. */
  noindex?: boolean;
}

/** One JSON-LD graph for a page, escaped for a <script> element. */
export function pageGraph(p: PageLd) {
  const url = abs(p.path);
  const crumbs = p.noindex ? null : breadcrumb(p.path, p.name, url);
  const page = {
    "@type": p.pageType ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: p.name,
    description: p.description,
    inLanguage: LANG,
    isPartOf: { "@id": ID.site },
    publisher: { "@id": ID.org },
    primaryImageOfPage: { "@type": "ImageObject", url: abs(p.image) },
    ...(crumbs ? { breadcrumb: { "@id": crumbs["@id"] } } : {}),
    ...(p.aboutApp ? { about: { "@id": ID.app } } : {}),
  };
  const article = p.article && {
    "@type": p.article.type,
    "@id": `${url}#article`,
    headline: p.article.headline,
    description: p.description,
    image: abs(p.image),
    inLanguage: LANG,
    ...(p.article.published ? { datePublished: p.article.published } : {}),
    author: { "@id": ID.org },
    publisher: { "@id": ID.org },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
  const graph = [organization, website, page, crumbs, article, p.aboutApp ? app : null].filter(Boolean);
  // "<" escaped, so no text inside the data can close the <script> early.
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}
