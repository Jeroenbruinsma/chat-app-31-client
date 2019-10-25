import React, { Component } from "react";
import * as request from "superagent";
import { url } from "../constants";

export default class ChatroomForm extends Component {
  state = {
    message: ""
  };

  onChange = event => {
    console.log("onchange");
    this.setState({
      message: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("onSubmit of chatroomform");
    request
      .post(`${url}/message`)
      .send({ message: this.state.message })
      .catch(error => console.log("got an error!", error));
  };

  render() {
    console.log("Render of chatroomform", this.state);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="messageForm"
            type="text"
            onChange={this.onChange}
            value={this.state.message}
            placeholder="TypeYourMessageHere"
          ></input>
          <button type="submit"> Send message</button>
        </form>
      </div>
    );
  }
}
