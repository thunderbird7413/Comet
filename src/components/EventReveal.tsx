"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./EventReveal.module.css";
const events = [
    {
        id: 1,
        title: "Trade Storm",
        date: "—",
        image: "/events/tradestorm.jpeg",
        tagline: "Experience the thrill of real-time market strategy."
    },
    {
        id: 2,
        title: "CodeRush",
        date: "—",
        image: "/events/codingrush.jpeg",
        tagline: "Race against time. Think fast. Code faster."
    },
    {
        id: 3,
        title: "StrategySphere",
        date: "—",
        image: "/events/strategysphere.jpeg",
        tagline: "Crack real-world business cases with strategic precision."
    },
    {
        id: 4,
        title: "PowerPlay Draft",
        date: "—",
        image: "/events/powerplaydraft.jpeg",
        tagline: "Build your dream team. Outsmart the auction table."
    },
    {
        id: 5,
        title: "Minds in Motion",
        date: "—",
        image: "/events/mindsinmotion.jpeg",
        tagline: "Innovate bold ideas through design and creativity."
    },
    {
        id: 6,
        title: "Enigma Escape",
        date: "—",
        image: "/events/engima.jpeg",
        tagline: "Think fast. Solve sharp. Escape before time runs out."
    },
    {
        id: 7,
        title: "AlgoVision",
        date: "—",
        image: "/events/algovision.jpeg",
        tagline: "Solve data-driven challenges with analytical power."
    },
    {
        id: 8,
        title: "AdSavvy",
        date: "—",
        image: "/events/adsavvy.jpeg",
        tagline: "Create compelling campaigns and pitch like a pro."
    },
    {
        id: 9,
        title: "MockUp",
        date: "—",
        image: "/events/mockup.jpeg",
        tagline: "Design fast. Prototype smart. Build impactful solutions."
    },
    {
        id: 10,
        title: "3-Minute Thesis",
        date: "—",
        image: "/events/thesis.jpeg",
        tagline: "Present big ideas with clarity in just 180 seconds."
    },
    {
        id: 11,
        title: "Poster Presentation",
        date: "—",
        image: "/events/poster.jpeg",
        tagline: "Showcase research visually with clarity and impact."
    },
    {
        id: 12,
        title: "ConnectX",
        date: "—",
        image: "/events/connectx.jpeg",
        tagline: "Network smart. Connect meaningfully. Win big."
    }
];


/* ---------- helper: pattern class index for V-shape (0..6) ---------- */
const patternIndex = (i: number) => i % 7; // 7 positions repeated

export default function EventsReveal() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        revealAll();
                        observer.disconnect();
                    }
                });
            },
            { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function revealAll() {
        setRevealed(true);
        // stagger reveal of each card
        cardRefs.current.forEach((card, idx) => {
            if (!card) return;
            const delay = idx * 80 + 100; // ms
            setTimeout(() => {
                card.classList.add(styles.show);
            }, delay);
        });
    }

    const setRef = (el: HTMLDivElement | null, idx: number) => {
        cardRefs.current[idx] = el;
    };

    return (
        <section className={styles.section} id="events" aria-label="Events reveal section">
            <div className={styles.header}>
                {/* <div className={styles.badge}>Event Lineup</div> */}
                <h2 className="section-title">Upcoming <span className={styles.accent}>Events</span></h2>
                {/* <p className={styles.lead}>Explore our curated selection — scroll to unfold and interact with each event.</p> */}
            </div>
            <div className={styles.initialStackWrapper}>
                <div ref={containerRef} className={`${styles.deck} ${revealed ? styles.revealed : ""}`}>
                    {events.map((ev, idx) => {
                        const posClass = styles["pos" + patternIndex(idx)];
                        const bg = `linear-gradient(135deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 100%), url("${ev.image}")`;
                        return (
                            <div
                                key={ev.id}
                                ref={(el) => setRef(el, idx)}
                                className={`${styles.card} ${posClass}`}
                                style={{ backgroundImage: bg }}
                                onMouseEnter={(e) => {
                                    // Cache the rect on enter to avoid layout thrashing on move
                                    const el = cardRefs.current[idx];
                                    if (!el) return;
                                    const r = el.getBoundingClientRect();
                                    el.setAttribute("data-l", r.left.toString());
                                    el.setAttribute("data-t", r.top.toString());
                                    el.setAttribute("data-w", r.width.toString());
                                    el.setAttribute("data-h", r.height.toString());
                                }}
                                onMouseMove={(e) => {
                                    const el = cardRefs.current[idx];
                                    if (!el) return;
                                    // Read from attributes instead of causing reflow
                                    const left = parseFloat(el.getAttribute("data-l") || "0");
                                    const top = parseFloat(el.getAttribute("data-t") || "0");
                                    const w = parseFloat(el.getAttribute("data-w") || "1");
                                    const h = parseFloat(el.getAttribute("data-h") || "1");

                                    const px = (e.clientX - left) / w;
                                    const py = (e.clientY - top) / h;

                                    // Use requestAnimationFrame for smoother updates if needed, but direct style set is okay if no reflow
                                    el.style.setProperty("--mx", `${(px - 0.5) * 10}deg`);
                                    el.style.setProperty("--my", `${(py - 0.5) * 8}px`);
                                    el.style.setProperty("--bx", `${50 + (px - 0.5) * 6}%`);
                                    el.style.setProperty("--by", `${50 + (py - 0.5) * 6}%`);
                                }}
                                onMouseLeave={() => {
                                    const el = cardRefs.current[idx];
                                    if (!el) return;
                                    el.style.setProperty("--mx", `0deg`);
                                    el.style.setProperty("--my", `0px`);
                                    el.style.setProperty("--bx", `50%`);
                                    el.style.setProperty("--by", `50%`);
                                }}
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

                                        <div className={styles.sheen} aria-hidden />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}