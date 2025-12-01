"use client";
import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth animation loop
    const animate = () => {
      cursor.style.transform = `translate(${mouseX.current}px, ${mouseY.current}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    // Hover handlers
    const hoverItems = document.querySelectorAll(".cursor-hover");

    hoverItems.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-big");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-big");
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
}
