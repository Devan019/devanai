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
    title: "AI Learning Platform",
    description: "An interactive platform offering AI courses, quizzes, and chatbot assistance.",
    tags: ["AI", "Learning", "Chatbot"],
    skills: ["React", "Spring Boot", "MySQL"],
    imageUrl: "/images/projects/ai-learning.jpg",
    githubUrl: "https://github.com/Devan019/AI-learning-platform"
  },
  {
    id: 2,
    title: "Peer-to-Peer Video Call App",
    description: "A real-time video calling application using WebRTC and React.",
    tags: ["WebRTC", "Video Call", "Real-time"],
    skills: ["React", "JavaScript"],
    imageUrl: "/images/projects/peer-video.jpg",
    githubUrl: "https://github.com/Devan019/peer-peer-videocall"
  },
  {
    id: 3,
    title: "SmartScout",
    description: "A Django-based application for employee and manager management.",
    tags: ["Management", "Django", "Admin Panel"],
    skills: ["Django", "Python", "HTML", "CSS"],
    imageUrl: "/images/projects/smartscout.jpg",
    githubUrl: "https://github.com/Devan019/SmartScoutDeploy"
  },
  {
    id: 4,
    title: "Motel Management System",
    description: "A C/C++ console application for managing motel operations.",
    tags: ["C++", "Console App", "Management"],
    skills: ["C++", "C"],
    imageUrl: "/images/projects/motel.jpg",
    githubUrl: "https://github.com/Devan019/Motel-Management-system"
  },
  {
    id: 5,
    title: "YouTube Manager Application",
    description: "A Python CLI tool to manage YouTube videos using various storage methods.",
    tags: ["YouTube", "CLI", "SQLite", "MongoDB"],
    skills: ["Python", "SQLite", "MongoDB"],
    imageUrl: "/images/projects/youtube-manager.jpg",
    githubUrl: "https://github.com/Devan019/youtube-manager-application"
  },
  {
    id: 6,
    title: "Gaming Hub",
    description: "A collection of classic games like Snake, Sudoku, and Tic Tac Toe in a web interface.",
    tags: ["Games", "JavaScript", "Frontend"],
    skills: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/images/projects/gaming-hub.jpg",
    githubUrl: "https://github.com/Devan019/Gaming-Hub"
  },
  {
    id: 7,
    title: "Tweets App",
    description: "A web application for creating, updating, and deleting tweets with user authentication.",
    tags: ["Social Media", "Django", "API"],
    skills: ["Python", "Django", "REST"],
    imageUrl: "/images/projects/tweets-app.jpg",
    githubUrl: "https://github.com/Devan019/tweets-app"
  },
  {
    id: 8,
    title: "TodoList",
    description: "A task management application built with React and Next.js.",
    tags: ["Productivity", "Task Management", "Next.js"],
    skills: ["React", "Next.js", "JavaScript"],
    imageUrl: "/images/projects/todolist.jpg",
    githubUrl: "https://github.com/Devan019/TodoList"
  },
  {
    id: 9,
    title: "My CV",
    description: "A personal portfolio website showcasing skills and projects.",
    tags: ["Portfolio", "HTML", "CSS"],
    skills: ["HTML", "CSS"],
    imageUrl: "/images/projects/mycv.jpg",
    githubUrl: "https://github.com/Devan019/mycv"
  },
  {
    id: 10,
    title: "Time Space Calculator",
    description: "A Next.js application for calculating time and space metrics.",
    tags: ["Calculator", "Next.js", "Utility"],
    skills: ["Next.js", "JavaScript", "CSS"],
    imageUrl: "/images/projects/time-space-calculator.jpg",
    githubUrl: "https://github.com/Devan019/time-space-calculater"
  },
  {
    id: 11,
    title: "MyBackend",
    description: "Backend services and APIs for various applications.",
    tags: ["Backend", "API", "Node.js"],
    skills: ["Node.js", "Express", "MongoDB"],
    imageUrl: "/images/projects/mybackend.jpg",
    githubUrl: "https://github.com/Devan019/Mybackend"
  },
  {
    id: 12,
    title: "SyncCode",
    description: "A collaborative coding platform enabling real-time code sharing.",
    tags: ["Collaboration", "Real-time", "Coding"],
    skills: ["JavaScript", "WebSockets", "Node.js"],
    imageUrl: "/images/projects/synccode.jpg",
    githubUrl: "https://github.com/Devan019/SyncCode"
  },
  {
    id: 13,
    title: "Uber Clone",
    description: "A clone of the Uber application with ride-booking features.",
    tags: ["Clone", "Transportation", "React"],
    skills: ["React", "JavaScript", "CSS"],
    imageUrl: "/images/projects/uber-clone.jpg",
    githubUrl: "https://github.com/Devan019/Uber-clone"
  },
  {
    id: 14,
    title: "Wonderlust Airbnb Clone",
    description: "An Airbnb clone showcasing rental listings and booking features.",
    tags: ["Clone", "Travel", "React"],
    skills: ["React", "JavaScript", "CSS"],
    imageUrl: "/images/projects/wonderlust-airbnb.jpg",
    githubUrl: "https://github.com/Devan019/wonderlust-airbnbClone"
  },
  {
    id: 15,
    title: "Music Academy",
    description: "A platform for music learning and tutorials.",
    tags: ["Music", "Education", "TypeScript"],
    skills: ["TypeScript", "React", "Node.js"],
    imageUrl: "/images/projects/music-academy.jpg",
    githubUrl: "https://github.com/Devan019/musicAcademy"
  }
];

export const skillCategories = [
  "All",
  "React",
  "Next.js",
  "Django",
  "Python",
  "MongoDB",
  "SQL",
  "3D Threejs",
  "WebGAME",
  "JavaScript",
  "TypeScript",
  "Express",
  "WebSockets",
  "C++",
  "REST"
];
