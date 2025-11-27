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
            <span>ABOUT US</span>
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
            A premier corporate engagement platform where brilliant minds meet industry leaders,
            startups find their footing, and careers take flight.
          </p>
          <p>
            Organized by the Career Development Cell, <span className="highlight">COMET</span> brings
            together the best of technology, <span className="highlight">business</span>, and innovation.
            From workshops and hackathons to networking sessions and placement drives, we create
            opportunities that last a lifetime.
          </p>
        </div>
      </div>
    </div>
    

  );
}