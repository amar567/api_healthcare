import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{
            marginBottom: "18vh",
            boxShadow: "2px 2px 10px rgb(123, 96, 100)",
            position: "fixed",
            textAlign: "center",
            left: "0",
          }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "rgb(123, 96, 247)",
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
                CovinetAPI
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
