import type { MetadataRoute } from "next";
import { API_BASE, SITE_BASE } from "../lib/published-page";
export const dynamic = "force-dynamic";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(API_BASE + "/api/public/pages", { cache: "no-store" });
  if (!response.ok) throw new Error("Cannot load published page index.");
  const pages: { publishedSlug: string }[] = await response.json();
  return pages.map(({ publishedSlug }) => ({ url: new URL(publishedSlug === "home" ? "/" : "/" + publishedSlug, SITE_BASE).href }));
}
