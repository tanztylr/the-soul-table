import React, { useState } from "react";
import "./styles.css";

// 1. DATA LISTS
const GATHERINGS = [
  { id: 1, title: "Smoke & Soul", date: "Friday, October 16" },
  { id: 2, title: "Harvest Table", date: "Saturday, November 7" },
  { id: 3, title: "Around the World", date: "Friday, December 11" },
];

const EXPERIENCE_CARDS = [
  {
    id: 1,
    title: "Curated Evenings",
    text: "Every gathering is intentionally designed around a theme, menu, and story.",
  },
  {
    id: 2,
    title: "Meaningful Conversation",
    text: "Conversation prompts help strangers connect naturally around the table.",
  },
  {
    id: 3,
    title: "Community First",
    text: "Leave with new friendships, fresh perspectives, and unforgettable memories.",
  },
];

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Arrive",
    text: "Grab a welcome drink, find your place, and meet the people around your table.",
  },
  {
    step: "02",
    title: "Share a Meal",
    text: "Enjoy a chef-curated menu created around the evening's theme.",
  },
  {
    step: "03",
    title: "Connect",
    text: "Conversation prompts help strangers become friends through meaningful discussion.",
  },
  {
    step: "04",
    title: "Leave Inspired",
    text: "Walk away with new memories, fresh perspectives, and lasting connections.",
  },
];

function App() {
  // 2. STATE
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. HANDLER FUNCTIONS
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsSubmitted(false); // Resets form for next time it's opened
  };

  const JOURNAL_POSTS = [
  {
    id: 1,
    category: "CULTURE & CUISINE",
    title: "The Art of the Slow Feast",
    snippet: "Why shifting away from rushed dining creates room for deeper human connection.",
    date: "5 min read",
  },
  {
    id: 2,
    category: "BEHIND THE TABLE",
    title: "Sourcing Regional Ingredients",
    snippet: "How local farms and seasonal produce dictate the story of each curated menu.",
    date: "4 min read",
  },
  {
    id: 3,
    category: "COMMUNITY STORIES",
    title: "Voices from Smoke & Soul",
    snippet: "Reflections and conversations captured from our recent autumn gathering.",
    date: "6 min read",
  },
];


  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">The Soul Table</h2>

        <button 
          className="menu-toggle" 
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle Menu"
        >
          {isNavOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <li><a href="#calendar" onClick={() => setIsNavOpen(false)}>The Calendar</a></li>
          <li><a href="#story" onClick={() => setIsNavOpen(false)}>Why We Gather</a></li>
          <li><a href="#journal" onClick={() => setIsNavOpen(false)}>Journal</a></li>
          <li>
            <a 
              href="#gatherings" 
              className="nav-btn"
              onClick={() => setIsNavOpen(false)}
            >
              Find Your Seat
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Your Seat Is Waiting</h1>
          <h2>Gather around something meaningful.</h2>
          <p>
            Chef-led gatherings inspired by culture, conversation, and community.
          </p>
          <a href="#gatherings" className="btn-primary">Reserve Your Seat →</a>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="story">
        <p className="story-label">WHY WE GATHER</p>
        <h2>
          More than dinner.
          <br />
          A place to belong.
        </h2>
        <p className="story-text">
          The Soul Table creates intimate dining experiences where strangers
          become friends through food, conversation, and shared stories.
        </p>
      </section>

      {/* EXPERIENCE GRID (DYNAMIC) */}
      <section className="experience-grid">
        {EXPERIENCE_CARDS.map((card) => (
          <article 
            key={card.id} 
            className="experience-card"
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <div className="ink-blob"></div> 
          </article>
        ))}
      </section>

      {/* GATHERINGS LIST (DYNAMIC + INTERACTIVE) */}
      <section id="gatherings" className="gatherings">
        <div className="gatherings-header">
          <p>UPCOMING GATHERINGS</p>
          <h2>Find your seat.</h2>
        </div>

        {GATHERINGS.map((item) => (
          <div key={item.id} className="gathering">
            <div>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
            <button 
              onClick={() => setSelectedEvent(item.title)}
            >
              Reserve
            </button>
          </div>
        ))}
      </section>
{/* JOURNAL SECTION */}
      <section id="journal" className="journal-section">
        <div className="journal-header">
          <p className="section-tag">THE JOURNAL</p>
          <h2>Stories from around the table.</h2>
        </div>

        <div className="journal-grid">
          {JOURNAL_POSTS.map((post) => (
            <article key={post.id} className="journal-card">
              <div className="journal-meta">
                <span className="journal-category">{post.category}</span>
                <span className="journal-read-time">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.snippet}</p>
              <span className="read-more">Read Story →</span>
            </article>
          ))}
        </div>
      </section>
      
      {/* TIMELINE SECTION (DYNAMIC) */}
      <section className="experience">
        <p className="experience-label">THE EXPERIENCE</p>
        <h2>
          An evening designed
          <br />
          to slow you down.
        </h2>

        <div className="timeline">
          {TIMELINE_STEPS.map((item) => (
            <div key={item.step} className="timeline-item">
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP MODAL (Handles form OR success screen) */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>✕</button>
            <p className="modal-tag">RESERVATION</p>
            <h2>{selectedEvent}</h2>

            {!isSubmitted ? (
              <>
                <p>Enter your details to reserve your seat at the table.</p>
                <form onSubmit={handleReservationSubmit}>
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <button type="submit" className="btn-primary">Confirm Seat</button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <h3>Your seat is reserved.</h3>
                <p>We've sent a confirmation to your email. We look forward to seeing you at the table.</p>
                <button className="btn-primary" onClick={handleCloseModal}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
