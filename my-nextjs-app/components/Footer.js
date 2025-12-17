"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px",
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
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row justify-between items-center w-full text-center p-4 space-y-2 md:space-y-0 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-100"}`}
    >
      <div className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} Chase Tipton. All rights reserved.
      </div>
      <div className="text-sm md:text-base">
        <a href="https://www.instagram.com/rissa_codes" target="_blank" rel="noopener noreferrer">
          site by @rissa_codes
        </a>
      </div>
    </div>
  );
}
