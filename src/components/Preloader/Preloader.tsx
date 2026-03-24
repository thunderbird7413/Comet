"use client";

import { useState, useEffect } from "react";
import "./Preloader.css";

export default function Preloader() {
  const START_PROGRESS = 33;
  const [progress, setProgress] = useState(START_PROGRESS);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  // Lock scroll during the preloader.
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => { document.body.style.overflow = ""; };
  }, []);

  // Smooth progress animation
  useEffect(() => {
    const DURATION = 2600;
    let start: number | null = null;
    let raf: number;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsedRatio = Math.min((ts - start) / DURATION, 1);
      const p = START_PROGRESS + elapsedRatio * (100 - START_PROGRESS);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Fire immediately so Hero starts animating while preloader is still fading
        window.dispatchEvent(new Event("landing-complete"));
        (window as any).comet_landed = true;
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
      {/* Ambient glow */}
      <div className="pl-glow-blob" />

      {/* Center content */}
      <div className="pl-center">
        <div className="pl-logo-wrap">
          <span className="pl-logo">COMET</span>
          <span className="pl-logo-year">IITR</span>
        </div>
        <p className="pl-tagline">Where Vision Fuels Creation</p>

        {/* Progress bar */}
        <div className="pl-track">
          <div className="pl-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="pl-pct">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}


