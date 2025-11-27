import React from "react";
import "./Speakers.css";


export const speakers = [
  {
    name: "Divya Bhatt",
    img: "/speakers/Divya Bhatt.JPG",
  },
  {
    name: "Speaker 4249",
    img: "/speakers/DSC_4249.JPG",
  },
  {
    name: "Speaker 4488",
    img: "/speakers/DSC_4488.JPG",
  },
  {
    name: "Speaker 4579",
    img: "/speakers/DSC_4579 (1).JPG",
  },
  {
    name: "Karunesh",
    img: "/speakers/Karunesh.JPG",
  },
  {
    name: "Prajakta",
    img: "/speakers/Prajakta.JPG",
  },
  {
    name: "Pratish",
    img: "/speakers/Pratish.JPG",
  },
  {
    name: "Raj",
    img: "/speakers/Raj.JPG",
  },
  {
    name: "Tanu",
    img: "/speakers/Tanu.JPG",
  },
  {
    name: "Vishal",
    img: "/speakers/Vishal.JPG",
  },
];



export default function PastSpeakers() {
  return (
    <section className="past-speakers-section">
      <h2 className="section-title">Past Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-bubble">
            <img src={speaker.img} alt={speaker.name} />
            <div className="speaker-overlay">{speaker.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}