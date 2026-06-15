"use client";

import React from "react";
import { motion } from "framer-motion";

// Technology data organized by category
const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "🌐" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "⏭️" },
      { name: "Three.js", icon: "🔺" },
      { name: "GSAP", icon: "🎞️" },
      { name: "Framer Motion", icon: "🔄" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: "🌱" },
      { name: "Express.js", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Msg Queues", icon: "📨" },
      { name: "Kafka", icon: "📡" },
      { name: "Webhooks", icon: "🪝" },
      { name: "Hibernate", icon: "🗄️" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "SQLite", icon: "📦" },
      { name: "Vector DB", icon: "🧮" },
    ]
  },
  {
    title: "AI",
    skills: [
      { name: "LLMs", icon: "🧠" },
      { name: "RAG", icon: "📚" },
      { name: "LangChain", icon: "🔗" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "GenAI", icon: "✨" },
      { name: "Agentic AI", icon: "🤖" },
      { name: "Mem0", icon: "💾" },
    ]
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Git", icon: "📝" },
      { name: "Postman", icon: "📬" },
      { name: "Prisma", icon: "💎" },
      { name: "GraphQL", icon: "◈" },
      { name: "WebSocket", icon: "🔌" },
      { name: "WebRTC", icon: "📹" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-center min-h-screen py-16 px-4"
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

      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 relative z-10"
        style={{ color: 'var(--portfolio-text)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span style={{ color: 'var(--portfolio-accent)' }}>Skills</span>
      </motion.h2>

      <div className="w-full max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.title}
            variants={categoryVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: catIdx * 0.15 }}
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'var(--portfolio-card)',
              border: '1px solid var(--portfolio-card-border)',
            }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--portfolio-accent)' }}
            >
              {category.title}
            </h3>

            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-lg cursor-default transition-colors"
                  style={{
                    backgroundColor: 'var(--portfolio-surface)',
                    border: '1px solid var(--portfolio-card-border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
                    e.currentTarget.style.backgroundColor = 'var(--portfolio-accent-soft)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--portfolio-card-border)';
                    e.currentTarget.style.backgroundColor = 'var(--portfolio-surface)';
                  }}
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span
                    className="text-sm md:text-base font-medium whitespace-nowrap"
                    style={{ color: 'var(--portfolio-text)' }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
