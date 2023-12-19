import React from "react";
import "../css/Home.css";
import "../css/nicepage.css";

function Section4() {
  return (
    <section className="u-clearfix u-gradient u-section-4" id="carousel_a2bd">
      <div
        className="u-palette-2-base u-preserve-proportions u-shape u-shape-circle u-shape-1"
        data-animation-name="fadeIn"
        data-animation-duration="1000"
        data-animation-direction="Down"
        data-animation-delay="500"
      ></div>
      <div
        className="u-palette-2-base u-shape u-shape-rectangle u-shape-2"
        data-animation-name="fadeIn"
        data-animation-duration="1000"
        data-animation-direction="Right"
      ></div>
      <img
        src="images/pizza-on-table.webp"
        alt=""
        className="u-align-left u-image u-image-1"
        data-image-width="626"
        data-image-height="418"
        data-animation-name="fadeIn"
        data-animation-duration="1000"
        data-animation-direction="Left"
        data-animation-delay="500"
      />
      <div
        className="u-align-left u-container-style u-group u-white u-group-1"
        data-animation-name="fadeIn"
        data-animation-duration="1000"
        data-animation-direction="Up"
        data-animation-delay="750"
      >
        <div className="u-container-layout u-container-layout-1">
          <h2 className="u-text u-text-1">Delivery services</h2>
          <p className="u-text u-text-2">
            Id faucibus nisl tincidunt eget nullam non nisi. Amet dictum sit
            amet justo donec enim diam vulputate ut. Non quam lacus suspendisse
            faucibus interdum. Ac ut consequat semper viverra nam. Auctor augue
            mauris augue neque gravida in fermentum et.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section4;
