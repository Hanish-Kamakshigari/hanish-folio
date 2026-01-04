'use client'
import React from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mt-5 px-6 py-4 bg-transparent">
      
      {/* Left: Name */}
      <div className="text-white text-2xl font-semibold font-space-grotesk">
        Hanish
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-5">
        
        {/* Instagram */}
        <a
          href="https://github.com/Hanish-Kamakshigari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition"
        >
          <Github size={22} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kamakshigari-hanish-196a23368/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <Linkedin size={22} />
        </a>

        {/* Email */}
        <a
          href="mailto:hanishkamakshigari@gmail.com"
          className="text-white hover:text-green-400 transition"
        >
          <Mail size={22} />
        </a>

      </div>
    </nav>
  );
}
