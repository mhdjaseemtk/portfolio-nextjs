"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import FeaturedWork from "@/components/FeaturedWork";
import ResumeDownload from "@/components/ResumeDownload";
import Services from "@/components/Services";
import Contact from "@/components/contact";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type StatCardProps = {
  label: string;
  value: string;
  valueOnTop?: boolean;
  delay?: number;
};

const LabelContainer = ({ label }: { label: string }) => (
  <div className="bg-[#222222] py-3 px-4 rounded-lg w-full">
    <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-wider font-medium">
      {label}
    </p>
  </div>
);

const ValueText = ({ value }: { value: string }) => (
  <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
    {value}
  </h3>
);

const StatCard = ({ label, value, valueOnTop = false, delay = 0 }: StatCardProps) => {
  const cardBg = "bg-[#141414]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`${cardBg} p-5 rounded-2xl flex flex-col h-full justify-between gap-6 border border-neutral-900 cursor-default`}
    >
      {valueOnTop ? (
        <>
          <ValueText value={value} />
          <LabelContainer label={label} />
        </>
      ) : (
        <>
          <LabelContainer label={label} />
          <ValueText value={value} />
        </>
      )}
    </motion.div>
  );
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "WORK", id: "work" },
    { label: "SERVICES", id: "services" },
    { label: "RESUME", id: "resume" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <>
        <main
          id="home"
          className="jaseem overflow-x-hidden bg-black relative selection:bg-amber-500 selection:text-white font-inter w-full max-w-[100vw]"
        >
          {/* BACKGROUND HERO IMAGE */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute right-0 top-0 w-full md:w-[65%] h-full z-0">
              <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10" />
              <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10" />
              <Image
                src="/img.png"
                alt="Hero Portrait"
                fill
                className="object-cover hidden lg:block overflow-hidden object-top opacity-80"
                priority
              />
            </div>
            <div
              className="absolute inset-0 z-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "100px 100px",
              }}
            />
          </div>

          {/* NAVBAR */}
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative z-50 flex justify-between items-center px-6 md:px-16 max-w-[1920px] mx-auto transition-all duration-300 ${scrolled ? "py-4" : "py-8"
              }`}
          >
            <button
              onClick={() => scrollTo("home")}
              className="text-xl font-bold tracking-tighter text-white hover:text-amber-500 transition-colors duration-300"
            >
              Jaseem T K
            </button>

            <div className="hidden lg:flex gap-10 text-[14px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            <button
              className="lg:hidden text-white z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.nav>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
              >
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    onClick={() => scrollTo(link.id)}
                    className="text-3xl font-bold tracking-widest text-white hover:text-amber-500 transition-colors uppercase"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* MAIN HERO CONTENT */}
          <div className="relative z-40 w-full max-w-[1920px] mx-auto overflow-hidden px-4 md:px-16 flex flex-col justify-center box-border">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-[25%] right-8 md:right-20 text-[9px] font-bold tracking-[0.3em] text-gray-600 uppercase"
            >
              [ BREAK THE NORM ]
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* LEFT TEXT */}
              <div className="md:col-span-8 mt-32 md:mt-20 flex m-5 flex-col ml-4 md:ml-24 justify-center items-start">
                <h1 className="font-oswald gap-3 font-bold leading-[0.8] tracking-tighter uppercase text-white flex flex-col items-start w-full break-words">
                  {[
                    { word: "Build", color: "" },
                    { word: "Scale", color: "text-amber-500" },
                    { word: "Deliver", color: "" },
                  ].map(({ word, color }, i) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, x: -80 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                      className={`text-5xl sm:text-9xl md:text-[120px] lg:text-[150px] ${color}`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  className="mt-8 md:mt-16 flex flex-col md:flex-row gap-8 items-start md:items-center"
                >
                  <div className="flex items-center">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollTo("contact")}
                      className="bg-white text-black px-6 py-3 font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-amber-500 hover:text-white transition-all duration-300 rounded-l-sm"
                    >
                      LET&apos;S CONTACT
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollTo("contact")}
                      className="bg-amber-500 text-black px-4 py-3 hover:bg-amber-400 transition rounded-r-sm"
                    >
                      <ArrowUpRight size={15} />
                    </motion.button>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed max-w-xs border-l border-gray-800 pl-4">
                    I build robust, scalable full-stack applications that solve complex problems and deliver exceptional user experiences.
                  </p>
                </motion.div>
              </div>

              {/* RIGHT SPINNER */}
              <div className="hidden md:flex md:col-span-4 justify-end items-end pb-10 pr-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="relative w-24 h-24 flex items-center justify-center"
                >
                  <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text fill="white" fontSize="13" fontWeight="bold" letterSpacing="2">
                      <textPath href="#circlePath">FULL STACK • DEVELOPER •</textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ABOUT + STATS */}
          <div id="about" className="relative z-40 max-w-7xl mx-auto w-full p-6 lg:p-20 overflow-hidden mt-20">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-24">
              <div className="flex flex-col items-start">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-400 uppercase text-sm mb-10 tracking-widest font-medium"
                >
                  (ABOUT ME)
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <button
                    onClick={() => scrollTo("contact")}
                    className="group flex items-center gap-2 transition-transform hover:scale-105"
                  >
                    <div className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm tracking-wide group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      Let&apos;s Contact
                    </div>
                    <div className="bg-orange-500 p-3 rounded-lg text-black group-hover:bg-amber-400 transition-colors">
                      <FiArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:max-w-2xl"
              >
                <p className="text-xl lg:text-[26px] leading-[1.4] text-gray-200 font-light">
                  Passionate Full Stack Software Developer dedicated to building highly performant, scalable, and secure web applications from end to end.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard label="MONTHS EXPERIENCES" value="6+" delay={0} />
              <StatCard label="SUCCESSFUL PROJECTS" value="6+" valueOnTop delay={0.1} />
              <StatCard label="TOTAL CLIENT" value="2+" valueOnTop delay={0.2} />
              <StatCard label="CLIENT REVENUE" value="+72%" valueOnTop delay={0.3} />
            </div>
          </div>
        </main>

        <div id="work">
          <FeaturedWork />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="resume">
          <ResumeDownload />
        </div>

        <div id="contact">
          <Contact />
        </div>
    </>
  );
}
