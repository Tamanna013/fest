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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img src={member.image} alt={member.name} className="rounded-full w-40 h-40 mx-auto mb-4" />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-lg text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
