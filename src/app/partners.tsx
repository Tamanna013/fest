"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Partner 1",
    logo: "/images/p1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel efficitur tortor."
  },
  {
    name: "Partner 2",
    logo: "/images/p2.jpeg",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    name: "Partner 3",
    logo: "/images/p3.jpg",
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <div className="flex justify-center mb-8 space-x-4">
        {testimonials.map((partner, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-6 py-2 rounded-full border-2 text-lg ${
              activeIndex === index
                ? "bg-blue-500 border-blue-500 text-white shadow-[0_0_15px_#3b82f6]"
                : "border-gray-600 text-gray-400 hover:text-white hover:border-white"
            } transition-all duration-300`}
          >
            {partner.name}
          </button>
        ))}
      </div>

      <motion.div
        key={activeIndex} // Ensures animation when changing content
        className="relative bg-opacity-20 backdrop-blur-md p-6 rounded-xl border-2 border-blue-500 shadow-[0_0_40px_#3b82f6] overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6">
          <img
            src={testimonials[activeIndex].logo}
            alt={testimonials[activeIndex].name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_20px_#3b82f6]"
          />
          <div>
            <h3 className="text-3xl font-bold text-white">{testimonials[activeIndex].name}</h3>
            <p className="text-gray-300 mt-2">{testimonials[activeIndex].text}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 