"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./animatedBG";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      {/* 3D Background */}
      <AnimatedBackground />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Saavyas Text */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold tracking-widest text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Saavyas
        </motion.h1>

        {/* College Fest 2k25 and Description at Bottom Left */}
        <div className="absolute bottom-10 left-10 text-left">
          <motion.p
            className="text-5xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            College Fest
          </motion.p>
          <motion.p
            className="text-3xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            --- 2k25
          </motion.p>
          <motion.p
            className="text-sm mt-2 mb-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Uniting Minds, Igniting Passions
          </motion.p>
        </div>

        {/* National Institute of Technology Goa logo and name at Upper Left */}
        <div className="absolute top-10 left-10 flex items-center gap-1">
            <a href="https://www.nitgoa.ac.in" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/nitg.png" // Change with the actual path to the logo image
                    alt="NIT Goa Logo"
                    width={50}
                    height={50}
                />
            </a>
        </div>

        {/* Menu Icon at Top Right */}
        <div
          className="absolute top-8 right-8 cursor-pointer z-20"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-white"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </div>

        {/* Navigation Menu (Hidden by default, appears when menu is open) */}
        {menuOpen && (
          <div className="absolute top-0 right-0 bg-black bg-opacity-80 w-1/2 h-full z-10 flex flex-col items-center justify-center">
            <motion.ul
              className="text-white space-y-6 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-blue-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-blue-500">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </motion.ul>
            <motion.div
              className="absolute top-8 right-8 cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
