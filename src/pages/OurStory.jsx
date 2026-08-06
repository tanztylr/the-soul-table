import React from "react";

function Story() {
  return (
    <section className="story-section">
      <div className="section-header" style={{ textAlign: "center" }}>
        <span className="tag">Our Roots</span>
        <h2>Why We Gather</h2>
      </div>

      <div className="story-content">
        {/* THE MISSION / THE PROBLEM */}
        <div className="story-block">
          <h3>More than dinner. A place to belong.</h3>
          <p>
            In a world hyper-connected by screens, true connection has become remarkably rare. Modern dining is often rushed, transactional, and built around superficial distractions. 
          </p>
          <p>
            The Soul Table was created as a deliberate counter-culture to that rush. It is a sanctuary designed to slow time down, spark profound storytelling, and offer a space where warmth, intentional hospitality, and exquisite food intersect.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="story-block">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="tag">Our Philosophy</span>
            <h3 style={{ marginTop: "0.5rem" }}>What We Stand For</h3>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <h4>Gather Intentionally</h4>
              <p>Every detail—from lighting to timing—is curated to foster an atmosphere of ease and comfort.</p>
            </div>
            <div className="value-card">
              <h4>Everyone Has a Seat</h4>
              <p>Hospitality means radical welcome. You are treated like family the moment you step up to the table.</p>
            </div>
            <div className="value-card">
              <h4>Share Generously</h4>
              <p>Food is history, culture, and love made tangible. We believe in abundance and sharing rich stories.</p>
            </div>
            <div className="value-card">
              <h4>Leave Better Than You Arrived</h4>
              <p>Our goal is that you walk away nourished not just by the meal, but by the energy of the people around you.</p>
            </div>
          </div>
        </div>

        {/* MEET THE TABLE (TEAM) */}
        <div className="story-block">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="tag">The People</span>
            <h3 style={{ marginTop: "0.5rem" }}>Meet the Table</h3>
          </div>
          
          <div className="team-grid">
            <div className="team-card">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" 
                alt="Tanza Taylor" 
                className="team-avatar"
              />
              <h4>Tanza Taylor</h4>
              <span className="team-role">Founder & Host</span>
              <p>
                Believes that the best memories in life are forged across timber tables with good wine and unhurried conversation.
              </p>
            </div>

            <div className="team-card">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" 
                alt="Chef Marcus Vance" 
                className="team-avatar"
              />
              <h4>Chef Marcus Vance</h4>
              <span className="team-role">Executive Chef</span>
              <p>
                Focuses on honoring heritage ingredients and seasonal storytelling through deeply comforting, refined multi-course plates.
              </p>
            </div>

            <div className="team-card">
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300" 
                alt="Elena Rostova" 
                className="team-avatar"
              />
              <h4>Elena Rostova</h4>
              <span className="team-role">Community Curator</span>
              <p>
                Dedicated to curating the mood, lighting, and ambient space so every guest feels instantly at home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
