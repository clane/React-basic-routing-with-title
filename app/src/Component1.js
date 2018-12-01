import React, { Component } from "react";
import cat1 from "./catImages/293931.svg";

class Component1 extends Component {
  render() {
    return (
      <div>
        <h2>Component 1</h2>
			  <img className="cat" src={cat1} alt="" />
      </div>
    );
  }
}

export default Component1;
