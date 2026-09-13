import { PublishedPage, pageMetadata } from "../lib/published-page";
export const dynamic = "force-dynamic";
export const generateMetadata = () => pageMetadata("home");
export default function Home() {
  return <PublishedPage slug="home" />;
}
