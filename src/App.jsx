import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import SampleMenu from "./pages/Menu";
import FAQ from "./pages/FAQ";
import Reserve from "./pages/Reserve";
import GatheringDetail from "./pages/GatheringDetail";
import Journal from "./pages/Journal";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/menu" element={<SampleMenu />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/gathering/:id" element={<GatheringDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;