// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// One canonical host: www. The apex redirects to it.
export default defineConfig({
  site: "https://www.chiliraw.com",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Chili RAW",
      description: "The Chili RAW manual — every control in the app, chapter by chapter.",
      locales: { root: { label: "English", lang: "en-GB" } },
      // The site's own 404 page, in the site's design, replaces the manual's.
      disable404Route: true,
      // The manual is generated from github/manual.md in the app repo. Every
      // page under here is build output: edit the manual, not these files.
      customCss: ["./src/styles/manual.css"],
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/halebop17/chili-raw-photo" }],
      sidebar: [{ label: "The manual", items: [{ autogenerate: { directory: "manual" } }] }],
      // A short block at the foot of the sidebar, instead of a full footer
      // under the text — the manual is for reading, not for navigating away.
      // The head adds the share picture and the structured data the marketing
      // pages carry.
      components: { Sidebar: "./src/components/DocsSidebar.astro", Head: "./src/components/DocsHead.astro" },
      pagination: true,
      lastUpdated: false,
      credits: false,
    }),
    sitemap(),
  ],
});
