"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, skillCategories, Project } from "@/data/projects.data";
import ProjectCard from "../portfolio/ProjectCard";
import { useMediaQuery } from "@/hooks/use-media-query";

const ProjectsSection = () => {
  const [activeSkill, setActiveSkill] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activePage, setActivePage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Adjust projects per page based on screen size
  const PROJECTS_PER_PAGE = isMobile ? 1 : isTablet ? 2 : 4;

  useEffect(() => {
    const filtered = activeSkill === "All"
      ? projects
      : projects.filter((project: Project) => project.skills.includes(activeSkill));

    setFilteredProjects(filtered);
    const total = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
    if (total > 0 && filtered.length > 0) {
      setHoveredProject(filtered[0].id);
    } else {
      setHoveredProject(null);
    }
    setTotalPages(total || 1);
    setActivePage(1);
  }, [activeSkill, PROJECTS_PER_PAGE]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const idx = (newPage - 1) * PROJECTS_PER_PAGE;
      if (filteredProjects[idx]) {
        setHoveredProject(filteredProjects[idx].id);
      }
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
    <section
      className="min-h-screen max-w-full relative transition-colors duration-300"
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

      <div className="z-10 relative mx-auto px-4 py-8">
        {/* main titles and header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold"
          style={{ color: 'var(--portfolio-text)' }}
        >
          My Projects
        </motion.div>

        {/* skills */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {skillCategories.map((skill) => (
            <motion.button
              key={skill}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSkill(skill)}
              className="z-10 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors"
              style={{
                backgroundColor: activeSkill === skill ? 'var(--portfolio-accent)' : 'var(--portfolio-surface)',
                color: activeSkill === skill ? '#ffffff' : 'var(--portfolio-text-secondary)',
                border: `1px solid ${activeSkill === skill ? 'var(--portfolio-accent)' : 'var(--portfolio-card-border)'}`,
              }}
            >
              {skill}
            </motion.button>
          ))}
        </div>

        {/* below projects */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Left side - Projects Grid */}
          <div className="w-full lg:w-1/2">
            {/* Projects Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <AnimatePresence mode="wait">
                  {paginatedProjects.length > 0 ? (
                    paginatedProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: hoveredProject === project.id && !isTablet ? 1.02 : 1,
                        }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="z-10 p-4 md:p-5 rounded-xl transition-all cursor-pointer"
                        style={{
                          backgroundColor: hoveredProject === project.id && !isTablet
                            ? 'var(--portfolio-accent-soft)'
                            : 'var(--portfolio-card)',
                          border: hoveredProject === project.id && !isTablet
                            ? '2px solid var(--portfolio-accent)'
                            : '2px solid var(--portfolio-card-border)',
                        }}
                        onClick={() => {
                          setHoveredProject(project.id);
                          if (isTablet) {
                            document.getElementById('project-details')?.scrollIntoView({
                              behavior: 'smooth'
                            });
                          }
                        }}
                        whileHover={{
                          scale: isTablet ? 1 : 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <h3
                          className="text-lg md:text-xl font-semibold"
                          style={{ color: 'var(--portfolio-text)' }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="mt-2 text-sm md:text-base line-clamp-2"
                          style={{ color: 'var(--portfolio-text-secondary)' }}
                        >
                          {project.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1 md:gap-2">
                          {project.tags.slice(0, isMobile ? 2 : 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: 'var(--portfolio-accent-soft)',
                                color: 'var(--portfolio-accent)',
                                border: '1px solid var(--portfolio-accent-border)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > (isMobile ? 2 : 3) && (
                            <span
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: 'var(--portfolio-surface)',
                                color: 'var(--portfolio-text-secondary)',
                              }}
                            >
                              +{project.tags.length - (isMobile ? 2 : 3)}
                            </span>
                          )}
                        </div>
                        <div className="mt-3 flex gap-2 md:gap-3">
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <button
                                className="px-3 py-1.5 text-xs rounded-full font-medium transition-colors"
                                style={{
                                  backgroundColor: 'var(--portfolio-surface)',
                                  color: 'var(--portfolio-text)',
                                  border: '1px solid var(--portfolio-card-border)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
                                  e.currentTarget.style.color = 'var(--portfolio-accent)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = 'var(--portfolio-card-border)';
                                  e.currentTarget.style.color = 'var(--portfolio-text)';
                                }}
                              >
                                <span className="flex items-center gap-1">
                                  GitHub
                                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                  </svg>
                                </span>
                              </button>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <button
                                className="px-3 py-1.5 text-xs rounded-full font-medium transition-colors"
                                style={{
                                  backgroundColor: 'var(--portfolio-accent)',
                                  color: '#ffffff',
                                  border: '1px solid var(--portfolio-accent)',
                                }}
                              >
                                <span className="flex items-center gap-1">
                                  Live
                                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                  </svg>
                                </span>
                              </button>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div
                      className="col-span-2 py-12 text-center"
                      style={{ color: 'var(--portfolio-text-secondary)' }}
                    >
                      No projects found for this category
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {filteredProjects.length > PROJECTS_PER_PAGE && (
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => handlePageChange(activePage - 1)}
                    disabled={activePage === 1}
                    className="z-[99] px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors"
                    style={{
                      backgroundColor: activePage === 1 ? 'var(--portfolio-surface)' : 'var(--portfolio-accent)',
                      color: activePage === 1 ? 'var(--portfolio-text-secondary)' : '#ffffff',
                      cursor: activePage === 1 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {"<"}
                  </button>
                  <div
                    className="text-sm md:text-base"
                    style={{ color: 'var(--portfolio-text-secondary)' }}
                  >
                    Page {activePage} of {totalPages}
                  </div>
                  <button
                    onClick={() => handlePageChange(activePage + 1)}
                    disabled={activePage === totalPages}
                    className="z-[99] px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base transition-colors"
                    style={{
                      backgroundColor: activePage === totalPages ? 'var(--portfolio-surface)' : 'var(--portfolio-accent)',
                      color: activePage === totalPages ? 'var(--portfolio-text-secondary)' : '#ffffff',
                      cursor: activePage === totalPages ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {">"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Featured Project Card */}
          {!isMobile && (
            <div
              id="project-details"
              className="w-full lg:w-1/2 sticky top-12 h-fit flex flex-col justify-center gap-4"
            >
              <AnimatePresence mode="wait">
                {featuredProject ? (
                  <motion.div
                    key={featuredProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={isTablet ? '' : 'mt-12'}
                  >
                    <div
                      className="rounded-2xl p-[2px]"
                      style={{
                        background: 'linear-gradient(135deg, var(--portfolio-accent), var(--portfolio-card-border))',
                      }}
                    >
                      <div className="rounded-[14px] overflow-hidden" style={{ backgroundColor: 'var(--portfolio-card)' }}>
                        <ProjectCard project={featuredProject} />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 md:p-8 rounded-xl text-center flex flex-col items-center justify-center h-full min-h-[300px] md:min-h-[400px]"
                    style={{
                      backgroundColor: 'var(--portfolio-card)',
                      border: '1px solid var(--portfolio-card-border)',
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-4xl md:text-6xl mb-3 md:mb-4"
                    >
                      👆
                    </motion.div>
                    <h3
                      className="text-lg md:text-xl font-semibold mb-2"
                      style={{ color: 'var(--portfolio-text)' }}
                    >
                      {filteredProjects.length === 0
                        ? "No projects available"
                        : "Select a project"}
                    </h3>
                    <p
                      className="text-sm md:text-base"
                      style={{ color: 'var(--portfolio-text-secondary)' }}
                    >
                      {filteredProjects.length === 0
                        ? "There are no projects in this category"
                        : "Details will appear here"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              {!isTablet && (
                <div
                  className="text-center z-10 text-sm md:text-lg"
                  style={{ color: 'var(--portfolio-accent)' }}
                >
                  {"**Click on project to see full description**"}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile-only project details (appears below projects) */}
        {isMobile && hoveredProject && (
          <div id="project-details" className="mt-6 w-full">
            <AnimatePresence>
              {featuredProject && (
                <motion.div
                  key={`mobile-${featuredProject.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="rounded-2xl p-[2px]"
                    style={{
                      background: 'linear-gradient(135deg, var(--portfolio-accent), var(--portfolio-card-border))',
                    }}
                  >
                    <div className="rounded-[14px] overflow-hidden" style={{ backgroundColor: 'var(--portfolio-card)' }}>
                      <ProjectCard project={featuredProject} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;