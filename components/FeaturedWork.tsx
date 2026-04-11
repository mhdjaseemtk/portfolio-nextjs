'use client';

import React, { useState } from 'react';
import { ArrowUpRight, X, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Healix",
    image: "/Work2.png",
    description: "Healthcare products SaaS platform",
    tech: "Next.js, Node.js, MongoDB, DynamoDB, Redis",
    live: "http://43.205.231.18",
    github: "https://github.com/mhdjaseemtk/healix"
  },
  {
    title: "DGdoctor",
    image: "images/psydraft.png",
    description: "Psychology doctor consultation platform",
    tech: "Next.js, Tailwind, Node.js",
    live: "https://psydraft-frontend.vercel.app",
    github: "https:dgdoctor.com"
  },
  {
    title: "Apple products E-commerce",
    image: "/apple.png",
    description: "Apple products E-commerce platform",
    tech: "React, Node.js, MongoDB",
    live: "https://apple-clone-mern.vercel.app",
    github: "https://github.com/mhdjaseemtk/apple-clone-mern"
  },
  {
    title: "Genpix",
    image: "/genpix.png",
    description: "AI image generation platform",
    tech: "Next.js, Node.js, MongoDB",
    live: "https://gen-pix-gamma.vercel.app/",
    github: "https://github.com/mhdjaseemtk/genpix"
  }
];

const fullprojects = [
  ...projects,
  {
    title: "Optimize",
    image: "images/adam.png",
    description: "Admin dashboard UI with React",
    tech: "React, Tailwind CSS",
    live: "https://optimize-website-react.vercel.app",
    github: "https://github.com/mhdjaseemtk/Optimize-website-react"
  },
  {
    title: "Branch Furniture",
    image: "images/branch.png",
    description: "Modern furniture landing page UI",
    tech: "HTML, Tailwind CSS",
    live: "https://mhdjaseemtk.github.io/furniture-landing-page-tailwind/",
    github: "https://github.com/mhdjaseemtk/furniture-landing-page-tailwind"
  },
  {
    title: "Learning Platform",
    image: "/Work1.png",
    description: "Online learning platform",
    tech: "Next.js, Node.js, MongoDB",
    live: "https://learning-platform-beryl-iota.vercel.app",
    github: "https://github.com/mhdjaseemtk/learning-platform"
  }
];

const layout = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5"
];

const Card = ({
  colSpan, title, category, imgSrc, index
}: {
  colSpan: string; title: string; category: string; imgSrc: string; index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className={`relative group overflow-hidden rounded-3xl bg-zinc-950 flex items-center justify-center h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] ${colSpan} cursor-pointer`}
    >
      <img
        src={imgSrc}
        alt={title}
        className="max-w-full max-h-full rounded-3xl object-fill transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
      >
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <p className="text-gray-300 text-sm">{category}</p>
      </motion.div>
    </motion.div>
  );
};

const FeaturedWork = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className="bg-black min-h-screen p-4 sm:p-8 md:p-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-gray-500 text-sm tracking-wider uppercase">(Featured Work)</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {projects.map((project, i) => (
            <Card
              key={i}
              index={i}
              colSpan={layout[i]}
              title={project.title}
              category={project.description}
              imgSrc={project.image}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(true)}
            className="bg-white text-black px-6 py-3 rounded-md text-sm font-bold hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            SEE ALL WORKS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
            className="bg-orange-400 p-3 rounded-md text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowUpRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => { if (e.target === e.currentTarget) setShowAll(false); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col"
            >
              <div className="flex justify-between px-6 py-5 border-b border-zinc-800">
                <div>
                  <h3 className="text-white text-lg font-semibold">All Works</h3>
                  <p className="text-zinc-500 text-xs">{fullprojects.length} projects</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="overflow-y-auto p-4 space-y-3">
                {fullprojects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl p-4 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-semibold">{project.title}</h4>
                      <p className="text-zinc-400 text-xs">{project.description}</p>
                      <p className="text-orange-400 text-xs truncate">{project.tech}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors text-white"
                        title="GitHub"
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-orange-400 hover:bg-amber-500 text-black transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedWork;
