import type { MetadataRoute } from "next";
import { SITE_BASE } from "../lib/published-page";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/preview"] }, sitemap: new URL("/sitemap.xml", SITE_BASE).href }; }
