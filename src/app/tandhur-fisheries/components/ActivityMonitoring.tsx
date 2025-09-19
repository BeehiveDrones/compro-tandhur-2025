// components/ActivityMonitoring.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function ActivityMonitoring() {
  const images = ["/fish/frame-01.png", "/fish/frame-02.png", "/fish/frame-03.png"];

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Autoplay
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className={`px-4 md:px-8 w-full max-w-7xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="flex justify-center py-8 md:py-12">
        <div
          className="relative bg-white shadow-lg rounded-xl w-full max-w-4xl h-auto md:h-[450px] flex flex-col items-center justify-center p-4 md:p-6 transition-all duration-500 hover:shadow-xl overflow-hidden"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          {/* Slide container dengan animasi */}
          <div className="relative w-full aspect-video md:h-80 rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image src={images[current]} alt={`Slide ${current + 1}`} fill className="object-contain rounded-lg" priority />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 mt-4 z-10">
            {images.map((_, index) => (
              <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${current === index ? "bg-[#145DA0] scale-125" : "bg-gray-300 hover:bg-gray-400"}`} />
            ))}
          </div>

          {/* Prev button */}
          <button onClick={prevSlide} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-black p-1 transition-all duration-300 hover:scale-110 bg-white/70 rounded-full shadow-md">
            <ChevronLeft size={30} strokeWidth={1.5} className="md:w-10 md:h-10" />
          </button>

          {/* Next button */}
          <button onClick={nextSlide} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-black p-1 transition-all duration-300 hover:scale-110 bg-white/70 rounded-full shadow-md">
            <ChevronRight size={30} strokeWidth={1.5} className="md:w-10 md:h-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
