"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseProjects() {
  return (
    <section className="py-10 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Title dengan animasi */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl font-bold text-[#7DAB18] mb-5 text-center md:text-left font-josefin-sans"
      >
        Case Projects
      </motion.h2>

      <div className="flex justify-center">
        {/* Card dengan animasi masuk + hover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
          className="border rounded-lg shadow-md p-4 md:p-6 w-full bg-white"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Gambar project dengan animasi */}
            <motion.div
              className="relative w-full md:w-100 aspect-video"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/projects/01.png"
                alt="Project"
                fill
                className="rounded-lg object-cover"
              />
            </motion.div>

            {/* Deskripsi */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full mt-5"
            >
              <h2 className="font-bold text-black text-lg font-josefin-sans">
                Implementation of TANDHURAgri in East Nusa Tenggara (NTT)
              </h2>
              <ul className="list-disc ml-6 mt-2 text-sm text-black font-nunito-sans space-y-1">
                <li>
                  The Implementation of TANDHURAgri began with outreach and
                  training session of selected farmer groups (Poktan) and farmer
                  group associations (Gapoktan) in the village.
                </li>
                <li>
                  THANDURAgri is used to monitor agricultural activities on
                  production land to help ensure harvest target are met.
                </li>
                <li>
                  The participants involved include local farmers and
                  agricultural extension officers.
                </li>
              </ul>
              <p className="text-sm font-bold text-black mt-5 font-nunito-sans">
                Year : 2023 | Location : East Nusa Tenggara (NTT) | Client :
                Kemendesa PDTT
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-white rounded-full p-2 shadow-lg z-50 hover:scale-110 hover:shadow-xl transition-all duration-300"
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
