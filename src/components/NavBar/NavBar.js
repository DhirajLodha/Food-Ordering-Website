import React from "react";
import "../css/nicepage.css";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
const baseUrl = process.env.REACT_APP_BACKEND_URL;
function NavBar({ cartCount }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const data = localStorage.getItem("value");
  const [oldData, setOldData] = useState(JSON.parse(data));
  const [hide, setHide] = useState(oldData ? true : false);
  <Helmet>
    <script isHydrating={true} type="text/javascript" src="../js/nicepage.js" />
    <script isHydrating={true} type="text/javascript" src="../js/jquery.js" />
  </Helmet>;
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    });
    const json = await res.json();
    console.log(json);
    if (json.isUserCreated) {
      localStorage.setItem("value", JSON.stringify(json));
      setHide(true);
      let element = document.getElementById("close-btn");
      element.click();
    } else if (!json.isUserCreated) {
      alert(json.error);
    }
  };
  const handleOnLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });
    const json = await res.json();
    console.log(json);
    if (json.isUserFound) {
      localStorage.setItem("value", JSON.stringify(json));
      setHide(true);
      let element = document.getElementById("login-close-btn");
      element.click();
    } else if (json.err === "Please Enter Correct Password") {
      alert(json.err);
    } else if (!json.isUserFound) {
      alert(json.error);
    }
  };
  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleOnLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <header
        className="u-align-center-xs u-border-1 u-border-grey-25 u-clearfix u-grey-90 u-header u-sticky u-sticky-5894 u-header"
        id="sec-92d8"
        style={{ height: "90px", padding: "10px" }}
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <Link to="/">
            <img
              className="u-logo-image u-logo-image-1"
              src="images/default-logo.png"
              style={{
                width: "70px",
              }}
              alt="logo"
            />
          </Link>

          <nav
            className="u-align-left u-menu u-menu-one-level u-nav-spacing-25 u-offcanvas u-menu-1"
            style={{ position: "relative", bottom: "15px" }}
          >
            <div
              className="menu-collapse u-custom-font u-font-roboto-slab"
              style={{ fontSize: "1.125rem" }}
            >
              <Link
                className="u-button-style u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-nav-link"
                to="/"
                style={{ padding: "4px 0px", fontSize: "calc(1em + 8px)" }}
              >
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 302 302"
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-7b92"
                  ></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="svg-7b92"
                  x="0px"
                  y="0px"
                  viewBox="0 0 302 302"
                  style={{ enableBackground: "new 0 0 302 302" }}
                  xmlSpace="preserve"
                  className="u-svg-content"
                >
                  <g>
                    <rect y="36" width="302" height="30"></rect>
                    <rect y="236" width="302" height="30"></rect>
                    <rect y="136" width="302" height="30"></rect>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-custom-font u-font-roboto-slab u-nav u-spacing-2 u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <Link
                    className="u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10 u-text-hover-grey-60 u-text-white"
                    to="/"
                    style={{ padding: "8px 20px", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                    className="u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10 u-text-hover-grey-60 u-text-white"
                    to="/gallery"
                    style={{ padding: "8px 20px", textDecoration: "none" }}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                    className="u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10 u-text-hover-grey-60 u-text-white"
                    to="/about"
                    style={{ padding: "8px 20px", textDecoration: "none" }}
                  >
                    About
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                    className="u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10 u-text-hover-grey-60 u-text-white"
                    to="/contact"
                    style={{ padding: "8px 20px", textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                    className="u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10 u-text-hover-grey-60 u-text-white"
                    style={{ padding: "8px 20px", textDecoration: "none" }}
                    to="/menu"
                  >
                    Menu
                  </Link>
                </li>
                <li className="u-nav-item">
                  <button
                    className="u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10 u-nav-link u-text-hover-grey-60 u-text-white"
                    style={{ padding: "11px 20px", textDecoration: "none" }}
                    data-toggle="modal"
                    data-target="#loginModal"
                    style={{ display: hide ? "none" : "" }}
                  >
                    Login
                  </button>
                </li>
                <li className="u-nav-item">
                  <button
                    className="u-active-grey-5 u-button-style u-text-hover-grey u-hover-grey-10  u-nav-link u-text-hover-grey-60 u-text-white"
                    style={{ padding: "11px 20px", textDecoration: "none" }}
                    data-toggle="modal"
                    data-target="#signupModal"
                    style={{ display: hide ? "none" : "" }}
                  >
                    Sign Up
                  </button>
                </li>
                <li
                  className="u-nav-item"
                  style={{ display: !hide ? "none" : "" }}
                >
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {hide
                        ? oldData
                          ? oldData.name.slice(0, 15)
                          : userData.name.slice(0, 15)
                        : ""}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setOldData(null);
                          localStorage.clear();
                        }}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item">
                      <Link className="u-button-style u-nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <Link className="u-button-style u-nav-link" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <Link className="u-button-style u-nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <Link className="u-button-style u-nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <Link className="u-button-style u-nav-link" to="/menu">
                        Menu
                      </Link>
                    </li>
                    <li className="u-nav-item">
                      <button
                        className="u-button-style u-nav-link"
                        style={{ padding: "11px 20px", textDecoration: "none" }}
                        data-toggle="modal"
                        data-target="#loginModal"
                        style={{ display: hide ? "none" : "" }}
                      >
                        Login
                      </button>
                    </li>
                    <li className="u-nav-item">
                      <button
                        className="u-button-style u-nav-link"
                        style={{ padding: "11px 20px", textDecoration: "none" }}
                        data-toggle="modal"
                        data-target="#signupModal"
                        style={{ display: hide ? "none" : "" }}
                      >
                        Sign Up
                      </button>
                    </li>
                    <li
                      className="u-nav-item"
                      style={{ display: !hide ? "none" : "" }}
                    >
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {hide ? userData.name.slice(0, 15) : ""}
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <button className="dropdown-item">Log Out</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>
          <Link
            className="u-file-icon u-hidden-md u-hidden-sm u-hidden-xs u-hover-feature u-icon u-icon-1 mb-2"
            to="/cart"
            data-page-id="179458025"
            style={{
              position: "relative",
              bottom: "15px",
            }}
          >
            <button>
              <img src="images/7269244.png" alt="" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount || 0}
              </span>
            </button>
          </Link>
        </div>
      </header>

      <>
        {" "}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login to The Pizza Villa
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      value={loginData.email}
                      onChange={handleOnLoginChange}
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword"
                      value={loginData.password}
                      onChange={handleOnLoginChange}
                      required
                    />
                  </div>
                  <button
                    onClick={handleOnLogin}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  id="login-close-btn"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Sign Up Modal --> */}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Get an The Pizza Villa Account
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={handleOnSubmit}
                  name="sign-up"
                  id="sign-up-form"
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      value={userData.name}
                      onChange={handleOnChange}
                      required
                    />
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="nameHelp"
                      value={userData.email}
                      onChange={handleOnChange}
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={userData.password}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Creat Account
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="close-btn"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default NavBar;
