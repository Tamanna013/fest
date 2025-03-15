"use client";

import { motion } from "framer-motion";

const teamMembers = [
  { name: "John Doe", role: "Event Coordinator", image: "/images/john_doe.jpg" },
  { name: "Jane Smith", role: "Creative Director", image: "/images/jane_smith.avif" },
  { name: "Mark Lee", role: "Technical Lead", image: "/images/mark_lee.avif" }
];

export default function Team() {
  return (
    <section className="relative bg-black text-white py-16 px-8 md:px-20">
      <motion.h2
        className="text-6xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Meet Our Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative text-center bg-gradient-to-br from-blue-800 to-black rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ delay: index * 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-lg text-gray-400">{member.role}</p>

            {/* Floating Dots */}
            <motion.div
              className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                y: [0, -5, 0],
                x: [0, 5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
