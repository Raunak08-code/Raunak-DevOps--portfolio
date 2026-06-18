import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Instagram } from "lucide-react";
import { resumeData } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setErrorMessage("Please furnish your name, email address, and message so I can respond!");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formsubmit.co/ajax/panditraunak.143@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "Portfolio Contact SRE Ping",
          message: formData.message,
          _honey: ""
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Email gateway refused transmission. Please check your credentials.");
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err?.message || "Interjected by transport layer timeout. Please verify connectivity or attempt directly via mail link.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">
            Connect & SRE Ping
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-mono">
            Drop an email or schedule an interview below
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Direct channels left panel */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-800 dark:text-slate-150">
                Let's engineer outstanding software systems.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                Have a job opening, DevOps project idea, or simply want to chat about Prometheus scraping? Feel free to contact me.
              </p>

              {/* Direct detail columns */}
              <div className="space-y-4 pt-4 select-all">
                {/* Physical Location */}
                <div className="flex items-center gap-4 text-slate-850 dark:text-slate-300">
                  <div className="h-10 w-10 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-455 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">Current Location</span>
                    <span className="text-sm font-sans font-semibold">{resumeData.location}</span>
                  </div>
                </div>

                {/* Email Address */}
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-4 text-slate-850 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <div className="h-10 w-10 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-455 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">Mail Server Gate</span>
                    <span className="text-sm font-mono font-semibold">{resumeData.email}</span>
                  </div>
                </a>

                {/* Secure Cell phone */}
                <a href={`tel:${resumeData.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-4 text-slate-850 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <div className="h-10 w-10 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-455 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">Secure Voice Cell</span>
                    <span className="text-sm font-mono font-semibold">{resumeData.phone}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social linkages footer */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-3 font-semibold">Remote Handles:</span>
              <div className="flex gap-3">
                <a
                  id="contact-github"
                  href={resumeData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-600 dark:text-slate-350 hover:text-white hover:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl transition-all select-none"
                >
                  <Github className="h-4 w-4" /> Github
                </a>
                <a
                  id="contact-linkedin"
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 dark:bg-slate-955 text-xs font-mono text-slate-600 dark:text-slate-350 hover:text-white hover:bg-indigo-600 border border-slate-200 dark:border-slate-850 rounded-xl transition-all select-none"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                {resumeData.instagram && (
                  <a
                    id="contact-instagram"
                    href={resumeData.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 dark:bg-slate-955 text-xs font-mono text-slate-600 dark:text-slate-350 hover:text-white hover:bg-pink-600 border border-slate-200 dark:border-slate-850 rounded-xl transition-all select-none"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Input Form Right Panel */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-150/80 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name-inp" className="text-xs font-mono font-bold text-slate-500 block uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name-inp"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-sans text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-505"
                    />
                  </div>

                  {/* Mail field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email-inp" className="text-xs font-mono font-bold text-slate-500 block uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email-inp"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@domain.com"
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-sans text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-505"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject-inp" className="text-xs font-mono font-bold text-slate-500 block uppercase">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject-inp"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Interview scheduler / Project idea"
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-sans text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-505"
                  />
                </div>

                {/* Message body field */}
                <div className="space-y-1.5">
                  <label htmlFor="message-inp" className="text-xs font-mono font-bold text-slate-500 block uppercase">
                    Detailed Message *
                    </label>
                  <textarea
                    id="message-inp"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Raunak, let's collaborate on code..."
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-sans text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-505 resize-y"
                  />
                </div>

                {/* Status response popup alerts */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      id="contact-success-alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-xl text-xs sm:text-sm text-emerald-800 dark:text-emerald-400 flex items-center gap-2.5"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Transmission Successful!</span> Your secure mail ping was dispatched. Raunak will follow up soon.
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      id="contact-error-alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl text-xs sm:text-sm text-rose-800 dark:text-rose-400 flex items-center gap-2.5"
                    >
                      <AlertCircle className="h-5 w-5 text-rose-600 flex-shrink-0" />
                      <div>{errorMessage}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Send Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-xl text-sm transition-all shadow cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">DEVICES SENDING...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> SEND LOG PING
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
