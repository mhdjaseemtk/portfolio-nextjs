"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    // Simulate loading progress
    const duration = 2400; // total loading time in ms
    const interval = 30;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      // Ease-in-out progress simulation
      const easeFactor = current < 50 ? 1.2 : current < 80 ? 0.8 : 0.4;
      current = Math.min(current + step * easeFactor, 100);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setPhase("reveal");
          setTimeout(onComplete, 1000);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const nameLetters = "JASEEM T K".split("");

  return (
    <AnimatePresence>
      {phase !== "reveal" || true ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={phase === "reveal" ? { opacity: 0 } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          style={{ pointerEvents: phase === "reveal" ? "none" : "auto" }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Vertical lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`vline-${i}`}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.06 }}
                transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                className="absolute top-0 bottom-0 w-px bg-white"
                style={{ left: `${(i + 1) * 12.5}%`, transformOrigin: "top" }}
              />
            ))}
            {/* Horizontal lines */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`hline-${i}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.06 }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                className="absolute left-0 right-0 h-px bg-white"
                style={{ top: `${(i + 1) * 16.67}%`, transformOrigin: "left" }}
              />
            ))}
          </div>

          {/* Animated corner decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-8 left-8 flex flex-col gap-1"
          >
            <div className="w-8 h-px bg-amber-500" />
            <div className="h-8 w-px bg-amber-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute top-8 right-8 flex flex-col gap-1 items-end"
          >
            <div className="w-8 h-px bg-amber-500" />
            <div className="h-8 w-px bg-amber-500 self-end" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-8 left-8 flex flex-col gap-1"
          >
            <div className="h-8 w-px bg-amber-500" />
            <div className="w-8 h-px bg-amber-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 right-8 flex flex-col gap-1 items-end"
          >
            <div className="h-8 w-px bg-amber-500 self-end" />
            <div className="w-8 h-px bg-amber-500" />
          </motion.div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{
                opacity: 0,
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              }}
              animate={{
                opacity: [0, 0.4, 0],
                y: [null, (Math.random() - 0.5) * 200 + (typeof window !== "undefined" ? window.innerHeight / 2 : 400)],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="absolute w-1 h-1 rounded-full bg-amber-500/30"
            />
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Animated ring */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{
                  scale: { duration: 0.8, ease: "easeOut" },
                  rotate: { duration: 8, ease: "linear", repeat: Infinity },
                }}
                className="absolute inset-0 rounded-full border border-amber-500/30"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: -360 }}
                transition={{
                  scale: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  rotate: { duration: 12, ease: "linear", repeat: Infinity },
                }}
                className="absolute inset-2 rounded-full border border-dashed border-neutral-700"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
                className="w-3 h-3 rounded-full bg-amber-500"
              />
            </div>

            {/* Name reveal */}
            <div className="flex gap-[2px] md:gap-1 overflow-hidden">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 60, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-3xl md:text-5xl font-oswald font-bold tracking-[0.15em] text-white"
                  style={{ display: "inline-block" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              className="text-[10px] md:text-xs tracking-[0.5em] text-gray-500 uppercase font-inter"
            >
              Full Stack Developer
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 md:w-64 flex flex-col items-center gap-3 mt-4">
              <div className="w-full h-[1px] bg-neutral-800 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                />
                {/* Glow effect on progress tip */}
                <motion.div
                  initial={{ left: "0%" }}
                  animate={{ left: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-amber-500/40 blur-md"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] tracking-[0.3em] text-gray-600 uppercase font-inter"
                >
                  Loading
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs font-bold text-amber-500 tabular-nums font-inter"
                >
                  {progress}%
                </motion.span>
              </div>
            </div>
          </div>

          {/* Bottom animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
