"use client";

import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🔑 simpan referensi ke form
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return; // safety check

    emailjs
      .sendForm(
        "service_vzs5aa9", // Service ID
        "template_2d6j3im", // Template ID
        formRef.current, // pakai ref, bukan e.currentTarget
        "y3PM-cYqwsqKn7Nyj" // Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);

          // ✅ Reset form via ref
          formRef.current?.reset();

          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <main className="px-2 md:px-10 lg:px-20 py-6 md:py-10 text-black font-josefin-sans overflow-x-hidden w-full">
      <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center mb-10 font-ubuntu">
        Contact Us
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        {/* MAP */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full h-56 md:h-80 lg:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9947350133137!2d110.44333801533274!3d-7.797234779361342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5913e9ea7a9f%3A0xfdf7a77aeed99d56!2sJl.%20Kalireso%20No.8%2C%20Pakem%2C%20Sleman%2C%20Yogyakarta!5e0!3m2!1sen!2sid!4v1625822393833!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-2 md:space-y-4">
          <h2 className="text-xl font-bold font-ubuntu">Get in Touch</h2>


          <p className="flex items-center gap-2 font-nunito-sans">
            <Phone size={18} /> +6281 8999 771
          </p>
          <p className="flex items-center gap-2 font-nunito-sans">
            <Mail size={18} />
            <a href="mailto:marketing@lumbungmuncul.com" className="underline">
              marketing@lumbungmuncul.com
            </a>
          </p>
          <p className="flex items-start gap-2 font-nunito-sans">
            <MapPin size={20} className="mt-1 font-nunito-sans" />
            Jl. Kalireso No.8, Kumendung, Candibinangun, Kec. Pakem, Sleman, DIY 55582
          </p>

          {/* SOCIAL & HOURS */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 pt-2 md:pt-4">
            <div>
              <h3 className="font-semibold mb-2 font-ubuntu text-xl">We are on Socials</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-2 gap-4 font-nonito-sans">
                  <motion.a whileHover={{ scale: 1.05, color: "#000" }} href="https://www.instagram.com/tandhur.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer font-nunito-sans">
                    <Instagram size={18} /> Instagram
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05, color: "#000" }} href="https://www.youtube.com/watch?v=FWE1epVsX5M" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer font-nunito-sans">
                    <Youtube size={18} /> YouTube
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05, color: "#000" }} href="https://www.tiktok.com/@tandhur.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer font-nunito-sans">
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9.5 3v13.25a2.25 2.25 0 1 1-2.25-2.25h2.25M14.5 3c.5 2.5 2.5 4 5 4v7.25a4.25 4.25 0 1 1-4.25-4.25h2.25"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    TikTok
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05, color: "#000" }} href="https://www.linkedin.com/company/lumbung-muncul-sejahtera/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer font-nunito-sans">
                    <Linkedin size={18} /> LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 font-ubuntu text-xl">Business Hours</h3>
              <p>
                Monday – Friday:
                <br />
                08.00 – 17.00 WIB
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FORM */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-10 md:mt-20 mb-6 md:mb-10">
        <h2 className="text-2xl font-bold text-center mb-1">Drop Us a Line</h2>
        <p className="text-center text-sm mb-8">Consult with us about your needs.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="max-w-full md:max-w-2xl mx-auto space-y-2 md:space-y-4 font-nonito-sans">
          <input type="text" name="user_name" placeholder="Your name" required className="w-full border border-[#7DAB18] p-2  text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-[#3E5641] font-nunito-sans" />
          <input type="text" name="user_whatsapp" placeholder="Your WhatsApp" required className="w-full border border-[#7DAB18] p-2 text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-[#3E5641] font-nunito-sans" />
          <input type="email" name="user_email" placeholder="Your email" required className="w-full border border-[#7DAB18] p-2 text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-[#3E5641] font-nunito-sans" />
          <input type="text" name="user_address" placeholder="Your address" className="w-full border border-[#7DAB18] p-2 text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-[#3E5641] font-nunito-sans" />
                    {/* Category Dropdown */}
          <div className="w-full">
  <select 
    name="category" 
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    required 
    className="w-full border border-[#7DAB18] p-2 text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-[#3E5641] bg-white font-nunito-sans"
  >
    <option value="">Select Category</option>
    <option value="Agriculture">TANDHURAgriculture</option>
    <option value="Desa">TANDHURDesa</option>
    <option value="Fish">TANDHURFisheries</option>
    <option value="Spatial">TANDHURSpatial</option>
  </select>
</div>

{/* Bagian message & button hanya muncul kalau dropdown sudah dipilih */}
{selectedCategory && (
  <>
    <textarea
      name="message"
      rows={4}
      required
      className="w-full border border-[#7DAB18] p-2 text-xs md:text-base focus:outline-none focus:ring-2 focus:ring-[#3E5641] md:h-32"
    />

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      disabled={loading}
      className="bg-[#7DAB18] text-white px-4 md:px-6 py-2 float-right font-semibold text-xs md:text-base disabled:opacity-50"
    >
      {loading ? "Sending..." : "Send Message"}
    </motion.button>
  </>
)}
</form>

{submitted && (
  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 mt-4 text-center font-nunito-sans">
    ✅ Thank you! Your message has been sent.
  </motion.p>
)}
      </motion.section>
    </main>
  );
}
