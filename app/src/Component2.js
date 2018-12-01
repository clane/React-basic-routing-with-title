import React, { Component } from "react";
import cat2 from "./catImages/271631.svg";

class Component2 extends Component {
  render() {
    return (
      <div>
        <h2>Component 2</h2>
			 <img className="cat" src={cat2} alt="" />
      </div>
    );
  }
}

export default Component2;
