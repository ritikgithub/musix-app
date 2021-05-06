import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Header(props) {
  let history = useHistory();

  function logOutHandler() {
    props.setisLoggedIn(false);
    localStorage.clear();
    history.push("/");
  }

  return (
    <div>
      <nav
        style={{ zIndex: 2, backgroundColor: "#3e3269" }}
        className="navbar navbar-expand-sm navbar-dark  justify-content-between"
      >
        <div className="container-fluid">
          <NavLink
            exact
            activeStyle={{ fontWeight: "bold" }}
            className="nav-link"
            to="/"
          >
            <span className="navbar-brand d-flex align-items-center">
              <img
                src="https://i.pinimg.com/236x/30/78/72/307872e5b50ace07ce5b084fa42f4819--sound-wave-tattoo-sound-waves-logo.jpg"
                alt=""
                width="34"
                height="34"
                style={{ borderRadius: "50%" }}
                className="d-inline-block align-text-top me-2"
              ></img>
              Miuzik Mania
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            style={{ flexGrow: "0" }}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {props.isLoggedIn ? (
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: "bold" }}
                    className="nav-link"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <NavLink
                    exact
                    activeStyle={{ fontWeight: "bold" }}
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                  className="nav-link"
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
              {props.isLoggedIn ? (
                <li className="nav-item">
                  <span className="nav-link">
                    Welcome,<b>{localStorage.getItem("firstName")}</b>
                  </span>{" "}
                </li>
              ) : (
                <li className="nav-item">
                  <Button
                    className="nav-link"
                    variant="contained"
                    style={{ backgroundColor: "#263c3c", color: "white" }}
                    onClick={() => {
                      props.setmodalOpen(true);
                      props.settype("login");
                    }}
                  >
                    LogIn/SignUp <i className="fas fa-sign-in-alt"></i>
                  </Button>
                </li>
              )}

              {props.isLoggedIn ? (
                <li className="nav-item">
                  <Button
                    className="nav-link"
                    variant="contained"
                    style={{ backgroundColor: "#263c3c", color: "white" }}
                    onClick={logOutHandler}
                  >
                    LogOut <i className="fas fa-sign-in-alt"></i>
                  </Button>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
