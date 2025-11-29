"use client";
import React, { useRef } from "react";
import "./Team.css";

interface TeamMember {
    name: string;
    role: string;
    phone: string;
    img: string;
}

const team: TeamMember[] = [
    {
        name: "Lalit",
        role: "Founder & CEO",
        phone: "+91 98765 43210",
        img: "/team/Lalit.jpg",
    },
    {
        name: "Anusha Gupta",
        role: "Creative Director",
        phone: "+91 99887 66554",
        img: "/team/Anusha.jpeg",
    },
    {
        name: "Pranjal",
        role: "Technical Head",
        phone: "+91 90909 12121",
        img: "/team/Pranjal.jpg",
    },
    {
        name: "Kartik Garg",
        role: "Marketing Lead",
        phone: "+91 88123 45678",
        img: "/team/Kartik.jpeg",
    },
    {
        name: "Swayam",
        role: "Marketing Lead",
        phone: "+91 88123 45678",
        img: "/team/Swayam.jpg",
    },
    {
        name: "Sumit Tiwari",
        role: "Marketing Lead",
        phone: "+91 88123 45678",
        img: "/team/Tiwari.jpg",
    },
    {
        name: "Moulik Bansal",
        role: "Promotions",
        phone: "+91 88123 45678",
        img: "/team/Moulik Bansal_proms.jpg",
    },
    {
        name: "Nilesh",
        role: "Outreach",
        phone: "+91 88123 45678",
        img: "/team/Nilesh_Outreach.jpg",
    },
    {
        name: "Fazil",
        role: "Operations",
        phone: "+91 88123 45678",
        img: "/team/Fazil_Operations.jpg",
    },
];

export default function TeamSection() {
    return (
        <div className="team-wrapper">
            <h2 className="section-title cursor-hover">Team Members</h2>

            <div className="team-grid">
                {team.map((member, i) => (
                    <Card3D key={i} member={member} />
                ))}
            </div>
        </div>
    );
}

function Card3D({ member }: { member: TeamMember }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        const card = cardRef.current!;
        const rect = card.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateX = (y - 0.5) * -20;
        const rotateY = (x - 0.5) * 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
        const card = cardRef.current!;
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <div
            ref={cardRef}
            className="team-card"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            <div className="team-img">
                <img src={member.img} alt={member.name} />
            </div>

            <div className="team-info">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
                <span>{member.phone}</span>
            </div>
        </div>
    );
}
