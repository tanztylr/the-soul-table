import React from "react";

function FAQ() {
  return (
    <section className="faq-section">
      <div className="section-header" style={{ textAlign: "center" }}>
        <span className="tag">Common Questions</span>
        <h2>Everything You Need to Know</h2>
      </div>

      <div className="faq-container">
        <div className="faq-item">
          <h3 className="faq-question">How do seating arrangements work?</h3>
          <p className="faq-answer">
            Every party enjoys their own dedicated, private table designed for intimacy and ease. If you are coordinating with another party and wish to be seated adjacent to one another, simply drop a note in your reservation details.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">Can you accommodate dietary restrictions or allergies?</h3>
          <p className="faq-answer">
            Yes! Because our multi-course menus are thoughtfully curated in advance, we ask that you detail any severe allergies or dietary preferences directly in the reservation form so our chef can craft a seamless experience for you.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What is the dress code?</h3>
          <p className="faq-answer">
            Think sexy, warm, and soulful evening wear attire that makes you feel confident, comfortable, and completely immersed in the mood of the night.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What is your cancellation and refund policy?</h3>
          <p className="faq-answer">
            Due to our highly limited seating and customized culinary prep, cancellations made at least 7 days prior to the gathering are eligible for a full refund or a direct transfer to an upcoming date.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
