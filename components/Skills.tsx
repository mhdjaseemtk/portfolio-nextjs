"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  category: string;
  tag: string;
  skills: Skill[];
};

const skillData: SkillCategory[] = [
  {
    category: "Frontend",
    tag: "UI / Client",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "✦" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
  },
  {
    category: "Backend",
    tag: "Server / API",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "REST APIs", icon: "🔗" },
      { name: "GraphQL", icon: "◈" },
    ],
  },
  {
    category: "DevOps & Tools",
    tag: "Infrastructure",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Linux", icon: "🐧" },
      { name: "Nginx", icon: "🌀" },
      { name: "CI/CD", icon: "🔄" },
    ],
  },
  {
    category: "Design",
    tag: "UI / UX",
    skills: [
      { name: "Figma", icon: "🖌️" },
      { name: "Responsive Design", icon: "📱" },
      { name: "UI/UX Principles", icon: "✨" },
    ],
  },
];

const SkillCard = ({
  skill,
  delay,
}: {
  skill: Skill;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{
      scale: 1.05,
      borderColor: "rgba(245, 158, 11, 0.4)",
      transition: { duration: 0.2 },
    }}
    className="bg-[#141414] border border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-default transition-colors duration-300 hover:bg-[#1a1a1a] group"
  >
    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
      {skill.icon}
    </span>
    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-black overflow-hidden py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 uppercase text-sm tracking-widest font-medium block mb-5"
            >
              (SKILLS & EXPERTISE)
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05]"
            >
              My <span className="text-amber-500">tech</span> stack
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md"
          >
            A curated overview of the technologies, frameworks, and tools I use
            to build performant, scalable applications.
          </motion.p>
        </div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {skillData.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className={`relative px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                activeTab === i
                  ? "bg-amber-500 text-black shadow-[0_0_24px_rgba(245,158,11,0.25)]"
                  : "bg-[#141414] text-gray-400 border border-neutral-800 hover:border-neutral-600 hover:text-white"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Active category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              {/* Left — category info card */}
              <div className="lg:col-span-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[#141414] border border-neutral-800 rounded-2xl p-8 group-hover:border-neutral-700 transition-colors duration-300 h-full flex flex-col justify-between">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-3xl" />

                    <div>
                      <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.25em]">
                        {skillData[activeTab].tag}
                      </span>
                      <h3 className="font-oswald text-3xl lg:text-4xl font-bold text-white uppercase mt-3 tracking-tight">
                        {skillData[activeTab].category}
                      </h3>
                      <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                        {skillData[activeTab].skills.length} technologies
                      </p>
                    </div>

                    {/* Quick chips */}
                    <div className="flex flex-wrap gap-2 mt-8">
                      {skillData[activeTab].skills.map((s) => (
                        <span
                          key={s.name}
                          className="bg-[#1a1a1a] border border-neutral-800/50 rounded-lg px-3 py-1.5 text-[11px] text-gray-400 font-medium hover:border-amber-500/30 hover:text-amber-500 transition-all duration-300"
                        >
                          {s.icon} {s.name}
                        </span>
                      ))}
                    </div>

                    {/* Bottom label */}
                    <div className="mt-8 flex items-center justify-between bg-[#1a1a1a] rounded-xl px-5 py-3 border border-neutral-800/50">
                      <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">
                        {skillData[activeTab].category} Stack
                      </span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        }}
                        className="w-2 h-2 rounded-full bg-amber-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — skill cards grid */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillData[activeTab].skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.06} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All skills overview — small grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h4 className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-6">
            Full Stack at a Glance
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {skillData
              .flatMap((c) => c.skills)
              .map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  whileHover={{
                    scale: 1.06,
                    borderColor: "rgba(245, 158, 11, 0.4)",
                  }}
                  className="bg-[#141414] border border-neutral-800 rounded-xl px-4 py-3 flex items-center gap-2.5 cursor-default transition-colors duration-300"
                >
                  <span className="text-sm">{skill.icon}</span>
                  <span className="text-xs text-gray-400 font-medium truncate">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
