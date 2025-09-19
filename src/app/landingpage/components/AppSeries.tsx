"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export default function AppSeries() {
  return (
    <section className="py-12 px-4 bg-white text-center overflow-hidden">
      {/* Judul */}
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-bold text-[#3E5641] font-ubuntu mb-4">
        TANDHUR APPS SERIES
      </motion.h2>

      {/* Deskripsi */}
      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-[#3E5641] font-roboto max-w-3xl mx-auto mb-6">
        The TANDHUR Series is a Software as a Service designed to support various sectors, including agriculture, fisheries, and village development, by providing access to accurate and relevant data.
      </motion.p>

      {/* Tombol */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="mb-10">
        <button className="bg-[#3E5641] text-white px-6 py-2 rounded hover:bg-green-800 transition mb-10">Learn More About TANDHUR</button>
      </motion.div>

      {/* Grid Logo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Reusable Logo Item */}
        {[
          {
            src: "/Images/AllLogo/15.png",
            alt: "Tandhur Agriculture",
            text: "Agricultural Activity Monitoring",
            delay: 0.1,
          },
          {
            src: "/Images/AllLogo/17.png",
            alt: "Tandhur Desa",
            text: "Village Administrative Data Management",
            delay: 0.2,
          },
          {
            src: "/Images/AllLogo/18.png",
            alt: "Tandhur Spatial",
            text: "Spatial Data Analysis",
            delay: 0.3,
          },
          {
            src: "/Images/AllLogo/16.png",
            alt: "Tandhur Fisheries",
            text: "Fisheries Monitoring",
            delay: 0.4,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
            viewport={{ once: true }}
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg rounded-xl p-4"
          >
            <Image src={item.src} alt={item.alt} width={120} height={120} className="mx-auto mb-2" />
            <p className="text-[#3E5641] font-ubuntu">{item.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/contact-us" className="bg-[#3E5641] hover:bg-[#2d3f30] text-white px-6 py-3 rounded-lg font-ubuntu text-lg transition-colors">
          Consult with Us
        </Link>
      </div>
    </section>
  );
}
