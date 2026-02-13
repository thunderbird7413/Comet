"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const brandRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLButtonElement>(null);

  const handleNavClick = () => setOpen(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Start paused
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, paused: true });

      tl.fromTo(brandRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(registerRef.current,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.0 },
          "-=0.5"
        )
        .fromTo(navRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5 },
          "-=0.4"
        );

      const onLanding = () => {
        tl.play();
      };

      window.addEventListener("landing-complete", onLanding);

      // Cleanup listener
      return () => window.removeEventListener("landing-complete", onLanding);

    }, [brandRef, navRef, registerRef]); // Scope

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <header className="header container1">
      <div className="brand" ref={brandRef}>
        CDC, <strong className="cursor-hover">IIT ROORKEE</strong>
      </div>

      <div className="nav-wrap" ref={navRef}>
        <nav className="nav desktop-nav">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#events">EVENTS</a>
          <a href="#members">MEMBERS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

    

      <button
        aria-label="Toggle navigation"
        aria-expanded={open}
        className={`menu-btn ${open ? "open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav>
          <a href="#home" onClick={handleNavClick}>HOME</a>
          <a href="#about" onClick={handleNavClick}>ABOUT</a>
          <a href="#events" onClick={handleNavClick}>EVENTS</a>
          <a href="#events" onClick={handleNavClick}>MEMBERS</a>
          <a href="#events" onClick={handleNavClick}>CONTACT</a>
        </nav>
        
      </div>
    </header>
  );
}
