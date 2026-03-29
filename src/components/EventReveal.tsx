"use client";
import React, { useState } from "react";
import styles from "./EventReveal.module.css";
import Modal from "./Modal";
import { events, type Event } from "@/utils/events";
import Link from "next/link";

interface EventsRevealProps {
    limit?: number;
    showTitle?: boolean;
}


export default function EventsReveal({ limit, showTitle = true }: EventsRevealProps) {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const displayedEvents = limit ? events.slice(0, limit) : events;

    return (
        <section className={styles.section} id="events" aria-label="Events reveal section">
            {showTitle && (
                <div className={styles.header}>
                    <h2 className="section-title">COMET'26 <span className={styles.accent}>Events</span></h2>
                </div>
            )}
            <div className={styles.initialStackWrapper}>
                <div className={styles.deck}>
                    {displayedEvents.map((ev) => {
                        return (
                            <div
                                key={ev.id}
                                className={styles.card}
                                onClick={() => setSelectedEvent(ev)}
                            >
                                <div className={styles.posterContainer}>
                                    <img src={ev.image} alt={ev.title} className={styles.posterImage} />
                                    <div className={styles.overlay}>
                                        <div className={styles.overlayContent}>
                                            <h3 className={styles.cardTitle}>{ev.title}</h3>
                                            <p className={styles.tagline}>{ev.tagline}</p>
                                            <button className={styles.cta}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {limit && events.length > limit && (
                <div className={styles.viewMoreContainer}>
                    <Link href="/events" className={styles.viewMoreButton}>
                        View All Events
                    </Link>
                </div>
            )}

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
