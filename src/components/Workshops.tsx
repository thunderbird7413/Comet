"use client";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./Workshops.css";
import Modal from "./Modal";

export default function Cards() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<typeof cardData[0] | null>(null);

  const cardData = [
    {
      title: "Project Management Workshop",
      desc: "Learn planning, execution, and real-world project handling with structured industry insights.",
      detailedDesc: `This workshop equips attendees with essential project management concepts such as planning, execution, monitoring, and resource allocation. Participants learn industry-relevant strategies for handling complex tasks efficiently.\n\nThe session includes real examples, insights, and structured guidance to build managerial competence. It prepares participants to apply PM skills in academic, professional, and team-based projects.`,
      img: "/workshop/workshop_project.jpeg",
    },
    {
      title: "Blockchain Workshop",
      desc: "Explore blockchain basics, smart contracts, decentralized systems, and their real-world applications.",
      detailedDesc: `This session introduces participants to blockchain fundamentals, architecture, and applications across industries. It explores decentralized systems, cryptocurrencies, smart contracts, and their future potential.\n\nParticipants gain insights into how blockchain is transforming digital systems and learn where the technology is heading. The workshop is valuable for beginners interested in Web3 and modern computational frameworks.`,
      img: "/workshop/workshop_blockchain.jpeg",
    },
    {
      title: "Financial Taxation Workshop",
      desc: "Understand taxation fundamentals, regulations, and practical financial decision-making strategies.",
      detailedDesc: `This workshop simplifies taxation concepts and explains strategies for managing tax-related matters. Participants gain clarity on financial regulations and common taxation practices.\n\nThrough expert-led discussions, attendees understand how taxation operates in real-world scenarios. The workshop strengthens financial literacy and prepares students for better personal and professional financial decisions.`,
      img: "/workshop/workshop_finance.jpeg",
    },
    {
      title: "Improv Workshop",
      desc: "Boost creativity, spontaneity, and communication skills through dynamic improvisation activities.",
      detailedDesc: `The Improv Workshop sharpens creativity, communication, and adaptability through improvisation techniques. Participants engage in guided activities that build confidence and spontaneous thinking.\n\nThe workshop creates a supportive environment for personal expression and teamwork. It is ideal for students looking to improve presentation, collaboration, and creative problem-solving abilities.`,
      img: "/workshop/worksop_improv.jpeg",
    },
    {
      title: "Trading Workshop",
      desc: "Learn market fundamentals, trading logic, and smart strategies for financial decision-making.",
      detailedDesc: `The Trading Workshop covers market principles, trading fundamentals, and investor psychology. Participants learn strategies for analyzing financial markets and making informed trading decisions.\n\nThe session builds strong conceptual understanding and introduces analytical approaches used in market evaluation. It is highly beneficial for students interested in stock markets, finance, and real-time decision-making.`,
      img: "/workshop/workshop_trading.jpeg",
    },
    {
      title: "PG Pathways Workshop",
      desc: "Get structured guidance for CAT, GMAT, and GRE with strategies to improve speed and accuracy.",
      detailedDesc: `The PG Pathways workshop provides participants with structured strategies to prepare for CAT, GMAT, and GRE exams. It focuses on time management, test-taking efficiency, and effective problem-solving approaches suited for competitive exams. Through guided instruction and practical insights, attendees understand how to tackle questions with accuracy and speed.\n\nThe workshop also helps learners identify their strengths, improve analytical reasoning, and develop exam-ready skills. Participants gain valuable clarity on preparation techniques and walk away with enhanced confidence for their postgraduate entrance journeys.`,
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
            <div
              className="card"
              onClick={() => setSelectedWorkshop(item)}
              style={{ cursor: "pointer" }}
            >
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

      <Modal
        isOpen={!!selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
        title={selectedWorkshop?.title || ""}
        image={selectedWorkshop?.img || ""}
        content={selectedWorkshop?.detailedDesc || ""}
      />
    </div>
  );
}
