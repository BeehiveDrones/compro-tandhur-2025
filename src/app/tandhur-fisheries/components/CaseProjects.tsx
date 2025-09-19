"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseProjects() {
  return (
    <section className="py-10 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl font-bold text-[#145DA0] mb-5 text-center md:text-left font-josefin-sans"
      >
        Case Projects
      </motion.h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="border rounded-lg shadow-md p-4 md:p-6 w-full hover:shadow-xl transition duration-500">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full md:w-100 aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src="/projects/fish.png"
                alt="Project"
                fill
                className="rounded-lg object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full mt-5"
            >
              <h2 className="font-bold text-black text-lg font-josefin-sans">
                Implementation of TANDHURFisheries in Gresik
              </h2>
              <ul className="list-disc ml-6 mt-2 text-sm text-black font-nunito-sans space-y-1">
                <li>
                  TANDHURFisheries was implemented in Gresik to estimate harvest
                  potential in two types of shrimp ponds.
                </li>
                <li>
                  The platform was used by aquaculture extension officers as a
                  tool to provide guidance and education to local shrimp
                  farmers.
                </li>
                <li>
                  A user training session was also conducted to ensure effective
                  adoption and understanding of the system’s features and
                  benefits.
                </li>
              </ul>
              <p className="text-sm font-bold text-black mt-5 font-nunito-sans">
                Year : 2023 | Location : Gresik, East Java | Client : BRIN &
                Local Fish Farmers
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-white rounded-full p-2 shadow-lg z-50 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <a
          href="https://wa.me/+62818999771"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/logos/whatsapp.logo.png"
            alt="WhatsApp Logo"
            width={40}
            height={40}
            className="object-contain hover:scale-110 transition-transform duration-200 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
          />
        </a>
      </motion.div>
    </section>
  );
}
