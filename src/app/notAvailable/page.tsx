"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./NotAvailable.module.css";

const NotAvailable = () => {
    return (
        <main className={styles.container}>
            <div className={styles.glow_bg} />

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    COMING SOON
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    THIS FEATURE IS UNDER CONSTRUCTION
                </motion.p>

                <motion.div
                    className={styles.button_wrap}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Link href="/" className="futuristic-btn">
                        <span className="btn-corner corner-tl"></span>
                        <span className="btn-corner corner-tr"></span>
                        <span className="btn-corner corner-bl"></span>
                        <span className="btn-corner corner-br"></span>
                        <span className="btn-glitch-plane"></span>
                        BACK TO HOME
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};

export default NotAvailable;
