import React, { Component } from "react";
import state from "../backgroundPhotos/bck2.png";

class State extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ marginTop: "100px", textAlign: "center" }}
            >
              <img
                src={state}
                style={{ width: "40%", height: "90%", marginTop: "-20px" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default State;
