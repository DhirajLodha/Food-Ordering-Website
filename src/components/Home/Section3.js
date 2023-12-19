import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/nicepage.css";

function Section3() {
  return (
    <section
      className="u-align-center u-clearfix u-image u-section-3"
      id="carousel_979f"
      data-image-width="1920"
      data-image-height="1052"
    >
      <img
        alt=""
        className="u-expanded-width u-image u-image-1"
        src="images/g96abd73ccdf367f523863e1052702da2c1b7a443f820da38944a7277a8a46a3c882d53670c1beddc15d0eb6d854e1de7be708aa8145a66f529cc7d9a3a0dedec_1280.jpg"
        data-image-width="1280"
        data-image-height="854"
      />
      <div className="u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div className="u-align-left u-container-style u-grey-80 u-list-item u-opacity u-opacity-55 u-repeater-item u-shape-rectangle u-list-item-1">
            <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-1">
              <div
                className="u-align-center u-container-style u-group u-palette-2-base u-radius-50 u-shape-round u-group-1"
                data-animation-name="fadeIn"
                data-animation-duration="1000"
                data-animation-direction="Left"
              >
                <div className="u-container-layout u-valign-middle u-container-layout-2">
                  <h1 className="u-custom-font u-text u-text-1">01</h1>
                </div>
              </div>
              <h5
                className="u-text u-text-body-alt-color u-text-2"
                data-animation-name="fadeIn"
                data-animation-duration="1000"
                data-animation-direction="Right"
              >
                Fresh Food
              </h5>
              <p className="u-text u-text-grey-30 u-text-3">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
              <Link
                to="/menu"
                className="u-active-none u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-grey-30 u-btn-1"
              >
                View Menu
              </Link>
            </div>
          </div>
          <div className="u-align-left u-container-style u-grey-80 u-list-item u-opacity u-opacity-55 u-repeater-item u-shape-rectangle u-list-item-2">
            <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-3">
              <div
                className="u-align-center u-container-style u-group u-palette-2-base u-radius-50 u-shape-round u-video-cover u-group-2"
                data-animation-name="fadeIn"
                data-animation-duration="1000"
                data-animation-direction="Left"
              >
                <div className="u-container-layout u-valign-middle u-container-layout-4">
                  <h1 className="u-custom-font u-text u-text-4">02</h1>
                </div>
              </div>
              <h5
                className="u-text u-text-body-alt-color u-text-5"
                data-animation-name="fadeIn"
                data-animation-duration="1000"
                data-animation-direction="Right"
              >
                Dinner Meals
              </h5>
              <p className="u-text u-text-grey-30 u-text-6">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
              <Link
                to="/menu"
                className="u-active-none u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-hover-none u-text-body-alt-color u-text-hover-grey-30 u-btn-2"
              >
                view menu
              </Link>
            </div>
          </div>
          <div className="u-align-left u-container-style u-grey-80 u-hidden-md u-list-item u-opacity u-opacity-55 u-repeater-item u-shape-rectangle u-list-item-3">
            <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-5">
              <div
                className="u-align-center u-container-style u-group u-palette-2-base u-radius-50 u-shape-round u-video-cover u-group-3"
                data-animation-name="fadeIn"
                data-animation-duration="1000"
                data-animation-direction="Left"
              >
                <div className="u-container-layout u-valign-middle u-container-layout-6">
                  <h1 className="u-custom-font u-text u-text-7">03</h1>
                </div>
              </div>
              <h5
                className="u-text u-text-body-alt-color u-text-8"
                data-animation-name="fadeIn"
                data-animation-duration="1000"
                data-animation-direction="Right"
              >
                Classic Menu
              </h5>
              <p className="u-text u-text-grey-30 u-text-9">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
              <Link
                to="/menu"
                className="u-active-none u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-hover-none u-text-body-alt-color u-text-hover-grey-30 u-btn-3"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
