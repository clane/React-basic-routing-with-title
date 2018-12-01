import React, { Component } from "react";
import cat1 from "./catImages/293931.svg";
import { Helmet } from "react-helmet";

class Component1 extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Component 1</title>
        </Helmet>

        <h2>Component 1</h2>
        <img className="cat" src={cat1} alt="" />
      </div>
    );
  }
}

export default Component1;
