import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="container"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="row"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="col-md-4" style={{ marginBottom: "100px" }}>
              <h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="130"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </h2>
              <h5>
                <a href="" style={{ textDecoration: "none" }}>
                  Sridhar Chimalakonda
                </a>
              </h5>
              <h5>
                <a
                  href="mailto:info.oxynet@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  info.oxynet@gmail.com
                </a>
              </h5>
            </div>
            <div
              className="col-md-4 "
              style={{
                textAlign: "center",
              }}
            >
              <h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="120"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </h2>
              <h5>
                <a href="https://github.com/Talha-shamim/dataScraping_001">
                  Github
                </a>
              </h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
