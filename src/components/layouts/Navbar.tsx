"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { useState, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [isLangOpen, setIsLangOpen] = useState(false);

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

      {/* Tengah: Logo + link + language */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto">
        <Link
          href="/"
          className="text-lg md:text-xl lg:text-2xl font-bold text-black font-josefin-sans whitespace-nowrap cursor-pointer"
        >
          TANDHUR
        </Link>
        <Link
          href="/consult-with-us"
          className="text-xs md:text-sm underline text-gray-700 whitespace-nowrap"
        >
          Consult With Us
        </Link>

        {/* Language dropdown di sebelah Consult With Us */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-white text-[#3E5641] text-xs sm:text-sm lg:text-base hover:bg-gray-100 transition"
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
                className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50"
              >
                <ul className="py-1 text-sm">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => handleSelectLang(lang)}
                        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-left"
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
    </nav>
  );
}
