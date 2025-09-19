// import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  const youtubeVideoId = "FWE1epVsX5M";

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

      {/* Tombol
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="mb-10">
        <Link href="/agriculture">
          <button className="bg-[#3E5641] text-white px-6 py-2 rounded hover:bg-green-800 transition mb-10">Learn More About TANDHUR</button>
        </Link>
      </motion.div> */}

      {/* Video Section */}
      <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-32">
        <div className="relative w-full overflow-hidden rounded-lg aspect-video shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&autoplay=1&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
