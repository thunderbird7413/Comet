"use client";
import React, { useRef, useEffect } from "react";
import "./Sponsers.css";

interface PartnerCardProps {
  logo: string;
  text: string;
}

const partners: PartnerCardProps[] = [
  {
    logo: "./image 1.png",
    text: `Retained Production support across retail and events in NY, CHI, LA, providing creative design, project management, and full execution from concept to installation.`,
  },
  {
    logo: "./image 2.png",
    text: `Creative Concepting, Design, and Project Management for multi-city rollouts across the Country with streamlined execution and cross-team communication.`,
  },
  {
    logo: "./image 3.png",
    text: `Production and installation oversight for flagship retail locations, ensuring premium-quality execution and seamless creative implementation.`,
  },
  {
    logo: "./image 4.png",
    text: `Holiday production partner for nationwide Nordstrom activations, including setup coordination and custom design for seasonal brand experiences.`,
  },
  {
    logo: "./image 5.png",
    text: `Brand partnership for multi-store promotional campaigns, focusing on large-scale rollouts, creative development, and installation management.`,
  },
  {
    logo: "./image 6.png",
    text: `End-to-end design support for experiential events, including concept visuals, fabrication management, and on-site coordination.`,
  },
  {
    logo: "./image 7.png",
    text: `Collaboration for retail visual merchandising, offering innovative layout concepts and production-ready execution workflows.`,
  },
  {
    logo: "./image 8.png",
    text: `Support for brand pop-up stores with full production planning, sourcing, and rapid execution across urban retail hubs.`,
  },
  {
    logo: "./image 9.png",
    text: `Creative development and fabrication management for seasonal brand storytelling across multiple retail environments.`,
  },
  {
    logo: "./image 10.png",
    text: `Design and project execution partner for sneaker and streetwear activations, ensuring consistent quality across all event installations.`,
  },
  {
    logo: "./image 11.png",
    text: `Production collaboration for lifestyle brand showcases, including spatial design and high-fidelity prototype development.`,
  },
  {
    logo: "./image 12.png",
    text: `Managed creative production for brand roadshows, providing logistics, event fabrication, and on-ground technical support.`,
  },
  {
    logo: "./image 13.png",
    text: `Worked on limited-edition product campaigns, delivering premium display units and creative merchandising solutions.`,
  },
  {
    logo: "./image 14.png",
    text: `Storefront branding partner providing installation oversight, color accuracy checks, and fabrication coordination.`,
  },
  {
    logo: "./image 15.png",
    text: `Partnered for brand educational workshops, producing immersive sets and interactive experience zones.`,
  },
  {
    logo: "./image 16.png",
    text: `Handled production and layout planning for brand gallery installations, ensuring elevated visual presentation.`,
  },
  {
    logo: "./image 17.png",
    text: `Supported D2C brand exhibits with design mockups, structural production, and quality assurance for all touchpoints.`,
  },
  {
    logo: "./image 18.png",
    text: `Managed logistics-heavy product launch events, offering creative direction and end-to-end production execution.`,
  },
  {
    logo: "./image 19.png",
    text: `Provided creative studio support for digital + physical brand experiences, ensuring cohesive storytelling across platforms.`,
  },
  {
    logo: "./image 20.png",
    text: `Partnered for global retail expansions, offering consistent design language and production execution in multiple regions.`,
  },
  {
    logo: "./image 21.png",
    text: `Brand activation partner specializing in fast-turnaround experiential builds and multi-city event rollouts.`,
  },
  {
    logo: "./image 22.png",
    text: `Provided concept-to-delivery support for premium retail displays, focusing on durability, aesthetics, and installation ease.`,
  },
  {
    logo: "./image 23.png",
    text: `Ongoing partnership for corporate event environments, offering stage design, booth fabrication, and branded interior elements.`,
  },
  {
    logo: "./image 24.png",
    text: `Lead production partner for fashion-week pop-ups, offering rapid prototyping, bespoke installations, and high-finish material execution.`,
  },
  {
    logo: "./image 25.png",
    text: `Supported luxury retail events with architectural displays, custom lighting layouts, and seamless multi-day event coordination.`,
  },
  {
    logo: "./image 26.png",
    text: `Handled end-to-end environment design for tech-brand showcases, integrating interactive elements and modular display components.`,
  },
  {
    logo: "./image 27.png",
    text: `Creative fabrication partner for influencer-focused launch events, ensuring premium set aesthetics and streamlined photo-op design.`,
  },
  {
    logo: "./image 28.png",
    text: `Provided nationwide installation support for high-traffic retail chains, ensuring consistency, durability, and fast deployment.`,
  },
];

export default function WhoWeWorkWith() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current!.scrollLeft -= 350;
  };

  const scrollRight = () => {
    sliderRef.current!.scrollLeft += 350;
  };

  /* ------------------- AUTOSLIDE CODE ------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 3200); // 3.2 sec per slide

    return () => clearInterval(interval);
  }, []);

  /* ------------------- DRAG SCROLL ------------------- */
  let isDown = false;
  let startX: number;
  let scrollLeftPos: number;

  const handleDown = (e: any) => {
    isDown = true;
    startX = e.pageX - sliderRef.current!.offsetLeft;
    scrollLeftPos = sliderRef.current!.scrollLeft;
  };
  const handleLeave = () => (isDown = false);
  const handleUp = () => (isDown = false);
  const handleMove = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 1.3;
    sliderRef.current!.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="work-section">
     <h2 className="section-title">Sponsers</h2>


      <div className="slider-wrapper">
        <button className="arrow-btn left" onClick={scrollLeft}>
          &#10094;
        </button>

        <div
          className="slider"
          ref={sliderRef}
          onMouseDown={handleDown}
          onMouseLeave={handleLeave}
          onMouseUp={handleUp}
          onMouseMove={handleMove}
        >
          {partners.map((p, i) => (
            <div key={i} className="partner-card">
              <img src={p.logo} className="partner-logo" />
              <p className="partner-text">{p.text}</p>
            </div>
          ))}
        </div>

        <button className="arrow-btn right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
