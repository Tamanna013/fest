"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Model
const Model = () => {
  const { scene } = useGLTF("/white_bird.glb");
  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
};

export default function About() {
  const [color, setColor] = useState("blue");

  const lightPosition = useRef([2, 2, 5]);

  // The Torus Knot
  useEffect(() => {
    const colors = [
        "#4682B4",
        "#5F9EA0",
        "#6495ED",
        "#4169E1",
        "#3B9AE1",
        "#1E90FF",
        "#00BFFF",
        "#1C6A9A",
        "#009ACD",
        "#3579A9",
    ];

    let index = 0;

    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Light Position Animation (CIRCULAR)
  useEffect(() => {
    let angle = 0;
    const radius = 5;
    const centerX = 2;
    const centerZ = 5;

    const animateLightPosition = () => {
      angle += 0.05;
      lightPosition.current = [
        centerX + radius * Math.cos(angle),
        2,
        centerZ + radius * Math.sin(angle),
      ];
    };

    const lightInterval = setInterval(animateLightPosition, 16);

    return () => clearInterval(lightInterval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black text-white flex items-center justify-center px-8 md:px-20 overflow-hidden">
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={lightPosition.current} intensity={1} />

        <TorusKnot args={[1, 0.4, 28, 32]} scale={1.5} position={[0, 0, 0]}>
          <motion.meshStandardMaterial
            color={color}
            attach="material"
            distort={0.3}
            speed={5}
            transition={{ duration: 0.5, ease: "linear" }}
          />
        </TorusKnot>

        <OrbitControls enableZoom={false} enableRotate={true} />
      </Canvas>

      <div className="absolute bottom-10 left-10 z-20">
        <Canvas className="w-100 h-100">
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Model />
          <OrbitControls enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <motion.h2
          className="text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About the Fest
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto px-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
      </div>
    </section>
  );
}
