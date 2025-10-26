import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiX, FiMapPin, FiAward, FiCalendar, FiCode, FiGithub } from 'react-icons/fi';

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HeroHighlight } from '../ui/hero-highlight';

// Types
interface Hackathon {
  title: string;
  location: string;
  date: string;
  problemStatement: string;
  projectDescription: string;
  githubLink: string;
  deployLink: string;
  teamMembers: string[];
  technologies: string[];
  imageUrl?: string;
  category?: string;
  award?: string;
  duration?: string;
}

// Sample data
const hackathonsData: Hackathon[] = [
  {
    title: "Cognital - Hack The Spring",
    location: "GEC Gandhinagar, Gujarat",
    date: "March 2025",
    problemStatement: "Create an intelligent learning platform that adapts to a user's skill level and provides personalized course content.",
    projectDescription: "We built a Smart AI Learning Platform that generates personalized courses and dynamically adjusts quiz difficulty based on user performance. The platform ensures an adaptive and engaging learning journey for every user.",
    githubLink: "https://github.com/Devan019/AI-learning-platform.git",
    deployLink: "",
    teamMembers: ["Devan", "Hasan", "Chintan", "Jadeja"],
    technologies: ["React.js", "Tailwind CSS", "Aceternity UI", "Spring Boot", "MySQL", "Postman", "Gemini"],
    category: "EdTech"
  },
  {
    "title": "Intellicruit - Holboxathon",
    "location": "(Online)",
    "date": "May 2025",
    "problemStatement": "Build an AI-driven recruitment platform that simplifies and personalizes the hiring process for both recruiters and candidates using intelligent automation and LLM-based insights.",
    "projectDescription": "Intellicruit revolutionizes recruitment by empowering HR professionals and job seekers through intelligent automation. It offers AI-powered resume screening, candidate scoring, smart job matching, and personalized career guidance with mock interviews, resume optimization, and skill assessments.",
    "githubLink": "https://github.com/MILANBHADARKA/intellicruit",
    "deployLink": "https://lnkd.in/gY8Hp78n",
    "teamMembers": ["Devan Chauhan", "Jeet Bhuptani", "Milan Bhadarka", "Manil Modi"],
    "technologies": ["Next.js", "FastAPI", "LangChain", "FAISS", "MongoDB", "Clerk", "Cloudinary", "Framer Motion", "Recharts", "Llama3", "Groq", "Sentence Transformers", "OpenCV",],
    "category": "AI Recruitment / CareerTech",
    "award": "Consolation Prize"
  },
  {
    title: "Elevance - Tic Tac Toe",
    location: "DAIICT Gandhinagar",
    date: "May 2025",
    problemStatement: "Create a smart career advisor that adapts to users' skill levels, market trends, and helps in job-readiness.",
    projectDescription: "We built an AI-powered career advisor platform that analyzes user skills, conducts quizzes via Gemini LLM, and provides dynamic recommendations including learning paths, jobs, resume tips, and LinkedIn-based networking suggestions.",
    githubLink: "https://github.com/MILANBHADARKA/elevance",
    deployLink: "",
    teamMembers: ["Devan", "Manil", "Suryadeep", "Milan"],
    technologies: ["Next.js", "MongoDB", "Gemini LLM", "Tailwind CSS", "Python"],
    category: "CareerTech",
  }
];

// Simple Hackathon Card Component
const HackathonCard = ({ title, location, date, projectDescription, technologies, award, githubLink }: Hackathon) => {
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6  max-w-screen h-[450px] flex flex-col shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 relative "
    >
      {/* GitHub Icon */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FiGithub className="w-6 h-6" />
        </a>
      )}

      {/* Header with Award Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FiMapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
            <FiCalendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {award && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`flex items-center gap-2 px-3 py-2 rounded-full ${award === "Winner"
              ? "bg-gradient-to-r from-yellow-500 to-orange-500"
              : "bg-gradient-to-r from-gray-400 to-gray-500"
              } text-white text-sm font-semibold shadow-lg mt-4`}
          >
            <FiAward className="w-4 h-4" />
            <span>{award}</span>
          </motion.div>
        )}
      </div>

      {/* Description */}
      <div className="flex-1 mb-4">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
          {projectDescription}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-3">
          <FiCode className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-semibold text-gray-300">Technologies</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const HackathonsPage = () => {
  

  const HackathonSkeleton = () => (
    <div className="rounded-xl bg-gray-800 animate-pulse h-[400px] p-6">
      <div className="space-y-4">
        <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-700 rounded"></div>
        <div className="space-y-2 pt-4">
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
        </div>
        <div className="flex gap-2 pt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-6 w-20 bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <HeroHighlight className='max-w-full min-h-screen'>
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-screen mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl  font-extrabold text-white mb-4 ">
              My Hackathon Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              (Attend 5+ hackathons)
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative projects from hackathons around the world
            </p>
          </motion.div>


          {/* Swiper Slider */}
          <div className="relative">
            {hackathonsData.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="!pb-12"
              >
                {hackathonsData.map((hackathon, idx) => (
                  <SwiperSlide key={idx}>
                    <HackathonCard {...hackathon} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="bg-gray-800 rounded-full p-6 mb-4">
                  <FiSearch className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">No hackathons found</h3>
                <p className="text-gray-400 max-w-md">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>

        <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #a855f7 !important;
          background: rgba(31, 41, 55, 0.8) !important;
          backdrop-filter: blur(8px) !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50% !important;
          border: 1px solid rgba(168, 85, 247, 0.3) !important;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }

        .swiper-pagination-bullet {
          background: #a855f7 !important;
          opacity: 0.5 !important;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
      </div>
    </HeroHighlight>
  );
};

export default HackathonsPage;