"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { useState, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    label: "English",
    flag: "/bendera/31.png",
  });

  const languages = [
    { code: "en", label: "English", flag: "/bendera/31.png" },
    { code: "id", label: "Indonesia", flag: "/bendera/32.png" },
    { code: "cn", label: "中文", flag: "/bendera/33.png" },
    { code: "jp", label: "日本語", flag: "/bendera/34.png" },
  ];

  const handleSelectLang = (
    lang: SetStateAction<{ code: string; label: string; flag: string }>
  ) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  // ✅ dropdown Sign In langsung pakai link fixed
  const signInOptions = [
    { label: "TANDHURAgriculture", href: "https://agri.tandhur.id/login?callbackUrl=%2F" },
    { label: "TANDHURDesa", href: "https://tandhur-desa-tamanmartani.beehivedrones.com/" },
    { label: "TANDHURFisheris", href: "https://fisheries.tandhur.id/" },
    { label: "TANDHURSpatial", href: "https://spatial.tandhur.id/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md shadow-gray-300/50 py-3 md:py-4 lg:py-6 px-3 md:px-4 lg:px-6 flex items-center z-50">
      {/* Kiri: tombol hamburger (mobile only) */}
      <button
        type="button"
        className="md:hidden text-gray-700 flex-shrink-0"
        onClick={onMenuClick}
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      {/* Tengah: Logo + Language */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto ml-155">
        <Link
          href="/"
          className="text-lg md:text-xl lg:text-2xl font-bold text-black font-josefin-sans whitespace-nowrap cursor-pointer"
        >
          TANDHUR
        </Link>

        {/* Language dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-white text-[#3E5641] text-xs sm:text-sm lg:text-base hover:bg-gray-100 transition font-nunito-sans"
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            <Image
              src={selectedLang.flag}
              alt={selectedLang.label}
              width={20}
              height={20}
              className="rounded-full"
            />
            {selectedLang.code.toUpperCase()}
            <ChevronDown size={14} />
          </button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50 font-nunito-sans"
              >
                <ul className="py-1 text-sm">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleSelectLang(lang)}
                        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[#3E5641] hover:text-white text-left transition font-nunito-sans"
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.label}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Kanan: Contact Us + Sign In */}
      <div className="ml-auto flex items-center gap-4 relative">
        {/* Contact Us link */}
        <Link
          href="/contact-us"
          className="text-xs md:text-sm underline text-gray-700 whitespace-nowrap font-nunito-sans"
        >
          Contact Us
        </Link>

        {/* Sign In dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.5 } }}
            className="bg-[#3E5641] text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-nunito-sans"
            onClick={() => setIsSignInOpen(!isSignInOpen)}
          >
            Sign In
            <ChevronDown size={14} />
          </motion.button>

          <AnimatePresence>
            {isSignInOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-50 font-nunito-sans"
              >
                <ul className="py-1 text-sm">
                  {signInOptions.map((opt) => (
                    <li key={opt.label}>
                      <Link
                        href={opt.href}
                        target="_blank"
                        className="block px-3 py-2 hover:bg-[#3E5641] hover:text-white transition font-nunito-sans"
                      >
                        {opt.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
