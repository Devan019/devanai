"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FlipWords } from './ui/flip-words';


const Hero = () => {

  const videoUrl = "https://cdn.zennvid.tech/devanai/bg.mp4"
  const words = ["Portfolio", "DevLab", "Hackfolio"];

  const router =  useRouter()
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Explore My  <FlipWords duration={2000} words={words}  className='text-yellow-400'/> 
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30 hover:cursor-pointer"
            onClick={()=>{router.push("/portfolio")}}
          >
              View Work
              <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;