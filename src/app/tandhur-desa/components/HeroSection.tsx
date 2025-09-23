// components/HeroSection.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`px-4 md:px-8 lg:ml-20 py-8 w-full max-w-7xl mx-auto transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Logo + Title */}
      <div
        className={`flex items-center gap-2 transform transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      >
        <Image
          src="/logos/tandhur-desa.png"
          alt="TANDHUR Logo"
          width={80}
          height={80}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-transform duration-700 hover:scale-110"
        />
        <h1 className="text-xl md:text-2xl font-bold text-[#F3D34A] font-josefin-sans">
          TANDHURDesa
        </h1>
      </div>

      {/* Description */}
      <p
        className={`text-gray-600 mt-2 text-sm font-nunito-sans leading-relaxed transform transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        TANDHURDesa is an integrated technology system designed to monitor
        village conditions and community well-being by combining remote sensing
        technology with active community participation.
      </p>

      {/* Button */}
      <a
        href="/consult-with-us"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-3 inline-flex items-center gap-1.5 bg-[#F3D34A] text-white 
             px-3 py-1.5 rounded-md w-fit transform transition-all duration-1000 delay-600 
             ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
             hover:bg-yellow-700 hover:-translate-y-0.5 hover:shadow-md group font-nunito-sans`}
      >
        Free Trial
        <ChevronRight
          size={16}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </a>

      {/* Subtitle */}
      <h1
        className={`text-xl md:text-2xl font-bold text-[#F3D34A] mt-5 text-center md:text-left font-josefin-sans transform transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        Village Administrative Data Management
      </h1>
    </section>
  );
}
