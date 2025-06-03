// hackathons.ts

// types/hackathon.d.ts
export interface Hackathon {
  title: string;
  location: string;
  date: string;
  problemStatement: string;
  projectDescription: string;
  githubLink: string;
  deployLink: string;
  teamMembers: string[];
  technologies: string[];
  imageUrl?: string; // Make optional since it's not used in the card
  category?: string; // Make optional since it's not used in the card
  award?: string;
  duration?: string;
}

export const hackathonsData: Hackathon[] = [
  {
    "title": "Hack The Spring 2024",
    "location": "GEC Gandhinagar, Gujarat",
    "date": "March 2024",
    "problemStatement": "Create an intelligent learning platform that adapts to a user's skill level and provides personalized course content.",
    "projectDescription": "We built a Smart AI Learning Platform that generates personalized courses and dynamically adjusts quiz difficulty based on user performance. The platform ensures an adaptive and engaging learning journey for every user.",
    "githubLink": "https://github.com/Devan019/AI-learning-platform.git",
    "deployLink": "",
    "teamMembers": ["Devan", "Hasan", "Chintan", "Jadeja"],
    "technologies": ["React.js", "Tailwind CSS", "Aceternity UI", "Spring Boot", "MySQL", "Postman", "Gemini"],
    "imageUrl": "/hackathon-placeholder.jpg",
    "category": "EdTech"
  },
  {
    "title": "Ingenious Hackathon 2024",
    "location": "Ahmedabad University, Gujarat",
    "date": "April 2024",
    "problemStatement": "Build a fintech solution that assists users in managing and optimizing their investments with AI.",
    "projectDescription": "FinAdvisor is an AI-powered stock market investment platform that helps users enhance their portfolios. It features AI-based stock suggestions, portfolio analysis via charts, and a FinChatBot to answer market-related queries.",
    "githubLink": "https://github.com/Nishant-Dholakia/AiInvestor",
    "deployLink": "https://ai-investor-henna.vercel.app/",
    "teamMembers": ["Devan", "Nishant", "Suryadeep"],
    "technologies": ["Next.js", "Tailwind CSS", "Smart API", "Vantage API", "AngelOne API", "Gemini"],
    "imageUrl": "/hackathon-placeholder.jpg",
    "category": "FinTech"
  },
  {
    "title": "Tic Tac Toe",
    "location": "DAIICT Gandhinagar",
    "date": "May 2024",
    "problemStatement": "Create a smart career advisor that adapts to users' skill levels, market trends, and helps in job-readiness.",
    "projectDescription": "We built an AI-powered career advisor platform that analyzes user skills, conducts quizzes via Gemini LLM, and provides dynamic recommendations including learning paths, jobs, resume tips, and LinkedIn-based networking suggestions. It features automated resume generation, job market analysis, personalized upskilling, and interactive dashboards. Future extensions include gamification, NFT badges, and geolocation-based insights.",
    "githubLink": "https://github.com/MILANBHADARKA/elevance",
    "deployLink": "",
    "teamMembers": ["Devan", "Manil", "Suryadeep", "Milan"],
    "technologies": ["Next.js", "MongoDB", "Gemini LLM", "Tailwind CSS", "Python"],
    "imageUrl": "/hackathon-placeholder.jpg",
    "category": "CareerTech"
  }

]
