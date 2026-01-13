"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Speakers.css";

export const speakers = [
  {
    name: "Divya Bhatt",
    designation: "Chief Business Officer @L&T Technology Services",
    img: "/speakers/exclusive speakers/Divya Bhatt.JPG",
  },
  {
    name: "Chaitanya Sharma",
    designation: "Actor & Rapper",
    img: "/speakers/exclusive speakers/Chaitanya Sharma.JPG",
  },
  {
    name: "Bimal Unnikrishnan",
    designation: "Showrunner @Shark Tank Indiar",
    img: "/speakers/exclusive speakers/bimal.png",
  },
  {
    name: "Abhishek Choudhary",
    designation: "Product and Service Delivery Manager @SLB",
    img: "/speakers/exclusive speakers/abhishek.JPG",
  },
  {
    name: "Pankaj Kumar",
    designation: "Director(Production) @ONGC",
    img: "/speakers/exclusive speakers/Pankaj.jpg",
  },
  {
    name: "Raj Vikaramaditya",
    designation: "DSA Expert @Google, Youtuber",
    img: "/speakers/exclusive speakers/Raj.JPG",
  },
  {
    name: "Saloni Khanna",
    designation: "UPSC Mentor",
    img: "/speakers/exclusive speakers/Saloni.JPG",
  },
  {
    name: "Vishal",
    designation: "Director Gen AI @Microsoft",
    img: "/speakers/exclusive speakers/vishal.JPG",
  },
];

export const creators = [
  {
    name: "Prajakta Koli",
    designation: "Actor, Influencer, Writer",
    img: "/speakers/creator/Prajakta.JPG",
  },
  {
    name: "Karunesh Talwar",
    designation: "Stand-Up Comedian",
    img: "/speakers/creator/Karunesh.JPG",
  },
  {
    name: "Madhur Virli",
    designation: "Stand-Up Comedian",
    img: "/speakers/creator/Madhur.JPG",
  },
  {
    name: "Iqlipse Nova",
    designation: "Influencer",
    img: "/speakers/creator/iqlipse.jpg",
  },
];

export default function PastSpeakers() {
  return (
    <>
      {/* -------------------- PAST SPEAKERS -------------------- */}
      <section className="past-speakers-section">
        <motion.h2
          className="section-title cursor-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Exclusive Speakers
        </motion.h2>

        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-container">
              <div className="speaker-bubble">
                <Image
                  src={speaker.img}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 600px) 160px, 220px"
                  className="speaker-image"
                />
                {/* <div className="speaker-overlay">{speaker.name}</div> */}
              </div>
              <p className="speaker-name">{speaker.name}</p>
              <p className="speaker-designation">{speaker.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- CREATOR'S CONCLAVE -------------------- */}
      <section className="past-speakers-section">
        <motion.h2
          className="section-title cursor-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Creator's Conclave
        </motion.h2>

        <div className="speakers-grid">
          {creators.map((creator, index) => (
            <div key={index} className="speaker-container">
              <div className="speaker-bubble">
                <Image
                  src={creator.img}
                  alt={creator.name}
                  fill
                  sizes="(max-width: 600px) 160px, 220px"
                  className="speaker-image"
                />
                {/* <div className="speaker-overlay">{creator.name}</div> */}
              </div>
              <p className="speaker-name">{creator.name}</p>
              <p className="speaker-designation">{creator.designation}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
