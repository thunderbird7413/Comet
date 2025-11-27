"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./AnimatedSubtitle.module.css";

export default function AnimatedSubtitle({ text }: { text: string }) {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const words = subtitleRef.current?.querySelectorAll("span");

    gsap.from(words!, {
      y: 30,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
      stagger: 0.5, // word-by-word
    });
  }, []);

  return (
    <p ref={subtitleRef} className="subtitle">
      {text.split(" ").map((word, i) => (
        <span key={i} className={styles.word}>
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}
