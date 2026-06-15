"use client"
import { motion } from 'framer-motion'

export default function ProfilePage() {
  const purl = "https://cdn.zennvid.tech/devanai/characters/profile.jpg"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div
      className="mt-16 md:mt-4 flex justify-center items-center relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 'var(--portfolio-grid-opacity)',
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, var(--portfolio-grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--portfolio-grid-color) 1px, transparent 1px)',
        }}
      />

      {/* Radial vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, var(--portfolio-bg) 100%)',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-4 py-8 md:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Profile Picture */}
        <motion.div className="w-full md:w-1/3 flex flex-col items-center order-2 md:order-1" variants={itemVariants}>
          <div
            className="relative w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden"
            style={{ border: '3px solid var(--portfolio-accent)', boxShadow: '0 0 30px var(--portfolio-accent-soft)' }}
          >
            <img
              src={purl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <motion.div className="mt-4 md:mt-6 text-center" variants={itemVariants}>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: 'var(--portfolio-accent)' }}
            >
              Devan Chauhan
            </h2>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div className="w-full md:w-2/3 order-1 md:order-2" variants={containerVariants}>
          <motion.div className="mb-4 md:mb-8" variants={itemVariants}>
            <span
              className="text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-full"
              style={{
                backgroundColor: 'var(--portfolio-accent-soft)',
                color: 'var(--portfolio-accent)',
                border: '1px solid var(--portfolio-accent-border)',
              }}
            >
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-snug sm:leading-tight"
            style={{ color: 'var(--portfolio-text)' }}
            variants={itemVariants}
          >
            Hey, I{"'"}m <span style={{ color: 'var(--portfolio-accent)' }}>Web Dev</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg leading-relaxed mb-4 md:mb-6"
            style={{ color: 'var(--portfolio-text-secondary)' }}
            variants={itemVariants}
          >
            I am a fourth-year student passionate about full-stack development, Applied AI, and building modern, scalable applications. I enjoy creating impactful solutions and crafting engaging user experiences.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}