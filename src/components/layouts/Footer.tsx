import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3E5641] text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-10">
        {/* Top Navigation + Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-white/30 py-2">
          <nav className="flex flex-wrap justify-center sm:justify-start mt-2 gap-6 ">
            <Link 
  href="https://compro-lumbung-2025.vercel.app/about-us" 
  className="text-sm font-bold hover:text-gray-300 transition-colors font-josefin-sans"
>
  About Us
</Link>

            <Link href="/consult-with-us" className=" text-sm font-bold hover:text-gray-300 transition-colors ">
              Free Trial 
            </Link>
            {/* <Link href="/app" className="text-sm font-bold hover:text-gray-300 transition-colors">
              TANDHUR Apps
            </Link> */}
          </nav>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/lumbungmuncul" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/lumbung-muncul-sejahtera/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.youtube.com/watch?v=HHZjHQE9uwE" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-white/20">
          {/* Company Logo (Left) */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start py-4 ml-10">
            <Image src="/AllLogo/9.png" alt="Lumbung Muncul Sejahtera Logo" width={100} height={100} className="object-contain" />
          </div>

          {/* About Us */}
          <div className="lg:col-span-5 flex flex-col py-4">
            <h3 className="font-semibold text-base mb-2 font-josefin-sans">About Us</h3>
            <p className="text-[13px] leading-relaxed text-white text-justify font-nunito-sans max-w-[90%]">
              TANDHUR, one of the flagship products of PT Lumbung Muncul Sejahtera, is a user-friendly WebApp-based ERP equipped with dynamic machine learning for recording and monitoring agricultural, village, and fisheries data, as well as spatial analysis.
            </p>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-3 flex flex-col py-4">
            <h3 className="font-semibold text-base mb-2 font-josefin-sans">Contacts</h3>
            <div className="text-[13px] space-y-1 font-nunito-sans">
              <div>
                <span>Email </span>
                <a href="mailto:marketing@lumbungmuncul.com" className="hover:text-gray-300 transition-colors break-all">
                  marketing@lumbungmuncul.com
                </a>
              </div>
              <div>
                <span>WhatsApp </span>+62 818-999-771
              </div>
              <div>
                <span>Address </span> Jl. Kalireso No.8, Yogyakarta 55582
              </div>
            </div>
          </div>

          {/* Partner Logo (Right) */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
            <div className="relative w-34 h-34 lg:w-38 lg:h-38">
              <Image src="/AllLogo/6.png" alt="Beehive Drones Partner Logo" fill className="object-contain opacity-90 hover:opacity-100 transition-opacity" priority />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-2">
          <p className="text-center text-xs text-white font-josefin-sans">Copyright © 2025 PT Lumbung Muncul Sejahtera. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}