"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HudStat from "./Stats";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cubes Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%", // Delayed further: Wait until top of section is 40% down
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // 1. Left Cube enters first (from left)
      tl.from(".cube-left", {
        x: -300,
        opacity: 0,
        rotation: -45,
        duration: 1.0,
        ease: "power3.out"
      });

      // 2. Headings reveal (Badge + Title)
      tl.from(".about-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, ">-0.2"); // Slight overlap for smoothness

      tl.from(".about-heading h2", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "<0.2"); // Start shortly after badge

      // 3. Right Cube enters (from right) - Distinct delay after text
      tl.from(".cube-right", {
        x: 300,
        opacity: 0,
        rotation: 45,
        duration: 1.0,
        ease: "power3.out"
      }, ">-0.2");

      // 4. Description paragraphs - Final step
      tl.from(".about-description p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, ">-0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-section" style={{ overflow: "hidden" }}> {/* Overflow hidden to prevent scrollbar during cube enter */}
        <div className="floating-cube cube-left"><img src="/Mask group (2).png"></img></div>
        <div className="floating-cube cube-right"><img src="/Mask group (1).png"></img></div>

        <div className="about-container">
          {/* ABOUT US BADGE */}
          <div className="about-badge-wrapper">
            <div className="about-badge">
              <div className="badge-glow"></div>
              <span className="cursor-hover">ABOUT US</span>
            </div>
          </div>

          {/* HEADING */}
          <div className="about-heading">
            <h2 className="highlight">
              Since 2024, <span className="highlight">COMET</span> has been
              <br /> IIT Roorkee's celebration of
              <br /> <span className="highlight">Innovation</span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="about-description">
            <p className="highlight">
              COMET, organized by the Career Development Cell at IIT Roorkee, is a two-day flagship fest that empowers students to discover diverse career paths, build practical skills, and stand out through competitive events.
            </p>
            <p className="highlight">
              Through high-impact workshops, insightful panel discussions, meaningful networking sessions, and inspiring guest lectures, <span className="highlight">COMET</span> bridges the gap between academia and industry, equipping students with real-world exposure and the confidence to excel in their <span className="highlight">future</span> careers.
            </p>

          </div>
        </div>
      </div>
    </section>

  );
}