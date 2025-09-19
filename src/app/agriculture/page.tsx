"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AgriculturePage() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 overflow-x-hidden w-full">
      {/* Header Image */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12">
          <Image
            src="/hero/1.png"
            alt="Agriculture"
            width={1200}
            height={300}
            className="w-full h-48 md:h-64 lg:h-80 xl:h-[320px] object-cover rounded-md transition-transform duration-500 hover:scale-[1.02] "
          />
        </div>
      </motion.div>

      {/* Title & Description */}
      <motion.div
        className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 xl:px-12 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#7DAB18] font-josefin-sans flex items-center gap-2 md:gap-3 mb-3 md:mb-5 flex-wrap">
          <Image
            src="/AllLogo/15.png"
            alt="Spatial Icon"
            width={60}
            height={60}
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 "
          />
          <span className="break-words">TANDHURAgriculture</span>
        </h2>
        <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-black font-nunito-sans mb-2">
          Agricultural Activity Monitoring
        </h3>
        <p className="text-gray-700 max-w-full mb-4 md:mb-6 font-nunito-sans text-xs md:text-sm lg:text-base leading-relaxed">
          TANDHURAgri is an agricultural activity recording and monitoring web-application designed to help stakeholders in optimizing analysis, prediction, and decision-making. It also acts as a bridge to connect farmers with government
          support programs or financial resources (KUR/ People’s Business Credit).
        </p>
        <motion.a
          href="/tandhur-agriculture"
          className="bg-[#7DAB18] text-white w-fit px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 
             rounded-md hover:bg-green-700 font-nunito-sans flex items-center 
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
              title: "Providing Real-Time Data",
              desc: "TANDHURAgri delivers real-time agricultural data to ensure timely and accurate monitoring of farm activities.",
            },
            {
              title: "Enhanching Cultivation Productivity",
              desc: "By tracking inputs, schedules, and outcomes, TANDHURAgri helps farmers enhance the productivity of their cultivation practices.",
            },
            {
              title: "Bridging Farmers to Financial Resources",
              desc: "TANDHURAgri bridges farmers with access to financial support, such as government-backed programs like KUR.",
            },
            {
              title: "Supporting Economic Growth",
              desc: "Through data-driven insights and improved agricultural management, TANDHURAgri contributes to the broader goal of rural and economic development.",
            },
            {
              title: "Effective Solutions for Decision Maker",
              desc: "TANDHURAgri equips stakeholders and policymakers with reliable data to support effective and informed decision-making.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-[#7DAB18] p-4 md:p-5 rounded-lg shadow-md min-h-[160px] md:min-h-[180px] flex flex-col justify-center items-center text-center cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
      </div>
    </div>
  );
}
