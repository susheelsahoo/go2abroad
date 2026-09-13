"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="logo">
        G<span>2</span>A
      </div>
      <small>WORKSPACE</small>
      <nav>
        <Link className={pathname === "/" ? "active" : ""} href="/">
          ⌂ Overview
        </Link>
        <Link href="#">
          ◉ Leads <b>24</b>
        </Link>
        <Link href="#">◎ Students</Link>
        <Link href="#">▣ Applications</Link>
        <Link href="#">◇ Universities</Link>
        <Link href="#">▤ Courses</Link>
        <Link href="#">✦ Website content</Link>
        <Link className={pathname.startsWith("/pages") ? "active" : ""} href="/pages">▧ Page builder</Link>
        <Link className={pathname.startsWith("/settings") ? "active" : ""} href="/settings">⚙ Website settings</Link>
      </nav>
      <button onClick={onLogout}>↪ Sign out</button>
    </aside>
  );
}
