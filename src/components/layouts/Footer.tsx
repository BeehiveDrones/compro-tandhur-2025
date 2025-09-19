"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#3E5641] text-white text-sm md:text-base pt-6 pb-4 overflow-x-hidden w-full">
      <div className="w-full max-w-full px-3 md:px-6 lg:px-10 xl:px-16 2xl:px-24 flex flex-col gap-4 md:gap-6">
        {/* Navigasi atas + Sosial media */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 border-b border-white/40 pb-3">
          {/* Menu */}
          <div className="flex flex-wrap gap-4 md:gap-6 font-semibold justify-center md:justify-start">
            <Link
              href="/consult-with-us"
              className="hover:text-gray-300 transition"
            >
              Consult With Us
            </Link>
          </div>

          {/* Sosial media */}
          <div className="flex gap-4 text-xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/tandhur.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Instagram size={22} className="md:w-6 md:h-6" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.youtube.com/watch?v=FWE1epVsX5M"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Youtube size={22} className="md:w-6 md:h-6" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.tiktok.com/@tandhur.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path d="M12.7 2h3.1c.2 1.4.8 2.6 1.7 3.6 1 1.1 2.2 1.7 3.6 1.9v3.2c-1.3 0-2.5-.3-3.6-.9v7.7c0 2.1-.7 3.8-2.2 5.1-1.5 1.3-3.2 1.9-5.3 1.7-1.9-.1-3.6-1-4.8-2.5-1.3-1.5-1.8-3.2-1.8-5.2 0-2.1.6-3.8 1.9-5.1 1.2-1.3 2.9-2 4.9-2 .4 0 .8 0 1.2.1v3.3c-.3-.1-.6-.1-.9-.1-1 .1-1.9.5-2.5 1.2-.6.7-1 1.5-.9 2.5 0 1 .3 1.8 1 2.5.6.7 1.5 1.1 2.5 1.2 1 .1 1.9-.2 2.6-.9.7-.6 1-1.5 1-2.5V2z" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Navigasi kebijakan */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 md:gap-3 lg:gap-4 text-[11px] md:text-sm text-center lg:text-left">
          {["TANDHUR", "Use of Cookies", "Terms of Use", "Business Information", "Cookie Preferences"].map((item, idx) => (
            <Link
              key={idx}
              href="#"
              className="hover:text-gray-300 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Konten utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-4 text-center md:text-left items-center">
          {/* Logo kiri */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center order-1 lg:order-1"
          >
            <Image
              src="/AllLogo/9.png"
              alt="Lumbung Muncul Logo"
              width={130}
              height={130}
              className="object-contain w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            />
          </motion.div>

          {/* About Us */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start order-2 lg:order-2">
            <p className="font-semibold text-base md:text-lg mb-2">About Us</p>
            <p className="leading-relaxed text-sm md:text-base max-w-full text-center md:text-left">
              TANDHUR, one of the flagship products of PT Lumbung Muncul
              Sejahtera, is a user-friendly WebApp-based ERP equipped with
              dynamic machine learning for recording and monitoring agricultural,
              village, and fisheries data, as well as spatial analysis.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-center md:items-start text-sm md:text-base order-3 lg:order-3">
            <p className="font-semibold mb-2">Contacts</p>
            <div className="space-y-1 text-center md:text-left">
              <p>Email marketing@lumbungmuncul.com</p>
              <p>Whatsapp +62 818-999-771</p>
              <p>Jl. Kalireso No.8, Yogyakarta 55582.</p>
            </div>
          </div>

          {/* Logo kanan */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex justify-center items-center order-4 lg:order-5 md:ml-20"
          >
            <Link
              href="https://compro-lumbung-2025.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/AllLogo/8.png"
                alt="Tandhur"
                width={80}
                height={80}
                className="object-contain w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 hover:opacity-90 transition"
              />
            </Link>
          </motion.div>
        </div>

        {/* Copyright */}
        <p className="text-center text-[11px] md:text-sm border-t border-white/20 pt-3">
          Copyright © 2025 TANDHUR. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
