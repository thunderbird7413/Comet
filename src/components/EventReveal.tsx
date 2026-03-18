"use client";
import React, { useState, type CSSProperties } from "react";
import styles from "./EventReveal.module.css";
import Modal from "./Modal";

const events = [
    {
        id: 1,
        title: "Trade Storm",
        date: "—",
        image: "/events/tradestorm.jpeg",
        tagline: "Experience the thrill of real-time market strategy.",
        detailedDesc: `Trade Storm is a mock trading competition that tests participants’ analytical abilities and decision-making skills in a simulated stock market environment. Through curated stock data and real-time scenarios, participants experience the intensity of market fluctuations and strategic investment planning.\n\nThe event includes a quiz round followed by virtual trading, allowing contestants to apply financial reasoning and strategy. It helps them build an understanding of market fundamentals, trading behaviour, and risk assessment while competing for exciting prizes.`
    },
    {
        id: 2,
        title: "CodeRush",
        date: "—",
        image: "/events/codingrush.jpeg",
        tagline: "Race against time. Think fast. Code faster.",
        detailedDesc: `CodeRush is a fast-paced programming contest designed to assess coding proficiency under tight time constraints. Participants take on algorithmic and data-structure-based challenges that require speed, accuracy, and strong logical thinking.\n\nThe online qualifier filters the best coders, who then compete for exciting rewards and certificates. The event pushes participants to enhance their problem-solving skills, write efficient code, and improve competitive programming readiness.`
    },
    {
        id: 3,
        title: "StrategySphere",
        date: "—",
        image: "/events/strategysphere.jpeg",
        tagline: "Crack real-world business cases with strategic precision.",
        detailedDesc: `StrategySphere is a consulting case competition where teams solve real-world business problems using structured analysis and strategic thinking. It mimics professional consulting tasks, requiring participants to evaluate industries, identify challenges, and propose actionable solutions.\n\nWith a quiz, executive deck submission, and final presentation round, the event builds presentation skills, critical thinking, and decision-making abilities. Top-performing teams compete for attractive cash prizes and recognition.`
    },
    {
        id: 4,
        title: "PowerPlay Draft",
        date: "—",
        image: "/events/powerplaydraft.jpeg",
        tagline: "Build your dream team. Outsmart the auction table.",
        detailedDesc: `PowerPlay Draft offers participants a Mock IPL auction experience, where they draft and manage a cricket team using strategy, budget planning, and analytical instincts. The event begins with an online quiz, selecting teams that proceed to the live auction at IIT Roorkee.\n\nParticipants explore team-building logic, player valuation, and auction decision-making. This event blends sports enthusiasm with strategic management, making it both engaging and insightful while offering exciting rewards.`
    },
    {
        id: 5,
        title: "Minds in Motion",
        date: "—",
        image: "/events/mindsinmotion.jpeg",
        tagline: "Innovate bold ideas through design and creativity.",
        detailedDesc: `Minds in Motion encourages creativity, innovation, and entrepreneurial thinking by challenging participants to ideate impactful product solutions. After an initial quiz, teams submit a product problem statement that tests their understanding of design thinking.\n\nThe event helps participants develop practical insights into sustainable solutions and product development. It strengthens participants’ ability to identify user needs, research problems, and conceptualize viable ideas, with the best teams receiving exciting prizes.`
    },
    {
        id: 6,
        title: "Enigma Escape",
        date: "—",
        image: "/events/engima.jpeg",
        tagline: "Think fast. Solve sharp. Escape before time runs out.",
        detailedDesc: `Enigma Escape is a high-pressure puzzle-solving challenge where teams must work together to escape an assigned room within 12–15 minutes. Limited hints and cleverly designed puzzles test participants’ logic, quick thinking, and communication.\n\nThis fun yet intense competition encourages teamwork and mental agility. With exciting rewards and certificates, Enigma Escape offers a thrilling experience that sharpens problem-solving under constraints.`
    },
    {
        id: 7,
        title: "AlgoVision",
        date: "—",
        image: "/events/algovision.jpeg",
        tagline: "Solve data-driven challenges with analytical power.",
        detailedDesc: `AlgoVision is a data analytics and machine-learning case competition where teams tackle real-world problem statements using computational approaches. Participants first submit their methodology and code, after which finalists solve a new challenge.\n\nThe event enhances participants’ analytical thinking, coding ability, and understanding of ML applications. It is ideal for those looking to strengthen their practical data science skills while competing for attractive prizes.`
    },
    {
        id: 8,
        title: "AdSavvy",
        date: "—",
        image: "/events/adsavvy.jpeg",
        tagline: "Create compelling campaigns and pitch like a pro.",
        detailedDesc: `AdSavvy is a marketing and branding competition that allows participants to showcase creativity through campaign ideation and live pitching. The event begins with an online quiz, followed by a dynamic on-stage pitch at IIT Roorkee.\n\nParticipants build hands-on experience in advertising strategy, consumer understanding, and brand storytelling. The event rewards creativity and marketing insight with exciting prizes and recognition.`
    },
    {
        id: 9,
        title: "MockUp",
        date: "—",
        image: "/events/mockup.jpeg",
        tagline: "Design fast. Prototype smart. Build impactful solutions.",
        detailedDesc: `MockUp is a 36-hour design hackathon that challenges participants to prototype innovative solutions within a short timeframe. Teams receive problem statements and must conceptualize, design, and submit impactful prototypes.\n\nIt enhances rapid ideation, UI/UX thinking, and teamwork, while offering exciting rewards and recognition. The event prepares participants for real-world design challenges, pushing them to think fast and work collaboratively.`
    },
    {
        id: 10,
        title: "3-Minute Thesis",
        date: "—",
        image: "/events/thesis.jpeg",
        tagline: "Present big ideas with clarity in just 180 seconds.",
        detailedDesc: `The 3-Minute Thesis competition challenges participants to present their research or idea clearly and concisely within a strict 3-minute limit. With only two slides allowed, one for content and one for references, participants must express complex concepts in a sharp, engaging, and accessible manner.\n\nThis event builds communication, clarity of thought, and presentation discipline, especially for those pursuing research or academic paths. It enables participants to refine their storytelling, structure their ideas effectively, and deliver them with confidence under time pressure.`
    },
    {
        id: 11,
        title: "Poster Presentation",
        date: "—",
        image: "/events/poster.jpeg",
        tagline: "Showcase research visually with clarity and impact.",
        detailedDesc: `The Poster Presentation competition allows participants to showcase their academic or research work through visually engaging posters. Competitors must present original content, explain their concepts confidently without reading from the poster, and maintain professionalism throughout their interaction with judges and the audience.\n\nThe event strengthens participants' communication skills, helps them practice simplifying complex ideas, and encourages scientific creativity. By designing research posters and presenting them formally, participants gain valuable exposure to academic presentation formats.`
    },
    {
        id: 12,
        title: "ConnectX",
        date: "—",
        image: "/events/connectx.jpeg",
        tagline: "Network smart. Connect meaningfully. Win big.",
        detailedDesc: `ConnectX is an interactive networking-based competition designed to help participants build connections in a fun and dynamic environment. Using a specially designed bingo card, participants engage in conversations to identify peers matching the prompts on their cards, encouraging meaningful exchanges and broad networking.\n\nThe event fosters collaboration, communication, and interpersonal confidence while making networking enjoyable. Participants also stand a chance to win exclusive merchandise and exciting gifts by completing their bingo card, making ConnectX both engaging and rewarding.`
    }
];


export default function EventsReveal() {
    const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

    return (
        <section className={styles.section} id="events" aria-label="Events reveal section">
            <div className={styles.header}>
                {/* <div className={styles.badge}>Event Lineup</div> */}
                <h2 className="section-title">COMET'25 <span className={styles.accent}>Events</span></h2>
                {/* <p className={styles.lead}>Explore our curated selection — scroll to unfold and interact with each event.</p> */}
            </div>
            <div className={styles.initialStackWrapper}>
                <div className={styles.deck}>
                    {events.map((ev) => {
                        const cardStyle = { "--card-image": `url("${ev.image}")` } as CSSProperties;
                        return (
                            <div
                                key={ev.id}
                                className={styles.card}
                                style={cardStyle}
                                onClick={() => setSelectedEvent(ev)}
                            >
                                <div className={styles.flipper}>
                                    <div className={`${styles.face} ${styles.back}`}>
                                        <div className={styles.backInner}>
                                            <div className={styles.backLogo}>EVENT</div>
                                        </div>
                                    </div>

                                    <div className={`${styles.face} ${styles.front}`}>
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardTop}>
                                                <div className={styles.iconSmall}>★</div>
                                                <div className={styles.smallMeta}>{ev.date}</div>
                                            </div>

                                            <h3 className={styles.cardTitle}>{ev.title}</h3>

                                            <div className={styles.cardFooter}>
                                                <button className={styles.cta}>Details</button>
                                                <div className={styles.hint}>{ev.tagline}</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                title={selectedEvent?.title || ""}
                image={selectedEvent?.image || ""}
                content={selectedEvent?.detailedDesc || ""}
            />
        </section>
    );
}