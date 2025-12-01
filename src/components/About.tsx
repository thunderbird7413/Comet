import AboutShapes from "./AboutShapes";
import HudStat from "./Stats";

export default function About() {
  return (
    <div className="about-section">
      <div className="floating-cube cube-left"><img src="/Mask group (2).png"></img></div>
      <div className="floating-cube cube-right"><img src="/Mask group (1).png"></img></div>

      <div className="about-container">
        {/* ABOUT US BADGE */}
        <div className="about-badge-wrapper">
          <div className="about-badge">
            <div className="badge-glow"></div>
            <span className="cursor-hover">ABOUT US</span>
          </div>
        </div>

        {/* HEADING */}
        <div className="about-heading">
          <h1>
            Since 2004, <span className="highlight">COMET</span> has been
            <br /> IIT Roorkee's celebration of
            <br /> <span className="highlight">Innovation</span>
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="about-description">
          <p>
            COMET’26, organized by the Career Development Cell, IIT Roorkee, is a flagship event designed to help students explore career paths and build practical skills.
          </p>
          <p>
            Through workshops, competitions, panels, and networking sessions, <span className="highlight">COMET’26</span> connects academic learning with real-world experience and prepares students for <span className="highlight">future</span>opportunities with confidence.
          </p>
        </div>
      </div>
    </div>
    

  );
}