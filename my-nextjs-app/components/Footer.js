'use client';

import React from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Footer() {
    const { ref, isVisible } = useScrollFadeIn();
    
    return (
        <div ref={ref} className={`flex flex-col md:flex-row justify-between items-center w-full text-center p-4 space-y-2 md:space-y-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-sm md:text-base">&copy; {new Date().getFullYear()} Chase Tipton. All rights reserved.</div>
            <div className="text-sm md:text-base"><a href="https://www.instagram.com/rissa_codes" target="_blank" rel="noopener noreferrer">site by @rissa_codes</a></div>
        </div>
    );
}