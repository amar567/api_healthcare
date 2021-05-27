import React, { Component } from "react";
import { districtArray } from "../data/names.js";
import copy from "copy-to-clipboard";

class District extends Component {
  state = {
    districtname: "",
    url: "",
    copied: false,
    display: false,
  };

  handleChange = (e) => {
    this.setState({ districtname: e.currentTarget.value });
    if (e.currentTarget.value.length === 0) {
      this.setState({ display: false });
    }
    this.setState({ copied: false });
  };

  handleSearch = () => {
    this.setState({ display: true });
    if (districtArray.includes(this.state.districtname) == true) {
      this.setState({
        url: `https://datascraping001.herokuapp.com/api_covinet?placename=${this.state.districtname}`,
      });
    } else this.setState({ url: "Not found" });
  };

  handleCopy = (e) => {
    copy(this.state.url);
    this.setState({ copied: true });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              style={{
                textAlign: "center",
                color: "#009b77",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  maxWidth: "400px",
                  justifyContent: "center",
                  margin: "auto",
                  width: "100%",
                }}
                className="form-group"
              >
                <input
                  className=" district_input"
                  style={{ height: "40px", width: "70%" }}
                  placeholder="state name e.g ranchi"
                  value={this.state.districtname}
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-primary "
                  style={{ width: "30%" }}
                  onClick={this.handleSearch}
                >
                  Generate
                </button>
              </div>
              {this.state.display && (
                <div
                  className="alert alert-primary col-md-12"
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    overflowWrap: "break-word",
                  }}
                >
                  {this.state.url}
                  {!this.state.copied && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-clipboard"
                      viewBox="0 0 16 16"
                      style={{
                        right: "10px",
                        position: "absolute",
                      }}
                      onClick={this.handleCopy}
                    >
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                  )}
                  {this.state.copied && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-clipboard-check"
                      viewBox="0 0 16 16"
                      style={{
                        right: "10px",
                        position: "absolute",
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                  )}
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
