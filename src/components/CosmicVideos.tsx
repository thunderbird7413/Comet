"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CosmicVideos.css";

// Video Paths - Using exact filenames found in public/videos
const MAIN_VIDEO = "/videos/6110954_Neon Pink Green Wormhole_By_Finn_Moeller_Artlist_HD.mp4";
const SIDE_VIDEO_TOP = "/videos/125712cc05534131a5e675beeb1a12b3.mp4";
const SIDE_VIDEO_BOTTOM = "/videos/Screen Recording 2026-01-01 162501.mp4";

export default function CosmicVideos() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section ref={sectionRef} className="cosmic-videos-section">
            <div className="cosmic-videos-wrapper">

                <motion.h2
                    className="section-title cursor-hover"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Stellar Highlights
                </motion.h2>

                <motion.div
                    className="videos-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    {/* Main Video */}
                    <motion.div className="video-card main-video" variants={itemVariants} style={{ maxWidth: "1000px", width: "100%" }}>
                        <video
                            src="/videos/video.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="object-cover w-full h-full"
                        />
                        <div className="video-overlay">
                            <span className="video-caption">COMET'25</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
