"use client";
import React from "react";
import "./Workshops.css";
export default function Cards() {
 const cardData = [
  {
    title: "Project Management Workshop",
    desc: "Learn planning, execution, and real-world project handling with structured industry insights.",
    img: "./Workshops/Management.jpg",
  },
  {
    title: "Financial Taxation Workshop",
    desc: "Understand taxation fundamentals, regulations, and practical financial decision-making strategies.",
    img: "./Workshops/Taxation.jpg",
  },
  {
    title: "Blockchain Workshop",
    desc: "Explore blockchain basics, smart contracts, decentralized systems, and their real-world applications.",
    img: "./Workshops/Blockchain.jpg",
  },
  {
    title: "Improv Workshop",
    desc: "Boost creativity, spontaneity, and communication skills through dynamic improvisation activities.",
    img: "./Workshops/Improv.jpg",
  },
  {
    title: "Data Analytics Workshop",
    desc: "Gain hands-on experience with analytical tools to interpret data and solve real-world problems.",
    img: "./Workshops/Data.jpg",
  },
  {
    title: "Trading Workshop",
    desc: "Learn market fundamentals, trading logic, and smart strategies for financial decision-making.",
    img: "./Workshops/Trading.jpg",
  },
  {
    title: "PG Pathways Workshop",
    desc: "Get structured guidance for CAT, GMAT, and GRE with strategies to improve speed and accuracy.",
    img: "./Workshops/PG.jpg",
  }
];


  return (
    <div className="cards-container">
      <h2 className="cards-heading">Our Workshops</h2>

      <div className="cards-grid">
        {cardData.map((item, index) => (
          <div key={index} className="card">
            <div className="card-img-wrapper">
              <img src={item.img} alt={item.title} className="card-img" />
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
