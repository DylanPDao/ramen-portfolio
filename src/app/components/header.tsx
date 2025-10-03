"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FileDown } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Get all sections
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Small offset for better detection
      
      // Check if we're at the very top
      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }
      
      // Check each section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        
        if (sectionId === "home") {
          // Home is active if no other section is reached
          setActiveSection("home");
          return;
        }
        
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 100; // Account for header height
          
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", section: "home" },
    { name: "About", href: "#about", section: "about" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-shadow/80 backdrop-blur-lg border-b border-gengar/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Image
            src="/gengar.png"
            alt="Gengar Logo"
            width={40}
            height={40}
            className="filter drop-shadow-[0_0_10px_rgba(167,139,250,0.5)] 
                     transition-all duration-300 group-hover:scale-110 
                     group-hover:drop-shadow-[0_0_20px_rgba(167,139,250,0.8)]"
          />
          <span className="text-xl font-bold text-gradient transition-all duration-300 
                         group-hover:scale-105">Dylan Dao</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`transition-all duration-300 relative group cursor-pointer hover:scale-110 transform font-medium
                           ${activeSection === link.section 
                             ? "text-poison scale-110" 
                             : "text-purple-200 hover:text-poison"}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-poison transition-all duration-300
                              ${activeSection === link.section 
                                ? "w-full" 
                                : "w-0 group-hover:w-full"}`}
                  />
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="/Dylan_D_Resume.pdf"
            download
            className="ml-4 px-4 py-2 bg-poison/20 text-poison border border-poison rounded-lg 
                     font-medium hover:bg-poison hover:text-white transition-all duration-300
                     flex items-center gap-2 text-sm hover:scale-105 transform hover:shadow-lg
                     hover:shadow-poison/30"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-purple-200 hover:text-poison transition-all duration-300
                   hover:scale-110 transform"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-shadow/95 backdrop-blur-lg border-t border-gengar/20"
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  handleClick(e, link.href);
                  document.getElementById("mobile-menu")?.classList.add("hidden");
                }}
                className={`block transition-colors
                         ${activeSection === link.section 
                           ? "text-poison" 
                           : "text-purple-200 hover:text-poison"}`}
              >
                {link.name}
                {activeSection === link.section && (
                  <span className="ml-2 text-xs">(current)</span>
                )}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-gengar/20">
            <a
              href="/Dylan_D_Resume.pdf"
              download
              className="flex items-center gap-2 text-purple-200 hover:text-poison transition-colors"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}