"use client";

import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";

type Project = {
  title: string;
  description: string;
  content: React.ReactNode;
};

const content: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a responsive personal portfolio using Next.js and Tailwind CSS, featuring animated backgrounds, interactive UI components, and structured sections for skills and projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-sm">
        Personal Portfolio
      </div>
    ),
  },
  {
    title: "Fire Weather Index using Machine Learning",
    description:
      "Developed a machine learning model to predict fire weather conditions using historical data and current weather patterns. Evaluated with accuracy, precision, and recall, and deployed as a Flask web application.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm">
        Fire Weather Index
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Implemented Git and GitHub workflows to ensure seamless collaboration, efficient branching, real-time updates, and conflict resolution across projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm">
        Version Control
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <section className="w-full bg-black py-20">
      <h2 className="mb-16 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Projects
      </h2>

      {/* ✅ Desktop / Tablet (Sticky Scroll) */}
      <div className="hidden md:block">
        <StickyScroll content={content} />
      </div>

      {/* ✅ Mobile (Same layout, no sticky) */}
      <div className="md:hidden space-y-20 px-4">
        {content.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center gap-6"
          >
            {/* Left: Text */}
            <div>
              <h3 className="mb-3 text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>

            {/* Right: Card */}
            <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-sm">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
