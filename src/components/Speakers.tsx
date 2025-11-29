import React from "react";
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
];

export default function PastSpeakers() {
  return (
    <>
      {/* -------------------- PAST SPEAKERS -------------------- */}
      <section className="past-speakers-section">
        <h2 className="section-title cursor-hover">Exclusive Speakers</h2>

        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-container">
              <div className="speaker-bubble">
                <img src={speaker.img} alt={speaker.name} />
                <div className="speaker-overlay">{speaker.name}</div>
              </div>
              <p className="speaker-name">{speaker.name}</p>
              <p className="speaker-designation">{speaker.designation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- CREATOR'S CONCLAVE -------------------- */}
      <section className="past-speakers-section">
        <h2 className="section-title cursor-hover">Creator's Conclave</h2>

        <div className="speakers-grid">
          {creators.map((creator, index) => (
            <div key={index} className="speaker-container">
              <div className="speaker-bubble">
                <img src={creator.img} alt={creator.name} />
                <div className="speaker-overlay">{creator.name}</div>
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
