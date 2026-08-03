import "./styles.css";

function App() {
  return (
    <main>
      <nav className="navbar">
        <h2 className="logo">The Soul Table</h2>

        <ul className="nav-links">
          <li>The Calendar</li>
          <li>Why We Gather</li>
          <li>Journal</li>
          <li>Find Your Seat</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Your Seat Is Waiting</h1>

          <h2>Gather around something meaningful.</h2>

          <p>
            Chef-led gatherings inspired by culture,
            conversation, and community.
          </p>

          <button>Reserve Your Seat →</button>
        </div>
      </section>
    </main>
  );
}

export default App;
