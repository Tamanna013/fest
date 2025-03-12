"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-blue-900 text-white py-12 px-6 text-center">
      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Footer Text */}
        <motion.p
          className="text-xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          College Fest 2025 | All Rights Reserved
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Connecting Minds, Igniting Passion!
        </motion.p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            className="text-3xl hover:text-blue-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            className="text-3xl hover:text-blue-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <FaTwitter />
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            className="text-3xl hover:text-pink-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            className="text-3xl hover:text-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <p className="text-lg">
            For inquiries:{" "}
            <a href="mailto:contact@collegefest.com" className="text-blue-400 hover:text-blue-600">
              contact@collegefest.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
