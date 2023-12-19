import React from "react";
import "../css/Home.css";
import "../css/nicepage.css";
import { Link } from "react-router-dom";

function Section5() {
  return (
    <section
      className="u-align-left u-clearfix u-image u-section-5"
      id="carousel_1783"
      data-image-width="1920"
      data-image-height="1080"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <h5
          className="u-text u-text-body-alt-color u-text-default u-text-1"
          data-animation-name="fadeIn"
          data-animation-duration="1000"
          data-animation-direction="Down"
        >
          {" "}
          must-try American foods
        </h5>
        <h1
          className="u-custom-font u-text u-text-body-alt-color u-text-default u-title u-text-2"
          data-animation-name="fadeIn"
          data-animation-duration="1000"
          data-animation-direction="Left"
          data-animation-delay="250"
        >
          Fast Food
        </h1>
        <Link
          to="/menu"
          className="u-border-none u-btn u-btn-round u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-palette-2-base u-radius-50 u-text-active-palette-2-light-3 u-text-body-alt-color u-text-hover-palette-2-light-3 u-btn-1"
        >
          View menu
        </Link>
      </div>
    </section>
  );
}

export default Section5;
