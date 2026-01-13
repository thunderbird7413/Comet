"use client";

import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import StarField from "./StarField";

export default function Preloader() {
    const [complete, setComplete] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const flashRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline();

        // 0. Initial State
        gsap.set(containerRef.current, { opacity: 1 });
        gsap.set(flashRef.current, { opacity: 0 });

        // Helper to get text elements
        const title = textRef.current?.querySelector("h1");
        const subtitle = textRef.current?.querySelector("p");

        // --- PHASE 1: DEFY GRAVITY (0s - 1.5s) ---
        // Smooth entry, expanding space
        if (title) title.innerText = "Break the Orbit";
        if (subtitle) subtitle.innerText = "Limits dissolve";

        tl.to(textRef.current, { opacity: 1, duration: 1.0, ease: "power2.out" })
            .to(title, { letterSpacing: "0.2em", duration: 1.5, ease: "power1.inOut" }, "<");

        // --- PHASE 2: LEAVE THE WORLD BEHIND (1.5s - 2.5s) ---
        // Agressive switch
        tl.to(textRef.current, { opacity: 0, duration: 0.1, ease: "power2.in" }, 1.5)
            .add(() => {
                if (title) title.innerText = "Enter the Unknown";
                if (subtitle) subtitle.innerText = "Curiosity ignites";
                if (title) title.style.color = "#fff"; // Flash white text
            })
            .to(textRef.current, { opacity: 1, duration: 0.1, ease: "power2.out" })
            .to(textRef.current, { scale: 1.1, duration: 1.0, ease: "power1.in" });

        // --- PHASE 3: ENTER THE VOID (2.5s - 3.5s) ---
        // High tension, glitchy feel
        tl.to(textRef.current, { opacity: 0.5, duration: 0.05, yoyo: true, repeat: 4 }, 2.5) // Flicker
            .add(() => {
                if (title) title.innerText = "Create the Future";
                if (subtitle) subtitle.innerText = "Innovation begins here";
                if (title) title.style.textShadow = "0 0 20px #fff, 0 0 40px #0de785"; // Intense glow
            }, 2.6)
            .to(textRef.current, { opacity: 1, scale: 1.3, duration: 0.9, ease: "expo.in" }, 2.6);

        // --- PHASE 4: ASCEND (3.5s) ---
        // The Climax, synced with flash
        tl.add(() => {
            if (title) title.innerText = "ASCEND";
            if (subtitle) subtitle.innerText = "";
            if (title) title.style.fontSize = "6rem"; // Massive header
        }, 3.5);

        // 3. The FLASH (at 3.5s - peak)
        tl.to(flashRef.current, {
            opacity: 1,
            duration: 0.1,
            ease: "power2.in", // Snap to white
        }, 3.5);

        // 4. Reveal (Fade everything)
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 1.0,
            delay: 0.2, // Hold the white/ASCEND for a split second
            ease: "power2.out",
            onComplete: () => {
                window.dispatchEvent(new Event("landing-complete"));
                setComplete(true);
                document.body.style.overflow = "";
            }
        });

    }, []);

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000000",
                overflow: "hidden",
                width: "100vw",
                height: "100vh",
            }}
        >
            <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}>
                <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
                    <color attach="background" args={["#000000"]} />
                    <StarField />
                </Canvas>
            </div>

            {/* Text Overlay */}
            <div
                ref={textRef}
                style={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    opacity: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem"
                }}
            >
                <h1 style={{
                    fontFamily: "Acquire, sans-serif",
                    fontSize: "4rem",
                    color: "#fff",
                    letterSpacing: "0.1em",
                    margin: 0,
                    textShadow: "0 0 30px rgba(13, 231, 133, 0.8), 0 0 60px rgba(13, 231, 133, 0.4)"
                }}>
                    COMET '26
                </h1>
                <p style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.9rem",
                    color: "#0de785",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    margin: 0
                }}>
                    Initializing Systems...
                </p>
            </div>

            {/* Hyper-Jump Whiteout Flash */}
            <div
                ref={flashRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#fff", // Bright white/emerald flash
                    zIndex: 20,
                    pointerEvents: "none",
                    mixBlendMode: "screen"
                }}
            />

        </div>
    );
}
