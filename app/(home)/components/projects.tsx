"use client";
import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a responsive personal portfolio using Next.js and Tailwind CSS, featuring animated backgrounds, interactive UI components, and structured sections for skills and projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black/[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Personal Portfolio
      </div>
    ),
  },
  {
    title: "Fire Weather Index using Machine Learning",
    description:
      "Developed a machine learning model to predict fire weather conditions based on historical data and current weather patterns. The model was trained using a dataset of fire weather indices and was evaluated using various metrics such as accuracy, precision, and recall. The model was then deployed as a web application using Flask and deployed on Heroku.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Machine Learning
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-black">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl mb-5 font-bold text-center">
          Projects
        </h2>
        {/* <p className="mt-4 text-gray-400 text-lg">
          Technologies and tools I work with
        </p> */}
      <StickyScroll content={content} />
    </div>
  );
}
