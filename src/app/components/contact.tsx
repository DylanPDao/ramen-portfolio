"use client";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Ghost,
  Check,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "./scroll-animation";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Dylan Dao", 
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 flex items-center relative"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        <ScrollAnimation animation="ghost-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Summon Me</span>
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ScrollAnimation animation="ghost-slide" delay={200}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-100 flex items-center gap-3">
                  <Ghost className="w-6 h-6 text-poison" />
                  Get In Touch
                </h3>
                <p className="text-purple-200/70 leading-relaxed">
                  Like a wild Gengar appearing from the shadows, I&apos;m always
                  ready for new adventures and collaborations. Don&apos;t be
                  scared to reach out!
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="ghost-float-in" delay={400}>
              <div className="space-y-4">
                <a
                  href="mailto:dylanpdao@gmail.com"
                  className="flex items-center gap-4 text-purple-300 hover:text-poison transition-all group"
                >
                  <div
                    className="w-12 h-12 bg-shadow/30 rounded-lg flex items-center justify-center 
                               group-hover:bg-gengar/30 transition-all border border-gengar/30 
                               group-hover:border-poison/50"
                  >
                    <Mail size={20} />
                  </div>
                  <span>dylanpdao@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dylandao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-purple-300 hover:text-poison transition-all group"
                >
                  <div
                    className="w-12 h-12 bg-shadow/30 rounded-lg flex items-center justify-center 
                               group-hover:bg-gengar/30 transition-all border border-gengar/30 
                               group-hover:border-poison/50"
                  >
                    <Linkedin size={20} />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/DylanPDao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-purple-300 hover:text-poison transition-all group"
                >
                  <div
                    className="w-12 h-12 bg-shadow/30 rounded-lg flex items-center justify-center 
                               group-hover:bg-gengar/30 transition-all border border-gengar/30 
                               group-hover:border-poison/50"
                  >
                    <Github size={20} />
                  </div>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </ScrollAnimation>

            {/* Floating Gengar for decoration */}
            <ScrollAnimation animation="ghost-zoom" delay={600}>
              <div className="hidden md:block pt-8">
                <Image
                  src="/gengar.png"
                  alt="Gengar"
                  width={80}
                  height={80}
                  className="animate-float opacity-60 filter drop-shadow-[0_0_20px_rgba(167,139,250,0.5)]"
                />
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="ghost-fade" delay={300}>
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-purple-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-shadow/20 border border-gengar/30 rounded-lg 
                             text-white placeholder-purple-400/50 focus:outline-none 
                             focus:border-poison/60 transition-all backdrop-blur-sm"
                    placeholder="Your name"
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-shadow/20 border border-gengar/30 rounded-lg 
                             text-white placeholder-purple-400/50 focus:outline-none 
                             focus:border-poison/60 transition-all backdrop-blur-sm"
                    placeholder="your@email.com"
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-purple-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-shadow/20 border border-gengar/30 rounded-lg 
                             text-white placeholder-purple-400/50 focus:outline-none 
                             focus:border-poison/60 transition-all resize-none backdrop-blur-sm"
                    placeholder="Your message..."
                    disabled={status === "sending"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full px-6 py-3 font-semibold rounded-lg 
                           flex items-center justify-center gap-2 
                           transition-all transform
                           ${
                             status === "sending"
                               ? "bg-gengar/50 text-purple-300 cursor-not-allowed"
                               : status === "success"
                               ? "bg-green-600 text-white"
                               : status === "error"
                               ? "bg-red-600 text-white"
                               : "bg-poison text-white hover:bg-gengar hover:scale-105 gengar-glow"
                           }`}
                >
                  {status === "sending" ? (
                    <>Casting Shadow Ball...</>
                  ) : status === "success" ? (
                    <>
                      <Check size={18} />
                      Message Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={18} />
                      Failed to Send
                    </>
                  ) : (
                    <>
                      Cast Shadow Ball
                      <Send size={18} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
