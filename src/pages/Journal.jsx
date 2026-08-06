import React from "react";

function Journal() {
  const articles = [
    {
      title: "The Art of the Slow Table",
      date: "October 12, 2026",
      readTime: "4 min read",
      excerpt: "Why slowing down our pace during meals transforms strangers into a community."
    },
    {
      title: "Rooted in Heritage: Fall Flavors",
      date: "September 28, 2026",
      readTime: "3 min read",
      excerpt: "Exploring the history behind autumn roots and slow-roasted family traditions."
    }
  ];

  return (
    <section className="story-section">
      <div className="section-header" style={{ textAlign: "center" }}>
        <span className="tag">Culinary Journal</span>
        <h2>Notes From the Kitchen</h2>
      </div>

      <div className="story-content" style={{ marginTop: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {articles.map((item, index) => (
            <div key={index} className="value-card">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ color: "#e6c594", fontSize: "0.8rem", textTransform: "uppercase" }}>{item.date}</span>
                <span style={{ color: "#8c8278", fontSize: "0.8rem" }}>{item.readTime}</span>
              </div>
              <h3 style={{ color: "#f4f1ea", fontSize: "1.4rem", marginBottom: "0.8rem", fontWeight: "normal" }}>{item.title}</h3>
              <p style={{ color: "#c5bbb3", fontSize: "0.95rem", margin: 0 }}>{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journal;
