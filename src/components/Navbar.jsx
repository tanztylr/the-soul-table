import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">The Soul Table</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/menu">Sample Menu</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/reserve" className="nav-reserve-btn">Reserve</Link>
      </nav>
    </header>
  );
}

export default Navbar;
