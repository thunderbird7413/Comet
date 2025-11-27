"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./AnimatedTitle.module.css";

export default function AnimatedTitle({ text }: { text: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll("span");

    if (!letters) return;

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 50,
        x: (i: number) => (i % 2 === 0 ? -40 : 40), // alternate direction
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2, // slow, smooth stagger
      }
    );
  }, []);

  return (
    <h1 ref={titleRef} className="title cursor-hover">
      {text.split("").map((char, i) => (
        <span key={i} className={styles.letter}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
