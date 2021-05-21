import React, { Component } from "react";
import district from "../backgroundPhotos/bck1.png";

class District extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ marginTop: "100px", textAlign: "center" }}
            >
              <img src={district} style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default District;
