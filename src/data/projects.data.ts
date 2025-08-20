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
    title: "ZennVid",
    description: "A full-stack AI platform for generating, processing, and serving multimedia content (video, audio, text) with advanced AI/ML capabilities.",
    tags: ["AI", "Video", "TTS", "SadTalker", "Magic Video", "Whisper"],
    skills: ["Next.js", "Express", "Node.js", "MongoDB", "Python", "TypeScript"],
    imageUrl: "/images/projects/zennvid.jpg",
    githubUrl: "https://github.com/Devan019/ZennVid"
  },
  {
    id: 2,
    title: "AI Learning Platform",
    description: "An interactive platform offering AI courses, quizzes, and chatbot assistance.",
    tags: ["AI", "Learning", "Chatbot"],
    skills: ["React", "Spring Boot", "Java", "Postgres"],
    imageUrl: "/images/projects/ai-learning.jpg",
    githubUrl: "https://github.com/Devan019/AI-learning-platform",
    liveUrl : "https://ai-learning-platform-zeta.vercel.app/"
  },
  {
    id: 3,
    title: "Uber Clone",
    description: "A clone of the Uber application with ride-booking features.",
    tags: ["Clone", "Transportation", "React"],
    skills: ["React", "JavaScript", "CSS"],
    imageUrl: "/images/projects/uber-clone.jpg",
    githubUrl: "https://github.com/Devan019/Uber-clone"
  },
  {
    id: 4,
    title: "Peer-to-Peer Video Call App",
    description: "A real-time video calling application using WebRTC and React.",
    tags: ["WebRTC", "Video Call", "Real-time"],
    skills: ["React", "JavaScript"],
    imageUrl: "/images/projects/peer-video.jpg",
    githubUrl: "https://github.com/Devan019/peer-peer-videocall",
    liveUrl : "https://omegal-eight.vercel.app/"
  },
  {
    id: 5,
    title: "SmartScout",
    description: "A Django-based application for employee and manager management.",
    tags: ["Management", "Django", "Admin Panel"],
    skills: ["Django", "Python", "HTML", "CSS"],
    imageUrl: "/images/projects/smartscout.jpg",
    githubUrl: "https://github.com/Devan019/SmartScoutDeploy",
    liveUrl: "https://smartscout.onrender.com"
  },
  {
    id: 6,
    title: "Motel Management System",
    description: "A C/C++ console application for managing motel operations.",
    tags: ["C++", "Console App", "Management"],
    skills: ["C++", "C"],
    imageUrl: "/images/projects/motel.jpg",
    githubUrl: "https://github.com/Devan019/Motel-Management-system"
  },
  {
    id: 8,
    title: "Gaming Hub",
    description: "A collection of classic games like Snake, Sudoku, and Tic Tac Toe in a web interface.",
    tags: ["Games", "JavaScript", "Frontend"],
    skills: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/images/projects/gaming-hub.jpg",
    githubUrl: "https://github.com/Devan019/Gaming-Hub"
  },
  {
    id: 13,
    title: "Wonderlust Airbnb Clone",
    description: "An Airbnb clone showcasing rental listings and booking features.",
    tags: ["Clone", "Travel", "React"],
    skills: ["React", "JavaScript", "CSS"],
    imageUrl: "/images/projects/wonderlust-airbnb.jpg",
    githubUrl: "https://github.com/Devan019/wonderlust-airbnbClone",
    liveUrl : "https://wonderlust-hjft.onrender.com"
  },
  {
    id: 14,
    title: "Music Academy",
    description: "A platform for music learning and tutorials.",
    tags: ["Music", "Education", "TypeScript"],
    skills: ["TypeScript", "React", "Node.js"],
    imageUrl: "/images/projects/music-academy.jpg",
    githubUrl: "https://github.com/Devan019/musicAcademy"
  },
  {
    id: 15,
    title: "Snip",
    description: "A modern snippet manager for developers, supporting syntax highlighting and database persistence.",
    tags: ["Snippets", "Code Management", "Prisma", "Postgres"],
    skills: ["Next.js", "Prisma", "Postgres", "TypeScript"],
    imageUrl: "/images/projects/snip.jpg", // Add this asset
    githubUrl: "https://github.com/Devan019/snip"
  },
  {
    id: 16,
    title: "AI Code Editor",
    description: "An AI-assisted code editor that helps developers with real-time suggestions, completions, and debugging support.",
    tags: ["AI", "Code Editor", "Developer Tools"],
    skills: ["Next.js", "Prisma", "Postgres", "TypeScript", "AI"],
    imageUrl: "/images/projects/ai-code-editor.jpg", // Add this asset
    githubUrl: "https://github.com/Devan019/ai-code-editor"
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
  "Prisma",
  "TypeScript"
];
