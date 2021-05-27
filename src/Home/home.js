import React, { useState } from "react";
import api from "../backgroundPhotos/back1.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css";
import State from "../State/state";
import District from "../District/district";

const Home = () => {
  let history = useHistory();
  const [val, setVal] = useState(0);

  const handleChange = (e) => {
    if (e.currentTarget.value == 2) {
      setVal(2);
    }
    if (e.currentTarget.value == 3) {
      setVal(3);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div style={{ height: "4vh" }}></div>
          </div>

          <div className="col-md-12">
            <h6
              style={{
                marginTop: "18vh",
                zIndex: "10000 !important",
                textAlign: "center",
                maxWidth: "700px",
                fontSize: "2vh",
                display: "block",

                margin: "auto",
              }}
              className="desc"
            >
              Here you can find the API for covid hospitals, bed details (oxygen
              and normal), address, phone no, last updated date and time along
              with state and district from govt.
            </h6>
          </div>
          <div style={{ height: "6vh" }}></div>
          <select
            onChange={handleChange}
            className=" form-select option_box col-md-12"
            style={{
              boxShadow: "2px 2px 10px rgb(123, 96, 100)",
              maxWidth: "400px",
              display: "block",
              margin: "auto",
              marginBottom: "15vh",
            }}
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
          {val == 2 && (
            <div className="">
              <State />
            </div>
          )}
          {val == 3 && (
            <div className="">
              <District />
            </div>
          )}
          <div
            style={{
              fontzeSize: "25px",
              textDecoration: "underline",
              textAlign: "center",
              color: "blue",
              bottom: "70px",
              cursor: "pointer",
              position: "absolute",
              left: "2vw",
            }}
            onClick={() => {
              window.location.assign("https://oxynet.live");
            }}
          >
            Visit : Parent Website
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
