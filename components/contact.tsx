"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    { icon: <FaGithub size={20} />, label: "GitHub", href: "https://github.com/mhdjaseemtk" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/jaseemtk/" },
    { icon: <FaInstagram size={20} />, label: "Instagram", href: "https://www.instagram.com/mhdjaseemtk/" },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-gray-400 text-sm uppercase tracking-widest">(CONTACT)</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-tight mb-8">
              Let&apos;s Work<br />
              <span className="text-amber-500">Together</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
              Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s build something great.
            </p>

            <div className="flex items-center gap-3 mb-6 group">
              <div className="bg-[#1a1a1a] p-3 rounded-lg">
                <Mail size={18} className="text-amber-500" />
              </div>
              <a
                href="mailto:mhdjaseemtk@gmail.com"
                className="text-gray-300 hover:text-amber-500 transition-colors text-sm font-medium tracking-wide"
              >
                mhdjaseemtk@gmail.com
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              {socials.map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1a1a1a] hover:bg-amber-500 hover:text-black text-gray-400 p-3 rounded-lg transition-all duration-200"
                  title={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="bg-[#111] border border-neutral-800 rounded-2xl p-8"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-64 gap-4 text-center"
              >
                <CheckCircle size={48} className="text-amber-500" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#1a1a1a] border border-neutral-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#1a1a1a] border border-neutral-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#1a1a1a] border border-neutral-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-gray-600 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold text-sm uppercase tracking-widest py-4 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
