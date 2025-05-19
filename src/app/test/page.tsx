"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  const darkMode = true;
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <motion.section
      id='profile'
      className={`flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-32 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
      style={{ minHeight: '100vh' }}
      initial="hidden"
      animate="visible"

    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>
            Creative Developer
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Anime Dev</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          Creating immersive web experiences with a touch of anime magic.
          Scroll down to explore my journey through the digital world.
        </motion.p>

        <motion.div
          className="flex flex-col items-start mt-12 gap-4"
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        >
          <div className="flex gap-4">
            <a
              href="#projects"
              className={`px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-100' : 'bg-white hover:bg-gray-100 text-gray-900'} font-medium transition-all duration-300 shadow-lg hover:shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-col items-center mt-8">
            <span className="text-sm mb-2 text-gray-500 dark:text-gray-400">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-2xl text-gray-500 dark:text-gray-400"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero