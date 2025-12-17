'use client';

import React from "react";

export default function Marquee() {
    const text = "BOOK NOW — LIMITED DATES — LA — ";
    
    return (
        <a href="#contact" className="block w-full overflow-hidden bg-[#1d1c1c] py-4 border-y border-[#bfbab0]/20 cursor-pointer hover:bg-[#2a2929] transition-colors duration-300">
            <div className="flex whitespace-nowrap animate-book-marquee">
                <span className="text-2xl md:text-4xl font-bold tracking-wider text-[#bfbab0]">
                    {text.repeat(10)}
                </span>
                <span className="text-2xl md:text-4xl font-bold tracking-wider text-[#bfbab0]">
                    {text.repeat(10)}
                </span>
            </div>
            <style jsx>{`
                @keyframes book-marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-book-marquee {
                    animation: book-marquee 15s linear infinite;
                }
            `}</style>
        </a>
    );
}
