"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./EventReveal.module.css";

const events = [
    { id: 1, title: "Google Tata Strive", date: "19 May 2024", image: "https://images.unsplash.com/photo-1565799416526-6c597811591e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMHJhbmRvbSUyMGdsYXNzJTIwY3JlYXR1cmVyJTIwbGlrZSUyMG9jdG9wdXN8ZW58MHwwfDB8fHww", tagline: "Empowering careers through digital skilling." },
    { id: 2, title: "Research Funding Opportunities", date: "21 May 2024", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e8a2015f3d2b8a6022b9d839f1b8ea0", tagline: "Explore global research grants and funding." },
    { id: 3, title: "IGP Software Development, DA", date: "8 June 2024", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7f8c9a71b1f2ffb8c6277a6c1f0b6f1a", tagline: "Hands-on workshop on modern software development." },
    { id: 4, title: "IGP Civil Core", date: "9 June 2024", image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=ab3c4d9d8a2b2f8a5e1b6c3d0c4a9f2b", tagline: "Deep dive into core civil engineering technologies." },
    { id: 5, title: "Mock Interviews – Internship", date: "14–26 July 2024", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f2a8c0d6c8d2a5b6f1e9c7d5a4b3c2e", tagline: "Crack interviews with expert-led mock sessions." },
    { id: 6, title: "Expert Tips on Resumes & Interviews", date: "14 & 15 July 2024", image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=b2f9a8c4d0e7a1b2c3d4e5f6a7b8c9d0", tagline: "Build a resume that stands out instantly." },
    { id: 7, title: "Study Abroad Session", date: "17 August 2024", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=d8b6f6f6e1c2b3a4d5e6f7a8b9c0d1e2", tagline: "Guidance for choosing your ideal global university." },
    { id: 8, title: "Japanese Language Course", date: "26 August 2024", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=f123a4b5c6d7e8f9a0b1c2d3e4f5a6b7", tagline: "Begin your journey into Japanese culture & language." },
    { id: 9, title: "Study & Scholarship Opportunities in USA", date: "31 August 2024", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=ad3b2c1f4e5d6c7b8a9f0e1d2c3b4a5f", tagline: "Top pathways to study in the US with scholarships." },
    { id: 10, title: "Art & Science of Resume Making", date: "14 September 2024", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=94a0b2c3d4e5f6a7b8c9d0e1f2a3b4c5", tagline: "Learn resume building strategies that work." },
    { id: 11, title: "Placement Interviews – Express to Impress", date: "15 September 2024", image: "https://images.unsplash.com/photo-1763757575623-ffafe0867aa3?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tagline: "Ace your placement with rapid interview prep." },
    { id: 12, title: "Life Skills Workshop", date: "21 September 2024", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=c9b8a7d6e5f4c3b2a1f0e9d8c7b6a5e4", tagline: "Build confidence, mindset & communication skills." },
    { id: 13, title: "Mock Interviews – Placement", date: "20 September 2024", image: "https://images.unsplash.com/photo-1763493411066-48cc93cc82db?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tagline: "Practice live interviews before placement season." },
    { id: 14, title: "CAT Prep Series", date: "28 September 2024", image: "https://images.unsplash.com/photo-1754380194260-cc80ef52c5a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8", tagline: "Boost your CAT preparation with expert guidance." },
    { id: 15, title: "Blockchain Workshop", date: "19 October 2024", image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f5e4d3c2b1a0f9e8d7c6b5a4f3e2d1c", tagline: "Hands-on blockchain fundamentals and applications." },
    { id: 16, title: "Study in UK", date: "16 October 2024", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a7b6c5d4e3f2a1b0c9d8e7f6b5a4c3d", tagline: "Opportunities for studying in top UK universities." },
    { id: 17, title: "Guidance Junction – Foreign Exchange", date: "5 November 2024", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7f8c9a71b1f2ffb8c6277a6c1f0b6f1a", tagline: "Understand semester exchange & global options." },
    { id: 18, title: "Research Writing & Generative AI", date: "10 November 2024", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d", tagline: "Write research papers using modern AI tools." }
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
        <section className={styles.section} aria-label="Events reveal section">
            <div className={styles.header}>
                <div className={styles.badge}>Event Lineup</div>
                <h2 className={styles.title}>Upcoming <span className={styles.accent}>— Events</span></h2>
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
                                onMouseMove={(e) => {
                                    const el = cardRefs.current[idx];
                                    if (!el) return;
                                    const r = el.getBoundingClientRect();
                                    const px = (e.clientX - r.left) / r.width;
                                    const py = (e.clientY - r.top) / r.height;
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
