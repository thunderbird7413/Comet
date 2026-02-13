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
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.016550221375!2d77.89304487616147!3d29.8654464264214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe37a7%3A0xad919b15af050467!2sIndian%20Institute%20Of%20Technology%20Roorkee!5e0!3m2!1sen!2sin!4v1707860000000!5m2!1sen!2sin"
          width="100%"
          height="350" /* Slightly taller for that 'enlarged' look */
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="footer-map"
          ></iframe>
        </div>
        </div>

        <div className="footer-brand-container">
         <img 
            src="/logos/comet-end logo.png" 
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
