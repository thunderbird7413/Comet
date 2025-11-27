"use client";
import React from "react";
import "./Workshops.css";
export default function Cards() {
  const cardData = [
    {
      title: "Workshop 1",
      desc: "Learn advanced techniques with hands-on practice.",
      img: "https://images.unsplash.com/photo-1719336608200-25e327f4332a?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Workshop 2",
      desc: "Improve your creative skills with expert guidance.",
      img: "https://images.unsplash.com/photo-1663534346049-b8874aae17ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    },
    {
      title: "Workshop 3",
      desc: "Master fundamentals and build real-world projects.",
      img: "https://images.unsplash.com/photo-1632967385345-703e01d5077c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    },
    {
      title: "Workshop 4",
      desc: "A complete step-by-step learning experience.",
      img: "https://images.unsplash.com/photo-1702901023340-7bc1fcc30a3d?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
