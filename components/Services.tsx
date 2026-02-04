"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  // We default to index 1 (Branding) to match the screenshot exactly
  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    {
      title: "UI/UX DESIGNER",
      description: "Creating intuitive user combining deep industry knowledge with innovative techniques.",
    },
    {
      title: "BRANDING",
      description: "Creating intuitive user combining deep industry knowledge with innovative techniques.",
    },
    {
      title: "DEVELOPMENT",
      description: "Creating intuitive user combining deep industry knowledge with innovative techniques.",
    },
    {
      title: "MOTION",
      description: "Creating intuitive user combining deep industry knowledge with innovative techniques.",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 font-sans flex flex-col justify-between relative">
      
      {/* Top Section Label */}
      <div className="mb-8">
        <span className="text-gray-400 text-sm uppercase tracking-widest">(SERVICES)</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Header & Description */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="text-5xl md:text-6xl font-bold uppercase leading-tight mb-8">
            Service Expertise
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
            Combining deep industry knowledge with innovative techniques to deliver standout solutions. Our expertise spans UI/UX design, branding, development, and motion.
          </p>

          {/* Call to Action Button Group */}
          <div className="flex items-center gap-2 mt-auto">
            <button className="bg-white text-black text-sm font-bold uppercase py-4 px-8 tracking-wider hover:bg-gray-200 transition-colors">
              See All Works
            </button>
            <button className="bg-orange-500 text-black p-4 hover:bg-orange-600 transition-colors">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Column: Service List */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-col">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`
                    relative group border-b border-gray-800 transition-all duration-300 ease-in-out cursor-pointer
                    ${isActive ? 'bg-orange-500 border-transparent py-8 px-6 rounded-lg' : 'bg-transparent py-8 px-0'}
                  `}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    
                    {/* Text Content */}
                    <div className="max-w-md">
                      <h3 className={`text-2xl font-bold uppercase mb-2 ${isActive ? 'text-white' : 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Action Button (Changes based on active state) */}
                    <div>
                      {isActive ? (
                        <button className="bg-white text-black flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-transform transform translate-x-0">
                          Discover <ArrowUpRight size={16} />
                        </button>
                      ) : (
                        <button className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider bg-[#1a1a1a] border border-gray-800 hover:border-gray-600 transition-colors">
                          Discover <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section Label (Footer placeholder) */}
      <div className="mt-24">
        <span className="text-gray-400 text-sm uppercase tracking-widest">(TESTIMONIALS)</span>
      </div>

    </div>
  );
};

export default ServicesSection;