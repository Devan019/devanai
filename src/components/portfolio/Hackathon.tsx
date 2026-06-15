
import { motion } from 'framer-motion';
import { FiMapPin, FiAward, FiCalendar, FiCode, FiGithub } from 'react-icons/fi';

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
    "title": "Intellicruit - Holboxathon",
    "location": "(Online)",
    "date": "May 2025",
    "problemStatement": "Build an AI-driven recruitment platform that simplifies and personalizes the hiring process for both recruiters and candidates using intelligent automation and LLM-based insights.",
    "projectDescription": "Intellicruit revolutionizes recruitment by empowering HR professionals and job seekers through intelligent automation. It offers AI-powered resume screening, candidate scoring, smart job matching, and personalized career guidance with mock interviews, resume optimization, and skill assessments.",
    "githubLink": "https://github.com/MILANBHADARKA/intellicruit",
    "deployLink": "https://lnkd.in/gY8Hp78n",
    "teamMembers": ["Devan Chauhan", "Jeet Bhuptani", "Milan Bhadarka", "Manil Modi"],
    "technologies": ["Next.js", "FastAPI", "LangChain", "FAISS", "MongoDB", "Clerk", "Cloudinary", "Framer Motion", "Recharts", "Llama3", "Groq", "Sentence Transformers", "OpenCV"],
    "category": "AI Recruitment / CareerTech",
    "award": "Consolation Prize"
  },
  {
    title: "LedgerZero - DUHacks 5.0",
    location: "DDU, Nadiad",
    date: "January 2026",
    problemStatement: "Build a digital payment platform with advanced fraud detection capabilities that goes beyond traditional rule-based systems.",
    projectDescription: "LedgerZero is a full-stack digital payment platform that combines UPI-style transactions with cutting-edge AI/ML fraud detection. Unlike traditional rule-based systems, LedgerZero uses Graph Neural Networks (GNN) to analyze transaction patterns across the entire network in real-time, detecting sophisticated fraud schemes like mule networks, layering, and structuring.",
    githubLink: "https://github.com/Concurrents-org/LedgerZero",
    deployLink: "",
    teamMembers: ["Devan Chauhan"],
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "Kafka", "SQS", "SNS", "RDS", "Redis", "AWS"],
    category: "FinTech",
    award: "3rd Prize"
  }
];

// Hackathon Card Component
const HackathonCard = ({ title, location, date, projectDescription, technologies, award, githubLink }: Hackathon) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-xl p-6 flex flex-col transition-all duration-300 relative"
      style={{
        backgroundColor: 'var(--portfolio-card)',
        border: '1px solid var(--portfolio-card-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--portfolio-accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--portfolio-card-border)';
      }}
    >
      {/* GitHub Icon */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 transition-colors"
          style={{ color: 'var(--portfolio-text-secondary)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--portfolio-accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--portfolio-text-secondary)'; }}
        >
          <FiGithub className="w-6 h-6" />
        </a>
      )}

      {/* Header with Award Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: 'var(--portfolio-text)' }}
          >
            {title}
          </h3>
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: 'var(--portfolio-text-secondary)' }}
          >
            <FiMapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div
            className="flex items-center gap-2 text-sm mt-1"
            style={{ color: 'var(--portfolio-text-secondary)' }}
          >
            <FiCalendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {award && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-sm font-semibold mt-4"
            style={{
              backgroundColor: 'var(--portfolio-accent)',
            }}
          >
            <FiAward className="w-4 h-4" />
            <span>{award}</span>
          </motion.div>
        )}
      </div>

      {/* Description */}
      <div className="flex-1 mb-4">
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--portfolio-text-secondary)' }}
        >
          {projectDescription}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-3">
          <FiCode className="w-4 h-4" style={{ color: 'var(--portfolio-accent)' }} />
          <h4
            className="text-sm font-semibold"
            style={{ color: 'var(--portfolio-text-secondary)' }}
          >
            Technologies
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full"
              style={{
                backgroundColor: 'var(--portfolio-accent-soft)',
                color: 'var(--portfolio-accent)',
                border: '1px solid var(--portfolio-accent-border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const HackathonsPage = () => {
  return (
    <div
      className="max-w-full min-h-screen relative"
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

      <div className="min-h-screen flex justify-center items-center relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
              style={{ color: 'var(--portfolio-text)' }}
            >
              My Hackathon Journey
            </h1>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--portfolio-text-secondary)' }}
            >
              (Attend 5+ hackathons)
            </p>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--portfolio-text-secondary)' }}
            >
              Showcasing innovative projects from hackathons around the world
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathonsData.map((hackathon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
              >
                <HackathonCard {...hackathon} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage;