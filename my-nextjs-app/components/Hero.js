'use client';

import React from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Hero(){
    const { ref, isVisible } = useScrollFadeIn();
    
    return(
        <section ref={ref} className={`pt-8 md:pt-16 pb-8 md:pb-16 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} aria-label="About Chase Tipton">

        <div className="text-4xl md:text-8xl text-center pt-8 md:pt-16 pb-8 md:pb-16 tracking-tighter">
            <h1 className="flex justify-center gap-4 md:gap-8 w-full">
                <span>ABOUT</span>
                <span>THE</span>
            </h1>
            <h1 className="text-center">PHOTOGRAPHER</h1>
        </div>
<p className="w-full md:w-2/5 mx-auto text-justify">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit
     in voluptate velit esse cillum dolore eu fugiat nulla 
     pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est 
      laborum.
</p>
      
        </section>
    )
}