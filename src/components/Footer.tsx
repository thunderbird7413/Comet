import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";   // <--- Icons
import "./Footer.css";

const Footer = () => {
  return (
    <section id="#contact">
    <footer className="comet-footer">
      <div className="footer-top">

        {/* CONTACT SECTION */}
        <div className="footer-left-menu">
          <h2>Contact</h2>

          <p><Phone className="footer-icon" /> +91-1332-28442</p>
          <p><Phone className="footer-icon" /> +91-6375-064220</p>
          <p><Phone className="footer-icon" /> +91-8888-930633</p>
        </div>

        {/* MAIL SECTION */}
        <div className="footer-newsletter">
          <h2>Mail</h2>

          <p><Mail className="footer-icon" /> office_cdc@iitr.ac.in</p>
          <p><Mail className="footer-icon" /> st_cdc@iitr.ac.in</p>
          <p><Mail className="footer-icon" /> comet_cdc@iitr.ac.in</p>
        </div>

        {/* LOCATION SECTION */}
        <div className="footer-location">
          <h2>Location</h2>

          <p><MapPin className="footer-icon" /> IIT Roorkee, Uttarakhand, India</p>
        </div>
      </div>

      <h1 className="footer-brand">COMET</h1>

      <div className="footer-bottom">
        <p>Copyright © Comet'26</p>
        <p>CDC IIT Roorkee</p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/cdc_iitr/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/career-development-cell-iit-roorkee/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
