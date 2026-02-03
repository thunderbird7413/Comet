import React from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="contact">
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
            {/* Using mailto: prefix for emails */}
            <p><a href="mailto:office_cdc@iitr.ac.in"><Mail className="footer-icon" /> office_cdc@iitr.ac.in</a></p>
            <p><a href="mailto:st_cdc@iitr.ac.in"><Mail className="footer-icon" /> st_cdc@iitr.ac.in</a></p>
            <p><a href="mailto:comet_cdc@iitr.ac.in"><Mail className="footer-icon" /> comet_cdc@iitr.ac.in</a></p>
          </div>

          {/* LOCATION SECTION */}
          <div className="footer-location">
            <h2>Location</h2>
            {/* The Google Maps link you requested */}
            <p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=IIT+Roorkee+Uttarakhand+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <MapPin className="footer-icon" /> IIT Roorkee, Uttarakhand, India
              </a>
            </p>
          </div>
        </div>

        <div className="footer-brand-container">
         <img 
            src="/logos/cdc_3d.png" 
            alt="COMET Logo" 
            className="footer-brand-logo" 
         />
        </div>

        <div className="footer-bottom">
          <p>Copyright © Comet'26</p>
          <p>CDC IIT Roorkee</p>

            <div className="footer-socials">
            {/* Added Icons here */}
            <a 
              href="https://www.instagram.com/cdc_iitr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram"
            >
              <Instagram size={24} className="footer-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/company/career-development-cell-iit-roorkee/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
            >
              <Linkedin size={24} className="footer-icon" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
