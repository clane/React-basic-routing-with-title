import React, { Component } from "react";
import cat4 from "./catImages/288702.svg";

class Component4 extends Component {
  render() {
    return (
      <div>
        <h2>Component 4</h2>
			  <img className="cat" src={cat4} alt="" />
      </div>
    );
  }
}

export default Component4;
