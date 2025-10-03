"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "ghost-fade" | "ghost-slide" | "ghost-float-in" | "ghost-zoom";
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  animation = "ghost-fade",
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-animation ${animation}`}>
      {children}
    </div>
  );
}