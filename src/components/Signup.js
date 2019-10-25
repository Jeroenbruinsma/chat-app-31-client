import React, { Component } from "react";
import * as request from 'superagent'
import { url } from "../constants";

export default class Signup extends Component {
    state = {
        username: "",
        password: ""
    }
    onChangeUsername = (event) => {
        console.log("change username")
        this.setState({
            username: event.target.value
        })
    }

    onChangePassword = (event) => {
        console.log("change password")
        this.setState({
            password: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("try to signup w: ", this.state.username, "and", this.state.password)
        request.post(`${url}/user`)
        .send({
            email: this.state.username,
            password: this.state.password
        })
        .catch(error => console.log("error", error))
    }
  
     render() {
    return (
      <div>
        signup form
        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            type="text"
            onChange={this.onChangeUsername}
            value={this.state.username}
            placeholder="username"
          />

          <input
            name="password"
            type="text"
            onChange={this.onChangePassword}
            value={this.state.password}
            placeholder="password"
          />
            <button type='submit'>Signup</button>

        </form>
      </div>
    );
  }
}
