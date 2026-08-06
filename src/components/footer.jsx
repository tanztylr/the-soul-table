import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>The Soul Table</h3>
          <p>
            An intimate culinary sanctuary designed to slow time down, spark profound storytelling, and foster meaningful community.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/menu">Sample Menu</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Experience</h4>
          <ul>
            <li><Link to="/reserve">Find Your Seat</Link></li>
            <li><Link to="/faq">Seating & Policies</Link></li>
            <li><a href="mailto:tanztylr@gmail.com">Contact Host</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Soul Table. All rights reserved.</p>
        <p style={{ letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.75rem", color: "#e6c594" }}>
          Curated Intentionally
        </p>
      </div>
    </footer>
  );
}

export default Footer;
