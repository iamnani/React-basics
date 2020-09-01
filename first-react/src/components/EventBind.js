import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello Jack..",
    };

 //   this.clickHandler = this.clickHandler.bind(this);
  }

//   clickHandler() {
//     this.setState(
//       (prevState) => ({
//         message: "Goodbye Jack.",
//       }),
//       () => {
//         console.log(this.state.message);
//       }
//     );
//   }

clickHandler = () => {
    this.setState({
        message : "Good bye"
    })
};

  render() {
    return (
      <div>
        {this.state.message} <br />
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        <button onClick={() => this.clickHandler()}>Click</button>
        {/* <button onClick={this.clickHandler}>Click</button> */}
      </div>
    );
  }
}

export default EventBind;
