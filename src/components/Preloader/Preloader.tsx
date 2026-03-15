"use client";

import { useState, useEffect } from "react";
import "./Preloader.css";

interface Star {
  id: number;
  x: number;
  y: number;
  s: number;
  d: number;
  delay: number;
}

export default function Preloader() {
  const [stars, setStars] = useState<Star[]>([]);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  // Lock scroll & generate decorative stars on the client
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    setStars(
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 2 + 0.5,
        d: Math.random() * 4 + 2,
        delay: Math.random() * 3,
      }))
    );

    return () => { document.body.style.overflow = ""; };
  }, []);

  // Smooth progress animation
  useEffect(() => {
    const DURATION = 1800;
    let start: number | null = null;
    let raf: number;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(((ts - start) / DURATION) * 100, 100);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Fire immediately so Hero starts animating while preloader is still fading
        window.dispatchEvent(new Event("landing-complete"));
        document.body.style.overflow = "";
        setFading(true);
        setTimeout(() => {
          setDone(true);
        }, 600);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div className={`preloader${fading ? " preloader--fade" : ""}`}>
      {/* Twinkling stars */}
      {stars.map(star => (
        <span
          key={star.id}
          className="pl-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.s}px`,
            height: `${star.s}px`,
            animationDuration: `${star.d}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Ambient glow */}
      <div className="pl-glow-blob" />

      {/* Orbit rings with comet dots */}
      <div className="pl-ring pl-ring--outer" />
      <div className="pl-ring pl-ring--inner" />

      {/* Center content */}
      <div className="pl-center">
        <div className="pl-logo-wrap">
          <span className="pl-logo">CDC</span>
          <span className="pl-logo-year">IITR</span>
        </div>
        <p className="pl-tagline">Initializing the Experience</p>

        {/* Progress bar */}
        <div className="pl-track">
          <div className="pl-fill" style={{ width: `${progress}%` }} />
          <div className="pl-glow-dot" style={{ left: `${progress}%` }} />
        </div>

        <p className="pl-pct">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}


