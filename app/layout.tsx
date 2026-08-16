import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Go2Abroad | Connecting Dreams",
  description: "Your trusted guide to studying abroad.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
