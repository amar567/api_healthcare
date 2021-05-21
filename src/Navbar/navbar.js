import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <div
          className="container"
          style={{
            marginBottom: "20px",
            boxShadow: "2px 2px 10px lightgreen",
            marginTop: "5px",
            position: "fixed",
            textAlign: "center",
            left: "9%",
            width: "84%",
          }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#009b77",
              marginRight: "-25px",
              marginLeft: "-25px",
            }}
          >
            <div
              className="col-md-12"
              style={{
                display: "flex",
                padding: "5px",
                justifyContent: "space-between",
              }}
            >
              <a
                class="navbar-brand"
                style={{ paddingLeft: "10px" }}
                style={{ color: "white" }}
              >
                OxynetAPI
              </a>
              <div class="" style={{ display: "flex" }}>
                <Link
                  class="nav-item nav-link"
                  to="/home"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
                <Link
                  class="nav-item nav-link"
                  to="/about"
                  style={{ color: "white" }}
                >
                  About
                </Link>
                <Link
                  class="nav-item nav-link"
                  to="/contact"
                  style={{ color: "white" }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
