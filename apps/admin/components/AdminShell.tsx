"use client";
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

export function AdminShell({ children, title, onLogout }: { children: React.ReactNode; title?: string; onLogout: () => void }) { return <main className="dashboard"><AdminSidebar onLogout={onLogout} /><section className="content"><AdminHeader title={title} />{children}</section></main>; }
