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
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/crdt24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#bfbab0] hover:text-cyan-400 transition-colors"
          aria-label="Follow Chase Tipton on Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <div className="text-sm md:text-base">
          <a
            href="https://www.instagram.com/rissa_codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            site by @rissa_codes
          </a>
        </div>
      </div>
    </div>
  );
}
