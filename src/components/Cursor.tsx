"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const onLanding = () => setEnabled(true);
    window.addEventListener("landing-complete", onLanding);
    return () => window.removeEventListener("landing-complete", onLanding);
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = "auto";
      return;
    }

    // Hide default cursor once preloader finishes
    document.body.style.cursor = "none";

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // Use GSAP ticker for smooth animation loop
    const tick = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());

      posX += (mouseX - posX) * dt;
      posY += (mouseY - posY) * dt;

      // Inner dot follows directly
      gsap.set(cursor, { x: mouseX, y: mouseY });

      // Outer ring follows with lag
      gsap.set(follower, { x: posX - 16, y: posY - 16 }); // Offset by half width/height
    };
    gsap.ticker.add(tick);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hover effects
    const handleMouseEnter = () => {
      follower.classList.add("cursor-hover-active");
      gsap.to(follower, { scale: 1.5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      follower.classList.remove("cursor-hover-active");
      gsap.to(follower, { scale: 1, duration: 0.3 });
    };

    // Attach to interactive elements
    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover, input, textarea, .card");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tick);
      document.body.style.cursor = "auto";

      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="custom-cursor-inner bg-emerald-400" ref={cursorRef} />
      <div className="custom-cursor-follower border-emerald-500/50" ref={followerRef} />
    </>
  );
}
