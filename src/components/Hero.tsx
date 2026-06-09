import { useEffect, useRef } from "react";
import gsap from "gsap";

import heroImg from "../assets/hero.jpg";
import Navbar from "./Navbar";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.02, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 40, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          delay: 0.35,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-copy",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden text-white"
    >
      <Navbar />

      <div
        className="hero-bg absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "center 45%",
          backgroundColor: "#050505",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-20 pt-28 text-center md:justify-center md:px-12 md:pb-0 md:pt-45"
      >
        <h1
          className="hero-title max-w-[92vw] text-[clamp(3.2rem,3vw,4.8rem)] leading-[0.99] md:text-[clamp(2.5rem,6vw,6rem)]"
          style={{
            fontFamily: "BillaMount",
            color: "#eae3d5",
            textShadow: `
              0 2px 10px rgba(0,0,0,0.6),
              0 20px 60px rgba(0,0,0,0.7)
            `,
          }}
        >
          Karla Avila
        </h1>

        <p className="hero-copy mt-12 text-[12px] uppercase tracking-[0.35em] text-[#eae3d5]/80 md:text-sm">
          Creative Web Developer & Model
        </p>

        <p className="hero-copy mt-4 max-w-lg text-sm text-white/75 md:text-base">
          I design and build expressive digital experiences with strong visuals,
          clean interfaces, and real functionality.
        </p>

        <div className="hero-copy mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-[#eae3d5] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#eae3d5]/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#eae3d5] transition-all duration-300 hover:-translate-y-1 hover:border-[#eae3d5] hover:bg-[#eae3d5] hover:text-black hover:shadow-xl"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}