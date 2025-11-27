"use client";
import React, { useEffect, useRef } from "react";
// import "./timeline.css";

export default function Timeline() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
  {
    title: "4K+ Participants",
    desc: "A vibrant and diverse community of students, creators, and innovators who actively engage and make every edition unforgettable."
  },
  {
    title: "50+ Events",
    desc: "A powerful lineup of competitions, workshops, challenges, and experiences designed to unleash creativity across all domains."
  },
  {
    title: "25K+ Digital Reach",
    desc: "An expanding online footprint connecting thousands across social platforms, amplifying our message and impact."
  },
  {
    title: "40+ Speakers",
    desc: "Industry experts, mentors, and leaders who share valuable insights, experiences, and future-ready perspectives."
  },
  {
    title: "10L+ Worth Prizes",
    desc: "Rewarding excellence with exciting prizes, grants, and recognitions that motivate participants to push their limits."
  }
];


  return (
    <section className="timeline-section">

      <div className="timeline-container">
        <h2 className="section-title">Our Impact</h2>
        <div className="timeline-line"  style={{marginTop: "50px"}}></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemsRef.current[index] = el; }}
            className={`timeline-item ${
              index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
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
