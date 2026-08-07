import React from "react";
import founderPhoto from "../assets/tanza.jpg";

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
          <h3>More than a meal. An invitation to connect.</h3>
          <p>
             <p>
  Imagine an evening where time lingers a little longer. The table is warmly lit, every course is prepared with intention, and conversations flow as naturally as the wine is poured. If you could spend an evening anywhere, let it be somewhere that leaves you with stories worth telling and memories you'll quietly carry long after you've gone home.
</p>
          </p>
          <p>
            The Soul Table exists for evenings like these. Thoughtfully prepared meals become the backdrop for meaningful conversation, genuine connection, and memories that linger long after the final course is served. Every gathering is intentionally designed so guests leave feeling nourished both through their stomach and hearts.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="story-block">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="tag">Our Philosophy</span>
            <h3 style={{ marginTop: "0.5rem" }}>The Principles That Guide Every Gathering</h3>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <h4>Create Space to Gather</h4>
              <p>Every detail is thoughtfully considered so guests can settle in, slow down, and enjoy an evening that unfolds naturally.</p>
            </div>
            <div className="value-card">
              <h4>Everyone Has a Seat</h4>
              <p> From the moment you arrive, our hope is simple: that you feel welcomed, comfortable, and as though your seat has been waiting for you all along.</p>
            </div>
            <div className="value-card">
              <h4>Stories Are Meant to Be Shared</h4>
              <p>The most unforgettable meals are remembered for more than what was served. They are remembered for the laughter, the stories, and the people gathered around the table.</p>
            </div>
            <div className="value-card">
              <h4>Leave Better Than You Arrived</h4>
              <p>The evening doesn't end when dessert is served. We hope you leave with something that lingers: a story you'll retell, a connection you'll cherish, or the simple feeling that time was well spent.
</p>
            </div>
          </div>
        </div>

        {/* MEET THE TABLE */}
        <div className="story-block">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="tag">The People</span>
            <h3 style={{ marginTop: "0.5rem" }}>Meet the Table</h3>
          </div>
          
          <div className="team-grid">
            <div className="team-card">
              <img 
                src={founderPhoto}
                alt="Tanza Taylor" 
                className="team-avatar"
              />
              <h4>Tanza Taylor</h4>
              <span className="team-role">Founder & Host</span>
              <p>
                Created The Soul Table from a belief that every unforgettable evening begins with good food, genuine conversation, and a place where everyone has a seat.
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
