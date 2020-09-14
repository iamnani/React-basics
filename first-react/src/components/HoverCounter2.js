import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    console.log(incrementCounter)
    return <h1 onMouseOver={incrementCounter}> Hoverd {count} times</h1>;
  }
}

export default HoverCounter2;
