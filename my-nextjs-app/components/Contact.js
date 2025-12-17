import React from "react";

export default function Contact(){
    return(
        <div className="pt-8 md:pt-16 pb-8 md:pb-16 px-4" id="contact">
        <div className="text-4xl md:text-8xl text-center pt-8 md:pt-16 pb-8 md:pb-16">CONTACT CHASE</div>
        <form className="flex flex-col text-center w-full md:w-2/5 mx-auto space-y-4 my-8">
            <input className="border p-2" type="text" placeholder="Your Name" />
            <input className="border p-2" type="email" placeholder="Your Email" />
            <textarea className="border p-2" placeholder="Your Message"></textarea>
            <button className="border p-2 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-102 hover:-translate-y-0.5 hover:bg-[#bfbab0] hover:text-[#1d1c1c]" type="submit">SEND</button>
        </form>
        </div>
    )
}