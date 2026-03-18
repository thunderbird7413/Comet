"use client";
import LiquidTitle from "@/components/LiquidTitle";
import AnimatedSubtitle from "./AnimatedSubtitle";

import { Canvas } from "@react-three/fiber";
import EmeraldSmoke from "./EmeraldSmoke";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

const EVENT_START = new Date("2026-04-11T00:00:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = EVENT_START.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

export default function Hero() {
  const [start, setStart] = useState(false);
  const countdown = useCountdown();

  useEffect(() => {
    const onLanding = () => setStart(true);
    window.addEventListener("landing-complete", onLanding);
    return () => window.removeEventListener("landing-complete", onLanding);
  }, []);

  return (
    <section id="home" className="hero container" style={{ position: "relative", overflow: "hidden" }}>
      <div className="hero-inner" style={{ isolation: "isolate" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={start ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        >
          <LiquidTitle text="COMET'26" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <AnimatedSubtitle text="Where Vision Fuels Creation" />
        </motion.div>

        <motion.div
          className="hero-event-strip"
          initial={{ opacity: 0, y: 16 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="hero-date-label">11 &mdash; 12 APRIL 2026</p>
          <div className="hero-countdown">
            {(["d", "h", "m", "s"] as const).map((unit, i) => (
              <div key={unit} className="hero-cd-cell">
                <span className="hero-cd-num">
                  {String(countdown[unit]).padStart(2, "0")}
                </span>
                <span className="hero-cd-unit">{["Days", "Hrs", "Min", "Sec"][i]}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-logos"
          initial={{ opacity: 0, y: 20 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <img src="/logos/iitr_3d.png" alt="IIT Roorkee" className="hero-logo" />
          <div className="logo-divider" />
          <img src="/logos/cdc_3d.png" alt="CDC IITR" className="hero-logo" />
        </motion.div>
      </div>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <EmeraldSmoke start={start} />
        </Canvas>
      </div>

      <div className="vignette" />
    </section>
  );
}


