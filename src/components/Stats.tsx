"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import "./timeline.css";

export default function Timeline() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ... existing effect logic ...
    const revealOnScroll = () => {
      itemsRef.current.forEach((item) => {
        if (!item) return;

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
          item.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const timelineData = [
    // ... data remains the same ...
    {
      title: "3000+ PARTICIPANTS NATIONWIDE",
      desc: "An engaged community of students, creators, and professionals from across india."
    },
    {
      title: "30+ DISTINGUISHED SPEAKERS",
      desc: "A lineup of renowned experts and industry leaders who brought insight, experience, and transformational learning."
    },
    {
      title: "20+ WORKSHOPS CONDUCTED",
      desc: "Immersive, hands-on sessions designed to upskill attendees, spark innovation, and ignite career-driven learning."
    },
    {
      title: "10+ COMPETITIVE EVENTS",
      desc: "A dynamic array of challenges and competitions that tested skill, strategy, and creativity across multiple domains."
    },
    {
      title: "₹10L+ WORTH PRIZES DISTRIBUTED",
      desc: "Recognizing talent and celebrating excellence with significant rewards that empowered and motivated participants."
    }
  ];


  return (
    <section className="timeline-section">

      <div className="timeline-container">
        <motion.h2
          className="section-title cursor-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2>
        <div className="timeline-line" style={{ marginTop: "50px" }}></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemsRef.current[index] = el; }}
            className={`timeline-item ${index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
              }`}
          >
            <div className="timeline-card">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}