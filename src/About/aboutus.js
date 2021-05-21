import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-12"
            style={{ marginBottom: "20px", marginTop: "20vh" }}
          >
            <p className="heading-au" style={{ fontSize: "30px" }}>
              About us
            </p>
            We're a group of students from different Indian Institutes working
            under the able guidance of Professor Sridhar Chimalakonda in
            association with Risha lab, IIT Tirupati. We have been observing the
            critical condition of the nation in this time of the pandemic. We
            all ardently wish to help and save lives. The conditions around are
            severe and the Indian medical system is constantly trying to bring
            the country out of this swamp of trouble. Although it is not enough
            for a country of billions. So we are doing our bit to help others
            and beat covid-19.
          </div>
          <hr></hr>
          <div style={{ marginBottom: "20px" }}>
            <p className="heading-au" style={{ fontSize: "30px" }}>
              What we do
            </p>
            <h6>
              # We have scrapped the govt website and made the api, if you want
              to contribute in api creation our github link is provided in
              contact section
            </h6>
            This website is an initiative by students as an attempt to provide
            consolidated information regarding the availability of covid medical
            resources. During this massive surge of the COVID-19 pandemic, it
            was noticed that the above-mentioned information was present in a
            scattered manner without a centralized database for the same. Hence,
            this website aims to present this data in a readily-accessible
            manner for the developers and those in need of API. State wise
            information has been collected here on this one-stop solution
            regarding user-friendly and accurate information in this unforeseen
            crisis.
          </div>
          <hr></hr>
          <div style={{ marginBottom: "20px" }}>
            <p className="heading-au" style={{ fontSize: "30px" }}>
              Our Vision
            </p>
            We want India to be out of this trap of coronavirus as soon as
            possible. We aim for a morning when the people will leave their
            homes carefree and mask-free. To let this situation come we need
            perseverance optimism and some constant efforts to help the Indian
            Medical System and people in need of covid resources. It’s the time
            when our collective efforts and unity can bring a change. We are
            just giving it a try.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
