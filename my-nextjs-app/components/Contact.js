"use client";

import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const { ref, isVisible } = useScrollFadeIn();
  const [state, handleSubmit] = useForm("xzdppder");

  if (state.succeeded) {
    return (
      <div
        className="pt-8 md:pt-16 pb-8 md:pb-16 px-4 flex items-center justify-center min-h-[50vh]"
        id="contact"
      >
        <p className="text-base md:text-2xl text-center text-[#bfbab0] max-w-3xl leading-relaxed">
          Thank you for reaching out. I will get back to you within the next 24 hours. - Chase
        </p>
      </div>
    );
  }
  return (
    <div
      ref={ref}
      className={`pt-8 md:pt-16 pb-8 md:pb-16 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      id="contact"
    >
      <div className="text-4xl md:text-8xl text-center pt-8 md:pt-16 pb-8 md:pb-16 tracking-tighter">
        CONTACT CHASE
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-center w-full md:w-2/5 mx-auto space-y-4 my-8"
      >
        <input
          className="border border-[#bfbab0] p-2 bg-transparent text-[#bfbab0] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          className="border border-[#bfbab0] p-2 bg-transparent text-[#bfbab0] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          style={{ display: "none" }}
        />

        <textarea
          className="border border-[#bfbab0] p-2 bg-transparent text-[#bfbab0] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300"
          id="message"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          className="border p-2 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-102 hover:-translate-y-0.5 hover:bg-[#bfbab0] hover:text-[#1d1c1c]"
          type="submit"
          disabled={state.submitting}
        >
          SEND
        </button>
      </form>
    </div>
  );
}
