import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import FAQ from "./pages/FAQ";
import Reserve from "./pages/Reserve";
import Footer from "./components/Footer";
import GatheringDetail from "./pages/GatheringDetail";
import "./styles.css";

function App() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <Link to="/" className="brand-title">The Soul Table</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/story">Our Story</Link></li>
          <li><Link to="/menu">Sample Menu</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/reserve" className="nav-btn">Find Your Seat</Link></li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/gatherings/:id" element={<GatheringDetail />} />
      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />
    </main>
  );
}

export default App;
