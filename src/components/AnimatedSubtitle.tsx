"use client";

import { useEffect, useState } from "react";
import styles from "./AnimatedSubtitle.module.css";

export default function AnimatedSubtitle({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text;

      setDisplayText(current => {
        if (isDeleting) {
          return fullText.substring(0, current.length - 1);
        } else {
          return fullText.substring(0, current.length + 1);
        }
      });

      // Typing Speeds
      if (!isDeleting && displayText === fullText) {
        // Finished typing, wait before deleting
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        // Finished deleting, wait before typing again
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        // Normal typing/deleting speed
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, text]);

  return (
    <p className="subtitle">
      {displayText}
      <span className={styles.cursor}>|</span>
    </p>
  );
}
