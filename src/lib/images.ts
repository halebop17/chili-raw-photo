// The pages ported from the design arrive as markup, so their <img> tags carry
// no size. This adds each picture's real width and height, which lets the
// browser hold its space before it loads instead of moving the page under the
// reader, and loads every picture after the first only as it comes into view.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sizes = new Map<string, { width: number; height: number } | null>();

async function size(src: string) {
  if (!sizes.has(src)) {
    const file = path.join(process.cwd(), "public", decodeURI(src));
    const meta = fs.existsSync(file) ? await sharp(file).metadata() : null;
    sizes.set(src, meta?.width && meta?.height ? { width: meta.width, height: meta.height } : null);
  }
  return sizes.get(src);
}

export async function sizeImages(html: string) {
  let out = "";
  let at = 0;
  let first = true;
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    let extra = "";
    const src = tag.match(/\ssrc="(\/[^"]+)"/)?.[1];
    const dim = src && !/\swidth=/.test(tag) ? await size(src) : null;
    if (dim) extra += ` width="${dim.width}" height="${dim.height}"`;
    if (!/\sloading=/.test(tag)) extra += first ? ` fetchpriority="high"` : ` loading="lazy" decoding="async"`;
    first = false;
    out += html.slice(at, m.index) + tag.replace(/^<img/, "<img" + extra);
    at = m.index! + tag.length;
  }
  return out + html.slice(at);
}
