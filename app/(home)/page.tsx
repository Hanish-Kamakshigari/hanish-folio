'use client'

import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Skills from "./components/Skills"
import Galaxy from '../../components/Galaxy'

export default function Home() {
  return (
    <div className="relative bg-black overflow-hidden">

      {/* 🌌 GALAXY BACKGROUND (FULL PAGE) */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.9}
          saturation={0.0}
          hueShift={240}
        />
      </div>

      {/* 🌑 OPTIONAL DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/40 z-10 pointer-events-none"></div>

      {/* 🔝 PAGE CONTENT */}
      <div className="relative z-20">

        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>

        <Herosection />

        <Skills />

      </div>
    </div>
  )
}
