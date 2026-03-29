"use client";
import React, { useState } from "react";
import styles from "./EventReveal.module.css";
import Modal from "./Modal";
import { workshops, type Workshop } from "@/utils/workshops";

interface WorkshopRevealProps {
    limit?: number;
    showTitle?: boolean;
}

export default function WorkshopReveal({ limit, showTitle = true }: WorkshopRevealProps) {
    const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

    const displayedWorkshops = limit ? workshops.slice(0, limit) : workshops;

    return (
        <section className={styles.section} id="workshops" aria-label="Workshops reveal section">
            {showTitle && (
                <div className={styles.header}>
                    <h2 className="section-title">COMET'26 <span className={styles.accent}>Workshops</span></h2>
                </div>
            )}
            <div className={styles.initialStackWrapper}>
                <div className={styles.deck}>
                    {displayedWorkshops.map((ws) => {
                        return (
                            <div
                                key={ws.id}
                                className={styles.card}
                                onClick={() => setSelectedWorkshop(ws)}
                            >
                                <div className={styles.posterContainer}>
                                    <img src={ws.img} alt={ws.title} className={styles.posterImage} />
                                    <div className={styles.overlay}>
                                        <div className={styles.overlayContent}>
                                            <h3 className={styles.cardTitle}>{ws.title}</h3>
                                            <p className={styles.tagline}>{ws.tagline}</p>
                                            <button className={styles.cta}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal
                isOpen={!!selectedWorkshop}
                onClose={() => setSelectedWorkshop(null)}
                title={selectedWorkshop?.title || ""}
                image={selectedWorkshop?.img || ""}
                content={selectedWorkshop?.detailedDesc || ""}
            />
        </section>
    );
}
