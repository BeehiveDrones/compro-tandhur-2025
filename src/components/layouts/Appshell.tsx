"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Daftar halaman tanpa sidebar (cek prefix biar fleksibel)
  const noSidebarRoutes = ["/consult-with-us", "/tandhur-agri", "/tandhur-spatial", "/tandhur-desa", "/tandhur-fisher"];

  // Sidebar hanya muncul kalau bukan halaman di atas
  const showSidebar = !noSidebarRoutes.some((route) => pathname.startsWith(route));

  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Navbar onMenuClick={() => setIsOpen(true)} />

      {/* MAIN WRAPPER (Navbar height offset) */}
      <div className="flex flex-1 pt-14">
        {showSidebar && <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />}

        {/* CONTENT */}
        <main className="flex-1 p-4 md:p-6 mt-10">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
