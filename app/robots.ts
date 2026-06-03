import type { MetadataRoute } from "next";
import { site } from "./lib/site";

/** Emits /robots.txt — allow everything, point crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
