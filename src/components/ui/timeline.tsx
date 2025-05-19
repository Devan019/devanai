"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  period: string;
  content: React.ReactNode;
  highlight?: string;
  skills?: string[];
  url?: string; // Add character image to each timeline entry
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Adjusted offsets for better detection
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only update when timeline is in view
    if (latest > 0.2 && latest < 0.85) {
      setIsInView(true);
      const newIndex = Math.min(
        data.length - 1,
        Math.floor(latest * data.length)
      );
      setActiveIndex(newIndex);
    } else {
      setIsInView(false);
    }
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10 relative"
      ref={containerRef}
    >
      
        {/* Single fixed character image that updates based on activeIndex */}
        {isInView && data[activeIndex]?.url && (
          <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden xl:block w-64 h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={data[activeIndex].url}
                  alt={`Character at ${data[activeIndex]?.title}`}
                  width={256}
                  height={256}
                  className="object-contain"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white"
                >
                  <h3 className="font-bold">{data[activeIndex]?.title}</h3>
                  <p className="text-sm">{data[activeIndex]?.period}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            My Evolution Journey
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            From early beginnings to current achievements - a visual story of growth.
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 gap-6 md:gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-purple-500">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      backgroundColor: ["#ddd", "#9333ea", "#ddd"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="h-4 w-4 rounded-full bg-purple-500 p-2"
                  />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-14 md:pl-4 w-full">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-700 dark:text-neutral-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      {item.period}
                    </p>
                    {item.highlight && (
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4 border-l-4 border-purple-500">
                        <p className="font-medium text-purple-800 dark:text-purple-200">
                          {item.highlight}
                        </p>
                      </div>
                    )}
                    <div className="prose dark:prose-invert">{item.content}</div>
                    {item.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Animated timeline track */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
    </div>
  );
};