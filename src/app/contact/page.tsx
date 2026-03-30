"use client";

import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import "../../components/Contact.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message Sent Successfully!");
    };

    return (
        <main className="contact-page">
            <Navbar />

            <div className="contact-container">
                <header className="contact-header">
                    <h1 className="contact-title">Connect with the future</h1>
                </header>

                <div className="contact-grid">
                    {/* Left: Contact Info */}
                    <div className="contact-info-stack">
                        <div className="contact-card">
                            <h2 className="contact-card-heading">Contact Information</h2>
                            <div className="contact-list">
                                <a href="mailto:office_cdc@iitr.ac.in" className="contact-item">
                                    <Mail className="contact-icon" />
                                    <div className="contact-value">
                                        <strong>General Office</strong><br />
                                        office_cdc@iitr.ac.in
                                    </div>
                                </a>
                                <a href="mailto:st_cdc@iitr.ac.in" className="contact-item">
                                    <Mail className="contact-icon" />
                                    <div className="contact-value">
                                        <strong>Student Coordinator</strong><br />
                                        st_cdc@iitr.ac.in
                                    </div>
                                </a>
                                <a href="mailto:comet_cdc@iitr.ac.in" className="contact-item">
                                    <Mail className="contact-icon" />
                                    <div className="contact-value">
                                        <strong>Comet Inquiries</strong><br />
                                        comet_cdc@iitr.ac.in
                                    </div>
                                </a>
                                <a href="tel:+91133228442" className="contact-item">
                                    <Phone className="contact-icon" />
                                    <div className="contact-value">
                                        <strong>Hotline</strong><br />
                                        +91-1332-28442
                                    </div>
                                </a>
                            </div>

                            <div className="social-grid">
                                <a href="https://www.instagram.com/cdc_iitr/" target="_blank" rel="noopener noreferrer" className="social-pill">
                                    <Instagram size={18} /> Instagram
                                </a>
                                <a href="https://www.linkedin.com/company/career-development-cell-iit-roorkee/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-pill">
                                    <Linkedin size={18} /> LinkedIn
                                </a>
                            </div>
                        </div>

                        <div className="contact-card">
                            <h2 className="contact-card-heading">Location</h2>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <div className="contact-value">
                                    Career Development Cell,<br />
                                    Main Campus, IIT Roorkee,<br />
                                    Uttarakhand, India - 247667
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="contact-form-card">
                        <h2 className="contact-card-heading">Send a Transmission</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-input" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-input" placeholder="your@email.com" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-input" placeholder="What is this about?" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" placeholder="Type your message here..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                <Send size={18} style={{ marginRight: '10px' }} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.713837004627!2d77.89367587524584!3d29.863116375005938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe3dc3%3A0x49d134d1eda3907!2sIIT%20Roorkee!5e0!3m2!1sen!2sin!4v1708876543210!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </main>
    );
}
