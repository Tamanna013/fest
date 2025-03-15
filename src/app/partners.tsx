"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="relative bg-black text-white py-24 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black to-blue-900 opacity-20 animate-[pulse_8s_infinite] blur-2xl"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-3xl animate-[float_15s_infinite_ease-in-out]"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500 opacity-10 blur-3xl animate-[float_20s_infinite_ease-in-out_reverse]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-center mb-4 text-blue-400 drop-shadow-[0_0_40px_#3b82f6]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Partners
          </motion.h2>
          
          <motion.p 
            className="text-center text-blue-200 text-lg max-w-2xl mx-auto opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Collaborating with industry leaders to deliver exceptional solutions
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {testimonials.map((partner, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setAutoplay(false);
              }}
              className={`px-4 md:px-6 py-2 rounded-full border-2 text-sm md:text-lg font-bold tracking-widest uppercase ${
                activeIndex === index
                  ? "bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_#3b82f6]"
                  : "border-gray-600 text-gray-400 hover:text-white hover:border-white"
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {partner.name}
            </motion.button>
          ))}
        </div>

        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/50 backdrop-blur-md p-8 rounded-xl border-2 border-blue-500 shadow-[0_0_60px_#3b82f6] overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                    <motion.img
                      src={testimonials[activeIndex].logo}
                      alt={testimonials[activeIndex].name}
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_30px_#3b82f6]"
                      initial={{ rotate: -180 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.div>
                
                <div className="flex-grow md:max-w-[60%] text-center md:text-left">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {testimonials[activeIndex].name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <span className="text-4xl text-blue-400 opacity-50 mr-2">"</span>
                    {testimonials[activeIndex].text}
                    <span className="text-4xl text-blue-400 opacity-50 ml-2">"</span>
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => setAutoplay(!autoplay)} 
            className={`text-sm flex items-center gap-2 mx-auto px-4 py-2 rounded-full ${
              autoplay ? "text-blue-400" : "text-gray-500"
            } transition-colors duration-300`}
          >
            <span className={`inline-block w-3 h-3 rounded-full ${autoplay ? "bg-blue-400" : "bg-gray-600"}`}></span>
            {autoplay ? "Auto-rotation on" : "Auto-rotation off"}
          </button>
        </div>
      </div>
    </section>
  );
}
