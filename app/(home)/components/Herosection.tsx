'use client'

import Link from 'next/link'
import Image from 'next/image'
import rat from '../../../public/rat.png'

export default function Herosection() {
  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden pointer-events-none">

      <div className="relative z-10 px-10 sm:px-16 lg:px-80 pt-20 sm:pt-40 lg:pt-50 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* LEFT: TEXT */}
        <div className="space-y-8 text-center lg:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            Nice to meet you <br />
            <span className="underline underline-offset-8 decoration-green-500">
              I&apos;m Hanish
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            I’m a core Computer Science Engineering student with a strong foundation in programming
            and hands-on experience in front-end web development.
          </p>
          

          {/* ✅ clickable */}
          <Link
            href="mailto:hanishkamakshigari@gmail.com"
            className="inline-block text-xl sm:text-2xl font-bold underline underline-offset-8 text-white pointer-events-auto"
          >
            Contact Me
          </Link>
        </div>

        {/* RIGHT: RAT IMAGE */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] ">

          {/* Glow */}
          <div className="absolute inset-0 bg-black blur-3xl opacity-60 rounded-full -z-10"></div>

          {/* Image */}
          <Image
            src={rat}
            alt="Rat illustration"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}
