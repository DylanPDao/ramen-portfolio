"use client";
import { ExternalLink, Github, Ghost } from "lucide-react";
import ScrollAnimation from "./scroll-animation";

const projects = [
  {
    title: "PokéDex Web App",
    description: "Full-stack Pokémon database with real-time battle simulator and team builder functionality.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "PokéAPI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Ghost-Type Management System",
    description: "Collaborative haunting platform with real-time spooky updates and ectoplasm analytics.",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Shadow Realm Chat",
    description: "AI-powered messaging platform that makes your messages disappear like a ghost.",
    tech: ["TypeScript", "Next.js", "OpenAI", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Nightmare Analytics",
    description: "Data visualization dashboard for tracking sleep paralysis demons and dream metrics.",
    tech: ["React", "D3.js", "Node.js", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="ghost-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="text-gradient">Haunted Projects</span>
          </h2>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={project.title}
              animation={index % 2 === 0 ? "ghost-slide" : "ghost-float-in"}
              delay={index * 200}
            >
              <div
                className="group bg-shadow/20 backdrop-blur-sm rounded-lg overflow-hidden 
                         border border-gengar/30 hover:border-poison/60 transition-all 
                         duration-300 card-hover gengar-glow h-full"
              >
                <div className="aspect-video bg-gradient-to-br from-gengar-dark/40 to-shadow/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-poison/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Ghost className="text-gengar/30 w-20 h-20 group-hover:text-poison/50 transition-colors animate-float" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-100 group-hover:text-poison transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-purple-200/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gengar/20 text-purple-300 rounded 
                                 border border-gengar/30 hover:border-poison/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-poison 
                               transition-all hover:scale-105 transform"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-poison 
                               transition-all hover:scale-105 transform"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}