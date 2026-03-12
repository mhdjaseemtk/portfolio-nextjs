"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ansab from "../public/ansab.png";

const testimonialsData = [
  {
    id: 1,
    text: "Jaseem completely transformed our internal dashboard. His ability to architect a scalable backend while delivering a flawless, intuitive React frontend is remarkably rare. He delivered the project ahead of schedule and the code quality was exceptional.",
    author: "Sarah Jenkins",
    role: "VP of Engineering at TechCorp",
    avatar: ansab,
  },
  {
    id: 2,
    text: "Working with Jaseem was an absolute pleasure. He took our rough concept and built a secure, high-performing full-stack SaaS platform from the ground up. His deep understanding of modern web architecture sets him apart from other developers.",
    author: "Marcus Aurelius",
    role: "Founder at NovaStart Labs",
    avatar: ansab,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const current = testimonialsData[activeIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full bg-black text-white py-4 px-6 flex items-center justify-center">

      <div className="max-w-6xl w-full relative flex flex-col items-center">

        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-4 rounded-md transition hidden md:block"
        >
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-4 rounded-md transition hidden md:block"
        >
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </button>

        <div className="relative w-full flex flex-col items-center justify-center min-h-[450px] overflow-hidden">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute flex flex-col items-center text-center"
            >

              {/* Profile Photo */}
              <div className="relative w-28 h-28 mb-10  mt-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                <Image
                  src={current.avatar}
                  alt={current.author}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-2xl lg:text-4xl leading-[1.4] text-gray-200 font-light mb-12 max-w-4xl">
                {current.text}
              </p>

              {/* Quote Icon */}
              <div className="mb-6 opacity-80">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path
                    d="M14.5 30H0L5 0H19.5L14.5 30ZM35 30H20.5L25.5 0H40L35 30Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Author */}
              <div>
                <h4 className="text-lg font-semibold">{current.author}</h4>
                <p className="text-gray-500 text-sm">{current.role}</p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden gap-4 mt-10">
          <button
            onClick={prevTestimonial}
            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-md"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-md"
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;