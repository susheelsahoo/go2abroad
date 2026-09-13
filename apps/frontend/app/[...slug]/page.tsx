import { PublishedPage, pageMetadata } from "../../lib/published-page";
type Props = { params: Promise<{ slug: string[] }> };
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props) {
  return pageMetadata((await params).slug.join("/"));
}
export default async function Page({ params }: Props) {
  return <PublishedPage slug={(await params).slug.join("/")} />;
}
