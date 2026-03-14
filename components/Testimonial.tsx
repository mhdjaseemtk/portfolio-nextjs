"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Plus, X, Upload, Star, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ansab from "../public/ansab.png";

type Testimonial = {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string | typeof ansab;
  rating?: number;
};

const initialTestimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "Jaseem completely transformed our internal dashboard. His ability to architect a scalable backend while delivering a flawless, intuitive React frontend is remarkably rare. He delivered the project ahead of schedule and the code quality was exceptional.",
    author: "Sarah Jenkins",
    role: "VP of Engineering at TechCorp",
    avatar: ansab,
    rating: 5,
  },
  {
    id: 2,
    text: "Working with Jaseem was an absolute pleasure. He took our rough concept and built a secure, high-performing full-stack SaaS platform from the ground up. His deep understanding of modern web architecture sets him apart from other developers.",
    author: "Marcus Aurelius",
    role: "Founder at NovaStart Labs",
    avatar: ansab,
    rating: 5,
  },
];

const StarRating = ({
  value,
  onChange,
}: {
  value: number;
  onChange?: (v: number) => void;
}) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => onChange?.(star)}
        className={`transition-colors ${
          onChange ? "cursor-pointer hover:scale-110" : "cursor-default"
        }`}
      >
        <Star
          className={`w-5 h-5 ${
            star <= value
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-600"
          }`}
        />
      </button>
    ))}
  </div>
);

const Testimonial = () => {
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(initialTestimonialsData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [form, setForm] = useState({ author: "", role: "", text: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[activeIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
    }),
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.author.trim()) errs.author = "Name is required.";
    if (!form.role.trim()) errs.role = "Role / Company is required.";
    if (form.text.trim().length < 20)
      errs.text = "Review must be at least 20 characters.";
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const newEntry: Testimonial = {
      id: Date.now(),
      text: form.text.trim(),
      author: form.author.trim(),
      role: form.role.trim(),
      avatar: photoPreview || ansab,
      rating,
    };
    const updated = [...testimonials, newEntry];
    setTestimonials(updated);
    setActiveIndex(updated.length - 1);
    setDirection(1);
    setShowForm(false);
    setSubmitted(true);
    setForm({ author: "", role: "", text: "" });
    setPhotoPreview(null);
    setRating(5);
    setErrors({});
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleClose = () => {
    setShowForm(false);
    setForm({ author: "", role: "", text: "" });
    setPhotoPreview(null);
    setRating(5);
    setErrors({});
  };

  return (
    <div className="w-full bg-black text-white py-4 px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full relative flex flex-col items-center">

        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-4 rounded-md transition hidden md:block"
        >
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-[#2a2a2a] p-4 rounded-md transition hidden md:block"
        >
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </button>

        <div className="relative w-full flex flex-col items-center justify-center min-h-[450px] overflow-hidden">
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
                opacity: { duration: 0.2 },
              }}
              className="absolute flex flex-col items-center text-center"
            >
              {/* Profile Photo */}
              <div className="relative w-28 h-28 mb-6 mt-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                {typeof current.avatar === "string" ? (
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Star Rating */}
              {current.rating && (
                <div className="mb-6">
                  <StarRating value={current.rating} />
                </div>
              )}

              {/* Testimonial Text */}
              <p className="text-lg md:text-2xl lg:text-4xl leading-[1.4] text-gray-200 font-light mb-12 max-w-4xl">
                {current.text}
              </p>

              {/* Quote Icon */}
              <div className="mb-6 opacity-80">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <path
                    d="M14.5 30H0L5 0H19.5L14.5 30ZM35 30H20.5L25.5 0H40L35 30Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Author */}
              <div>
                <h4 className="text-lg font-semibold">{current.author}</h4>
                <p className="text-gray-500 text-sm">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots + Mobile Arrows + Add Button */}
        <div className="flex flex-col items-center gap-4 mt-10 w-full">

          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "bg-white w-6" : "bg-gray-600 w-2"
                }`}
              />
            ))}
          </div>

          <div className="flex md:hidden gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-md"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-md"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Add Review Button */}
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:border-white hover:text-white text-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            Add a Review
          </button>

          {/* Success message */}
          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-400 text-sm"
              >
                ✓ Review added successfully!
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Add Review Modal ── */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl w-full max-w-lg p-6 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">
                    Leave a Review
                  </h3>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-white transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Photo Upload */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="w-16 h-16 rounded-full border-2 border-dashed border-gray-600 hover:border-gray-400 flex items-center justify-center overflow-hidden cursor-pointer transition"
                  >
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-7 h-7 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition"
                    >
                      <Upload className="w-4 h-4" />
                      {photoPreview ? "Change photo" : "Upload photo"}
                    </button>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Optional · JPG, PNG, WEBP
                    </p>
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, author: e.target.value }))
                    }
                    placeholder="e.g. Alex Johnson"
                    className={`w-full bg-[#1a1a1a] border ${
                      errors.author ? "border-red-500" : "border-[#2a2a2a]"
                    } rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-500 transition`}
                  />
                  {errors.author && (
                    <p className="text-red-400 text-xs mt-1">{errors.author}</p>
                  )}
                </div>

                {/* Role */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    Role / Company *
                  </label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, role: e.target.value }))
                    }
                    placeholder="e.g. CEO at Acme Inc."
                    className={`w-full bg-[#1a1a1a] border ${
                      errors.role ? "border-red-500" : "border-[#2a2a2a]"
                    } rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-500 transition`}
                  />
                  {errors.role && (
                    <p className="text-red-400 text-xs mt-1">{errors.role}</p>
                  )}
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    Rating
                  </label>
                  <StarRating value={rating} onChange={setRating} />
                </div>

                {/* Review Text */}
                <div className="mb-5">
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    value={form.text}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, text: e.target.value }))
                    }
                    rows={4}
                    placeholder="Share your experience working with Jaseem..."
                    className={`w-full bg-[#1a1a1a] border ${
                      errors.text ? "border-red-500" : "border-[#2a2a2a]"
                    } rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-500 transition resize-none`}
                  />
                  {errors.text && (
                    <p className="text-red-400 text-xs mt-1">{errors.text}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-black font-semibold text-sm py-3 rounded-xl hover:bg-gray-100 transition"
                >
                  Submit Review
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
