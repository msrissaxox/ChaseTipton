"use client";

import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Hero() {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section ref={ref} className="pt-8 md:pt-16 pb-8 md:pb-16 px-4" aria-label="About Chase Tipton">
      <div className="text-4xl md:text-8xl text-center pt-8 md:pt-16 pb-8 md:pb-16 tracking-tighter">
        <h1 className="flex justify-between w-full px-4 md:px-0 md:w-2/3 mx-auto">
          <span
            className={`inline-block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            style={{ transitionDelay: "0ms" }}
          >
            ABOUT
          </span>
          <span
            className={`inline-block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            style={{ transitionDelay: "200ms" }}
          >
            THE
          </span>
        </h1>
        <h1 className="text-center">
          <span
            className={`inline-block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            style={{ transitionDelay: "400ms" }}
          >
            PHOTOGRAPHER
          </span>
        </h1>
      </div>
      <p
        className={`w-full md:w-2/5 mx-auto text-justify transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionDelay: "600ms" }}
      >
        My name is Chase. I am a Los Angeles–based photographer who has been behind the lens since high school, when photography first started as a creative hobby and quickly became a true passion. What began as a way to capture moments and create memories has evolved into a career driven by my love for the art form, the people, and the events I photograph. I focus on creating authentic and visually compelling images that feel natural and meaningful. Every shoot is an opportunity to grow and connect, so let’s get in touch!

              </p>
    </section>
  );
}
