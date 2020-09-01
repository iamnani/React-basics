import React, { Component } from "react";

class Hero extends Component {
  render() {
    const { name } = this.props;
    console.log(name);
    if (name == "Villian") {
      throw new Error("Villian has entered");
    }
    return <div>{name}</div>;
  }
}

export default Hero;
