import type { Metadata } from "next";
import "./cms.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@go2abroad/page-builder/styles.css";

export const metadata: Metadata = {
  title: "Go2Abroad",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/legacy/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/legacy/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/legacy/css/mousecursor.css" />
        <link rel="stylesheet" href="/legacy/css/magnific-popup.css" />
        <link rel="stylesheet" href="/legacy/css/slicknav.min.css" />
        <link rel="stylesheet" href="/legacy/css/aos.css" />
        <link rel="stylesheet" href="/legacy/css/custom.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
