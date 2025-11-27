"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Zoom.css";

gsap.registerPlugin(ScrollTrigger);

export default function Zoom() {
  const bg1 = useRef<HTMLDivElement>(null);
  const imgContainer = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const text1 = useRef<HTMLHeadingElement>(null);
  const text2 = useRef<HTMLParagraphElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
        scrub: 2,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgContainer.current,
            pin: imgContainer.current,
            scrub: 1,
            start: "top top",
          },
        })
        .to(img.current, { transform: "translateZ(2200px)" }, 0)
        .to(text1.current, { y: -800, opacity: 0 }, "<")
        .to(text2.current, { y: -800, opacity: 0 }, "<")
        .fromTo(
          container.current,
          { yPercent: 100, scaleY: 2 },
          { yPercent: 0, scaleY: 1 }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="zoom-wrapper">
      <div ref={bg1} className="zoom-bg">
        <section>
          <div ref={imgContainer} className="img-container">
            <img
              ref={img}
              src="https://images.unsplash.com/photo-1719885160979-ee85f834845f?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="zoom-img"
              alt="hero"
            />

            <div className="text-block">
              <h1 ref={text1} className="title-text">
                <span className="text-stroke">Curiosity</span> Meets Creation
              </h1>
              <p ref={text2} className="subtitle-text">
                Interactive workshops built to spark innovation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
