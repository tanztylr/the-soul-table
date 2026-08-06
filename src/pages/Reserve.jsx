import React, { useState } from "react";

function Reserve() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gathering: "Roots & Reminiscence — Nov 15",
    guests: "2 Guests",
    dietary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="reserve-section">
      <div className="section-header" style={{ textAlign: "center" }}>
        <span className="tag">Find Your Seat</span>
        <h2>Reserve an Experience</h2>
      </div>

      <div className="reserve-form-container">
        {submitted ? (
          <div className="reserve-confirmation">
            <span className="tag" style={{ color: "#e6c594", marginBottom: "1rem", display: "block" }}>
              Request Received
            </span>
            <h3>Your Seat is Provisionally Saved.</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. We've received your request for{" "}
              <strong>{formData.guests}</strong> at <strong>{formData.gathering}</strong>.
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#a39990" }}>
              A confirmation and invitation details have been sent to <strong>{formData.email}</strong>.
            </p>
          </div>
        ) : (
          <form className="reserve-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gathering">Select Gathering</label>
                <select
                  id="gathering"
                  name="gathering"
                  value={formData.gathering}
                  onChange={handleChange}
                >
                  <option value="Roots & Reminiscence — Nov 15">Autumn Harvest — Nov 15</option>
                  <option value="The Fireside Table — Dec 08">Winter Hearth — Dec 08</option>
                  <option value="Southern Revival — Jan 20">Chef Collaboration — Jan 20</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="guests">Party Size</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1 Guest">1 Guest (Solo Diner)</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests">4 Guests (Max Party)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dietary">Dietary Restrictions & Allergies</label>
              <textarea
                id="dietary"
                name="dietary"
                placeholder="Let us know if you or your guests have any dietary preferences or allergies..."
                value={formData.dietary}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-submit">
              Confirm Reservation Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Reserve;
