"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Testimonial from './Testimonial';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    {
      title: "FRONTEND DEVELOPMENT",
      description: "Building responsive, performant, and accessible user interfaces using React and Next.js.",
    },
    {
      title: "BACKEND ARCHITECTURE",
      description: "Designing robust APIs, managing databases, and ensuring secure server-side operations.",
    },
    {
      title: "FULL STACK SOLUTIONS",
      description: "Delivering end-to-end web applications from database design to deployment.",
    },
    {
      title: "SYSTEM OPTIMIZATION",
      description: "Improving application performance, scalability, and code maintainability.",
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-16 font-sans flex flex-col justify-between relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-gray-400 text-sm uppercase tracking-widest">(SERVICES)</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-start"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-8">
            Service Expertise
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
            Combining deep technical knowledge with best practices to deliver robust software solutions. My expertise spans frontend engineering, backend architecture, and full stack development.
          </p>

          <div className="flex items-center gap-2 mt-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToWork}
              className="bg-white text-black text-sm font-bold uppercase py-4 px-8 tracking-wider hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              See All Works
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToWork}
              className="bg-orange-500 text-black p-4 hover:bg-amber-400 transition-colors"
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Service List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex sm:flex-col gap-3 sm:gap-0 overflow-hidden">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  layout
                  className={`
                    relative group border-b border-gray-800 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden min-w-0
                    ${isActive ? 'bg-orange-500 border-transparent py-4 px-3 sm:py-8 sm:px-6 rounded-lg' : 'bg-transparent py-4 px-0 sm:py-8'}
                  `}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="max-w-md min-w-0">
                      <h3 className="text-sm sm:text-xl md:text-2xl font-bold uppercase mb-1 sm:mb-2 text-white break-words">
                        {service.title}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                        {service.description}
                      </p>
                    </div>
                    <div>
                      {isActive ? (
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={scrollToContact}
                          className="bg-white text-black flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm"
                        >
                          Discover <ArrowUpRight size={16} />
                        </motion.button>
                      ) : (
                        <button
                          onClick={scrollToContact}
                          className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider bg-[#1a1a1a] border border-gray-800 hover:border-amber-500 hover:text-amber-500 transition-colors"
                        >
                          Discover <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="hidden md:block mt-20">
        <Testimonial />
      </div>
    </div>
  );
};

export default ServicesSection;
