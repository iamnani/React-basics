import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementVal() {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("callback");
      }
    );
  }

  render() {
    return (
      <div>
        Count - {this.state.count} <br />
        <button onClick={() => this.incrementVal()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
