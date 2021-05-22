import React, { Component } from "react";
import district from "../backgroundPhotos/bck1.png";
import { districtArray } from "../data/names.js";
import "./district.css";

class District extends Component {
  state = {
    districtname: "",
    url: "",
  };

  handleChange = (e) => {
    this.setState({ districtname: e.currentTarget.value });
  };

  handleSearch = () => {
    if (districtArray.includes(this.state.districtname) == true) {
      this.setState({
        url: `https://datascraping001.herokuapp.com/api_covinet?placename=${this.state.districtname}`,
      });
    } else this.setState({ url: "Not found" });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ marginTop: "100px", textAlign: "center" }}
            >
              <img src={district} className="image_district" />
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#009b77",
                marginTop: "10vh",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#009b77",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="form-group"
              >
                <input
                  className="col-md-3 district_input"
                  style={{ height: "40px" }}
                  placeholder="state name e.g ranchi"
                  value={this.state.districtname}
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-primary col-md-2"
                  onClick={this.handleSearch}
                >
                  Generate
                </button>
              </div>
              {this.state.url && (
                <div
                  className="alert alert-primary col-md-12"
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    overflowWrap: "break-word",
                  }}
                >
                  {this.state.url}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default District;
