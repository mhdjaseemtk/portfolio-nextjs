"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Star,
  Upload,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import ansab from "../public/ansab.png";

type Testimonial = {
  id: string;
  text: string;
  author: string;
  role: string;
  avatar: string | null;
  rating: number;
};

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
          className={`h-5 w-5 ${
            star <= value ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
          }`}
        />
      </button>
    ))}
  </div>
);

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [form, setForm] = useState({ author: "", role: "", text: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        setLoadError("");

        const response = await fetch("/api/reviews", { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Unable to load reviews.");
        }

        const data: Testimonial[] = await response.json();
        setTestimonials(data);
        setActiveIndex(0);
      } catch (error) {
        console.error(error);
        setLoadError("MongoDB reviews could not be loaded right now.");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const nextTestimonial = () => {
    if (testimonials.length <= 1) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (testimonials.length <= 1) return;
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[activeIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
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
    if (form.text.trim().length < 20) {
      errs.text = "Review must be at least 20 characters.";
    }

    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      setSaving(true);

      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: form.author.trim(),
          role: form.role.trim(),
          text: form.text.trim(),
          avatar: photoPreview,
          rating,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to save review.");
      }

      const newEntry: Testimonial = await response.json();
      setTestimonials((prev) => [newEntry, ...prev]);
      setActiveIndex(0);
      setDirection(-1);
      setShowForm(false);
      setSubmitted(true);
      setForm({ author: "", role: "", text: "" });
      setPhotoPreview(null);
      setRating(5);
      setErrors({});
      setLoadError("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
      setErrors({ submit: "Review could not be saved to MongoDB." });
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    setShowForm(false);
    setForm({ author: "", role: "", text: "" });
    setPhotoPreview(null);
    setRating(5);
    setErrors({});
  };

  return (
    <div className="flex w-full flex-col items-center justify-center bg-black px-6 py-4 text-white">
      <div className="relative flex w-full max-w-6xl flex-col items-center">
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-md bg-[#1a1a1a] p-4 transition hover:bg-[#2a2a2a] md:block lg:-left-20"
        >
          <ChevronLeft className="h-6 w-6 text-gray-400" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-md bg-[#1a1a1a] p-4 transition hover:bg-[#2a2a2a] md:block lg:-right-20"
        >
          <ChevronRight className="h-6 w-6 text-gray-400" />
        </button>

        <div className="relative flex min-h-[450px] w-full flex-col items-center justify-center overflow-hidden">
          {loading ? (
            <div className="flex min-h-[450px] items-center justify-center text-gray-500">
              Loading reviews...
            </div>
          ) : loadError ? (
            <div className="flex min-h-[450px] max-w-xl flex-col items-center justify-center gap-3 text-center">
              <p className="text-base text-red-400">{loadError}</p>
              <p className="text-sm text-gray-500">
                Add `MONGODB_URI` to load and save reviews from your database.
              </p>
            </div>
          ) : current ? (
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
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
                <div className="relative mb-6 mt-32 h-28 w-28 overflow-hidden rounded-full border-4 border-gray-700 shadow-lg">
                  {current.avatar ? (
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={ansab}
                      alt={current.author}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="mb-6">
                  <StarRating value={current.rating} />
                </div>

                <p className="mb-12 max-w-4xl text-lg font-light leading-[1.4] text-gray-200 md:text-2xl lg:text-4xl">
                  {current.text}
                </p>

                <div className="mb-6 opacity-80">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                    <path
                      d="M14.5 30H0L5 0H19.5L14.5 30ZM35 30H20.5L25.5 0H40L35 30Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">{current.author}</h4>
                  <p className="text-sm text-gray-500">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex min-h-[450px] max-w-xl flex-col items-center justify-center gap-3 text-center">
              <p className="text-lg text-white">No reviews yet in MongoDB.</p>
              <p className="text-sm text-gray-500">
                Use the form below to add the first one, including an image.
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-4">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-white" : "w-2 bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-4 md:hidden">
            <button
              onClick={prevTestimonial}
              className="rounded-md bg-[#1a1a1a] p-3 hover:bg-[#2a2a2a]"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400" />
            </button>
            <button
              onClick={nextTestimonial}
              className="rounded-md bg-[#1a1a1a] p-3 hover:bg-[#2a2a2a]"
            >
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="mt-2 flex items-center gap-2 rounded-full border border-gray-700 px-5 py-2.5 text-sm text-gray-300 transition-all hover:border-white hover:text-white"
          >
            <Plus className="h-4 w-4" />
            Add a Review
          </button>

          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-green-400"
              >
                Review added successfully!
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="w-full max-w-lg rounded-2xl border border-[#2a2a2a] bg-[#111] p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    Leave a Review
                  </h3>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 transition hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mb-5 flex items-center gap-4">
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-600 transition hover:border-gray-400"
                  >
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <User className="h-7 w-7 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-white"
                    >
                      <Upload className="h-4 w-4" />
                      {photoPreview ? "Change photo" : "Upload photo"}
                    </button>
                    <p className="mt-0.5 text-xs text-gray-600">
                      Optional - JPG, PNG, WEBP
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

                <div className="mb-4">
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-gray-500">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, author: e.target.value }))
                    }
                    placeholder="e.g. Alex Johnson"
                    className={`w-full rounded-lg border bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-600 transition focus:border-gray-500 focus:outline-none ${
                      errors.author ? "border-red-500" : "border-[#2a2a2a]"
                    }`}
                  />
                  {errors.author && (
                    <p className="mt-1 text-xs text-red-400">{errors.author}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-gray-500">
                    Role / Company *
                  </label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, role: e.target.value }))
                    }
                    placeholder="e.g. CEO at Acme Inc."
                    className={`w-full rounded-lg border bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-600 transition focus:border-gray-500 focus:outline-none ${
                      errors.role ? "border-red-500" : "border-[#2a2a2a]"
                    }`}
                  />
                  {errors.role && (
                    <p className="mt-1 text-xs text-red-400">{errors.role}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-gray-500">
                    Rating
                  </label>
                  <StarRating value={rating} onChange={setRating} />
                </div>

                <div className="mb-5">
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-gray-500">
                    Your Review *
                  </label>
                  <textarea
                    value={form.text}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, text: e.target.value }))
                    }
                    rows={4}
                    placeholder="Share your experience working with Jaseem..."
                    className={`w-full resize-none rounded-lg border bg-[#1a1a1a] px-4 py-2.5 text-sm text-white placeholder-gray-600 transition focus:border-gray-500 focus:outline-none ${
                      errors.text ? "border-red-500" : "border-[#2a2a2a]"
                    }`}
                  />
                  {errors.text && (
                    <p className="mt-1 text-xs text-red-400">{errors.text}</p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {saving ? "Saving..." : "Submit Review"}
                </button>
                {errors.submit && (
                  <p className="mt-3 text-center text-xs text-red-400">
                    {errors.submit}
                  </p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
