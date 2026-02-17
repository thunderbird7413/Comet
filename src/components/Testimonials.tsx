"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Pankaj Kumar",
        message: "It was really nice interacting with the students at COMET. The curiosity and kind of questions they asked made the session very engaging. Good to see students so eager to learn beyond the classroom.",
    },
    {
        name: "Vishal Singhvi",
        message: "Talking about Generative AI with students at IIT Roorkee through COMET was a great experience. The students were well aware and asked very relevant questions. Always happy to be part of such meaningful discussions.",
    },
    {
        name: "Divya Bhatt",
        message: "Returning to IIT Roorkee and speaking at COMET was incredibly special for me. Interacting with students from my own alma mater brought back wonderful memories. I’m really glad to be a part of this session.",
    },
    {
        name: "Abhishek Choudhary",
        message: "It was great to share insights from industry and sustainability initiatives with such an engaged audience. COMET is doing a good job in creating these learning spaces for students.",
    },
    {
        name: "Bimal Unnikrishnan",
        message: "The session at COMET was filled with insightful questions and thoughtful discussions around innovation and sustainability. Students showed genuine interest in the discussion, which made it enjoyable. Wishing the team continued success in growing this platform.",
    },
    {
        name: "Chaitanya Sharma",
        message: "Had a really good interaction with the students at COMET. The energy and openness during the session made it a nice experience. Glad to be part of this initiative.",
    },
    {
        name: "Saloni Khanna",
        message: "I truly enjoyed interacting with the students at COMET. Students were open to ideas and very participative throughout the session.",
    },
    {
        name: "Prajakta Koli",
        message: "The audience at COMET was very warm and interactive. It was lovely talking to students who were curious and expressive. I had a really nice time.",
    },
    {
        name: "Karunesh Talwar",
        message: "Really liked the vibe at COMET. The audience was fun and sharp, which made the session enjoyable. Glad to be a part of this.",
    },
    {
        name: "Madhur Virli",
        message: "Interacting with such an enthusiastic audience at COMET was very refreshing for me. Wishing the team the very best for future editions.",
    },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Horizontal Marquee Animation
            const track = trackRef.current;
            if (!track) return;

            // Calculate total width of one set of cards (including gap)
            // We'll trust GSAP to handle the infinite seamless loop if we structure the HTML correctly
            // For a seamless loop, we often duplicate the content.

            const totalWidth = track.scrollWidth / 2; // Since we duplicate the list

            gsap.to(track, {
                x: -totalWidth,
                duration: 40, // Adjust speed here
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth) // Ensures seamless looping
                }
            });

            // Animate title entry
            gsap.from(`.${styles.title}`, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Duplicate testimonials for seamless marquee
    const displayTestimonials = [...testimonials, ...testimonials];

    return (
        <section ref={containerRef} className={styles.section} id="testimonials">
            <div className={styles.container}>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.title}>Voices of Comet</h2>
                    <p className={styles.subtitle}>What our speakers had to say</p>
                </div>
            </div>

            <div className={styles.marqueeWrapper}>
                <div ref={trackRef} className={styles.marqueeTrack}>
                    {displayTestimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.quoteIcon}>“</div>
                            <p className={styles.message}>{t.message}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {t.name.charAt(0)}
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{t.name}</span>
                                    <span className={styles.role}>Guest Speaker</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
