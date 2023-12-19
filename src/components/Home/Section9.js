import React from "react";
import "../css/Home.css";
import "../css/nicepage.css";
import { Link } from "react-router-dom";

function Section9() {
  return (
    <section
      className="u-clearfix u-expanded-width-xl u-grey-90 u-section-9"
      id="carousel_3243"
    >
      <div className="u-clearfix u-sheet u-valign-middle-xl u-sheet-1">
        <div className="u-expanded-height-lg u-expanded-height-xl u-palette-2-base u-shape u-shape-rectangle u-shape-1"></div>
        <div className="u-clearfix u-expanded-width u-gutter-22 u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-size-25-sm u-size-25-xl u-size-25-xs u-size-26-lg u-size-60-md">
                <div className="u-layout-col">
                  <div
                    className="u-container-style u-image u-layout-cell u-size-60 u-image-1"
                    data-image-width="1023"
                    data-image-height="682"
                  >
                    <div className="u-container-layout u-container-layout-1"></div>
                  </div>
                </div>
              </div>
              <div className="u-size-34-lg u-size-35-sm u-size-35-xl u-size-35-xs u-size-60-md">
                <div className="u-layout-col">
                  <div className="u-size-40">
                    <div className="u-layout-row">
                      <div className="u-align-center u-container-style u-layout-cell u-size-60 u-layout-cell-2">
                        <div className="u-container-layout u-container-layout-2">
                          <h2 className="u-text u-text-default u-text-1">
                            Subscribe
                          </h2>
                          <h6 className="u-text u-text-2">
                            {" "}
                            to the newsletters and content update
                          </h6>
                          <div className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-form u-form-1">
                            <form
                              action="//publish.nicepage.com/Form/Process"
                              method="POST"
                              className="u-clearfix u-form-horizontal u-form-spacing-24 u-inner-form"
                              style={{ padding: "24px" }}
                              source="email"
                              name="form"
                            >
                              <div className="u-form-email u-form-group">
                                <label
                                  htmlFor="email-3b9a"
                                  className="u-form-control-hidden u-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  placeholder="Enter a valid email address"
                                  id="email-3b9a"
                                  name="email"
                                  className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-2-light-3 u-input u-input-rectangle u-input-1"
                                  required=""
                                />
                              </div>
                              <div className="u-align-left u-form-group u-form-submit">
                                <Link
                                  to="/"
                                  className="u-active-white u-border-none u-btn u-btn-submit u-button-style u-hover-white u-palette-2-base u-text-active-black u-text-hover-black u-btn-1"
                                >
                                  Submit
                                </Link>
                                <input
                                  type="submit"
                                  value="submit"
                                  className="u-form-control-hidden"
                                />
                              </div>
                              <div className="u-form-send-message u-form-send-success">
                                {" "}
                                Thank you! Your message has been sent.
                              </div>
                              <div className="u-form-send-error u-form-send-message">
                                {" "}
                                Unable to send your message. Please fix errors
                                then try again.{" "}
                              </div>
                              <input
                                type="hidden"
                                value=""
                                name="recaptchaResponse"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="u-size-20">
                    <div className="u-layout-row">
                      <div className="u-align-center-sm u-align-center-xs u-align-right-lg u-align-right-md u-align-right-xl u-container-style u-layout-cell u-size-30 u-layout-cell-3">
                        <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xs u-valign-middle-xl u-container-layout-3">
                          <h2 className="u-text u-text-3">location</h2>
                          <p
                            className="u-text u-text-2"
                            style={{
                              textAlign: "center",
                              marginLeft: "50px",
                              width: "250px",
                            }}
                          >
                            {" "}
                            207, 1st Floor, CMR Road, 3rd HRBR Layout, Kalyan
                            Nagar, Surat - 395010
                          </p>
                        </div>
                      </div>
                      <div className="u-align-center-sm u-align-center-xs u-align-right-lg u-align-right-md u-align-right-xl u-container-style u-layout-cell u-size-30 u-layout-cell-4">
                        <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-valign-top-xs u-container-layout-4">
                          <h2 className="u-text u-text-5">follow us</h2>
                          <div
                            className="u-social-icons u-spacing-20 u-social-icons-1"
                            style={{ marginLeft: "100px" }}
                          >
                            <Link
                              className="u-social-url"
                              // target="_blank"
                              to="/"
                            >
                              <span className="u-icon u-icon-circle u-social-facebook u-social-icon u-text-white u-icon-1">
                                <svg
                                  className="u-svg-link"
                                  preserveAspectRatio="xMidYMin slice"
                                  viewBox="0 0 112.2 112.2"
                                >
                                  <use
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xlinkHref="#svg-bae3"
                                  ></use>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  xmlSpace="preserve"
                                  className="u-svg-content"
                                  viewBox="0 0 112.2 112.2"
                                  x="0px"
                                  y="0px"
                                  id="svg-bae3"
                                  style={{
                                    enableBackground: "new 0 0 112.2 112.2",
                                  }}
                                >
                                  <path d="M56.1,0C25.1,0,0,25.1,0,56.1c0,31,25.1,56.1,56.1,56.1c31,0,56.1-25.1,56.1-56.1C112.2,25.1,87.1,0,56.1,0z M71.6,34.3h-8.2c-1.3,0-3.2,0.7-3.2,3.5v7.6h11.3l-1.3,12.9h-10V95H45V58.3h-7.2V45.4H45v-8.3c0-6,2.8-15.3,15.3-15.3l11.2,0V34.3z "></path>
                                </svg>
                              </span>
                            </Link>
                            <Link
                              className="u-social-url"
                              // target="_blank"
                              to="/"
                            >
                              <span className="u-icon u-icon-circle u-social-icon u-social-twitter u-text-white u-icon-2">
                                <svg
                                  className="u-svg-link"
                                  preserveAspectRatio="xMidYMin slice"
                                  viewBox="0 0 112.2 112.2"
                                >
                                  <use
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xlinkHref="#svg-7dc9"
                                  ></use>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  xmlSpace="preserve"
                                  className="u-svg-content"
                                  viewBox="0 0 112.2 112.2"
                                  x="0px"
                                  y="0px"
                                  id="svg-7dc9"
                                  style={{
                                    enableBackground: "new 0 0 112.2 112.2",
                                  }}
                                >
                                  <path d="M56.1,0C25.1,0,0,25.1,0,56.1s25.1,56.1,56.1,56.1s56.1-25.1,56.1-56.1S87.1,0,56.1,0z M83.8,47.3 c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2c-7.6,0-14.6-2.2-20.6-6c1,0.1,2.1,0.2,3.2,0.2c6.3,0,12.1-2.1,16.7-5.7 c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1c0-0.1,0-0.1,0-0.2 c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14c-0.2-1-0.3-2-0.3-3.1 c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4c2.7-0.3,5.3-1,7.7-2.1 C88.7,43,86.4,45.4,83.8,47.3z"></path>
                                </svg>
                              </span>
                            </Link>
                            <Link
                              className="u-social-url"
                              // target="_blank"
                              to="/"
                            >
                              <span className="u-icon u-icon-circle u-social-icon u-social-instagram u-text-white u-icon-3">
                                <svg
                                  className="u-svg-link"
                                  preserveAspectRatio="xMidYMin slice"
                                  viewBox="0 0 112.2 112.2"
                                >
                                  <use
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xlinkHref="#svg-a531"
                                  ></use>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  xmlSpace="preserve"
                                  className="u-svg-content"
                                  viewBox="0 0 112.2 112.2"
                                  x="0px"
                                  y="0px"
                                  id="svg-a531"
                                  style={{
                                    enableBackground: "new 0 0 112.2 112.2",
                                  }}
                                >
                                  <path d="M56.1,0C25.1,0,0,25.1,0,56.1c0,31,25.1,56.1,56.1,56.1c31,0,56.1-25.1,56.1-56.1C112.2,25.1,87.1,0,56.1,0z M90.6,73.4c0,9.6-7.8,17.5-17.5,17.5H38.6c-9.6,0-17.5-7.9-17.5-17.6V38.8c0-9.6,7.8-17.5,17.5-17.5h34.5c9.6,0,17.5,7.8,17.5,17.5 V73.4z"></path>
                                  <path d="M73.1,28.9H38.6c-5.4,0-9.9,4.4-9.9,9.9v34.5c0,5.4,4.4,9.9,9.9,9.9h34.5c5.4,0,9.9-4.4,9.9-9.9V38.8 C83,33.4,78.6,28.9,73.1,28.9z M55.9,74C46,74,38,66,38,56.1c0-9.9,8-17.9,17.9-17.9c9.9,0,17.9,8,17.9,17.9 C73.8,66,65.8,74,55.9,74z M74.3,41.9c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2c2.3,0,4.2,1.9,4.2,4.2S76.6,41.9,74.3,41.9z"></path>
                                  <path d="M55.9,45.8c-5.7,0-10.4,4.6-10.3,10.3c0,5.7,4.6,10.3,10.3,10.3s10.3-4.6,10.3-10.3 C66.2,50.4,61.6,45.8,55.9,45.8z"></path>
                                </svg>
                              </span>
                            </Link>
                          </div>
                          <p className="u-text u-text-6">
                            ©2022 Privacy policy
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Section9;
