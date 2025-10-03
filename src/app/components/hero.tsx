"use client";
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col relative px-6 overflow-hidden pt-20">
      <div className="ghost-bg" />
      
      {/* Floating Gengar */}
      <div className="absolute top-20 right-10 animate-ghost opacity-60 hidden lg:block">
        <Image 
          src="/gengar.png" 
          alt="Gengar" 
          width={150} 
          height={150}
          className="filter drop-shadow-[0_0_30px_rgba(167,139,250,0.5)]"
        />
      </div>
      
      <div className="absolute bottom-20 left-10 animate-float opacity-40 hidden lg:block">
        <Image 
          src="/gengar.png" 
          alt="Gengar" 
          width={100} 
          height={100}
          className="filter drop-shadow-[0_0_20px_rgba(167,139,250,0.5)] rotate-[-15deg]"
        />
      </div>
      
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="text-center z-10 max-w-4xl mx-auto animate-in">
          <div className="mb-8 inline-block">
            <Image 
              src="/gengar.png" 
              alt="Gengar" 
              width={120} 
              height={120}
              className="animate-float filter drop-shadow-[0_0_30px_rgba(167,139,250,0.8)]"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-gradient">Dylan Dao</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            Full-Stack Engineer & Ghost-Type Trainer
          </p>
          
          <p className="text-lg text-purple-200/70 max-w-2xl mx-auto" style={{ marginBottom: '1rem' }}>
            Building haunting web experiences with modern technologies.
            Specializing in React, Node.js, and making things disappear into the cloud.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a
              href="/Dylan_D_Resume.pdf"
              download
              className="px-6 py-3 bg-poison/20 text-poison border-2 border-poison rounded-lg 
                       font-semibold hover:bg-poison hover:text-white transition-all 
                       hover:scale-105 transform flex items-center gap-2 gengar-glow"
            >
              <FileDown size={20} />
              Download Resume
            </a>
            
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/DylanPDao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-poison transition-all hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/dylandao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-poison transition-all hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:dylanpdao@gmail.com"
                className="text-purple-400 hover:text-poison transition-all hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pb-8 flex justify-center">
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView()}
          className="text-purple-400 hover:text-poison transition-all animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}