import React from "react";

function Menu() {
  return (
    <section className="menu-section">
      <div className="menu-container">
        <div className="section-header">
          <span className="tag">Culinary Preview</span>
          <h2>Sample Tasting Menu</h2>
        </div>

        <div className="menu-course">
          <span className="course-label">First Course</span>
          <div>
            <div className="course-header">
              <h3>Heritage Hearth Bread & Cultured Butter</h3>
              <span className="course-pairing">
                Paired with Smoked Botanical Cider
              </span>
            </div>
            <p className="course-description">
              Warm house-baked sourdough paired with smoked sea salt butter and wild herbs.
            </p>
          </div>
        </div>

        <div className="menu-course">
          <span className="course-label">Second Course</span>

  <div>
    <div className="course-header">
      <h3>Charred Autumn Root Salad</h3>
      <span className="course-pairing">Paired with Reserve Chardonnay</span>
    </div>

    <p className="course-description">
      Fire-roasted beets, crisp apples, goat cheese mousse, and toasted pecans dressed in cider vinaigrette.
    </p>
  </div>
</div>

        <div className="menu-course">
  <span className="course-label">Main Course</span>

  <div>
    <div className="course-header">
      <h3>Braised Short Rib & Creamy Polenta</h3>
      <span className="course-pairing">Paired with Vintage Cabernet Sauvignon</span>
    </div>

    <p className="course-description">
      Slow-braised beef short rib served over stone-ground polenta with rich red wine reduction and roasted carrots.
    </p>
  </div>
</div>

        <div className="menu-course">
  <span className="course-label">Dessert</span>

  <div>
    <div className="course-header">
      <h3>Spiced Persimmon & Vanilla Bean Tart</h3>
      <span className="course-pairing">Paired with House Mulled Wine</span>
    </div>

    <p className="course-description">
      Flaky butter pastry filled with caramelized persimmon, spiced cream, and candied walnuts.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}

export default Menu;
