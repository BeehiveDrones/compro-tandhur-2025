"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function CaseProjects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // trigger animasi sekali saat komponen mount
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`py-10 px-4 md:px-8 w-full max-w-7xl mx-auto transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Title */}
      <h2
        className={`text-lg md:text-xl font-bold text-[#F3D34A] mb-5 text-center md:text-left font-josefin-sans transform transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      >
        Case Projects
      </h2>

      {/* Card */}
      <div
        className={`flex justify-center transform transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="border rounded-lg shadow-md p-4 md:p-6 w-full hover:shadow-xl transition duration-500">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Image */}
            <div className="relative w-full md:w-100 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/projects/desa.png"
                alt="Project"
                fill
                className="object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="w-full mt-5">
              <h2 className="font-bold text-black text-lg font-josefin-sans">
                Implementation of TANDHURDesa in Kalasan, Yogyakarta
              </h2>
              <ul className="list-disc ml-6 mt-2 text-sm text-black font-nunito-sans space-y-1">
                <li>
                  This project leverages drone mapping technology and the
                  TANDHURDesa application to improve village administrative
                  systems, which previously suffered from disorganized and
                  outdated data.
                </li>
                <li>
                  Drone data is collected every three months and integrated into
                  an interactive map with the TANDHURDesa platform.
                </li>
                <li>
                  TANDHURDesa provides village heads with more comprehensive
                  data access, enabling better-informed decision-making and more
                  effective governance.
                </li>
              </ul>
              <p className="text-sm font-bold text-black mt-5 font-nunito-sans">
                Year : 2023 | Location : Kalasan, Yogyakarta | Client :
                Tamanmartani Village
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
