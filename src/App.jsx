import "./styles.css";
import dinnerImage from "./assets/dinner.jpg";

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

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.72)), url(${dinnerImage})`,
        }}
      >
        <h1>Your Seat Is Waiting</h1>

        <h2>Gather around something meaningful.</h2>

        <p>
          Chef-led gatherings inspired by culture,
          conversation, and community.
        </p>

        <button>Explore Upcoming Gatherings →</button>
      </section>
    </main>
  );
}

export default App;
