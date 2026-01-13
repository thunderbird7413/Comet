"use client";
import LiquidTitle from "@/components/LiquidTitle";
import AnimatedSubtitle from "./AnimatedSubtitle";

import { Canvas } from "@react-three/fiber";
import HeroStarField from "./HeroStarField";
import EmeraldSmoke from "./EmeraldSmoke"; // [NEW] Import

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

export default function Hero() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const onLanding = () => setStart(true);
    window.addEventListener("landing-complete", onLanding);
    return () => window.removeEventListener("landing-complete", onLanding);
  }, []);

  return (
    <section id="home" className="hero container" style={{ position: "relative", overflow: "hidden" }}>
      {/* Living Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
          <color attach="background" args={["#000000"]} />
          <HeroStarField />
        </Canvas>
      </div>

      <div className="hero-inner" style={{ isolation: "isolate" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={start ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 1.0, ease: "easeOut" }}
        >
          <LiquidTitle text="COMET'26" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <AnimatedSubtitle text="Where Vision Fuels Creation" />
        </motion.div>

        {/* --- PARTNER LOGOS --- */}
        <motion.div
          className="hero-logos"
          initial={{ opacity: 0, y: 20 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <img src="/logos/iitr_3d.png" alt="IIT Roorkee" className="hero-logo" />
          <div className="logo-divider" />
          <img src="/logos/cdc_3d.png" alt="CDC IITR" className="hero-logo" />
        </motion.div>
      </div>

      {/* Emerald Smoke Effect - replacing the sphere */}
      {/* zIndex: 0 ensures it's above background (-1) but below content/text */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* fov bigger to see wide spread at bottom */}
        <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <EmeraldSmoke start={start} />
        </Canvas>
      </div>

      <div className="vignette" />
    </section>
  );
}


