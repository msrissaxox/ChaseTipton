import React from "react";

export default function Contact(){
    return(
        <div className="pt-16 pb-16">
        <div className="text-8xl text-center pb-16">CONTACT CHASE</div>
        <form className="flex flex-col text-center w-2/5 mx-auto space-y-4 my-8">
            <input className="border p-2" type="text" placeholder="Your Name" />
            <input className="border p-2" type="email" placeholder="Your Email" />
            <textarea className="border p-2" placeholder="Your Message"></textarea>
            <button className="border p-2" type="submit">Send</button>
        </form>
        </div>
    )
}