"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "/path/to/logo1.png" },
  { name: "Partner 2", logo: "/path/to/logo2.png" },
  { name: "Partner 3", logo: "/path/to/logo3.png" }
];

export default function Partners() {
  return (
    <section className="relative bg-black text-white py-16 px-8 md:px-20">
      <motion.h2
        className="text-6xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Partners
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
