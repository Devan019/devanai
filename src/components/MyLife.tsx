import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MyLife() {
  const timelineData = [
    {
      title: "First Year College",
      period: "Aug 2023 - May 2024",
      url: "/characters/12.gif",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Completed first year with <strong>9.31 CPI</strong> while exploring various tech domains. Key highlights:
          </p>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ <strong>Skills Learned:</strong> C ,C++, Data Structures, Web Dev Basics with php and mysql
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ <strong>Projects:</strong> Hotel management, Web games, Motel management
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ <strong>Events:</strong> Tech Symposium, Hackathon Workshop
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/college-event-1.jpg"
              alt="College tech fest"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src="/images/first-project.jpg"
              alt="First project screenshot"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="/portfolio/#skills"
              className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              View Skills
            </a>
            <a
              href="/portfolio/#projects"
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "GDG Web team member",
      period: "Sep 2024 - Present",
      url: "/characters/1st.gif",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200">
            As <strong>Google Developer Group (Web Team member )</strong>, organized 5+ tech events with 300+ participants:
          </p>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ Organized <strong>Flutter Festival</strong> with 150+ attendees
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ Hosted <strong>Google Cloud Study Jam</strong> certification program
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ Developed leadership and public speaking skills
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/gdg-event-1.jpg"
              alt="GDG Flutter Festival"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src="/images/gdg-event-2.jpg"
              alt="Cloud Study Jam"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="mt-6">
            <a
              href="https://gdg.community.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Visit GDG Page
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Hackathon Journey",
      period: "Oct 2023 - Jan 2024",
      url: "/characters/12.gif",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Organized <strong>DUHacks 4.0</strong> (500+ participants) and competed in GEC Hackathon:
          </p>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ Built <strong>AI-powered healthcare solution</strong> at GEC Hackathon
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ Managed logistics for DUHacks with 50+ volunteers
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ Won <strong>Best UI/UX Award</strong> for hackathon project
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/hackathon-1.jpg"
              alt="DUHacks 4.0"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src="/images/hackathon-project.jpg"
              alt="Winning project"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="/portfolio/projects"
              className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              View Projects
            </a>
            <a
              href="/portfolio/events"
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              View Events
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Second Year College",
      period: "Aug 2023 - May 2024",
      url: "/characters/1st.gif",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Maintained <strong>9.5 CPI</strong> while diving deeper into development:
          </p>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ <strong>Advanced Skills:</strong> React, Node.js, Firebase, UI/UX
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ <strong>Key Projects:</strong> E-commerce App, AI Chatbot
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              ✅ <strong>Subjects:</strong> Algorithms, DBMS, Computer Networks
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/second-year-project.jpg"
              alt="E-commerce project"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src="/images/college-event-2.jpg"
              alt="Tech seminar"
              className="h-40 w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="/portfolio/skills"
              className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              View Skills
            </a>
            <a
              href="/portfolio/achievements"
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              View Achievements
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full py-12  min-h-screen">
      <Timeline data={timelineData} />
    </div>
  );
}
