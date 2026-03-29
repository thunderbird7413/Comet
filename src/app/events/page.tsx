import React from "react";
import EventReveal from "@/components/EventReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventsPage() {
    return (
        <main style={{ minHeight: "100vh", background: "#020617" }}>
            <Navbar />
            <div style={{ paddingTop: "100px" }}>
                <EventReveal showTitle={true} />
            </div>
            <Footer />
        </main>
    );
}
