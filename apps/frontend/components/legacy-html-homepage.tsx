import { readFileSync } from "node:fs";
import path from "node:path";
import LegacyScripts from "./legacy-scripts";

function homepageMarkup() {
  const candidates = [
    path.join(process.cwd(), "html/index.html"),
    path.join(process.cwd(), "../../html/index.html"),
  ];
  const file = candidates.find((candidate) => {
    try {
      readFileSync(candidate);
      return true;
    } catch {
      return false;
    }
  });
  if (!file) throw new Error("The legacy homepage source file is missing.");
  const source = readFileSync(file, "utf8");
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/(src|href)="(?:\.\.\/)?(css|images|js)\//g, '$1="/legacy/$2/')
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="([a-z0-9-]+)\.html([#"])/gi, 'href="/$1$2');
}

export default function LegacyHtmlHomepage() {
  return (
    <>
      <link rel="stylesheet" href="/legacy/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/legacy/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/legacy/css/mousecursor.css" />
      <link rel="stylesheet" href="/legacy/css/magnific-popup.css" />
      <link rel="stylesheet" href="/legacy/css/slicknav.min.css" />
      <link rel="stylesheet" href="/legacy/css/aos.css" />
      <link rel="stylesheet" href="/legacy/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..900;1,200..900&display=swap"
      />
      <link rel="stylesheet" href="/legacy/css/custom.css" />
      <div dangerouslySetInnerHTML={{ __html: homepageMarkup() }} />
      <LegacyScripts />
    </>
  );
}
