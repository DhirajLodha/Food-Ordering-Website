import React from "react";
import "../css/Home.css";
import "../css/nicepage.css";
import { Link } from "react-router-dom";

function Section6() {
  return (
    <section
      className="u-align-center u-clearfix u-section-6"
      id="carousel_b442"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-align-center u-text u-text-1">Pizza Menu</h2>
        <p className="u-text u-text-2">
          You're gonna need two hands to hold our toasted buns. Our fresh, juicy
          burgers are served up medium-well with a side of fries and a whole lot
          of flavor.
        </p>
        <div className="u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            <div
              className="u-align-right u-container-style u-image u-list-item u-repeater-item u-shading u-video-cover u-image-1"
              data-image-width="1280"
              data-image-height="854"
            >
              <div className="u-container-layout u-similar-container u-container-layout-1">
                <div className="u-align-center u-black u-container-style u-group u-opacity u-opacity-35 u-video-cover u-group-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h4 className="u-text u-text-3">Veg Pizza</h4>
                    <h6 className="u-text u-text-palette-2-light-1 u-text-4">
                      Rs 180.00
                    </h6>
                    <Link
                      to="/menu"
                      className="u-active-palette-2-light-1 u-border-none u-btn u-btn-round u-button-style u-hover-palette-2-light-1 u-palette-2-base u-radius-50 u-btn-1"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="u-align-right u-container-style u-image u-list-item u-repeater-item u-shading u-image-2"
              data-image-width="1000"
              data-image-height="1208"
            >
              <div className="u-container-layout u-similar-container u-container-layout-3">
                <div className="u-align-center u-black u-container-style u-group u-opacity u-opacity-35 u-video-cover u-group-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-4">
                    <h4 className="u-text u-text-5">Italian Pizza</h4>
                    <h6 className="u-text u-text-default u-text-palette-2-light-1 u-text-6">
                      RS 210.00
                      <br />
                    </h6>
                    <Link
                      to="/menu"
                      className="u-active-palette-2-light-1 u-border-none u-btn u-btn-round u-button-style u-hover-palette-2-light-1 u-palette-2-base u-radius-50 u-btn-2"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="u-align-right u-container-style u-image u-list-item u-repeater-item u-shading u-video-cover u-image-3"
              data-image-width="1280"
              data-image-height="753"
            >
              <div className="u-container-layout u-similar-container u-container-layout-5">
                <div className="u-align-center u-black u-container-style u-group u-opacity u-opacity-35 u-video-cover u-group-3">
                  <div className="u-container-layout u-valign-middle u-container-layout-6">
                    <h4 className="u-text u-text-default u-text-7">
                      Mushroom Pizza
                    </h4>
                    <h6 className="u-text u-text-default u-text-palette-2-light-1 u-text-8">
                      Rs 240.00
                    </h6>
                    <Link
                      to="/menu"
                      className="u-active-palette-2-light-1 u-border-none u-btn u-btn-round u-button-style u-hover-palette-2-light-1 u-palette-2-base u-radius-50 u-btn-3"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="u-align-right u-container-style u-image u-list-item u-repeater-item u-shading u-video-cover u-image-4"
              data-image-width="1200"
              data-image-height="900"
            >
              <div className="u-container-layout u-similar-container u-container-layout-7">
                <div className="u-align-center u-black u-container-style u-group u-opacity u-opacity-35 u-video-cover u-group-4">
                  <div className="u-container-layout u-valign-middle u-container-layout-8">
                    <h4 className="u-text u-text-default u-text-9">
                      Cheesy Pizza
                      <br />
                    </h4>
                    <h6 className="u-text u-text-default u-text-palette-2-light-1 u-text-10">
                      Rs 160.00
                    </h6>
                    <Link
                      to="/menu"
                      className="u-active-palette-2-light-1 u-border-none u-btn u-btn-round u-button-style u-hover-palette-2-light-1 u-palette-2-base u-radius-50 u-btn-4"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
