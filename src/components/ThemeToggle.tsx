"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-[90%] right-6 z-50 p-3 rounded-full ${theme == "dark" ? 'bg-gray-800 shadow-lg shadow-purple-500/20' : 'bg-white shadow-lg shadow-gray-400/20'} transition-colors duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={theme == "dark" ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme == "dark" ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}