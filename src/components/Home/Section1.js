import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/nicepage.css";

function Section1() {
  return (
    <section
      className="u-clearfix u-gradient u-lightbox u-section-1"
      id="sec-e1c4"
      style={{ marginTop: "90px" }}
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <div
          className="u-hidden-sm u-hidden-xs u-shape u-shape-svg u-text-palette-2-base u-shape-1"
          data-animation-name="customAnimationIn"
          data-animation-duration="1000"
          data-animation-direction=""
        >
          <svg
            className="u-svg-link"
            preserveAspectRatio="none"
            viewBox="0 0 160 160"
            style={{}}
          >
            <use
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="#svg-72f6"
            ></use>
          </svg>
          <svg
            className="u-svg-content"
            viewBox="0 0 160 160"
            x="0px"
            y="0px"
            id="svg-72f6"
          >
            <path
              d="M157.4,45.5c11.3-39.1-16.3-50.2-43.8-43.8c-25.2,5.8-35.5,17.2-61,16.5C21.7,17.4,0,39.8,0,71.3
	c0,49.1,58.2,47.8,76.2,68.5c38.8,44.7,92.8,8.2,79.3-40.3C148.1,73.2,155.9,50.6,157.4,45.5z"
            ></path>
          </svg>
        </div>
        <div
          className="u-hidden-sm u-hidden-xs u-image u-image-circle u-preserve-proportions u-image-1"
          data-animation-name="fadeIn"
          data-animation-duration="1000"
          data-animation-direction="Down"
          data-animation-delay="500"
          data-image-width="612"
          data-image-height="408"
        ></div>
        <h1
          className="u-align-center u-custom-font u-font-playfair-display u-hover-feature u-text u-text-1"
          data-animation-name="customAnimationIn"
          data-animation-duration="1000"
          data-animation-direction="Left"
          data-animation-delay="500"
        >
          <span className="u-text-palette-2-base">
            <font className="u-text-palette-2-base">
              <b>
                {" "}
                The Pizza
                <br />
                Villa
              </b>
            </font>
          </span>
          <br />
        </h1>
        <p className="u-text u-text-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odit
          labore facilis ullam ab, nisi tenetur voluptates porro hic, aperiam
          libero optio, nulla nesciunt maxime!
        </p>
        <Link
          to="/menu"
          className="u-active-grey-90 u-border-none u-btn u-btn-round u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-hover-grey-90 u-palette-2-base u-radius-50 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-2"
        >
          View Menu
        </Link>
        <div className="u-clearfix u-effect-hover-zoom u-gutter-12 u-layout-wrap u-layout-wrap-1">
          <div className="u-background-effect u-expanded">
            <div className="u-background-effect-image u-expanded u-image"></div>
          </div>
          <div className="u-layout">
            <div className="u-layout-col">
              <div className="u-size-30">
                <div className="u-layout-row">
                  <div
                    className="u-align-left u-container-style u-effect-hover-zoom u-layout-cell u-size-30 u-layout-cell-1"
                    data-image-width="728"
                    data-image-height="410"
                  >
                    <div className="u-background-effect u-expanded">
                      <div
                        className="u-background-effect-image u-expanded u-image u-image-3"
                        data-image-width="728"
                        data-image-height="410"
                      ></div>
                    </div>
                    <div className="u-container-layout u-container-layout-1"></div>
                  </div>
                  <div
                    className="u-container-style u-effect-hover-zoom u-layout-cell u-size-30 u-layout-cell-2"
                    data-image-width="750"
                    data-image-height="550"
                  >
                    <div className="u-background-effect u-expanded">
                      <div
                        className="u-background-effect-image u-expanded u-image u-image-4"
                        data-image-width="750"
                        data-image-height="550"
                      ></div>
                    </div>
                    <div className="u-container-layout u-container-layout-2"></div>
                  </div>
                </div>
              </div>
              <div className="u-size-30">
                <div className="u-layout-row">
                  <div
                    className="u-container-style u-effect-hover-zoom u-layout-cell u-size-30 u-layout-cell-3"
                    data-image-width="800"
                    data-image-height="620"
                  >
                    <div className="u-background-effect u-expanded">
                      <div
                        className="u-background-effect-image u-expanded u-image u-image-5"
                        data-image-width="800"
                        data-image-height="533"
                      ></div>
                    </div>
                    <div className="u-container-layout u-container-layout-3"></div>
                  </div>
                  <div
                    className="u-align-left u-container-style u-effect-hover-zoom u-layout-cell u-size-30 u-layout-cell-4"
                    data-image-width="1000"
                    data-image-height="1208"
                  >
                    <div className="u-background-effect u-expanded">
                      <div
                        className="u-background-effect-image u-expanded u-image u-image-6"
                        data-image-width="1000"
                        data-image-height="1208"
                      ></div>
                    </div>
                    <div className="u-container-layout u-container-layout-4"></div>
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

export default Section1;
