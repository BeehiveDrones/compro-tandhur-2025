"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function SpatialPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const cards = [
    {
      title: "An Open and Well-Structured Process",
      desc: "TANDHURSpatial ensures transparency and consistency through an open, step-by-step geospatial data analysis workflow.",
    },
    {
      title: "Automated & Modular Quotation System",
      desc: "Users can easily generate service quotations to their specific needs through an automated and modular pricing system.",
    },
    {
      title: "Actionable Insights for Smarter Decisions",
      desc: "The platform provides practical, data-driven insights that help stakeholders make informed and strategic decisions.",
      span: true,
    },
    {
      title: "Integrated Decision Analytics / MCDA",
      desc: "TANDHURSpatial supports complex evaluations by integrating advanced decision analysis tools, including MCDA (Multi-Criteria Decision Analysis) methods.",
      span: true,
    },
    {
      title: "User-Centric and Flexible Data Analysis",
      desc: "With a focus on user needs, the platform offers customizable and adaptable data analysis to fit diverse geospatial challenges.",
      span: true,
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8 overflow-x-hidden w-full">
      {/* Header */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-48 md:h-64 lg:h-80 xl:h-[320px]"
          >
            <Image
              src="/hero/4.png"
              alt="Spatial"
              fill
              priority
              className="object-cover rounded-md"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>

      {/* Title & Desc */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12 w-full"
      >
        <motion.h2
          variants={item}
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#FF5757] font-josefin-sans flex items-center gap-2 md:gap-3 mb-3 md:mb-5 flex-wrap"
        >
          <Image
            src="/AllLogo/18.png"
            alt="Spatial Icon"
            width={64}
            height={64}
            className="flex-shrink-0 "
          />
          <span className="break-words">TANDHURSpatial</span>
        </motion.h2>

        <motion.h3
          variants={item}
          className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-black font-nunito-sans mb-2"
        >
          Spatial Data Analysis
        </motion.h3>

        <motion.p
          variants={item}
          className="text-gray-700 mb-4 md:mb-6 font-nunito-sans text-xs md:text-sm lg:text-base leading-relaxed"
        >
          TANDHURSpatial is an innovative web-based platform designed to assist
          stakeholders in analyzing spatial data efficiently, accelerating
          accurate and data-driven decision-making processes.
        </motion.p>

        <motion.a
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/tandhur-spatial"
          className="bg-[#FF5757] text-white w-fit px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 
             rounded-md hover:bg-red-700 font-nunito-sans flex items-center 
             justify-center gap-2 text-xs md:text-sm lg:text-base shadow-md"
        >
          Learn More
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </motion.a>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-8 w-full">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              className={`bg-[#FF5757] p-4 md:p-5 rounded-lg shadow-md min-h-[160px] md:min-h-[180px] flex flex-col justify-center items-center text-center ${
                card.span ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-white mb-2 font-josefin-sans">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-white font-nunito-sans leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
