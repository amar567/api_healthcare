import React, { Component } from "react";
import state from "../backgroundPhotos/bck2.png";
import stateArray from "../data/names.js";
import "./state.css";

class State extends Component {
  state = {
    statename: "",
    url: "",
  };

  handleChange = (e) => {
    this.setState({ statename: e.currentTarget.value });
  };

  handleSearch = () => {
    if (stateArray.includes(this.state.statename) == true) {
      this.setState({
        url: `https://datascraping001.herokuapp.com/api_covinet?placename=${this.state.statename}`,
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
              <img src={state} className="image_state" />
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#009b77",
                display: "flex",
                justifyContent: "center",
              }}
              className="form-group state_input"
            >
              <input
                className="col-md-3"
                style={{ height: "40px" }}
                placeholder="state name e.g uttarpradesh"
                value={this.state.statename}
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
                className="alert alert-primary"
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
      </>
    );
  }
}

export default State;
