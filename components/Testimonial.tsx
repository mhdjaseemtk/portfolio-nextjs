"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonialsData = [
    {
        id: 1,
        text: "Jaseem completely transformed our internal dashboard. His ability to architect a scalable backend while delivering a flawless, intuitive React frontend is remarkably rare. He delivered the project ahead of schedule and the code quality was exceptional.",
        author: "Sarah Jenkins",
        role: "VP of Engineering at TechCorp",
        avatar: "/api/placeholder/100/100"
    },
    {
        id: 2,
        text: "Working with Jaseem was an absolute pleasure. He took our rough concept and built a secure, high-performing full-stack SaaS platform from the ground up. His deep understanding of modern web architecture sets him apart from other developers.",
        author: "Marcus Aurelius",
        role: "Founder at NovaStart Labs",
        avatar: "/api/placeholder/100/100"
    }
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
        setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const current = testimonialsData[activeIndex];

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 50 : -50,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 50 : -50,
                opacity: 0
            };
        }
    };

    return (
        <div className="w-full bg-black text-white py-16 px-4 md:px-12 flex flex-col items-center justify-center relative min-h-[60vh] font-sans">

            {/* Container */}
            <div className="max-w-4xl w-full flex flex-col items-center relative">

                {/* Navigation Buttons (Desktop Side, Mobile Top/Bottom or integrated) */}
                {/* Left Arrow */}
                <button
                    onClick={prevTestimonial}
                    className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 md:p-4 rounded-md transition-colors z-10 hidden md:block"
                    aria-label="Previous Testimonial"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextTestimonial}
                    className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 md:p-4 rounded-md transition-colors z-10 hidden md:block"
                    aria-label="Next Testimonial"
                >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                {/* Animated Inner Content */}
                <div className="w-full overflow-hidden relative flex flex-col items-center justify-center min-h-[350px]">
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
                                opacity: { duration: 0.2 }
                            }}
                            className="flex flex-col items-center w-full absolute"
                        >
                            {/* Avatar */}
                            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-10 overflow-hidden rounded-full border-2 border-transparent">
                                <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-80 z-10 pointer-events-none rounded-full" />
                                <img
                                    src={current.avatar}
                                    alt={current.author}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Quote Text */}
                            <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-200 leading-relaxed font-light mb-12 max-w-2xl min-h-[120px] md:min-h-[100px] flex items-center justify-center">
                                {current.text}
                            </p>

                            {/* Quote Icon */}
                            <div className="mb-6 opacity-80">
                                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5 30H0L5 0H19.5L14.5 30ZM35 30H20.5L25.5 0H40L35 30Z" fill="white" />
                                </svg>
                            </div>

                            {/* Author Info */}
                            <div className="text-center font-inter">
                                <h4 className="text-md md:text-lg font-medium text-white mb-1 tracking-wide">
                                    {current.author}
                                </h4>
                                <p className="text-gray-500 text-sm">
                                    {current.role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Navigation (Visible only on small screens) */}
                <div className="flex md:hidden gap-4 mt-10">
                    <button
                        onClick={prevTestimonial}
                        className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-md transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-md transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;
