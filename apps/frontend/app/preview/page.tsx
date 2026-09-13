import { PageRenderer, type PageDocument } from "@go2abroad/page-builder";
import { API_BASE, ASSET_BASE } from "../../lib/published-page";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Private draft preview",
  robots: "noindex,nofollow",
  referrer: "no-referrer",
};
export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  if (!token || token.length > 4096)
    return (
      <p className="p-12">Open a secure preview from the admin Page Builder.</p>
    );
  const response = await fetch(API_BASE + "/api/public/preview", {
    headers: { Authorization: "Bearer " + token },
    cache: "no-store",
  });
  if (!response.ok)
    return (
      <p className="p-12">
        This preview has expired or is unavailable. Open a new preview from the
        admin.
      </p>
    );
  const doc: PageDocument = await response.json();
  const contentDocument = {
    ...doc,
    sections: doc.sections.filter(
      (section) => section.type !== "header" && section.type !== "footer",
    ),
  };
  return (
    <main>
      <div className="bg-amber-50 p-3 text-center text-sm text-amber-900">
        Private draft preview · not published · expires in 15 minutes
      </div>
      <SiteHeader />
      <PageRenderer document={contentDocument} assetBase={ASSET_BASE} />
      <SiteFooter />
    </main>
  );
}
