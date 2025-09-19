// components/HeroSection.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kasih delay kecil biar animasi smooth
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`px-4 md:px-8 lg:ml-20 py-8 w-full max-w-7xl mx-auto transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Logo + Title */}
      <div
        className={`flex items-center gap-2 transition-all duration-1000 delay-200 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-5"
        }`}
      >
        <Image
          src="/logos/tandhur-spatial.png"
          alt="TANDHUR Logo"
          width={80}
          height={80}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform duration-700 hover:scale-110"
        />
        <h1 className="text-xl md:text-2xl font-bold text-[#FF5757] font-josefin-sans">
          TANDHURSpatial
        </h1>
      </div>

      {/* Description */}
      <p
        className={`text-gray-600 mt-2 text-sm font-nunito-sans transition-all duration-1000 delay-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        TANDHURSpatial is an innovative web-based platform designed to assist
        stakeholders in analyzing spatial data efficiently, accelerating
        accurate and data-driven decision-making processes.
      </p>

      {/* Button */}
      <a
        href="https://spatial.tandhur.id/"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-3 inline-flex items-center gap-1.5 bg-[#FF5757] text-white 
             px-3 py-1.5 rounded-md w-fit
             hover:bg-red-700 transition text-md hover:-translate-y-0.5 
             hover:shadow-md group font-nunito-sans transition-all duration-1000 delay-700 ${
               isVisible
                 ? "opacity-100 translate-y-0"
                 : "opacity-0 translate-y-5"
             }`}
      >
        Free Trial
        <ChevronRight
          size={16}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </a>

      {/* Subtitle */}
      <h1
        className={`text-xl md:text-2xl font-bold text-[#FF5757] mt-5 text-center md:text-left font-josefin-sans transition-all duration-1000 delay-900 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        Spatial Data Analysis
      </h1>
    </section>
  );
}
