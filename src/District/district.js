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
            <div
              style={{
                textAlign: "center",
                color: "#009b77",
                marginTop: "10vh",
              }}
            >
              <hr></hr>
              <h5>
                For any district REPLACE the district name from the link :
              </h5>
              <h5>
                https://datascraping001.herokuapp.com/api_covinet?placename=DISTRICT_NAME
              </h5>
              <hr></hr>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default District;
