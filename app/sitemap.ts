import type { MetadataRoute } from "next";
import { site, nav } from "./lib/site";

/**
 * Emits /sitemap.xml. Home plus every nav route, derived from the same
 * `nav.links` source so new routes appear automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: site.url,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  };

  const routes: MetadataRoute.Sitemap = nav.links.map((link) => ({
    url: `${site.url}${link.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [home, ...routes];
}
