import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <span className="tag">An Intimate Culinary Experience</span>
        <h1>Your Seat Is Waiting.</h1>
        <p>Gather around something meaningful.</p>
        <Link to="/reserve" className="hero-btn">Reserve Your Seat</Link>
      </section>

      {/* WHY WE GATHER */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="editorial-left">
            <span className="tag">Our Philosophy</span>

            <h2>More than dinner. A place to belong.</h2>

            <p>We curate unhurried, beautifully designed tables where strangers become community...</p>
          </div>

          <div className="editorial-right">
            <div className="editorial-image-placeholder">
              Image Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING GATHERINGS */}
      <section className="gatherings-section">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="tag">Upcoming Gatherings</span>
          <h2>Join Our Next Table</h2>
        </div>

        <div className="gatherings-grid">
          {/* Card 1 */}
          <Link to="/gatherings/autumn-harvest" className="gathering-card">
            <div className="card-image-placeholder">Autumn Harvest Preview</div>
            <span className="seats-tag">4 Seats Remaining</span>
            <span className="tag" style={{ marginTop: "1rem", alignSelf: "flex-start" }}>Nov 15, 2026</span>
            <h3>Roots & Reminiscence</h3>
            <p>An autumn harvest menu celebrating family heritage, slow-roasted flavors, and crisp evening air.</p>
            <span style={{ color: "#e6c594", fontSize: "0.9rem", marginTop: "auto", textDecoration: "none" }}>
              View Menu & Story &rarr;
            </span>
          </Link>

          {/* Card 2 */}
          <Link to="/gatherings/winter-hearth" className="gathering-card">
            <div className="card-image-placeholder">Winter Hearth Preview</div>
            <span className="seats-tag">6 Seats Remaining</span>
            <span className="tag" style={{ marginTop: "1rem", alignSelf: "flex-start" }}>Dec 8, 2026</span>
            <h3>The Fireside Table</h3>
            <p>Deeply comforting winter dishes paired with bold reds and unhurried storytelling by candlelight.</p>
            <span style={{ color: "#e6c594", fontSize: "0.9rem", marginTop: "auto", textDecoration: "none" }}>
              View Menu & Story &rarr;
            </span>
          </Link>

          {/* Card 3 */}
          <Link to="/gatherings/chef-collaboration" className="gathering-card">
            <div className="card-image-placeholder">Southern Revival Preview</div>
            <span className="seats-tag">2 Seats Remaining</span>
            <span className="tag" style={{ marginTop: "1rem", alignSelf: "flex-start" }}>Jan 20, 2027</span>
            <h3>Southern Revival</h3>
            <p>A modern chef collaboration reimagining classic southern flavors with refined, soulful techniques.</p>
            <span style={{ color: "#e6c594", fontSize: "0.9rem", marginTop: "auto", textDecoration: "none" }}>
              View Menu & Story &rarr;
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
