import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

export class HoverCounter extends Component {
  render() {
    const { counter, clickCounter } = this.props;
    return (
      <div>
        <h1 onMouseOver={clickCounter}>Hover {counter} times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
