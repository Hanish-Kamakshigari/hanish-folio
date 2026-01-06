'use client'
import {
  Code,
  FileCode,
  Braces,
  Atom,
  Wind,
  GitBranch,
  Github,
  Terminal,
  Database,
} from 'lucide-react'
export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FileCode className="text-orange-400" /> },
    { name: 'CSS', icon: <Code className="text-blue-400" /> },
    { name: 'JavaScript', icon: <Braces className="text-yellow-400" /> },
    { name: 'React', icon: <Atom className="text-cyan-400" /> },
    { name: 'Next.js', icon: <Terminal className="text-white" /> },
    { name: 'Tailwind CSS', icon: <Wind className="text-sky-400" /> },
    { name: 'Git', icon: <GitBranch className="text-orange-500" /> },
    { name: 'GitHub', icon: <Github className="text-white" /> },
    { name: 'C', icon: <Code className="text-blue-400" /> },
    { name: 'C++', icon: <Code className="text-indigo-400" /> },
    { name: 'Python', icon: <Terminal className="text-yellow-400" /> },
    { name: 'Data Structures', icon: <Database className="text-green-400" /> },
  ]

  return (
    <section className="relative py-20 px-6 bg-black text-white">
      
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Skills
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Technologies and tools I work with
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center gap-3
                       rounded-xl border border-white/10 bg-white/5
                       py-6 text-lg font-medium
                       hover:bg-white/10 transition"
          >
            <div className="text-3xl group-hover:scale-110 transition">
              {skill.icon}
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
