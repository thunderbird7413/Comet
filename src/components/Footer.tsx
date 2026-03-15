import React from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, CalendarDays } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="comet-footer">
        <div className="footer-shell">
          <div className="footer-hero">
            <div className="footer-brand-zone">
              {/* <p className="footer-kicker">Career Development Cell, IIT Roorkee</p> */}
              <img src="/logos/Comet.png" alt="COMET" className="footer-brand" />
              <p className="footer-brand-copy">
                COMET is where technology, ambition, and creative problem-solving converge into one immersive campus experience.
              </p>
            </div>

            <div className="footer-meta">
              <div className="footer-meta-row">
                <span className="footer-meta-label">Dates</span>
                <p className="footer-meta-value">
                  <CalendarDays className="footer-icon" /> 13 - 15 April 2026
                </p>
              </div>
              <div className="footer-meta-row">
                <span className="footer-meta-label">Venue</span>
                <p className="footer-meta-value">
                  <MapPin className="footer-icon" /> IIT Roorkee, Uttarakhand
                </p>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-content">
            <div className="footer-column">
              <h2 className="footer-heading">Contact</h2>
              <a href="mailto:office_cdc@iitr.ac.in" className="footer-item">
                <Mail className="footer-icon" /> office_cdc@iitr.ac.in
              </a>
              <a href="mailto:st_cdc@iitr.ac.in" className="footer-item">
                <Mail className="footer-icon" /> st_cdc@iitr.ac.in
              </a>
              <a href="mailto:comet_cdc@iitr.ac.in" className="footer-item">
                <Mail className="footer-icon" /> comet_cdc@iitr.ac.in
              </a>
              <a href="tel:+91133228442" className="footer-item">
                <Phone className="footer-icon" /> +91-1332-28442
              </a>
            </div>

            <div className="footer-column footer-social-column">
              <h2 className="footer-heading">Follow</h2>
              <div className="footer-socials">
                <a href="https://www.instagram.com/cdc_iitr/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Instagram className="footer-social-icon" /> Instagram
                </a>
                <a href="https://www.linkedin.com/company/career-development-cell-iit-roorkee/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Linkedin className="footer-social-icon" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="footer-column footer-location-column">
              <h2 className="footer-heading">Visit</h2>
              <p className="footer-item footer-text">
                <MapPin className="footer-icon" /> Main Campus, IIT Roorkee, India
              </p>
              <div className="footer-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.713837004627!2d77.89367587524584!3d29.863116375005938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe3dc3%3A0x49d134d1eda3907!2sIIT%20Roorkee!5e0!3m2!1sen!2sin!4v1708876543210!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2026 COMET. All rights reserved.</p>
          <p>Career Development Cell, IIT Roorkee</p>
          <p>Designed for COMET&apos;26</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
