import React, { Component } from "react";
import cat4 from "./catImages/288702.svg";
import { Helmet } from "react-helmet";

class Component4 extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Title for Component 4</title>
        </Helmet>
        <h2>Heading for Component 4</h2>
        <img className="cat" src={cat4} alt="" />
      </div>
    );
  }
}

export default Component4;
