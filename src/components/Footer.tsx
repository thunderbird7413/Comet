import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";   // <--- Icons
import "./Footer.css";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="comet-footer">
        <div className="footer-top">

          {/* CONTACT SECTION */}
          <div className="footer-newsletter">
            <h2>Mail</h2>

            <p><Mail className="footer-icon" /> office_cdc@iitr.ac.in</p>
            <p><Mail className="footer-icon" /> st_cdc@iitr.ac.in</p>
            <p><Mail className="footer-icon" /> comet_cdc@iitr.ac.in</p>
          </div>


          {/* MAIL SECTION */}
          <div className="footer-left-menu">
            <h2>Contact</h2>
            <p><Phone className="footer-icon" /> +91-1332-28442</p>
          </div>

          {/* LOCATION SECTION */}
          <div className="footer-location">
            <h2>Location</h2>

            <p><MapPin className="footer-icon" /> IIT Roorkee, Uttarakhand, India</p>

            <div className="footer-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.713837004627!2d77.89367587524584!3d29.863116375005938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe3dc3%3A0x49d134d1eda3907!2sIIT%20Roorkee!5e0!3m2!1sen!2sin!4v1708876543210!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px', marginTop: '15px', opacity: 0.8 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <img src="/logos/Comet.png" alt="COMET" className="footer-brand" />

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
