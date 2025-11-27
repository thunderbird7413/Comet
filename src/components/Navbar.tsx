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
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(brandRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        registerRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 1.0,
        },
        "-=0.5"
      )
      .from(
        navRef.current,
        {
          y: -40,
          opacity: 0,
          duration: 1.5,
        },
        "-=0.4"
      );
  }, []);

  return (
    <header className="header container1 cursor-hover">
      <div className="brand cursor-hover" ref={brandRef}>
        CDC, <strong className="cursor-hover">IIT ROORKEE</strong>
      </div>

      <div className="nav-wrap cursor-hover" ref={navRef}>
        <nav className="nav desktop-nav cursor-hover">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#events">EVENTS</a>
          <a href="#members">MEMBERS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

      <button
        className="register desktop-register cursor-hover"
        ref={registerRef}
      >
        REGISTER
      </button>

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
        <a className="mobile-register" href="#register" onClick={handleNavClick}>
          REGISTER
        </a>
      </div>
    </header>
  );
}
