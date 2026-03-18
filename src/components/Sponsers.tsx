"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Sponsers.css";

const sponsors = Array.from({ length: 24 }, (_, i) => ({
  logo: `/image ${i + 1}.png`,
  alt: `Sponsor ${i + 1}`,
}));

export default function WhoWeWorkWith() {
  return (
    <div className="work-section">
      <motion.h2
        className="section-title cursor-hover"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Sponsors
      </motion.h2>

      <div className="sponsor-wall" aria-label="Sponsors list">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.logo}
            className="sponsor-card"
          >
            <img src={sponsor.logo} alt={sponsor.alt} className="sponsor-logo" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
