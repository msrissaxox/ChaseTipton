'use client';

import React from "react";

export default function Marquee() {
    const text = "BOOK NOW — LIMITED DATES — LA — BOOK NOW — LIMITED DATES — LA — ";
    
    return (
        <a href="#contact" className="block w-full overflow-hidden bg-[#1d1c1c] py-4 border-y border-[#bfbab0]/20 cursor-pointer hover:bg-[#2a2929] transition-colors duration-300">
            <div className="flex whitespace-nowrap animate-marquee pointer-events-none">
                <span className="text-2xl md:text-4xl font-bold tracking-wider text-[#bfbab0] pr-8">
                    {text.repeat(3)}
                </span>
                <span className="text-2xl md:text-4xl font-bold tracking-wider text-[#bfbab0] pr-8">
                    {text.repeat(3)}
                </span>
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 10s linear infinite;
                }
            `}</style>
        </a>
    );
}
