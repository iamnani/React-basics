import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  incrementCount = () => {
    /* this.setState((prevState) => ({
      count: prevState.count + 1,
    })); */

    /*     this.setState(prev => {
        return {
            count: prev.count + 1
        }
    }) */

    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  componentDidMount() {
    console.log("Component didmount ");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("componenet did update ");
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={this.incrementCount}>Click {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
