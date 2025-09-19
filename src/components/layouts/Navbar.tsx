"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md shadow-gray-300/50 py-3 md:py-4 lg:py-6 px-3 md:px-4 lg:px-6 flex justify-between items-center z-50">
      {/* Kiri: tombol hamburger (mobile only) */}
      <button type="button" className="md:hidden text-gray-700 flex-shrink-0" onClick={onMenuClick} aria-label="Open Menu">
        <Menu size={24} />
      </button>

      {/* Tengah: Logo + link */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 lg:gap-7 mx-auto">
        <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold text-black font-josefin-sans whitespace-nowrap cursor-pointer">
          TANDHUR
        </Link>
        <Link href="/consult-with-us" className="text-xs md:text-sm underline text-gray-700 whitespace-nowrap">
          Consult With Us
        </Link>
      </div>

      {/* Placeholder kanan biar logo tetap center */}
      <div className="w-6 md:w-0 flex-shrink-0" />
    </nav>
  );
}
