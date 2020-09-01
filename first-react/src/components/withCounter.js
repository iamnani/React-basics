import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          clickCounter={this.incrementCounter}
          counter={this.state.counter}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
