"use client";
import React, { useRef } from "react";
import "./Team.css";

interface TeamMember {
    name: string;
    role: string;
    img: string;
}

const team: TeamMember[] = [
    {
        name: "Lalit",
        role: "Founder & CEO",
        img: "/team/Lalit.jpg",
    },
    {
        name: "Anusha Gupta",
        role: "Creative Director",
        img: "/team/Anusha.jpeg",
    },
    {
        name: "Pranjal",
        role: "Technical Head",
        img: "/team/Pranjal.jpg",
    },
    {
        name: "Kartik Garg",
        role: "Marketing Lead",
        img: "/team/Kartik.jpeg",
    },
    {
        name: "Swayam",
        role: "Marketing Lead",
        img: "/team/Swayam.jpg",
    },
    {
        name: "Sumit Tiwari",
        role: "Marketing Lead",
        img: "/team/Tiwari.jpg",
    },
    {
        name: "Moulik Bansal",
        role: "Promotions",
        img: "/team/Moulik Bansal_proms.jpg",
    },
    {
        name: "Nilesh",
        role: "Outreach",
        img: "/team/Nilesh_Outreach.jpg",
    },
    {
        name: "Fazil",
        role: "Operations",
        img: "/team/Fazil_Operations.jpg",
    },
    {
        name: "Ahraz Rafiq",
        role: "Sponsorship & Outreach",
        img: "/team/Ahraz_Rafiq_Spons_Outreach.jpg",
    },
    {
        name: "Karthika",
        role: "Content",
        img: "/team/Karthika_content.jpg",
    },
    {
        name: "Arpita Mishra",
        role: "Promotions",
        img: "/team/Arpita Mishra_proms.jpg",
    },
    {
        name: "Ashwin",
        role: "Marketing",
        img: "/team/Ashwin_Marketing.jpg",
    },
    {
        name: "Bhoomi Gupta",
        role: "Design",
        img: "/team/Bhoomi Gupta_Design.jpg",
    },
    {
        name: "Kushagra",
        role: "Design",
        img: "/team/Kushagra_Design.jpg",
    },
    {
        name: "Yashwant",
        role: "Video Editing Head",
        img: "/team/Yashwant.jpg",
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
        <section id="#members">
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
                </div>
            </div>
        </section>
    );
}
