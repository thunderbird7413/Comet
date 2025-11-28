import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="comet-footer">
      <div className="footer-top">
        <div className="footer-left-menu">
          <h2>Contact</h2>
          <p>+91-1332-28442</p>
          <p>+91-6375-064220</p>
          <p>+91-8888-930633</p>
        </div>

        <div className="footer-newsletter">
          <h2>Mail</h2>
          <p>office_cdc@iitr.ac.in</p>
          <p>st_cdc@iitr.ac.in</p>
          <p>comet_cdc@iitr.ac.in</p>
          {/* <input type="email" placeholder="Email Address" /> */}
          {/* <div className="underline"></div> */}
        </div>
      </div>

      <h1 className="footer-brand">Comet</h1>

      <div className="footer-bottom">
        <p>Copyright © Comet Studio</p>
        <p>CDC IIT Roorkee</p>

        <div className="footer-socials">
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
