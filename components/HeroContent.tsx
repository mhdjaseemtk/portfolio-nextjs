'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function HeroContent() {
  const container = useRef(null);

  // Optional: Add a subtle entry animation for the text once loaded
  useGSAP(() => {
    gsap.from(".hero-anim", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.5 // Wait for curtain to lift
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[#f5f5f0] px-8 md:px-12 py-8 font-mono text-[#1a1a1a] overflow-hidden">

      {/* HEADER */}
      <header className="hero-anim flex items-start justify-between text-[11px] tracking-wider mb-24 relative z-50">
        <div className="text-[13px] font-bold leading-tight">
          JASEEM<br />TK
        </div>

        {/* Hidden on small mobile, visible on larger screens */}
        <nav className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2 top-0">
          <span className="cursor-pointer hover:text-gray-500">[ ABOUT ME ]</span>
          <span className="cursor-pointer hover:text-gray-500">[ WORKS ]</span>
          <span className="cursor-pointer hover:text-gray-500">[ SERVICES ]</span>
          <span className="cursor-pointer hover:text-gray-500">[ CONNECT ]</span>
        </nav>

        <a href="#contact" className="group flex items-center gap-1">
          <span className="border-b border-black pb-0.5 group-hover:opacity-70 transition-opacity">
            CONTACT ME
          </span>
          <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
        </a>
      </header>

      {/* HERO SECTION */}
      <div className="relative w-full max-w-[1400px] mx-auto">

        {/* SMALL FLOATING YEAR */}
        <div className="hero-anim absolute top-[-20px] left-1 text-[10px] tracking-[0.2em] font-medium">
          2,006
        </div>

        <h1 className="font-sans font-black text-6xl md:text-[13vw] tracking-[-0.04em] text-center md:text-left md:ml-[-10px] uppercase text-[#0a0a0a]">
          SOFTWARE ENGINEER
        </h1>

        {/* "BASED IN" - Positioned relative to title end */}
        <div className="hero-anim absolute top-[8vw] right-0 md:right-[10%] text-[9px] tracking-[0.35em] font-light z-0 hidden md:block">
          BASED IN INDIA
        </div>

        {/* CENTRAL CONTENT GRID */}
        <div className="relative z-10 flex flex-col items-center mt-[-8vw] md:mt-[-10vw]">

          <div className="flex flex-col md:flex-row items-end gap-8">

            {/* LEFT LIST - Positioned to left of image */}
            <div className="hero-anim text-[11px] leading-7 tracking-wide md:-mb-12 md:mr-4 order-2 md:order-1 self-start md:self-end">
              <p>/ FRONTEND ENGINEERING</p>
              <p>/ BACKEND ARCHITECTURE</p>
              <p>/ FULL STACK DEVELOPMENT</p>
            </div>

            {/* CENTER IMAGE - Overlapping the text */}
            <div className="hero-anim relative order-1 md:order-2">
              {/* Shadow Box */}
              <div className="w-[260px] h-[340px] md:w-[300px] md:h-[400px] bg-[#9ca3af] absolute left-[-20px] top-[20px] z-0"></div>
              {/* Image Container */}
              <div className="w-[260px] h-[340px] md:w-[300px] md:h-[400px] bg-gray-300 relative z-10 overflow-hidden">
                {/* Replace src with your actual image */}
                <img
                  src="/api/placeholder/300/400"
                  alt="Jaseem TK Portrait"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

          </div>

          {/* CENTER DESCRIPTION - Below Image */}
          <div className="hero-anim text-[10px] uppercase tracking-[0.08em] leading-[1.6] mt-12 text-center max-w-md">
            I&apos;M AN EXPERIENCED FULL STACK DEVELOPER,<br />
            BUILDING ROBUST AND SCALABLE APPLICATIONS FOR<br />
            BUSINESSES OF ALL SIZES
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-20 md:mt-12 flex flex-col md:flex-row justify-between items-end relative h-32">

          {/* EMAIL */}
          <div className="hero-anim text-[11px] leading-relaxed mb-8 md:mb-0">
            <div className="mb-2 tracking-[0.08em] text-gray-500">AVAILABLE FOR COLLABORATION ↘</div>
            <a href="mailto:mhdjaseemtk@gmail.com" className="font-bold border-b border-black pb-0.5 hover:opacity-70 transition-opacity">
              mhdjaseemtk@gmail.com
            </a>
          </div>

          {/* RECENT WORK */}
          <div className="hero-anim text-right">
            <div className="text-[10px] mb-2 tracking-[0.15em] text-gray-500">RECENT WORK ↘</div>
            <div className="text-[28px] md:text-[36px] font-sans font-black tracking-[-0.03em] uppercase leading-none">
              RAINEARCHITECTS
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
