import React from "react";
import api from "../backgroundPhotos/back1.png";
import { Link, useHistory } from "react-router-dom";
import "./home.css";

const Home = () => {
  let history = useHistory();

  const handleChange = (e) => {
    if (e.currentTarget.value == 2) {
      history.push("/state");
    }
    if (e.currentTarget.value == 3) {
      history.push("/district");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <select
              onChange={handleChange}
              className=" form-select option_box col-md-12"
              style={{ boxShadow: "2px 2px 10px green", marginTop: "20vh" }}
            >
              <option selected value="1" style={{ overflow: "hidden" }}>
                select here
              </option>
              <option value="2" style={{ overflow: "hidden" }}>
                State
              </option>
              <option value="3" style={{ overflow: "hidden" }}>
                District
              </option>
            </select>
          </div>
          <div className="col-md-12">
            <p
              style={{
                color: "#009b77",
                marginTop: "10px",
                marginBottom: "-60px",
                zIndex: "10000 !important",
                textAlign: "center",
              }}
              className="desc"
            >
              Here you can find the API for covid hospitals, bed details (oxygen
              and normal), address, phone no, last updated date and time along
              with state and district from govt.
            </p>
          </div>
          <div
            className="col-md-12 home-image"
            style={{
              textAlign: "center",
              zIndex: "-10",
              marginTop: "20vh",
            }}
          >
            <img src={api} style={{ width: "60vw" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
