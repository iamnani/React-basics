import React, { Component } from "react";

class PostSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        userId: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  submitHandler = (e) => {
    console.log(this.state);
    e.preventDefault();

    // do post request here..
  };

  render() {
    const { username, userId } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
           User Id <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
           User Name <input
              type="text"
              name="username"
              value={username}
              onChange={this.onChangeHandler}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default PostSubmit;
