"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface WhatsAppProps {
  phoneNumber?: string; // nomor WA default
  size?: number; // ukuran icon default
}

export default function WhatsApp({ phoneNumber = "6281234567890", size = 65 }: WhatsAppProps) {
  return (
    <motion.div className="fixed bottom-3 md:bottom-8 right-3 md:right-8 z-50" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }} whileHover={{ scale: 1.15 }}>
      <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Image src="/AllLogo/logowhatsapp.png" alt="WhatsApp Logo" width={size} height={size} className="drop-shadow-lg hover:scale-110 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}
