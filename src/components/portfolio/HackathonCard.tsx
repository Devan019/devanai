"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft, FiAward, FiUsers, FiCode } from 'react-icons/fi';

interface HackathonCardProps {
  hackathon: {
    title: string;
    location: string;
    date: string;
    problemStatement: string;
    projectDescription: string;
    githubLink: string;
    deployLink: string;
    teamMembers: string[];
    technologies: string[];
    imageUrl: string;
    category: string;
    award?: string;
    duration?: string;
  }
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon : {title,
  location,
  date,
  problemStatement,
  projectDescription,
  githubLink,
  deployLink,
  teamMembers = [],
  technologies = [],
  imageUrl = "/hackathon-placeholder.jpg",
  category = "",
  award = "",
  duration = "48 hours",}
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  // Single color scheme for all cards
  const colorScheme = {
    light: "from-blue-300 to-indigo-400",
    dark: "bg-gray-700", // Consistent dark mode colors
    accent: "bg-indigo-500",
    text: "text-indigo-600 dark:text-indigo-300",
    pill: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
  };

  const gradientStyle = isMounted
    ? ` ${theme === 'dark' ? colorScheme.dark : colorScheme.light}`
    : 'bg-gray-200 dark:bg-gray-800';

  return (
    <motion.div
      className="w-auto h-[30rem] perspective-1000 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      {/* Outer card div with gradient border animation */}
      <div className="card w-full h-full bg-gray-700 relative flex flex-col items-center overflow-hidden shadow-xl shadow-black/50 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:scale-103 hover:shadow-lg hover:shadow-rose-600/40">
        
      
        <motion.div
          className="z-50 relative w-full h-full rounded-2xl shadow-xl transition-all duration-500 ease-in-out transform-style-preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front Side */}
          {!isFlipped && <div className="absolute w-full h-full rounded-2xl overflow-hidden border border-gray-700">
            <div className={`absolute inset-0 opacity-90 ${gradientStyle}`} />

            <div className="absolute inset-0 p-6 flex flex-col h-full z-10">
              {/* Header */}
              <div className="flex justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${colorScheme.accent}`}></span>
                    <h3 className={`text-sm font-medium ${colorScheme.text}`}>{location}</h3>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm text-gray-300">{date}</p>
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    <p className="text-sm text-gray-300">{duration}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={flipCard}
                  className="p-3 rounded-full bg-gray-800/90 text-gray-300 shadow-md backdrop-blur-sm"
                >
                  <FiArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Problem Statement */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">Problem Statement</h4>
                <p className="text-gray-200 text-sm line-clamp-3">{problemStatement}</p>
              </div>

              {/* Team */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <FiUsers className="w-4 h-4 text-gray-400" />
                  <h4 className="text-sm font-semibold text-gray-300">Team</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {teamMembers.map((member, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-gray-300 backdrop-blur-sm border border-gray-600"
                    >
                      {member}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <FiCode className="w-4 h-4 text-gray-400" />
                  <h4 className="text-sm font-semibold text-gray-300">Tech Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(0, 4).map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 text-xs rounded-full ${colorScheme.pill} backdrop-blur-sm`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                      +{technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>}

          {/* Back Side */}
          {isFlipped && <div className="absolute w-full h-full rounded-2xl overflow-hidden border border-gray-700 rotate-y-180">
            <div className={`absolute inset-0 opacity-90 ${gradientStyle}`} />

            <div className="relative z-[99] p-6 h-full flex flex-col bg-gray-900/80 backdrop-blur-md">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-100">Project Details</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={flipCard}
                  className="z-[99] p-3 rounded-full bg-gray-800/90 text-gray-300 shadow-md backdrop-blur-sm"
                >
                  <FiArrowLeft className="z-[99] w-5 h-5" />
                </motion.button>
              </div>

              <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div>
                  <h3 className="text-md font-semibold text-gray-100 mb-2 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${colorScheme.accent}`}></span>
                    Problem Statement
                  </h3>
                  <p className="text-gray-300 text-sm pl-4 border-l-2 border-gray-700">
                    {problemStatement}
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-100 mb-2 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${colorScheme.accent}`}></span>
                    Our Solution
                  </h3>
                  <p className="text-gray-300 text-sm pl-4 border-l-2 border-gray-700">
                    {projectDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-100 mb-2 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${colorScheme.accent}`}></span>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-xs rounded-full ${colorScheme.pill} backdrop-blur-sm`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-100 mb-2 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${colorScheme.accent}`}></span>
                    Team Members
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {teamMembers.map((member, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ y: -2 }}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-gray-300 backdrop-blur-sm border border-gray-600"
                      >
                        {member}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                {githubLink && (
                  <motion.a
                    whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/90 text-gray-300 backdrop-blur-sm border border-gray-700"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </motion.a>
                )}
                {deployLink && (
                  <motion.a
                    whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    href={deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-pink-600 text-white`}
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>}
        </motion.div>
      </div>

      {/* Card Bottom Highlight */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`h-1 w-full rounded-full ${colorScheme.accent} mt-2`}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HackathonCard;