"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FileDown } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      
      // Simple percentage-based detection
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (scrollY / documentHeight) * 100;
      
      // Set active section based on scroll percentage
      let newSection = "home";
      if (scrollPercentage < 15) {
        newSection = "home";
      } else if (scrollPercentage < 40) {
        newSection = "about";
      } else if (scrollPercentage < 70) {
        newSection = "projects";
      } else {
        newSection = "contact";
      }
      
      setActiveSection(newSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
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
                  className={`transition-all duration-300 hover:scale-110 transform inline-block
                           ${activeSection === link.section 
                             ? "text-poison font-bold" 
                             : "text-purple-200 hover:text-poison"}`}
                >
                  {link.name}
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