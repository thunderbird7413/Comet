"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LiquidTitle({ text }: { text: string }) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const filterRef = useRef<SVGFETurbulenceElement>(null);
    const displaceRef = useRef<SVGFEDisplacementMapElement>(null);

    useEffect(() => {
        // START ANIMATION
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: { ease: "sine.inOut" }
        });

        if (filterRef.current && displaceRef.current) {
            // Initial Aggressive State
            gsap.set(displaceRef.current, { attr: { scale: 50 } });
            gsap.set(filterRef.current, { attr: { baseFrequency: "0.01 0.02" } });

            // Breathe Loop: From "Warped" to "Melted"
            tl.to(displaceRef.current, {
                attr: { scale: 100 }, // Huge displacement
                duration: 3.0
            }, 0);

            tl.to(filterRef.current, {
                attr: { baseFrequency: "0.03 0.05" }, // Rippling faster
                duration: 3.0
            }, 0);

            // Add Text Glow Pulse to the same timeline
            if (titleRef.current) {
                tl.to(titleRef.current, {
                    textShadow: "0 0 50px rgba(13, 231, 133, 0.8), 0 0 100px rgba(13, 231, 133, 0.4)",
                    // color: "#a7f3d0", // Removed color shift to keep previous text color
                    duration: 3.0
                }, 0);
            }
        }
    }, [titleRef]);

    // Reveal
    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(titleRef.current,
                { y: 100, opacity: 0, filter: "blur(10px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
            );
        }
    }, []);

    return (
        <div style={{ position: "relative", zIndex: 10 }}>
            {/* SVG Filter Definition */}
            <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
                <defs>
                    <filter id="liquid-distortion">
                        <feTurbulence
                            ref={filterRef}
                            type="turbulence"
                            baseFrequency="0.01 0.02"
                            numOctaves="2"
                            result="warp"
                        />
                        <feDisplacementMap
                            ref={displaceRef}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="50"
                            in="SourceGraphic"
                            in2="warp"
                        />
                    </filter>
                </defs>
            </svg>

            {/* The Title */}
            <h1
                ref={titleRef}
                className="title"
                style={{
                    // Ensure the filter is applied effectively
                    filter: "url(#liquid-distortion)",
                    display: "inline-block",
                    padding: "20px" // Give space for distortion so it doesn't clip
                }}
            >
                {text}
            </h1>
        </div>
    );
}
