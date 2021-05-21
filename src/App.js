import React, { Component } from "react";
import { Route, Switch } from "react-router";
import About from "./About/aboutus";
import Contact from "./Contact/contact";
import District from "./District/district";
import Footer from "./footer/footer";
import Home from "./Home/home";
import Navbar from "./Navbar/navbar";
import State from "./State/state";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Navbar />
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/state" component={State} />
                <Route exact path="/district" component={District} />
                <Route path="/" component={Home} />
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
