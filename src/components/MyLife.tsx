import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MyLife() {
  const fgif = "https://cdn.zennvid.tech/devanai/characters/1st.gif";
  const sgif = "https://cdn.zennvid.tech/devanai/characters/12.gif";

  const timelineData = [
    // 1️⃣ First Year
    {
      title: "First Year College",
      period: "Aug 2023 – May 2024",
      url: sgif,
      content: (
        <div className="">
          <p className="mb-4 w-[75%] text-lg font-normal text-neutral-200">
            Completed my <strong>first year with 9.31 CPI</strong> while exploring
            multiple domains of computer science and development. Built the foundation
            for strong technical and teamwork skills.
          </p>

          <div className="mb-6 space-y-1 text-md text-neutral-300">
            <div>✅ <strong>Skills:</strong> C, C++, Data Structures, Web Dev (PHP, MySQL)</div>
            <div>✅ <strong>Projects:</strong> Hotel Management, Motel Management, Web Games</div>
            <div>✅ <strong>Events:</strong> Tech Symposium, Hackathon Workshop</div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="/portfolio/#skills" className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">View Skills</a>
            <a href="/portfolio/#projects" className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">View Projects</a>
          </div>
        </div>
      ),
    },

    // 3️⃣ GDG Experience
    {
      title: "Joined GDG DDU Web Team",
      period: "Sep 2024 – Present",
      url: fgif,
      content: (
        <div>
          <p className="mb-4 w-[75%] text-lg font-normal text-neutral-200">
            Joined <strong>Google Developer Group (GDG) DDU</strong> as a Web Team Member.
            Collaborated with an amazing team of developers and organized impactful tech events.
          </p>

          <div className="mb-6 space-y-1 text-md text-neutral-300">
           <div>✅ Organized DUHacks 4.0 (6000+ participants)</div>
            <div>✅ Hosted <strong>Google Hack2Skill</strong> explanation program</div>
            <div>✅ Enhanced leadership, teamwork, and public speaking skills</div>
          </div>

          <div className="mt-6">
            <a href="https://gdg.community.dev/gdg-on-campus-dharmsinh-desai-university-nadiad-india/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Visit GDG Page
            </a>
          </div>
        </div>
      ),
    },

    // 4️⃣ Hackathon Win - Intellicruit
    {
      title: "Holboxathon 2025 - Consolation Prize 🏆",
      period: "May 2025",
      url: sgif,
      content: (
        <div>
          <p className="mb-4 w-[75%] text-lg font-normal text-neutral-200">
            Won a <strong>Consolation Prize</strong> at <strong>Holboxathon 2025</strong> for
            our project <strong>Intellicruit - AI-Powered Hiring Platform</strong>, revolutionizing
            recruitment through automation and LLM-based intelligence.
          </p>

          <div className="mb-6 space-y-1 text-md text-neutral-300">
            <div>✅ AI-powered resume screening and candidate scoring</div>
            <div>✅ Personalized job recommendations & mock interviews</div>
            <div>✅ Built using Next.js 15, FastAPI, LangChain, FAISS, MongoDB</div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://github.com/MILANBHADARKA/intellicruit" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              View Code
            </a>
            <a href="https://devfolio.co/projects/intellicruit-8ab9" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              View Devfolio
            </a>
          </div>
        </div>
      ),
    },

    // 5️⃣ Freelance Experience
    {
      title: "Frontend Developer (Freelance) – Techno College, Lucknow",
      period: "June 2025 – July 2025",
      url: fgif,
      content: (
        <div>
          <p className="mb-4 w-[75%] text-lg font-normal text-neutral-200">
            Worked as a <strong>Frontend Developer</strong> for <strong>Techno College, Lucknow</strong>,
            contributing to their official website and internal dashboards for Admissions, Students, Faculty, and Fees.
          </p>

          <div className="mb-6 space-y-1 text-md text-neutral-300">
            <div>✅ Built responsive, accessible dashboards</div>
            <div>✅ Implemented secure RBAC & API integration using TanStack Query</div>
            <div>✅ Used Next.js, TypeScript, TailwindCSS, and Zod for scalable code</div>
            <div>✅ Improved API reliability & UI performance for production</div>
          </div>

          <div className="mt-6">
            <a href="https://tihs.edu.in" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Visit Live Site
            </a>
          </div>
        </div>
      ),
    },

    // 6️⃣ Third Year
    {
      title: "Third Year – Advanced Development & AI Exploration",
      period: "Aug 2025 – Present",
      url: sgif,
      content: (
        <div>
          <p className="mb-4 w-[75%] text-lg font-normal text-neutral-200">
            Currently in <strong>Third Year</strong>, focusing on <strong>AI-driven web development</strong>,
            full-stack applications, and modern frameworks.
          </p>

          <div className="mb-6 space-y-1 text-md text-neutral-300">
            <div>✅ Built <strong>ZennVid</strong> – an AI-based video generation platform (Gemini, Whisper, SadTalker)</div>
            <div>✅ Exploring advanced tools like LangChain, Groq, and Llama3</div>
            <div>✅ Actively participating in GDG and hackathon events</div>
            <div>✅ Expanding knowledge in AI, ML, and software architecture</div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://github.com/Devan019/ZennVid" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              View ZennVid Code
            </a>
            <a href="https://youtu.be/xQMNkiQtlxM" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              Watch Demo
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full py-12 min-h-screen">
      <Timeline data={timelineData} />
    </div>
  );
}
