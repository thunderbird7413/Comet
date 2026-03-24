"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Image, Float } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import "./CosmicGallery.css";

const desktopImages = [
    // --- Vertex 1: Top (90°) ---
    { url: "/memories/DSC_3377.JPG", pos: [0, 3.8, -2], scale: 2 },
    { url: "/memories/DSC_3587.JPG", pos: [1.2, 3.2, 0], scale: 2 },

    // --- Vertex 2: Top Right (18°) ---
    { url: "/memories/DSC_4355.JPG", pos: [7, 2, -2], scale: 2 },
    { url: "/memories/DSC_3593 (1).JPG", pos: [6, 1, 0], scale: 2 },

    // --- Vertex 3: Bottom Right (306° / -54°) ---
    { url: "/memories/DSC_4578.JPG", pos: [4.5, -3.5, -2], scale: 2 },
    { url: "/memories/HDB05489.JPG", pos: [2, -2.8, 0], scale: 2 },

    // --- Vertex 4: Bottom Left (234° / -126°) ---
    { url: "/memories/HDB05527.JPG", pos: [-4.5, -3.5, -2], scale: 2 },
    { url: "/memories/IMG_2976.JPG", pos: [-3.5, -2.8, 0], scale: 2 },

    // --- Vertex 5: Top Left (162°) ---
    { url: "/memories/DSC_3377.JPG", pos: [-7, 2, -2], scale: 2 },
    { url: "/memories/Screenshot 2026-01-04 002841.png", pos: [-6, 1, 0], scale: 2 }, // Reusing one for balance
];

// Tighter packing for mobile portrait
const mobileImages = [
    // Top Cluster
    { url: "/memories/DSC_3377.JPG", pos: [0, 5, -5], scale: 1.5 },
    { url: "/memories/DSC_3587.JPG", pos: [1.5, 4, -2], scale: 1.5 },

    // Middle Cluster
    { url: "/memories/DSC_3593 (1).JPG", pos: [-1.8, 1, -1], scale: 1.5 },
    { url: "/memories/DSC_4355.JPG", pos: [1.8, -1, -1], scale: 1.5 },

    // Bottom Cluster
    { url: "/memories/DSC_4578.JPG", pos: [0, -4, -2], scale: 1.5 },
    { url: "/memories/HDB05489.JPG", pos: [-1.5, -5, -4], scale: 1.5 },
    // Extra scattered
    { url: "/memories/HDB05527.JPG", pos: [0, 2.5, -8], scale: 1.2 },
    { url: "/memories/IMG_2976.JPG", pos: [0, -2.5, -8], scale: 1.2 },
    { url: "/memories/Screenshot 2026-01-04 002841.png", pos: [0, 0, -10], scale: 1.2 }, // Added 9th image
];


function FloatingImage({ url, pos, scale }: { url: string, pos: number[], scale: number }) {
    const ref = useRef<THREE.Mesh>(null);
    const [hovered, hover] = useState(false);

    // Aspect Ratio Multiplier (Width factor)
    const aspectX = 1.6;

    useFrame((state, delta) => {
        if (ref.current) {
            // Smooth hover scale
            const targetScale = hovered ? scale * 1.15 : scale; // Slightly less zoom to avoid cutoff

            // Apply aspect ratio to X scale
            const targetScaleX = targetScale * aspectX;
            const targetScaleY = targetScale;

            ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, targetScaleX, delta * 8);
            ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, targetScaleY, delta * 8);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Image
                ref={ref}
                url={url}
                position={[pos[0], pos[1], pos[2]]}
                // Initial scale
                scale={[scale * aspectX, scale]}
                onPointerOver={() => { hover(true); document.body.style.cursor = 'pointer'; }}
                onPointerOut={() => { hover(false); document.body.style.cursor = 'auto'; }}
                transparent
                side={THREE.DoubleSide}
            />
        </Float>
    );
}





export default function CosmicGallery() {
    const [isMobile, setIsMobile] = useState(false);
    const [loadedMobileImages, setLoadedMobileImages] = useState<Record<number, boolean>>({});

    const markMobileImageLoaded = (index: number) => {
        setLoadedMobileImages((prev) => {
            if (prev[index]) return prev;
            return { ...prev, [index]: true };
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Init
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) return null;

    return (
        <section className={`cosmic-gallery-section relative`}>

            {/* Central Text Content */}
            <div className={`cosmic-content z-10 ${isMobile ? "" : "pointer-events-none"}`}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-title pointer-events-auto cursor-hover"
                    style={{ marginBottom: "0px" }}
                >
                    Past Memories
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="cosmic-description pointer-events-auto"
                >
                    Immerse yourself in a universe of innovation. Explore the captured moments from our journey through space and time.
                </motion.p>
            </div>

            {isMobile ? (
                /* --- MOBILE SCROLLABLE COLUMN --- */
                <div className="mobile-gallery-grid">
                    {desktopImages.map((img, i) => (
                        <div key={i} className="mobile-gallery-item">
                            {!loadedMobileImages[i] && <div className="mobile-gallery-skeleton" aria-hidden="true" />}
                            <img
                                src={img.url}
                                alt={`Memory ${i + 1}`}
                                loading="lazy"
                                onLoad={() => markMobileImageLoaded(i)}
                                onError={() => markMobileImageLoaded(i)}
                                className={loadedMobileImages[i] ? "is-loaded" : ""}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                /* --- DESKTOP 3D SCENE --- */
                <Canvas camera={{ position: [0, 0, 12], fov: 50 }} className="absolute inset-0 z-0">
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <fog attach="fog" args={["#000", 5, 30]} />

                    <group>
                        {desktopImages.map((img, i) => (
                            <FloatingImage key={i} url={img.url} pos={img.pos} scale={img.scale} />
                        ))}
                    </group>
                </Canvas>
            )}
        </section>
    );
}

