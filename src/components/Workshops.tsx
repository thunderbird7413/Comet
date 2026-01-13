"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./Workshops.css";

export default function Cards() {
  const cardData = [
    {
      title: "Project Management Workshop",
      desc: "Learn planning, execution, and real-world project handling with structured industry insights.",
      img: "/workshop/workshop_project.jpeg",
    },
    {
      title: "Blockchain Workshop",
      desc: "Explore blockchain basics, smart contracts, decentralized systems, and their real-world applications.",
      img: "/workshop/workshop_blockchain.jpeg",
    },
    {
      title: "Financial Taxation Workshop",
      desc: "Understand taxation fundamentals, regulations, and practical financial decision-making strategies.",
      img: "/workshop/workshop_finance.jpeg",
    },
    {
      title: "Improv Workshop",
      desc: "Boost creativity, spontaneity, and communication skills through dynamic improvisation activities.",
      img: "/workshop/worksop_improv.jpeg",
    },
    {
      title: "Trading Workshop",
      desc: "Learn market fundamentals, trading logic, and smart strategies for financial decision-making.",
      img: "/workshop/workshop_trading.jpeg",
    },
    {
      title: "PG Pathways Workshop",
      desc: "Get structured guidance for CAT, GMAT, and GRE with strategies to improve speed and accuracy.",
      img: "/workshop/workshop_pgpathways.jpeg",
    }
  ];


  return (
    <div className="cards-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Workshops
      </motion.h2>

      <div className="cards-grid">
        {cardData.map((item, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} className="card-tilt">
            <div className="card">
              <div className="card-img-wrapper">
                <img src={item.img} alt={item.title} className="card-img" />
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
