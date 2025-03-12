"use client";

import { motion } from "framer-motion";
import { FaMusic, FaCode, FaPaintBrush, FaTheaterMasks, FaRobot, FaCameraRetro } from "react-icons/fa";

const events = [
  { title: "Battle of Bands", icon: <FaMusic />, description: "Experience electrifying performances from top college bands.", image: "/images/battle_of_bands.webp" },
  { title: "Hackathon", icon: <FaCode />, description: "Innovate, code, and solve real-world problems in an intense 24-hour challenge.", image: "/images/hackathon.webp" },
  { title: "Art Exhibition", icon: <FaPaintBrush />, description: "Unleash your creativity and showcase stunning visual art.", image: "/images/art_exhibition.jpeg" },
  { title: "Theater Night", icon: <FaTheaterMasks />, description: "Enjoy breathtaking performances from talented college drama clubs.", image: "/images/theater_night.avif" },
  { title: "AI Showdown", icon: <FaRobot />, description: "Witness futuristic AI projects and creative tech demos.", image: "/images/ai_showdown.jpg" },
  { title: "Photography Contest", icon: <FaCameraRetro />, description: "Capture moments and showcase your photographic skills.", image: "/images/photography_contest.webp" },
  { title: "Poetry Slam", icon: <FaMusic />, description: "Listen to passionate poetry performances by students.", image: "/images/poetry_slam.jpg" },
  { title: "Dance Off", icon: <FaMusic />, description: "Watch energetic dance performances from various college teams.", image: "/images/dance_off.jpeg" },
  { title: "Cooking Challenge", icon: <FaMusic />, description: "Compete in a fun-filled cooking competition.", image: "/images/cooking_challenge.jpeg" },
  { title: "Startup Pitch", icon: <FaCode />, description: "Pitch your startup ideas to a panel of judges.", image: "/images/startup_pitch.webp" },
  { title: "Hack the Future", icon: <FaCode />, description: "Solve tech problems and create future innovations.", image: "/images/hack_the_future.jpg" },
  { title: "Fashion Show", icon: <FaPaintBrush />, description: "Witness creative fashion trends and designs.", image: "/images/fashion_show.webp" },
  { title: "Debate Championship", icon: <FaTheaterMasks />, description: "Engage in competitive debates with your peers.", image: "/images/debate_championship.jpeg" },
  { title: "Tech Talks", icon: <FaRobot />, description: "Learn from experts about emerging technologies.", image: "/images/tech_talks.jpg" },
  { title: "Photo Walk", icon: <FaCameraRetro />, description: "Explore and photograph scenic locations on campus.", image: "/images/photo_walk.jpeg" },
  { title: "Gaming Tournament", icon: <FaRobot />, description: "Compete in an exciting video gaming tournament.", image: "/images/gaming_tournament.webp" },
  { title: "Choreography Battle", icon: <FaMusic />, description: "Battle it out on the dance floor in an exciting choreography showdown.", image: "/images/choreography_battle.jpg" },
  { title: "Scrabble Tournament", icon: <FaCode />, description: "Test your vocabulary skills in a competitive word game.", image: "/images/scrabble_tournament.webp" },
  { title: "Stand-Up Comedy", icon: <FaTheaterMasks />, description: "Enjoy hilarious stand-up comedy performances.", image: "/images/stand_up_comedy.avif" },
  { title: "Film Festival", icon: <FaCameraRetro />, description: "Watch short films and documentaries created by students.", image: "/images/film_festival.jpg" },
  { title: "Surprise Event", icon: <FaMusic />, description: "Shh! It's not to be revealed. Not yet!", image: "/images/surprise_event.jpg" }
];

export default function Events() {
  return (
    <section className="relative h-full w-full bg-black text-white flex flex-col items-center justify-start px-8 md:px-20 overflow-hidden pb-16">
      {/* 3D Background Element */}
      <div className="absolute inset-0 bg-black z-0"></div>

      <motion.h2
        className="text-5xl md:text-7xl font-bold mb-10 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Key Events
      </motion.h2>

      {/* Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl z-10">
        {events.map((event, index) => (
          <motion.div
          key={index}
          className="relative p-8 h-72 shadow-blue-500/30 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-110 overflow-hidden"
          initial={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
        >
          {/* Image Reveal on Hover - Fixed */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl transition-all duration-500 opacity-100 hover:opacity-100"
            style={{ backgroundImage: `url(${event.image})` }}
          ></div>

          {/* Card Content */}
          <div className="relative z-10">
            <div className="text-5xl mb-4 text-blue-200">{event.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-400">{event.description}</p>
          </div>
        
          {/* Background Blur Effect for Better Visuals */}
          <div className="absolute inset-0 bg-black/60 rounded-2xl z-0 transition-opacity duration-700 opacity-100 hover:opacity-0"></div>
        </motion.div>        
        ))}
      </div>
    </section>
  );
}
