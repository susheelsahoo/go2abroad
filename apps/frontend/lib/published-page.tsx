import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PageRenderer,
  type PageDocument,
  assetUrl,
} from "@go2abroad/page-builder";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
export const API_BASE = (
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000"
).replace(/\/$/, "");
export const ASSET_BASE = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"
).replace(/\/$/, "");
export const SITE_BASE =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
// Deduplicate metadata/render requests without caching drafts or delaying unpublishing.
export const loadPublished = cache(
  async (slug: string): Promise<PageDocument> => {
    const response = await fetch(
      API_BASE + "/api/public/page?slug=" + encodeURIComponent(slug),
      { cache: "no-store" },
    );
    if (response.status === 404) notFound();
    if (!response.ok)
      throw new Error("The website content service is unavailable.");
    return response.json();
  },
);
export async function pageMetadata(slug: string): Promise<Metadata> {
  const doc = await loadPublished(slug);
  const canonical =
    doc.canonicalUrl ||
    new URL(slug === "home" ? "/" : "/" + slug, SITE_BASE).href;
  return {
    title: doc.metaTitle || doc.title,
    description: doc.metaDescription,
    metadataBase: new URL(SITE_BASE),
    alternates: { canonical },
    robots: doc.robots,
    openGraph: {
      title: doc.ogTitle || doc.metaTitle || doc.title,
      description: doc.ogDescription || doc.metaDescription,
      url: canonical,
      images: doc.ogImage ? [{ url: assetUrl(doc.ogImage, ASSET_BASE) }] : [],
    },
  };
}
export async function PublishedPage({ slug }: { slug: string }) {
  const document = await loadPublished(slug);
  const contentDocument = {
    ...document,
    sections: document.sections.filter(
      (section) => section.type !== "header" && section.type !== "footer",
    ),
  };
  return (
    <main>
      <SiteHeader />
      <PageRenderer document={contentDocument} assetBase={ASSET_BASE} />
      <SiteFooter />
    </main>
  );
}
