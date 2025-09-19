// components/Buttons.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Buttons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex flex-wrap gap-4 md:gap-8 lg:gap-12 justify-center py-6 px-4 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <Link
        href="/tandhur-agriculture"
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold border-2 border-[#7DAB18] text-black  transition-all duration-300 text-sm md:text-base flex-1 md:flex-initial justify-center min-w-[200px] max-w-[300px] hover:bg-[#7DAB18] hover:text-white hover:shadow-lg hover:-translate-y-1 group"
      >
        <Image
          src="/logos/tandhur-agri.png"
          alt="Agriculture"
          width={30}
          height={30}
          className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="truncate font-josefin-sans">TANDHURAgriculture</span>
      </Link>

      <Link
        href="/tandhur-desa"
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold border-2 border-[#7DAB18] text-black  transition-all duration-300 text-sm md:text-base flex-1 md:flex-initial justify-center min-w-[200px] max-w-[300px] hover:bg-[#7DAB18] hover:text-white hover:shadow-lg hover:-translate-y-1 group"
      >
        <Image
          src="/logos/tandhur-desa.png"
          alt="Desa"
          width={30}
          height={30}
          className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="truncate font-josefin-sans">TANDHURDesa</span>
      </Link>

      <Link
        href="/tandhur-fisheries"
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold border-2 border-[#7DAB18] text-black  transition-all duration-300 text-sm md:text-base flex-1 md:flex-initial justify-center min-w-[200px] max-w-[300px] hover:bg-[#7DAB18] hover:text-white hover:shadow-lg hover:-translate-y-1 group"
      >
        <Image
          src="/logos/tandhur-fish.png"
          alt="Fisheries"
          width={30}
          height={30}
          className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="truncate font-josefin-sans">TANDHURFisheries</span>
      </Link>

      <Link
        href="/tandhur-spatial"
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold border-2 border-[#FF5757]  transition-all duration-300 text-sm md:text-base flex-1 md:flex-initial justify-center min-w-[200px] max-w-[300px] bg-[#FF5757]  text-white hover:shadow-lg hover:-translate-y-1 group"
      >
        <Image
          src="/logos/tandhur-spatial.png"
          alt="Spatial"
          width={30}
          height={30}
          className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="truncate font-josefin-sans">TANDHURSpatial</span>
      </Link>
    </div>
  );
}