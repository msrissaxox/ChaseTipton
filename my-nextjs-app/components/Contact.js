'use client';

import React from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Contact(){
    const { ref, isVisible } = useScrollFadeIn();
    
    return(
        <div ref={ref} className={`pt-8 md:pt-16 pb-8 md:pb-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} id="contact">
        <div className="text-4xl md:text-8xl text-center pt-8 md:pt-16 pb-8 md:pb-16 tracking-tighter">CONTACT CHASE</div>
        <form className="flex flex-col text-center w-full md:w-2/5 mx-auto space-y-4 my-8">
            <input className="border border-[#bfbab0] p-2 bg-transparent text-[#bfbab0] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300" type="text" placeholder="Your Name" />
            <input className="border border-[#bfbab0] p-2 bg-transparent text-[#bfbab0] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300" type="email" placeholder="Your Email" />
            <textarea className="border border-[#bfbab0] p-2 bg-transparent text-[#bfbab0] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300" placeholder="Your Message"></textarea>
            <button className="border p-2 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-102 hover:-translate-y-0.5 hover:bg-[#bfbab0] hover:text-[#1d1c1c]" type="submit">SEND</button>
        </form>
        </div>
    )
}