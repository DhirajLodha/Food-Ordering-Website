import React from "react";
import "../css/Cart.css";
import "../css/nicepage.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Cart() {
  let subtotal = 0;
  let data = localStorage.getItem("cartItem");
  let isEmpty = true;
  if (data !== null) {
    isEmpty = false;
    data = JSON.parse(data);
  }
  if (data === null) {
    data = [];
  }
  return (
    <>
      <section
        className="u-section-1-cart"
        id="sec-683e"
        style={{ marginTop: "100px" }}
      >
        <div className="u-clearfix u-sheet u-sheet-1-cart">
          <div className="u-container-style u-expanded-width u-group u-shape-rectangle u-group-1-cart">
            <div className="u-container-layout u-container-layout-1-cart">
              <h2 className="u-text u-text-default u-text-palette-2-base u-text-1-cart">
                Your Orders
              </h2>
              <div className="u-expanded-width u-table u-table-responsive u-table-1-cart">
                <table className="u-table-entity">
                  <colgroup>
                    <col width="58.5%" />
                    <col width="12.8%" />
                  </colgroup>
                  <thead className="u-align-center u-custom-font u-font-georgia u-table-header u-table-header-1">
                    <tr style={{ height: "54px", color: "white" }}>
                      <th className="u-border-3 u-border-black u-table-cell">
                        Product Detail
                      </th>
                      <th className="u-border-3 u-border-black u-table-cell">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="u-table-body">
                    {data.map((element) => {
                      subtotal += element["price"];
                      if (isEmpty === false) {
                        return (
                          <tr style={{ height: "50px", color: "white" }}>
                            <td
                              key={element["title"]}
                              className="u-border-3 u-border-black u-table-cell u-table-cell-5"
                            >
                              <img
                                src={element["src"]}
                                width="250px"
                                height="150px"
                                alt=""
                              />
                              <br />
                              <b style={{ fontSize: "30px" }}>
                                {" "}
                                {element["title"]}{" "}
                              </b>
                              <br />
                              <b> {element["desc"]} </b>
                            </td>
                            <td
                              key={element["price"]}
                              className="u-border-3 u-border-black u-table-cell u-table-cell-6"
                              style={{ textAlign: "center" }}
                            >
                              <b>₹{element["price"]}</b>
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <tr style={{ height: "50px" }}>
                            <td className="u-border-3 u-border-black u-table-cell u-table-cell-5"></td>
                            <td className="u-border-3 u-border-black u-table-cell u-table-cell-6"></td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                  <thead className="u-align-center u-custom-font u-font-georgia u-table-header u-table-header-1">
                    <tr style={{ height: "54px", color: "white" }}>
                      <th className="u-border-3 u-border-black u-table-cell">
                        Sub Total
                      </th>
                      <td className="u-border-3 u-border-black u-table-cell u-table-cell-6">
                        {subtotal}
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              <Link
                to="/menu"
                className="u-align-center u-custom-font u-font-georgia u-text u-text-black u-text-2 u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10 u-text-hover-grey-60 u-nav-link"
              >
                &gt; Back To Menu
              </Link>
            </div>
          </div>
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-1">
                  <div className="u-container-layout u-valign-bottom-md u-valign-bottom-sm u-container-layout-2">
                    <h2 className="u-text u-text-default u-text-3">
                      Apply Promo
                    </h2>
                    <div className="u-form u-form-1">
                      <form
                        className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form"
                        name="form"
                        style={{ padding: "10px" }}
                      >
                        <div className="u-form-group u-form-name">
                          <label
                            htmlFor="name-8c43"
                            className="u-form-control-hidden u-label"
                          ></label>
                          <input
                            type="text"
                            placeholder="Coupon Code"
                            id="name-8c43"
                            name="Coupon"
                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                          />
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                          <a
                            href="/"
                            className="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-2 u-palette-2-base u-radius-7 u-btn-2"
                          >
                            Submit
                          </a>
                          <input
                            type="submit"
                            value="submit"
                            className="u-form-control-hidden"
                          />
                        </div>
                        <div className="u-form-send-message u-form-send-success">
                          {" "}
                          Thank you! Your message has been sent.{" "}
                        </div>
                        <div className="u-form-send-error u-form-send-message">
                          {" "}
                          Unable to send your message. Please fix errors then
                          try again.{" "}
                        </div>
                        <input
                          type="hidden"
                          value=""
                          name="recaptchaResponse"
                        />
                      </form>
                    </div>
                    <h2 className="u-text u-text-default u-text-4">
                      Choose a Delivery Address
                    </h2>
                    <div className="u-container-style u-expanded-width u-grey-10 u-group u-group-2">
                      <div className="u-container-layout u-container-layout-3">
                        <div className="u-expanded-width u-table u-table-responsive u-table-2">
                          <table className="u-table-entity">
                            <colgroup>
                              <col width="100%" />
                            </colgroup>
                            <tbody className="u-table-body">
                              <tr style={{ height: "87px" }}>
                                <td className="u-border-1 u-border-grey-dark-1 u-table-cell"></td>
                              </tr>
                              <tr style={{ height: "124px" }}>
                                <td className="u-border-1 u-border-grey-dark-1 u-table-cell"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <span className="u-black u-icon u-icon-circle u-text-white u-icon-1">
                          <svg
                            className="u-svg-link"
                            preserveAspectRatio="xMidYMin slice"
                            viewBox="0 0 54.757 54.757"
                          >
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref="#svg-f4a1"
                            ></use>
                          </svg>
                          <svg
                            className="u-svg-content"
                            viewBox="0 0 54.757 54.757"
                            x="0px"
                            y="0px"
                            id="svg-f4a1"
                            style={{
                              enableBackground: "new 0 0 54.757 54.757",
                            }}
                          >
                            <path
                              d="M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952
	L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M27.557,26c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7
	S31.416,26,27.557,26z"
                            ></path>
                          </svg>
                        </span>
                        <span className="u-file-icon u-icon u-icon-2">
                          <img src="images/3203071.png" alt="" />
                        </span>
                        <p className="u-custom-font u-font-georgia u-text u-text-default u-text-5">
                          Select Location From Map
                        </p>
                        <a
                          href="/"
                          className="u-border-none u-btn u-button-style u-hover-palette-2-light-2 u-palette-2-base u-btn-3"
                        >
                          Locate<span style={{ fontSize: "1.125rem" }}></span>
                        </a>
                        <p className="u-custom-font u-font-georgia u-text u-text-default u-text-6">
                          Manually Type Address
                        </p>
                        <a
                          href="/"
                          className="u-border-none u-btn u-button-style u-hover-palette-2-light-2 u-palette-2-base u-btn-4"
                        >
                          Add Address
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-size-30-lg u-size-30-xl u-size-60-md u-size-60-sm u-size-60-xs u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-4">
                    <h2 className="u-text u-text-default u-text-7">
                      Cart Total
                    </h2>
                    <div className="u-table u-table-responsive u-table-3">
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="61.1%" />
                          <col width="38.9%" />
                        </colgroup>
                        <tbody className="u-align-center u-table-body u-text-white u-table-body-3">
                          <tr style={{ height: "85px" }}>
                            <td className="u-border-3 u-border-black u-table-cell">
                              Sub Total
                            </td>
                            <td className="u-border-3 u-border-black u-table-cell">
                              {subtotal}
                            </td>
                          </tr>
                          <tr style={{ height: "85px" }}>
                            <td className="u-border-3 u-border-black u-table-cell">
                              Discount
                            </td>
                            <td className="u-border-3 u-border-black u-table-cell">
                              {subtotal * 0.1}
                            </td>
                          </tr>
                          <tr style={{ height: "85px" }}>
                            <td className="u-border-3 u-border-black u-table-cell">
                              Taxes And Charges
                            </td>
                            <td className="u-border-3 u-border-black u-table-cell">
                              {(subtotal * 0.18).toFixed(2)}
                            </td>
                          </tr>
                        </tbody>
                        <tfoot className="u-align-center u-custom-font u-font-georgia u-table-footer u-white u-table-footer-1">
                          <tr style={{ height: "85px" }}>
                            <td className="u-border-3 u-border-black u-table-cell">
                              Grand Total
                            </td>
                            <td className="u-border-3 u-border-black u-table-cell">
                              {(
                                subtotal +
                                subtotal * 0.1 +
                                subtotal * 0.18
                              ).toFixed(0)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <script
          isHydrating={true}
          type="text/javascript"
          src="../js/nicepage.js"
        />
        <script
          isHydrating={true}
          type="text/javascript"
          src="../js/jquery.js"
        />
      </Helmet>
    </>
  );
}

export default Cart;
