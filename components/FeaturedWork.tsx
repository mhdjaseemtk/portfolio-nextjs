import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeaturedWork = () => {
  return (
    <section className="bg-black min-h-screen p-8 md:p-12 font-sans text-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-gray-500 text-sm tracking-wider uppercase">(Featured Work)</h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        
        {/* Card 1: Hero Products (Left, Narrower) */}
        <Card 
          colSpan="md:col-span-5"
          title="HERO PRODUCTS"
          category="E-commerce website"
          year="2022"
          imgSrc="https://images.unsplash.com/photo-1556656793-0275bada8d74?q=80&w=1920&auto=format&fit=crop" 
          // Note: Replace with your "Hands" image
        />

        {/* Card 2: Hero Collection (Right, Wider) */}
        <Card 
          colSpan="md:col-span-7"
          title="HERO COLLECTION"
          category="Marketing website"
          year="2023"
          imgSrc="/Work2.png"
          // Note: Replace with your "Phone on Rock" image
        />

        {/* Card 3: Essentials Collection (Left, Wider - The Antigravity One) */}
        <div className="md:col-span-7 relative group overflow-hidden rounded-3xl bg-zinc-900 aspect-[16/10] md:aspect-auto">
          {/* Background Image */}
          <div className="absolute inset-0">
             <img 
               src="/Work3.png" 
               alt="Background" 
               className="w-full h-full object-cover opacity-60"
             />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute top-0 left-0 p-6 z-20">
            <h3 className="text-xl md:text-2xl font-medium mb-1">ESSENTIALS COLLECTION</h3>
            <p className="text-gray-400 text-sm">Marketing website</p>
          </div>

          {/* The "Floating Card" effect specific to this item */}
         

          <div className="absolute bottom-6 left-6 text-xs font-mono text-gray-300 z-20">
            ● 2023
          </div>
        </div>

        {/* Card 4: Top Picks (Right, Narrower) */}
        <Card 
          colSpan="md:col-span-5"
          title="TOP PICKS"
          category="E-commerce website"
          year="2024"
          imgSrc="/Work1.png"
          // Note: Replace with your "Yellow Sofa" image
        />

      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center items-center gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-md text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors">
          SEE ALL WORKS
        </button>
        <button className="bg-orange-400 p-3 rounded-md hover:bg-orange-500 transition-colors text-black">
          <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
};

// Reusable Card Component
const Card = ({ colSpan, title, category, year, imgSrc }: { 
  colSpan: string, 
  title: string, 
  category: string, 
  year: string, 
  imgSrc: string 
}) => {
  return (
    <div className={`relative group overflow-hidden rounded-3xl bg-zinc-900 aspect-[4/3] ${colSpan}`}>
      {/* Image with hover zoom effect */}
      <div className="absolute inset-0">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Text Content */}
      <div className="absolute top-0 left-0 p-6 md:p-8 w-full">
        <h3 className="text-xl md:text-2xl font-medium mb-1 text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>

      {/* Year Pill */}
      <div className="absolute bottom-6 right-6 text-xs font-mono text-gray-300">
        ● {year}
      </div>
    </div>
  );
};

export default FeaturedWork;