"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import "./workshops.css";

const cardData = [
    {
        title: "Project Management Workshop",
        detailedDesc: `This workshop equips attendees with essential project management concepts such as planning, execution, monitoring, and resource allocation. Participants learn industry-relevant strategies for handling complex tasks efficiently.\n\nThe session includes real examples, insights, and structured guidance to build managerial competence. It prepares participants to apply PM skills in academic, professional, and team-based projects.`,
        img: "/workshop/workshop_project.jpeg",
    },
    {
        title: "Blockchain Workshop",
        detailedDesc: `This session introduces participants to blockchain fundamentals, architecture, and applications across industries. It explores decentralized systems, cryptocurrencies, smart contracts, and their future potential.\n\nParticipants gain insights into how blockchain is transforming digital systems and learn where the technology is heading. The workshop is valuable for beginners interested in Web3 and modern computational frameworks.`,
        img: "/workshop/workshop_blockchain.jpeg",
    },
    {
        title: "Financial Taxation Workshop",
        detailedDesc: `This workshop simplifies taxation concepts and explains strategies for managing tax-related matters. Participants gain clarity on financial regulations and common taxation practices.\n\nThrough expert-led discussions, attendees understand how taxation operates in real-world scenarios. The workshop strengthens financial literacy and prepares students for better personal and professional financial decisions.`,
        img: "/workshop/workshop_finance.jpeg",
    },
    {
        title: "Improv Workshop",
        detailedDesc: `The Improv Workshop sharpens creativity, communication, and adaptability through improvisation techniques. Participants engage in guided activities that build confidence and spontaneous thinking.\n\nThe workshop creates a supportive environment for personal expression and teamwork. It is ideal for students looking to improve presentation, collaboration, and creative problem-solving abilities.`,
        img: "/workshop/worksop_improv.jpeg",
    },
    {
        title: "Trading Workshop",
        detailedDesc: `The Trading Workshop covers market principles, trading fundamentals, and investor psychology. Participants learn strategies for analyzing financial markets and making informed trading decisions.\n\nThe session builds strong conceptual understanding and introduces analytical approaches used in market evaluation. It is highly beneficial for students interested in stock markets, finance, and real-time decision-making.`,
        img: "/workshop/workshop_trading.jpeg",
    },
    {
        title: "PG Pathways Workshop",
        detailedDesc: `The PG Pathways workshop provides participants with structured strategies to prepare for CAT, GMAT, and GRE exams. It focuses on time management, test-taking efficiency, and effective problem-solving approaches suited for competitive exams. Through guided instruction and practical insights, attendees understand how to tackle questions with accuracy and speed.\n\nThe workshop also helps learners identify their strengths, improve analytical reasoning, and develop exam-ready skills. Participants gain valuable clarity on preparation techniques and walk away with enhanced confidence for their postgraduate entrance journeys.`,
        img: "/workshop/workshop_pgpathways.jpeg",
    },
];

export default function WorkshopsPage() {
    const [selected, setSelected] = useState<typeof cardData[0] | null>(null);

    return (
        <main className="wkp-page">
            <Navbar />

            {/* Background particles effect */}
            <div className="wkp-bg">
                <div className="wkp-glow wkp-glow-1" />
                <div className="wkp-glow wkp-glow-2" />
                <div className="wkp-grid-overlay" />
            </div>

            {/* Hero */}
            <section className="wkp-hero">
                <motion.span
                    className="wkp-hero-label"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                </motion.span>
                <motion.h1
                    className="wkp-hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    Workshops
                </motion.h1>
            </section>

            {/* Cards Grid */}
            <section className="wkp-grid">
                {cardData.map((item, i) => (
                    <motion.div
                        key={i}
                        className="wkp-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelected(item)}
                    >
                        <div className="wkp-card-img-wrap">
                            <img src={item.img} alt={item.title} className="wkp-card-img" />
                            <div className="wkp-card-emerald" />
                        </div>
                        <div className="wkp-card-footer">
                            <h3>{item.title}</h3>
                        </div>
                        {/* Corner accents */}
                        <div className="wkp-corner wkp-corner-tl" />
                        <div className="wkp-corner wkp-corner-tr" />
                        <div className="wkp-corner wkp-corner-bl" />
                        <div className="wkp-corner wkp-corner-br" />
                    </motion.div>
                ))}
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <div className="wkp-modal-overlay" onClick={() => setSelected(null)}>
                        <motion.div
                            className="wkp-modal"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.85, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <button className="wkp-modal-close" onClick={() => setSelected(null)}>
                                <X size={22} />
                            </button>

                            <div className="wkp-modal-img-wrap">
                                <img src={selected.img} alt={selected.title} className="wkp-modal-img" />
                                <div className="wkp-modal-img-fade" />
                            </div>

                            <div className="wkp-modal-body">
                                <h2 className="wkp-modal-title">{selected.title}</h2>
                                <div className="wkp-modal-content">
                                    {selected.detailedDesc.split("\n").map((line, idx) => (
                                        <p key={idx}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
