"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DesaPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 overflow-x-hidden w-full">
      {/* Header Image */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12">
          <Image
            src="/hero/3.png"
            alt="Desa"
            width={1200}
            height={300}
            className="w-full h-48 md:h-64 lg:h-80 xl:h-[320px] object-cover rounded-md transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </motion.div>

      {/* Title & Description */}
      <motion.div
        className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F3D34A] font-josefin-sans flex items-center gap-2 md:gap-3 mb-3 md:mb-5 flex-wrap">
          <Image
            src="/AllLogo/17.png"
            alt="Spatial Icon"
            width={60}
            height={60}
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 "
          />
          <span className="break-words">TANDHURDesa</span>
        </h2>
        <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-black font-nunito-sans mb-2">
          Village Administrative Data Management
        </h3>
        <p className="text-gray-700 max-w-full mb-4 md:mb-6 font-nunito-sans text-xs md:text-sm lg:text-base leading-relaxed">
          TANDHURDesa is an integrated technology system designed to monitor village conditions and community well-being by combining remote sensing technology with active community participation.
        </p>
        <motion.a
          href="/tandhur-desa"
          className="bg-[#F3D34A] text-black w-fit px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 
             rounded-md hover:bg-yellow-600 font-nunito-sans flex items-center 
             justify-center gap-2 text-xs md:text-sm lg:text-base transition-transform duration-300 hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          Learn More
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </motion.a>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-8 w-full">
          {[
            {
              title: "Village Administration Panel",
              desc: "Provides an intuitive dashboard for village officials to manage data, programs, and population information more efficiently.",
            },
            {
              title: "Residents Voice Platform",
              desc: "Enables direct community engagement, allowing residents to report issues, provide feedback, and contribute to village development planning.",
            },
            {
              title: "Village Spatial Information (VSI)",
              desc: "Offers accurate geospatial data to support infrastructure planning, resource allocation, and environmental management at the village level.",
            },
            {
              title: "Integrated Monitoring System",
              desc: "Combines remote sensing technology and community participation to continuously monitor village conditions in real time.",
            },
            {
              title: "Data-Driven Decision Support",
              desc: "Supports evidence-based policymaking by delivering visualized, structured data for more responsive and transparent governance.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-[#F3D34A] p-4 md:p-5 rounded-lg shadow-md min-h-[160px] md:min-h-[180px] flex flex-col justify-center items-center text-center cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-black mb-2 font-josefin-sans">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-black font-nunito-sans leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
