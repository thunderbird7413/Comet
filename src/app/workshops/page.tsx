"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkshopReveal from "@/components/WorkshopReveal";
import "./workshops.css";

export default function WorkshopsPage() {
    return (
        <main className="wkp-page">
            <Navbar />

            {/* Background effects */}
            <div className="wkp-bg">
                <div className="wkp-glow wkp-glow-1" />
                <div className="wkp-glow wkp-glow-2" />
                <div className="wkp-grid-overlay" />
            </div>

            <div style={{ marginTop: "100px", paddingBottom: "100px" }}>
                <WorkshopReveal showTitle={true} />
            </div>

            <Footer />
        </main>
    );
}
