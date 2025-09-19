"use client";

import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";

const menus = [
  { name: "TANDHURAgriculture", path: "/agriculture", icon: "/AllLogo/15.png" },
  { name: "TANDHURDesa", path: "/desa", icon: "/AllLogo/17.png" },
  { name: "TANDHURFisheries", path: "/fisher", icon: "/AllLogo/16.png" },
  { name: "TANDHURSpatial", path: "/spatial", icon: "/AllLogo/18.png" },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed md:static 
        top-14 md:top-0 
        left-0 md:mt-10
        h-[calc(100%-56px)] md:h-auto 
        w-64 md:w-72 lg:w-80 
        bg-white px-3 md:px-4 lg:px-6 py-6 md:py-8 
        z-40 transform transition-transform duration-300 overflow-x-hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
>

        {/* Tombol close (mobile only) */}
        <button
          className="absolute top-4 right-4 md:hidden text-gray-700"
          onClick={onClose}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* Menu items */}
        <div className="flex flex-col gap-3 md:gap-4 mt-8 md:mt-0">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              className="flex items-center justify-between border border-[#7DAB18] rounded-md px-3 md:px-4 py-3 font-medium text-green-700 bg-white shadow-sm transition hover:bg-green-50 hover:border-green-700 hover:text-[#7DAB18] w-full max-w-full overflow-hidden"
              onClick={onClose}
            >
              <div className="flex items-center gap-2 md:gap-3 font-josefin-sans font-semibold min-w-0 flex-1">
                <Image src={menu.icon} alt={menu.name} width={20} height={20} className="flex-shrink-0" />
                <span className="text-xs md:text-sm lg:text-base truncate">{menu.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
