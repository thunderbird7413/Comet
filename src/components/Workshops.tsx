"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Workshops.css";

const cardData = [
  {
    title: "Project Management",
    desc: "Learn planning, execution, and real-world project handling with structured industry insights.",
    img: "/nworkshop/project.jpg",
  },
  {
    title: "Blockchain",
    desc: "Explore blockchain basics, smart contracts, decentralized systems, and their real-world applications.",
    img: "/nworkshop/blockchain.jpg",
  },
  {
    title: "Financial Taxation",
    desc: "Understand taxation fundamentals, regulations, and practical financial decision-making strategies.",
    img: "/nworkshop/finance.jpg",
  },
  {
    title: "Improv Workshop",
    desc: "Boost creativity, spontaneity, and communication skills through dynamic improvisation activities.",
    img: "/nworkshop/improv.jpg",
  },
];

export default function Workshops() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="ws-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Workshops
      </motion.h2>

      <div className="ws-layout">
        {/* Left Panel — Details */}
        <motion.div
          className="ws-details"
          key={activeIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="ws-label">WORKSHOP {String(activeIndex + 1).padStart(2, "0")}</span>
          <h3 className="ws-title">{cardData[activeIndex].title}</h3>
          <p className="ws-desc">{cardData[activeIndex].desc}</p>
          <div className="ws-nav">
            {cardData.map((_, i) => (
              <button
                key={i}
                className={`ws-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          <a href="/workshops" className="ws-explore-btn">
            <span>Explore All</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Right Panel — Overlapping Horizontal Cards */}
        <div className="ws-cards-row">
          {cardData.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                className={`ws-card ${isActive ? "active" : ""}`}
                onClick={() => handleCardClick(index)}
                animate={{
                  scale: isActive ? 1.12 : 1,
                  y: isActive ? -12 : 0,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                style={{ zIndex: isActive ? 10 : 1 }}
              >
                <div className="ws-card-inner">
                  <img src={item.img} alt={item.title} className="ws-card-img" />
                  {/* Dark overlay */}
                  <div className={`ws-card-overlay ${isActive ? "dimmed" : ""}`} />
                  {/* Title on image at bottom */}
                  <div className="ws-card-title">
                    <span>{item.title}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
