import React, { Component } from "react";
import cat2 from "./catImages/271631.svg";
import { Helmet } from "react-helmet";

class Component2 extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Title for Component 2</title>
        </Helmet>

        <h2>Heading for Component 2</h2>
        <img className="cat" src={cat2} alt="" />
      </div>
    );
  }
}

export default Component2;
