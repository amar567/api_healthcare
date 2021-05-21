import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 footer"
            style={{
              boxShadow: "2px 2px 10px lightgreen",
              position: "fixed",
              bottom: "0",
              width: "84%",
              left: "9%",
              backgroundColor: "#009b77",
              textAlign: "center",
              padding: "7px",
              color: "white",
            }}
          >
            © Copyright 2021-22 RishaLab IIT Tirupati
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
