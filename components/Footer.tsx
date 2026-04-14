"use client";

import Link from "next/link";
import { FaInstagram, FaDribbble, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignup = () => {
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const socials = [
    { icon: <FaGithub className="text-xl" />, label: "GitHub", href: "https://github.com/mhdjaseemtk" },
    { icon: <FaLinkedin className="text-xl" />, label: "LinkedIn", href: "https://www.linkedin.com/in/jaseemtk/" },
    { icon: <FaInstagram className="text-xl" />, label: "Instagram", href: "https://www.instagram.com/mhdjaseemtk/" },
    { icon: <FaDribbble className="text-xl" />, label: "Dribbble", href: "https://dribbble.com/mhdjaseemtk" },
    { icon: <FaXTwitter className="text-xl" />, label: "X", href: "https://x.com/mhdjaseemtk" },
  ];

  return (
    <footer className="w-full bg-black text-white pt-20 pb-8 px-4 sm:px-8 md:px-12 font-inter">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center mb-24 text-center"
      >
        <p className="text-gray-400 mb-4 text-lg">Let&apos;s Get Started</p>
        <motion.h2
          className="text-[12vw] leading-none font-bold uppercase tracking-tighter cursor-pointer hover:text-amber-500 transition-colors duration-300"
          onClick={() => scrollTo("contact")}
        >
          Let&apos;s Collaborate
        </motion.h2>
      </motion.div>

      <div className="border-t border-gray-800 my-12" />

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        {/* Left Column: Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 pr-0 md:pr-12"
        >
          <button onClick={() => scrollTo("home")} className="inline-block mb-6 hover:text-amber-500 transition-colors">
            <span className="text-2xl font-bold">Jaseem T K</span>
          </button>
          <p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed">
            My approach is rooted in clean code and scalable architecture, where I dig deep into technical requirements to deliver robust solutions.
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={subscribed ? "Thanks for subscribing! ✓" : "Type your email.."}
              disabled={subscribed}
              className="bg-[#1a1a1a] text-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm disabled:opacity-60"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSignup}
              className="bg-white text-black px-8 py-3 font-medium text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              {subscribed ? "Done ✓" : "Sign up"}
            </motion.button>
          </div>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:block md:col-span-2">
          <h3 className="text-lg font-medium mb-6">Pages</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Work", id: "work" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block md:col-span-2">
          <h3 className="text-lg font-medium mb-6">Projects</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            {["Healix", "Psydraft", "Apple Clone", "Learning Platform", "Admin Innovation"].map((name) => (
              <li key={name}>
                <button onClick={() => scrollTo("work")} className="hover:text-white transition-colors text-left">
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-medium mb-6">Connect</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <a href="mailto:mhdjaseemtk@gmail.com" className="hover:text-white transition-colors">
                Email Me
              </a>
            </li>
            <li>
              <a href="tel:+918075004663" className="hover:text-white transition-colors">
                +91 8075004663
              </a>
            </li>
            <li>
              <a href="https://github.com/mhdjaseemtk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jaseemtk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="md:col-span-1">
          <div className="flex flex-row flex-wrap gap-4">
            {socials.map(({ icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                {icon}
                <span className="text-sm hidden md:hidden lg:inline">{label}</span>
                <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 my-8" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
        <p>© {new Date().getFullYear()} Jaseem T K. All rights reserved.</p>
        <p>Full Stack Developer — Kerala, India</p>
      </div>
    </footer>
  );
};

export default Footer;
