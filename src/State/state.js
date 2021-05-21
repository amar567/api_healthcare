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
            <div style={{ textAlign: "center", color: "#009b77" }}>
              <hr></hr>
              <h5>
                For any state REPLACE the state name from the link lowercase
                without any space i.e rajasthan:
              </h5>
              <h5>
                https://datascraping001.herokuapp.com/api_covinet?placename=STATE_NAME
              </h5>
              <hr></hr>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default State;
