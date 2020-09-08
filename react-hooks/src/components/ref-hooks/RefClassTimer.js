import React, { Component } from "react";

export class RefClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };

    this.clearTimerInterval = this.clearTimerInterval.bind(this);
  }

  componentWillMount = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  clearTimerInterval = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        Timer - {this.state.timer}
        <button onClick={this.clearTimerInterval}>Clear Interval</button>
      </div>
    );
  }
}

export default RefClassTimer;
