export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  skills: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevPro",
    description: "Built a platform that helps developers practice backend engineering by solving real-world challenges and executing applications in isolated environments with database integration. Designed a scalable execution system using Redis job queues, WebSockets, and distributed workers for asynchronous code execution, real-time logs, and automated test-case evaluation. Engineered secure sandboxed execution with Docker containers, Traefik-powered live preview URLs, rate limiting, and idempotent request handling.",
    tags: ["Backend", "Docker", "Microservices", "AWS", "Redis"],
    skills: ["Next.js", "TypeScript", "Java", "Spring Boot", "Postgres", "Docker"],
    imageUrl: "/images/projects/devpro.jpg",
    githubUrl: "https://github.com/devpro-labs",
    liveUrl: "https://devpro-labs.tech"
  },
  {
    id: 2,
    title: "ZennVid",
    description: "A full-stack AI platform for generating, processing, and serving multimedia content (video, audio, text) with advanced AI/ML capabilities.",
    tags: ["AI", "Video", "TTS", "SadTalker", "Magic Video", "Whisper"],
    skills: ["Next.js", "Express", "Node.js", "MongoDB", "Python", "TypeScript"],
    imageUrl: "/images/projects/zennvid.jpg",
    githubUrl: "https://github.com/Devan019/ZennVid"
  },
  {
    id: 3,
    title: "AI Learning Platform",
    description: "An interactive platform offering AI courses, quizzes, and chatbot assistance.",
    tags: ["AI", "Learning", "Chatbot"],
    skills: ["React", "Spring Boot", "Java", "Postgres"],
    imageUrl: "/images/projects/ai-learning.jpg",
    githubUrl: "https://github.com/Devan019/AI-learning-platform",
    liveUrl: "https://ai-learning-platform-zeta.vercel.app/"
  },
  {
    id: 4,
    title: "Peer-to-Peer Video Call App",
    description: "A real-time video calling application using WebRTC and React.",
    tags: ["WebRTC", "Video Call", "Real-time"],
    skills: ["React", "JavaScript"],
    imageUrl: "/images/projects/peer-video.jpg",
    githubUrl: "https://github.com/Devan019/peer-peer-videocall",
    liveUrl: "https://omegal-eight.vercel.app/"
  },
  {
    id: 5,
    title: "Uber Clone",
    description: "A clone of the Uber application with ride-booking features.",
    tags: ["Clone", "Transportation", "React"],
    skills: ["React", "JavaScript", "CSS"],
    imageUrl: "/images/projects/uber-clone.jpg",
    githubUrl: "https://github.com/Devan019/Uber-clone"
  },
  {
    id: 6,
    title: "SmartScout",
    description: "A Django-based application for employee and manager management.",
    tags: ["Management", "Django", "Admin Panel"],
    skills: ["Django", "Python", "HTML", "CSS"],
    imageUrl: "/images/projects/smartscout.jpg",
    githubUrl: "https://github.com/Devan019/SmartScoutDeploy",
    liveUrl: "https://smartscout.onrender.com"
  }
];

export const skillCategories = [
  "All",
  "Java",
  "Python",
  "Next.js",
  "React",
  "Django",
  "Postgres",
  "TypeScript",
  "Spring Boot",
  "Docker"
];
