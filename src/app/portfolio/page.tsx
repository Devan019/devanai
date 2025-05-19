import ContactPage from "@/components/portfolio/ContactMe";
import HackathonsPage from "@/components/portfolio/Hackathon";
import Profile from "@/components/portfolio/Profile";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Skills from "@/components/portfolio/Skill";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div id="profile">
        <Profile />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="hackathon">
        <HackathonsPage />
      </div>
      <div id="contact" className="relative ">
        <ContactPage />
      </div>
    </div>
  );
}

export default page