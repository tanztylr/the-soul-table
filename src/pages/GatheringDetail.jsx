import React from "react";
import { useParams, Link } from "react-router-dom";

function GatheringDetail() {
  const { id } = useParams();

  // Mock data for individual gatherings based on the ID
  const gatheringsData = {
    "autumn-harvest": {
      title: "Roots & Reminiscence",
      theme: "Autumn Harvest & Family Heritage",
      date: "November 15, 2026",
      time: "6:30 PM – 9:30 PM",
      location: "Private Loft Sanctuary, Atlanta, GA",
      seatsLeft: "4 Seats Remaining",
      story: "This gathering is an ode to autumnal transition, comfort, and storytelling rooted in deep family traditions. We explore rich harvests, slow-roasted flavors, and the nostalgia of crisp evening air shared across an unhurried table.",
      menu: [
        { course: "First Course", name: "Heritage Hearth Bread & Cultured Butter", description: "Warm house-baked sourdough paired with smoked sea salt butter and wild herbs." },
        { course: "Second Course", name: "Charred Autumn Root Salad", description: "Fire-roasted beets, crisp apples, goat cheese mousse, and toasted pecans dressed in cider vinaigrette." },
        { course: "Main Course", name: "Braised Short Rib & Creamy Polenta", description: "Slow-braised beef short rib served over stone-ground polenta with rich red wine reduction and roasted carrots." },
        { course: "Dessert", name: "Spiced Persimmon & Vanilla Bean Tart", description: "Flaky butter pastry filled with caramelized persimmon, spiced cream, and candied walnuts." }
      ]
    },
    "winter-hearth": {
      title: "The Fireside Table",
      theme: "Winter Hearth & Deep Decadence",
      date: "December 8, 2026",
      time: "6:00 PM – 9:00 PM",
      location: "Private Loft Sanctuary, Atlanta, GA",
      seatsLeft: "6 Seats Remaining",
      story: "As the winter chill settles in, we gather around rich aromas, warming spices, and heavy timber tables. An evening dedicated to intimate conversation, deep reds, and soul-warming comfort food.",
      menu: [
        { course: "First Course", name: "Chestnut & Roasted Garlic Velouté", description: "Silky roasted chestnut soup infused with fresh thyme and brown butter croutons." },
        { course: "Second Course", name: "Winter Citrus & Chicory Salad", description: "Blood orange segments, shaved fennel, pomegranate arils, and toasted pistachios with champagne vinaigrette." },
        { course: "Main Course", name: "Pan-Seared Duck Breast & Cherry Reduction", description: "Crispy skin duck breast served with parsnip silk and tart cherry reduction." },
        { course: "Dessert", name: "Dark Chocolate & Espresso Budino", description: "Rich Italian chocolate pudding with smoked sea salt and whipped mascarpone." }
      ]
    },
    "chef-collaboration": {
      title: "Southern Revival",
      theme: "Modern Chef Collaboration",
      date: "January 20, 2027",
      time: "6:30 PM – 9:30 PM",
      location: "Private Loft Sanctuary, Atlanta, GA",
      seatsLeft: "2 Seats Remaining",
      story: "A modern reimagining of classic southern flavor profiles, pushing boundaries while honoring the deep cultural roots and techniques passed down through generations.",
      menu: [
        { course: "First Course", name: "Smoked Trout Cornbread Madeleine", description: "Savory cornbread cakes topped with whipped cream cheese and local smoked trout." },
        { course: "Second Course", name: "Pickled Peach & Heirloom Tomato Salad", description: "Compressed heirloom tomatoes, house-pickled peaches, torn burrata, and sorghum glaze." },
        { course: "Main Course", name: "Coffee-Rubbed Beef Brisket", description: "14-hour smoked brisket with sweet potato purée and charred collard green chimichurri." },
        { course: "Dessert", name: "Buttermilk Chess Pie & Blackberry Compote", description: "Traditional Southern chess pie served warm with tart wild blackberry compote." }
      ]
    }
  };

  const event = gatheringsData[id] || gatheringsData["autumn-harvest"];

  return (
    <section className="story-section">
      <div style={{ marginBottom: "2rem" }}>
        <Link to="/" style={{ color: "#e6c594", textDecoration: "none", fontSize: "0.9rem" }}>
          &larr; Back to Home
        </Link>
      </div>

      <div className="section-header" style={{ textAlign: "center" }}>
        <span className="tag">{event.theme}</span>
        <h2>{event.title}</h2>
      </div>

      <div className="story-content" style={{ marginTop: "2rem" }}>
        {/* EVENT META INFO */}
        <div className="value-card" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", textAlign: "center" }}>
          <div>
            <span className="team-role">Date</span>
            <p style={{ color: "#f4f1ea", margin: 0 }}>{event.date}</p>
          </div>
          <div>
            <span className="team-role">Time</span>
            <p style={{ color: "#f4f1ea", margin: 0 }}>{event.time}</p>
          </div>
          <div>
            <span className="team-role">Availability</span>
            <p style={{ color: "#e6c594", margin: 0, fontWeight: "500" }}>{event.seatsLeft}</p>
          </div>
        </div>

        {/* STORY BEHIND EVENING */}
        <div className="story-block">
          <h3>About the Evening</h3>
          <p>{event.story}</p>
        </div>

        {/* FEATURED MENU */}
        <div className="story-block">
          <span className="tag">Curated Menu</span>
          <h3 style={{ marginBottom: "1.5rem" }}>The Tasting Journey</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {event.menu.map((item, index) => (
              <div key={index} className="value-card">
                <span style={{ color: "#e6c594", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>{item.course}</span>
                <h4 style={{ color: "#f4f1ea", fontSize: "1.1rem", margin: "0.3rem 0" }}>{item.name}</h4>
                <p style={{ fontSize: "0.9rem", color: "#c5bbb3", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RESERVE CALL TO ACTION */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/reserve" className="nav-btn" style={{ padding: "1rem 2.5rem", fontSize: "1rem", display: "inline-block" }}>
            Reserve Your Seat for this Gathering
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GatheringDetail;
