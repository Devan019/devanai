"use client"
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Spotlight } from "../ui/spotlight-new";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion'

export default function ProfilePage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="mt-16 md:mt-4 flex justify-center items-center relative min-h-screen w-full overflow-hidden  bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <Spotlight />
      
      {/* Main Content Container */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      
      <div className="text-white relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-4 py-8 md:p-6 bg-transparent rounded-2xl">

        {/* Left Side - Profile Picture */}
        <div className="w-full md:w-1/3 flex flex-col items-center order-2 md:order-1">
          <div className="relative w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500/50">
            {/* Profile Image with Sparkles */}
            <div className="absolute inset-0">
              <SparklesCore
                id="profile-sparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <img
              src="/characters/profile.jpg"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover"
            />
          </div>

          {/* Name with TextGenerateEffect */}
          <div className="mt-4 md:mt-6 text-center">
            <TextGenerateEffect
              words="Devan Chauhan"
              className="text-2xl sm:text-3xl font-bold bg-clip-text text-white bg-gradient-to-b from-purple-200 to-purple-600"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 order-1 md:order-2">
          {/* Section with Wavy Background */}
          <motion.div
            className="mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-purple-900/30 text-purple-400`}>
              Creative Developer
            </span>
          </motion.div>
          
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-snug sm:leading-tight"
            variants={itemVariants}
          >
            Hey, I{"'"}m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Web Dev</span>
          </motion.h1>

          {/* Bio with animated text */}
          <TextGenerateEffect
            words="I'm a third-year student passionate about development, AI/ML, and competitive programming. I love building smart, scalable solutions and continuously improving my skills in frontend, backend, databases, and APIs. I'm also exploring artificial intelligence and machine learning to create intelligent, data-driven applications — and I enjoy using animations to make user experiences more engaging and interactive"
            className="text-gray-300 text-sm  sm:text-lg leading-relaxed mb-4 md:mb-6"
          />
        </div>
      </div>
    </div>
  );
}