"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAuth } from "./AuthContext";
import AuthModal from "./AuthModal";
import Link from "next/link";
import { LogOut, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"register" | "login">("register");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, logout, loading } = useAuth();

  const brandRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleNavClick = () => setOpen(false);

  const openRegister = () => {
    setAuthTab("register");
    setAuthOpen(true);
  };

  const openLogin = () => {
    setAuthTab("login");
    setAuthOpen(true);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
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

      const onLanding = () => { tl.play(); };

      // If landing already happened (internal navigation), play immediately
      if (typeof window !== "undefined" && (window as any).comet_landed) {
        tl.play();
      }

      window.addEventListener("landing-complete", onLanding);
      return () => window.removeEventListener("landing-complete", onLanding);
    }, [brandRef, navRef, registerRef]);

    return () => ctx.revert();
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".user-menu-wrap")) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="header container1">
        <div className="brand" ref={brandRef}>
          <Link href="/">
            CDC, <strong className="cursor-hover">IIT ROORKEE</strong>
          </Link>
        </div>

        <div className="nav-wrap" ref={navRef}>
          <nav className="nav desktop-nav">
            <Link href="/">HOME</Link>
            <Link href="/workshops">WORKSHOPS</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/members">MEMBERS</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>

        {/* Desktop — right side: REGISTER or user pill */}
        {!loading && (
          user ? (
            <div className="user-menu-wrap desktop-register" ref={userMenuRef}>
              <button
                className="user-pill"
                onClick={() => setUserMenuOpen((v) => !v)}
                aria-expanded={userMenuOpen}
              >
                <span className="user-avatar">{user.name.charAt(0).toUpperCase()}</span>
                <span className="user-pill-name">{user.name.split(" ")[0]}</span>
                <ChevronDown size={13} className={`user-chevron ${userMenuOpen ? "open" : ""}`} />
              </button>

              {userMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-dropdown-info">
                    <span className="user-dropdown-name">{user.name}</span>
                    <span className="user-dropdown-email">{user.email}</span>
                  </div>
                  <hr className="user-dropdown-divider" />
                  <button
                    className="user-dropdown-item"
                    onClick={() => { logout(); setUserMenuOpen(false); }}
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="register desktop-register"
              ref={registerRef}
              onClick={openRegister}
            >
              REGISTER
            </button>
          )
        )}

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <nav>
            <Link href="/" onClick={handleNavClick}>HOME</Link>
            <Link href="/workshops" onClick={handleNavClick}>WORKSHOPS</Link>
            <Link href="/events" onClick={handleNavClick}>EVENTS</Link>
            <Link href="/members" onClick={handleNavClick}>MEMBERS</Link>
            <Link href="/contact" onClick={handleNavClick}>CONTACT</Link>
          </nav>

          {user ? (
            <div className="mobile-user-section">
              <div className="mobile-user-info">
                <span className="user-avatar">{user.name.charAt(0).toUpperCase()}</span>
                <span className="mobile-user-name">{user.name}</span>
              </div>
              <button
                className="mobile-signout"
                onClick={() => { logout(); setOpen(false); }}
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          ) : (
            <div className="mobile-auth-btns">
              <a className="mobile-register" onClick={() => { openRegister(); handleNavClick(); }}>
                REGISTER
              </a>
              <a className="mobile-signin" onClick={() => { openLogin(); handleNavClick(); }}>
                SIGN IN
              </a>
            </div>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultTab={authTab}
      />
    </>
  );
}
