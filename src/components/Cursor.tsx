"use client";
import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

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
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
}
