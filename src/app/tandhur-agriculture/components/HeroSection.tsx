// components/HeroSection.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 md:px-8 lg:ml-20 py-8 w-full max-w-7xl mx-auto"
    >
      {/* Logo + Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-2"
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Image
            src="/logos/tandhur-agri.png"
            alt="TANDHUR Logo"
            width={80}
            height={80}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
        </motion.div>
        <h1 className="text-xl md:text-2xl font-bold text-[#7DAB18] font-josefin-sans">
          TANDHURAgriculture
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-gray-600 mt-2 text-sm font-nunito-sans"
      >
        TANDHURAgri is an agricultural activity recording and monitoring web-application
        designed to help stakeholders in optimizing analysis, prediction, and decision-making.
        It also acts as a bridge to connect farmers with government support programs or
        financial resources (KUR/ People’s Business Credit).
      </motion.p>

      {/* Button */}
      <motion.a
        href="https://agri.tandhur.id/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="mt-3 inline-flex items-center gap-1.5 bg-[#7DAB18] text-white 
             px-3 py-1.5 rounded-md w-fit
             hover:bg-green-700 transition text-md hover:shadow-md group font-nunito-sans"
      >
        Free Trial
        <ChevronRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </motion.a>

      {/* Subtitle */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="text-xl md:text-2xl font-bold text-[#7DAB18] mt-5 md:text-left font-josefin-sans"
      >
        Agricultural Activity Monitoring
      </motion.h1>
    </motion.section>
  );
}
