"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Eye, X, Maximize2 } from "lucide-react";
import { useState } from "react";

const ResumeDownload = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showViewer, setShowViewer] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch("/resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Jaseem_TK_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback: open in new tab
      window.open("/resume.pdf", "_blank");
    }
  };

  // Resume highlights / skill categories
  const highlights = [
    { label: "Frontend", skills: "React, Next.js, TypeScript" },
    { label: "Backend", skills: "Node.js, Express, MongoDB" },
    { label: "Tools", skills: "Git, Docker, AWS" },
    { label: "Design", skills: "Figma, Tailwind" },
  ];

  return (
    <>
      <section className="relative bg-black overflow-hidden py-24 lg:py-32">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/3 rounded-full blur-[100px]" />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-gray-400 uppercase text-sm tracking-widest font-medium">
              (RESUME)
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left — Text & CTA */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.05]"
              >
                Grab my <span className="text-amber-500">resume</span> &
                <br className="hidden sm:block" /> let&apos;s build something
                <br className="hidden sm:block" /> extraordinary
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-lg"
              >
                Download my resume to explore my full experience, technical skill
                set, and the projects I&apos;ve delivered. Available in PDF format
                — ready when you are.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-4 mt-2"
              >
                {/* Primary — Download */}
                <button
                  onClick={handleDownload}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative inline-flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-sm tracking-wide uppercase overflow-hidden transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Download
                      size={18}
                      className={`transition-transform duration-300 ${isHovered ? "translate-y-0.5" : ""}`}
                    />
                    Download Resume
                  </span>
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>

                {/* Secondary — View Resume (inline viewer) */}
                <button
                  onClick={() => setShowViewer(true)}
                  className="group inline-flex items-center gap-3 border border-neutral-700 text-gray-300 px-8 py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:border-amber-500/50 hover:text-white hover:bg-white/[0.03] cursor-pointer"
                >
                  <Eye
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  View Resume
                </button>
              </motion.div>
            </div>

            {/* Right — Resume Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="hidden md:block lg:col-span-5"
            >
              <div className="relative group">
                {/* Glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />





                {/* Card */}
                <div className="relative bg-[#141414]  border border-neutral-800 rounded-2xl p-8 lg:p-10 overflow-hidden group-hover:border-neutral-700 transition-colors duration-300">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-3xl" />

                  {/* File icon header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-md" />
                      <div className="relative bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                        <FileText size={28} className="text-amber-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        Jaseem_TK_Resume.pdf
                      </h3>
                      <p className="text-gray-500 text-xs tracking-wide uppercase mt-0.5">
                        PDF Document • Updated 2025
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

                  {/* Skills grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="bg-[#1a1a1a] rounded-xl p-4 border border-neutral-800/50 hover:border-amber-500/20 transition-colors duration-300"
                      >
                        <p className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                          {item.label}
                        </p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {item.skills}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom stat bar */}
                  <div className="mt-8 flex items-center justify-between bg-[#1a1a1a] rounded-xl px-5 py-3 border border-neutral-800/50">
                    <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">
                      Ready to download
                    </span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      className="w-2 h-2 rounded-full bg-emerald-500"
                    />
                  </div>
                </div>













              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {showViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowViewer(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#111111]">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-2 rounded-lg">
                    <FileText size={18} className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold">
                      Jaseem_TK_Resume.pdf
                    </h3>
                    <p className="text-gray-500 text-[11px] tracking-wide">
                      Resume Preview
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Download from modal */}
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    <Download size={14} />
                    Download
                  </button>

                  {/* Open in new tab */}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neutral-700 text-gray-400 hover:text-white hover:border-neutral-600 transition-all duration-300"
                    title="Open in new tab"
                  >
                    <Maximize2 size={16} />
                  </a>

                  {/* Close */}
                  <button
                    onClick={() => setShowViewer(false)}
                    className="p-2 rounded-lg border border-neutral-700 text-gray-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 bg-[#1a1a1a] relative">
                <iframe
                  src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  className="w-full h-full border-0"
                  title="Resume Preview"
                />

                {/* Fallback message for browsers that can't render PDF inline */}
                <noscript>
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                    <div className="text-center">
                      <FileText size={48} className="text-amber-500 mx-auto mb-4" />
                      <p className="text-gray-300 text-sm mb-2">
                        Unable to display PDF preview.
                      </p>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-500 text-sm underline hover:no-underline"
                      >
                        Open resume in a new tab
                      </a>
                    </div>
                  </div>
                </noscript>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeDownload;
