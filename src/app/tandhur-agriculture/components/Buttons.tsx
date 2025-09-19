"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Buttons() {
  const buttons = [
    {
      href: "/tandhur-agriculture",
      img: "/logos/tandhur-agri.png",
      alt: "Agriculture",
      label: "TANDHURAgriculture",
      primary: true,
    },
    {
      href: "/tandhur-desa",
      img: "/logos/tandhur-desa.png",
      alt: "Desa",
      label: "TANDHURDesa",
    },
    {
      href: "/tandhur-fisheries",
      img: "/logos/tandhur-fish.png",
      alt: "Fisheries",
      label: "TANDHURFisheries",
    },
    {
      href: "/tandhur-spatial",
      img: "/logos/tandhur-spatial.png",
      alt: "Spatial",
      label: "TANDHURSpatial",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.15,
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 justify-center py-6 px-4"
    >
      {buttons.map((btn, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={btn.href}
            className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold border-2 border-[#7DAB18] text-sm md:text-base flex-1 md:flex-initial justify-center min-w-[200px] max-w-[300px] group ${
              btn.primary
                ? "bg-[#7DAB18] text-white hover:bg-green-700"
                : "text-black hover:bg-[#7DAB18] hover:text-white"
            }`}
          >
            <Image
              src={btn.img}
              alt={btn.alt}
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="truncate font-josefin-sans">{btn.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
