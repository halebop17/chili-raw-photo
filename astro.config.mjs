// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// One canonical host. www, not the apex — GitHub recommends it, and unlike an
// apex it is a real CNAME, so Pages can move its IPs without touching DNS.
export default defineConfig({
  site: "https://www.chiliraw.com",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Chili RAW",
      description: "The Chili RAW manual — every control in the app, chapter by chapter.",
      // The manual is generated from github/manual.md in the app repo. Every
      // page under here is build output: edit the manual, not these files.
      customCss: ["./src/styles/manual.css"],
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/halebop17/chili-raw-photo" }],
      sidebar: [{ label: "The manual", items: [{ autogenerate: { directory: "manual" } }] }],
      pagination: true,
      lastUpdated: false,
      credits: false,
    }),
    sitemap(),
  ],
});
