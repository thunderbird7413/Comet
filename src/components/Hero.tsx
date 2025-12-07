"use client";
import AnimatedTitle from "@/components/AnimatedTitle";
import AnimatedSubtitle from "./AnimatedSubtitle";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-inner" style={{ isolation: "isolate" }}>
        <AnimatedTitle text="COMET'26" />
        <AnimatedSubtitle text="Where Vision Fuels Creation" />
      </div>

        <div className="hero-sphere">
      <div className="glow-wrapper">
          <img src="/spehere.png" />
        </div>
      </div>

      <div className="vignette" />
    </section>
  );
}


