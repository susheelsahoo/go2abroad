"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWebsiteSettings } from "./WebsiteSettingsProvider";

export function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname();
  const { settings, assetUrl } = useWebsiteSettings();
  return (
    <aside className="sidebar">
      <div className="logo">
        {settings.logoLightUrl || settings.logoUrl ? (
          <img
            className="admin-logo-image"
            src={assetUrl(settings.logoLightUrl || settings.logoUrl)}
            alt={`${settings.siteName || "Go2Abroad"} logo`}
          />
        ) : (
          <>
            G<span>2</span>A
          </>
        )}
      </div>
      <small>WORKSPACE</small>
      <nav>
        <Link className={pathname === "/" ? "active" : ""} href="/">
          ⌂ Overview
        </Link>
        <Link
          className={pathname.startsWith("/leads") ? "active" : ""}
          href="/leads"
        >
          ◉ Leads
        </Link>
        <Link
          className={pathname.startsWith("/students") ? "active" : ""}
          href="/students"
        >
          ◎ Students
        </Link>
        <Link
          className={pathname.startsWith("/universities") ? "active" : ""}
          href="/universities"
        >
          ◇ Universities
        </Link>
        <Link
          className={pathname.startsWith("/courses") ? "active" : ""}
          href="/courses"
        >
          ▤ Courses
        </Link>

        <Link
          className={pathname.startsWith("/pages") ? "active" : ""}
          href="/pages"
        >
          ▧ Page builder
        </Link>
        <Link
          className={pathname.startsWith("/settings") ? "active" : ""}
          href="/settings"
        >
          ⚙ Website settings
        </Link>
      </nav>
      <button onClick={onLogout}>↪ Sign out</button>
    </aside>
  );
}
