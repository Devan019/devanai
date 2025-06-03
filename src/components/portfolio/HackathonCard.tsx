"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft, FiUsers, FiCode } from 'react-icons/fi';

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
  hackathon: { title,
    location,
    date,
    problemStatement,
    projectDescription,
    githubLink,
    deployLink,
    teamMembers = [],
    technologies = [],
    duration = "48 hours", }
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
      className="max-w-[350px] h-[30rem] perspective-1000 "
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
          className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden"
          // animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          {!isFlipped && <motion.div
            className="w-full h-full rounded-2xl p-6 flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              background: `linear-gradient(135deg, ${theme === 'dark' ? '#374151' : '#93c5fd'}, ${theme === 'dark' ? '#1f2937' : '#6366f1'})`,
              position: isFlipped ? "absolute" : "relative",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Header */}
            <div className="flex justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <h3 className="text-sm font-medium text-indigo-100">{location}</h3>
                </div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-gray-200">{date}</p>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <p className="text-sm text-gray-200">{duration}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={flipCard}
                className="h-16 w-16 flex justify-center items-center text-center p-3 rounded-full bg-gray-800/90 text-gray-300 shadow-md backdrop-blur-sm"
              >
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Problem Statement */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-1">
                Problem Statement
              </h4>
              <p className="text-gray-100 text-sm line-clamp-3">{problemStatement}</p>
            </div>

            {/* Team */}
            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <FiUsers className="w-4 h-4 text-gray-300" />
                <h4 className="text-sm font-semibold text-gray-300">Team</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {teamMembers.map((member, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-gray-100 backdrop-blur-sm border border-gray-600"
                  >
                    {member}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <FiCode className="w-4 h-4 text-gray-300" />
                <h4 className="text-sm font-semibold text-gray-300">Tech Stack</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 4).map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs rounded-full bg-indigo-100/20 text-indigo-100 backdrop-blur-sm"
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
          </motion.div>}

          {/* Back Side */}
          {isFlipped && <motion.div
            className="w-full h-full rounded-2xl p-6 flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              background: `linear-gradient(135deg, ${theme === 'dark' ? '#374151' : '#93c5fd'}, ${theme === 'dark' ? '#1f2937' : '#6366f1'})`,
              position: isFlipped ? "relative" : "absolute",
              top: 0,
              left: 0,
              transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
            }}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-white">Project Details</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: -90 }}
                whileTap={{ scale: 0.9 }}
                onClick={flipCard}
                className="p-3 rounded-full bg-gray-800/90 text-gray-300 shadow-md backdrop-blur-sm"
              >
                <FiArrowLeft className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <h3 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Problem Statement
                </h3>
                <p className="text-gray-200 text-sm pl-4 border-l-2 border-gray-600">
                  {problemStatement}
                </p>
              </div>

              <div>
                <h3 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Our Solution
                </h3>
                <p className="text-gray-200 text-sm pl-4 border-l-2 border-gray-600">
                  {projectDescription}
                </p>
              </div>

              <div>
                <h3 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2 pl-4">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-indigo-100/20 text-indigo-100 backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Team Members
                </h3>
                <div className="flex flex-wrap gap-2 pl-4">
                  {teamMembers.map((member, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-gray-100 backdrop-blur-sm border border-gray-600"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-pink-600 text-white"
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </motion.div>}
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