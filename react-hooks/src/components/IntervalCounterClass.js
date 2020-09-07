import React, { Component } from "react";

export class IntervalCounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    console.log("tick called");
    /* this.setState(() => {
      return {
        ...this.state,
        count: this.state.count + 1,
      };
    }); */
    this.setState({count : this.state.count + 1})
  };

  render() {
    return <div>Timer {this.state.count}</div>;
  }
}

export default IntervalCounterClass;
