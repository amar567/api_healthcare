import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-12 footer"
            style={{
              boxShadow: "2px 2px 10px rgb(123, 96, 100)",
              position: "fixed",
              bottom: "0",
              left: "0",
              backgroundColor: "rgb(123, 96, 247)",
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
