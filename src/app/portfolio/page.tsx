"use client"
import ContactPage from "@/components/portfolio/ContactMe";
import HackathonsPage from "@/components/portfolio/Hackathon";
import Profile from "@/components/portfolio/Profile";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Skills from "@/components/portfolio/Skill";

const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth" style={{ backgroundColor: 'var(--portfolio-bg)' }}>
      <div id="profile" className="min-h-screen relative">
        <Profile />
      </div>
      <div id="projects" className="min-h-screen relative">
        <ProjectsSection />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="hackathon" className="relative min-h-screen ">
        <HackathonsPage />
      </div>
      <div id="contact" className="relative ">
        <ContactPage />
      </div>
      
    </div>
  );
}

export default page