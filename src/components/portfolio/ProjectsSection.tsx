"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, skillCategories, Project } from "@/data/projects.data";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { BackgroundGradient } from "../ui/background-gradient";
import { SparklesCore } from "../ui/sparkles";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import ProjectCard from "../portfolio/ProjectCard";

const ProjectsSection = () => {
  const [activeSkill, setActiveSkill] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activePage, setActivePage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [totalPages, setTotalPages] = useState(1);


  const PROJECTS_PER_PAGE = 4; // 2x2 grid

  useEffect(() => {
    const filtered = activeSkill === "All"
      ? projects
      : projects.filter((project: Project) => project.skills.includes(activeSkill));

    setFilteredProjects(filtered);
    const total = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
    console.log(total, filtered[0])
    if (total > 0) {
      setHoveredProject(filtered[0].id)
    } else {
      setHoveredProject(null)
    }
    setTotalPages(total || 1);
    setActivePage(1);
  }, [activeSkill]);


  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      let idx = (newPage - 1) * PROJECTS_PER_PAGE;
      setHoveredProject(filteredProjects[idx].id);
      setActivePage(newPage);
    }
  };

  const paginatedProjects = filteredProjects.slice(
    (activePage - 1) * PROJECTS_PER_PAGE,
    activePage * PROJECTS_PER_PAGE
  );

  // Determine which project to show on the right side
  const featuredProject = hoveredProject
    ? projects.find(p => p.id === hoveredProject)
    : filteredProjects[0];

  return (
    <section  className= " min-h-screen bg-white dark:bg-black transition-colors duration-300 relative">
      {/* New Animated Gradient Background */}
      <BackgroundBeamsWithCollision className="min-h-screen">
      <SparklesCore
        id="projects-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={20}
        className="w-[90%] h-full absolute"
        particleColor="#888"
      />
      
      <div className="z-10 max-w-7xl mx-auto">
        {/* main titles and header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <TextGenerateEffect
            words="My Projects"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
          />
        </motion.div>


        {/* skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skillCategories.map((skill) => (
            <motion.button
              key={skill}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSkill(skill)}
              className={`z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSkill === skill
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
            >
              {skill}
            </motion.button>
          ))}
        </div>

        {/* below projects */}
        <div className="flex flex-col lg:flex-row gap-8 mt-[16px] ">
          {/* Left side - Skills Tabs and Projects Grid (70%) */}
          <div className="w-full lg:w-7/12">

            {/* Projects Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="wait">
                  {paginatedProjects.length > 0 ? (
                    paginatedProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: hoveredProject === project.id ? 1.03 : 1,
                          backgroundColor: hoveredProject === project.id
                            ? 'rgba(59, 130, 246, 0.1)'
                            : 'var(--bg-color)'
                        }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`z-10 p-[20px] rounded-xl shadow-sm hover:shadow-md transition-all ${hoveredProject === project.id
                          ? 'ring-2 ring-blue-500 dark:ring-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'bg-gray-100 dark:bg-gray-800 border-blue-800 border-2'
                          }`}
                        onClick={() => {
                          setHoveredProject(project.id);
                        }}
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-3">
                          {project.githubUrl && (
                            <HoverBorderGradient
                              containerClassName="rounded-full"
                              as="button"
                              className="dark:bg-black bg-white text-xs flex items-center gap-1 dark:text-white text-zinc-800"
                            >
                              <span>GitHub</span>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                            </HoverBorderGradient>
                          )}
                          {project.liveUrl && (
                            <HoverBorderGradient
                              containerClassName="rounded-full"
                              as="button"
                              className="dark:bg-black bg-white text-xs flex items-center gap-1"
                            >
                              <span>Live Demo</span>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                              </svg>
                            </HoverBorderGradient>
                          )}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-2 py-12 text-center text-gray-500 dark:text-gray-400">
                      No projects found for this category
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {filteredProjects.length > PROJECTS_PER_PAGE && (
                <div className=" flex justify-center items-center gap-4">
                  <button
                    onClick={() => handlePageChange(activePage - 1)}
                    disabled={activePage === 1}
                    className={`z-[99] px-4 py-2 rounded-md ${activePage === 1
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                  >
                    {"<"}
                  </button>
                  <div className="text-gray-700 dark:text-gray-300">
                    Page {activePage} of {totalPages}
                  </div>
                  <button
                    onClick={() => handlePageChange(activePage + 1)}
                    disabled={activePage === totalPages}
                    className={`z-[99] px-4 py-2 rounded-md ${activePage === totalPages
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                  >
                    {">"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Featured Project Card (30%) */}
          <div className="w-full lg:w-5/12 sticky top-12 h-fit flex flex-col justify-center gap-4">
            <AnimatePresence mode="wait">
              {featuredProject ? (
                <motion.div
                  key={featuredProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-12"
                >
                  <BackgroundGradient className="rounded-[22px] h-full p-1 bg-white dark:bg-zinc-900">
                    <ProjectCard project={featuredProject} />
                  </BackgroundGradient>
                </motion.div>
              ) : (
                <BackgroundGradient className="rounded-[22px] h-full p-1 bg-white dark:bg-zinc-900">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 text-center flex flex-col items-center justify-center h-full min-h-[400px]"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="text-6xl mb-4"
                    >
                      👆
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {filteredProjects.length === 0
                        ? "No projects available"
                        : "click on a project"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {filteredProjects.length === 0
                        ? "There are no projects in this category"
                        : "Details will appear here when you click on a project"}
                    </p>
                  </motion.div>
                </BackgroundGradient>
              )}
            </AnimatePresence>
            <div className="text-center z-10 text-lg text-green-600 dark:text-green-300"> {"**Click on project to see full decription**"} </div>
          </div>
        </div>
      </div>
      
      </BackgroundBeamsWithCollision>
    </section>
  );
};


export default ProjectsSection;