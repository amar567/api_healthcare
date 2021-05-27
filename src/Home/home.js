import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const result = fetch(
      `https://datascraping001.herokuapp.com/apiViewCount_`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            style={{
              marginTop: "15vh",
            }}
          >
            <div
              style={{
                zIndex: "10000 !important",
                margin: "auto",
                textAlign: "center",
                maxWidth: "700px",
                fontSize: "2.2vh",
                display: "block",
              }}
              className="desc"
            >
              Here you can find the API for govt data of covid hospitals, bed
              details (oxygen and normal), address, phone no, last updated date
              and time along with state and district, made by our team.
            </div>
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
              fontzeSize: "20px",
              textDecoration: "underline",
              textAlign: "center",
              color: "blue",
              bottom: "42px",
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
