"use client";
import React, { useRef } from "react";
import "./Team.css";

interface TeamMember {
    name: string;
    role: string;
    img: string;
}

const convenors: TeamMember[] = [
    { name: "Kartik Garg", role: "Convenor", img: "/team/Kartik.jpeg" },
    { name: "Sumit Tiwari", role: "Convenor", img: "/team/Tiwari.jpg" },
];

const coConvenors: TeamMember[] = [
    { name: "Anusha Gupta", role: "Co-Convenor", img: "/team/Anusha.jpeg" },
    { name: "Lalit Jingar", role: "Co-Convenor", img: "/team/Lalit.jpg" },
    { name: "Kushagra", role: "Co-Convenor", img: "/team/Kushagra_Design.jpg" },
];

const heads: TeamMember[] = [
    { name: "Vinayak Jat", role: "Web-D Head", img: "/team/vinayak.jpeg" },
    { name: "Bhoomi", role: "Design Head", img: "/team/Bhoomi Gupta_Design.jpg" },
    { name: "Maulik Bansal", role: "Promotions Head", img: "/team/Moulik Bansal_proms.jpg" },
    { name: "Arpita Mishra", role: "Promotions Head", img: "/team/Arpita Mishra_proms.jpg" },
    { name: "Nilesh", role: "Sponsorship & Outreach Head", img: "/team/Nilesh_Outreach.jpg" },
    { name: "Ahraz Rafiq", role: "Sponsorship & Outreach Head", img: "/team/Ahraz_Rafiq_Spons_Outreach.jpg" },
    { name: "Yashwant", role: "Video Editing Head", img: "/team/Yashwant.jpg" },
    { name: "Ashwini", role: "Marketing Head", img: "/team/Ashwin_Marketing.jpg" },
    { name: "Karthika", role: "Content Head", img: "/team/Karthika_content.jpg" },
    { name: "Fazil", role: "Operations Head", img: "/team/Fazil_Operations.jpg" },
    { name: "Pranjal", role: "Events Head", img: "/team/Pranjal.jpg" },
];

export default function TeamSection() {
    return (
        <div className="team-wrapper">
            <h2 className="section-title cursor-hover">Team Members</h2>

            <div className="team-container">
                {/* Convenors Row */}
                <div className="team-row">
                    {convenors.map((member, i) => (
                        <Card3D key={member.name} member={member} />
                    ))}
                </div>

                {/* Co-Convenors Row */}
                <div className="team-row">
                    {coConvenors.map((member, i) => (
                        <Card3D key={member.name} member={member} />
                    ))}
                </div>

                {/* Heads Row (Wrapped) */}
                <div className="team-row">
                    {heads.map((member, i) => (
                        <Card3D key={member.name} member={member} />
                    ))}
                </div>
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
