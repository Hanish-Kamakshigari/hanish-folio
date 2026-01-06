"use client";

import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a responsive personal portfolio using Next.js and Tailwind CSS, featuring animated backgrounds, interactive UI components, and structured sections for skills and projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
        Personal Portfolio
      </div>
    ),
  },
  // other projects...
];

export function StickyScrollRevealDemo() {
  return (
    <section className="w-full bg-black py-20">
      <h2 className="mb-16 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Projects
      </h2>

      {/* ✅ Desktop Sticky Scroll */}
      <div className="hidden md:block">
        <StickyScroll content={content} />
      </div>

      {/* ✅ Mobile – SAME layout without sticky */}
      <div className="md:hidden space-y-20 px-4">
        {content.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-6 items-center"
          >
            {/* Left text */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>

            {/* Right card */}
            <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-sm">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
