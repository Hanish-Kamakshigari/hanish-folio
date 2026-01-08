"use client";

import React, { useState } from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio built using Next.js and Tailwind CSS with modern UI, animations, and optimized performance.",
    image: "/projects/portfolio.png",
    github: "https://github.com/Hanish-Kamakshigari",
    live: "https://hanish-folio.vercel.app",
  },
  {
    title: "Fire Weather Index using Machine Learning",
    description:
      "Machine learning model to predict fire weather conditions using historical climate data and deployed using Flask.",
    image: "/projects/FWI.png",
    github: "https://github.com/Hanish-Kamakshigari",
  },
  {
    title: "Version Control System",
    description:
      "Hands-on experience with Git and GitHub including branching, rebasing, and collaborative workflows.",
    image: "/projects/VCS.png",
    github: "https://github.com/Hanish-Kamakshigari",
  },
];

export function StickyScrollRevealDemo() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-black py-24">
      {/* Heading */}
      <h2 className="mb-20 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Projects
      </h2>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block px-6">
        <div className="max-w-[1400px] mx-auto">
          <StickyScroll
            content={projects.map((project) => ({
              title: project.title,
              description: project.description,
              content: (
                <div
                  className="relative mx-auto w-full max-w-xl aspect-[4/3] overflow-hidden cursor-pointer "
                  onClick={() => setOpenImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ),
            }))}
          />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-4 space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <img
              src={project.image}
              alt={project.title}
              onClick={() => setOpenImage(project.image)}
              className="w-full aspect-[16/9] rounded-xl object-cover cursor-pointer"
            />

            <h3 className="text-lg font-bold text-white">
              {project.title}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="rounded-lg border border-white px-4 py-2 text-sm text-white"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= FULLSCREEN MODAL ================= */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
