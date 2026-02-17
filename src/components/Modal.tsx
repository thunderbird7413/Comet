"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    content: string | React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, image, content }: ModalProps) {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.overlay} onClick={onClose}>
                    <motion.div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <button className={styles.closeButton} onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className={styles.imageWrapper}>
                            <img src={image} alt={title} className={styles.image} />
                            <div className={styles.imageOverlay} />
                            <h2 className={styles.title}>{title}</h2>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.scrollableContent}>
                                {typeof content === 'string' ? (
                                    content.split('\n').map((line, i) => (
                                        <p key={i} className={styles.paragraph}>
                                            {line}
                                        </p>
                                    ))
                                ) : content}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
