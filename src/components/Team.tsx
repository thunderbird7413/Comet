"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Team.css";

interface TeamMember {
    name: string;
    role: string;
    img: string;
}

const professors: TeamMember[] = [
    { name: "Prof. R.K. Dutta", role: "Professor In-Charge", img: "/team/RK Dutta.jpeg" },
];

const convenors: TeamMember[] = [
    { name: "Kartik Garg", role: "Convenor", img: "/team/Kartik.jpeg" },
    { name: "Sumit Tiwari", role: "Convenor", img: "/team/Tiwari.jpg" },
];

const coConvenors: TeamMember[] = [
    { name: "Anusha Gupta", role: "Co-Convenor", img: "/team/Anusha.jpeg" },
    { name: "Lalit Jingar", role: "Co-Convenor", img: "/team/Lalit.jpg" },
    { name: "Kushagra", role: "Co-Convenor", img: "/team/Kushagra_Design.jpg" },
    { name: "Parth Mishra", role: "Co-Convenor", img: "/team/Parth Mishra.jpeg" },
];

const heads: TeamMember[] = [
    { name: "Vinayak Jat", role: "Web-D Head", img: "/team/vinayak.jpeg" },
    { name: "Bhoomi", role: "Design Head", img: "/team/Bhoomi Gupta_Design.jpg" },
    { name: "Moulik Bansal", role: "Promotions Head", img: "/team/Moulik Bansal_proms.jpg" },
    { name: "Arpita Mishra", role: "Promotions Head", img: "/team/Arpita Mishra_proms.jpg" },
    { name: "Nilesh", role: "Sponsorship & Outreach Head", img: "/team/Nilesh_Outreach.jpg" },
    { name: "Amey Joshi", role: "Sponsorship Head", img: "/team/Amay Joshi.jpeg" },
    { name: "Mohit Sharma", role: "Outreach Head", img: "/team/Mohit Sharma.jpeg" },
    { name: "Yashwant", role: "Video Editing Head", img: "/team/Yashwant.jpg" },
    { name: "Ashwini", role: "Marketing Head", img: "/team/Ashwin_Marketing.jpg" },
    { name: "Karthika", role: "Content Head", img: "/team/Karthika_content.jpg" },
    { name: "Fazil", role: "Operations Head", img: "/team/Fazil_Operations.jpg" },
    { name: "Pranjal", role: "Events Head", img: "/team/Pranjal.jpg" },
];


export default function TeamSection() {
    return (
        <section id="members" className="team-wrapper">
            <motion.h2
                className="section-title cursor-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Esteemed Members
            </motion.h2>

            <div className="team-container">
                {/* Professors Row */}
                <div className="team-row">
                    {professors.map((member, i) => (
                        <Card3D key={member.name} member={member} />
                    ))}
                </div>

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
        </section>
    );
}

function Card3D({ member }: { member: TeamMember }) {
    return (
        <div className="team-card">
            <div className="team-img">
                <img src={member.img} alt={member.name} />
            </div>

            <div className="team-info">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
            </div>
        </div>
    );
}
