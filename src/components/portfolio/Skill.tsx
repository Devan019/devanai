"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../portfolio/3D-glob";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting_stars";

const Skills = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center h-screen bg-black">

      <div
        className={`w-1/2 flex items-center justify-center
            text-gray-100`}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My{" "}
          <span className="">
            Skills
          </span>
        </motion.h2>
      </div>
      <div className="w-full h-full">
        <Canvas shadows camera={{ position: [3, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <Environment preset="night" />

          <Suspense fallback={null}>
            <Earth  />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.2}
              autoRotate={true}
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Suspense>
        </Canvas>
      </div>
      <StarsBackground />
      <ShootingStars minDelay={2000} maxDelay={3000}  />
    </div>
  );
};

export default Skills;
