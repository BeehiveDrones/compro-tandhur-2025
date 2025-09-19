// components/CaseProjects.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CaseProjects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-10 px-4 md:px-8 w-full max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Title */}
      <h2
        className={`text-lg md:text-xl font-bold text-[#FF5757] mb-5 text-center md:text-left font-josefin-sans transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      >
        Case Projects
      </h2>

      {/* Card */}
      <div
        className={`flex justify-center transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="border rounded-lg shadow-md p-4 md:p-6 w-full hover:shadow-xl transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Image */}
            <div
              className={`relative w-full md:w-100 aspect-video transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
            >
              <Image
                src="/projects/spatial.png"
                alt="Project"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div
              className={`w-full mt-5 transition-all duration-1000 delay-900 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <h2 className="font-bold text-black text-lg font-josefin-sans">
                TANDHURSpatial for Solar Panel Installation Potential Analysis
              </h2>
              <ul className="list-disc ml-6 mt-2 text-sm text-black font-nunito-sans">
                <li>
                  TANDHURSpatial was utilized as a geospatial tool to assess
                  rooftop potential for solar panel installations in selected
                  areas of Denpasar, Bali.
                </li>
                <li>
                  Using high-resolution imagery and spatial data processing,
                  available roof surfaces were estimated and visualized through
                  downloadable maps on the TANDHURSpatial dashboard.
                </li>
                <li>
                  The result offered data-driven insights to support informed
                  decision-making for solar panel deployment.
                </li>
              </ul>
              <p className="text-sm font-bold text-black mt-5 font-nunito-sans">
                Year : 2024 | Location : Denpasar, Bali | Client : PLN Icon+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-white rounded-full p-2 shadow-lg z-50 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110 hover:shadow-xl">
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
      </div>
    </section>
  );
}
