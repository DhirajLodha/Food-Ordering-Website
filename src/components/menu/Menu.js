import React from "react";
import "../css/Menu.css";
import { Helmet } from "react-helmet";
let data = require("../Menu.json");

function Menu({ setCartCount }) {
  return (
    <>
      <div className="bg-black" style={{ marginTop: "90px" }}>
        <div className="container py-5">
          <h1
            className="text-center"
            style={{ color: "red", fontWeight: "700", fontStyle: "italic" }}
          >
            {" "}
            Menu
          </h1>
          <div className="row">
            {data.map((element) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 res-margin py-5">
                  <div className="card">
                    <img
                      className="card-img-top cover-image img-fluid"
                      src={element["src"]}
                      alt="Card"
                      style={{ width: "304px", height: "200px" }}
                    />
                    <div
                      className="card-body m-auto text-center"
                      style={{ height: "380px" }}
                    >
                      <h4 className="card-title">{element["title"]}</h4>
                      <p>{element["desc"]}</p>
                      <p className="card-text text-success fw-bold">
                        ₹{element["price"]}
                      </p>
                      <button
                        onClick={() => {
                          if (localStorage.getItem("cartItem") !== null) {
                            let data = { ...element };
                            let oldData = localStorage.getItem("cartItem");
                            oldData = JSON.parse(oldData);
                            let finalData = [...oldData, data];
                            JSON.stringify(finalData);
                            console.log(JSON.stringify(finalData));
                            localStorage.setItem(
                              "cartItem",
                              JSON.stringify(finalData)
                            );
                            setCartCount(finalData.length);
                          } else {
                            let data = { ...element };
                            localStorage.setItem(
                              "cartItem",
                              JSON.stringify([data])
                            );
                            setCartCount(1);
                          }
                        }}
                        className="btn btn-danger"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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

export default Menu;
