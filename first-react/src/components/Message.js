import React, { Component } from "react";
import Welcome from "./Welcome";

class Message extends Component {
  constructor() {
    super();
    this.state = { message: "Welcome Visitor" };
  }

changeMessage(){
    this.setState({
        message:"Thank you for subscribing"
    });
}

changeUnsubscribe(){
    this.setState({
        message: "Click to subscribe again.!"
    });
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
        <button onClick={() => this.changeUnsubscribe()}>Unsubscribe</button>
      </div>
    );
  }
}

export default Message;
