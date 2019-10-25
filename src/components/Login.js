import React, { Component } from "react";
import * as request from 'superagent'
import { url } from "../constants";
import {login} from '../actions'
import {connect} from 'react-redux'

class Login extends Component {
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
        request.post(`${url}/login`)
        .send({
            email: this.state.username,
            password: this.state.password
        })
        .then(result => {
            console.log("Please let it be token!", result.body)
            this.props.login(result.body.jwt)
        })
        .catch(error => console.log("error", error))
    }
  
     render() {
         console.log("login done", this.props)
         if(this.props.jwt != "") return "user is logged in:"
    return (
      <div>
        Login form
        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            type="text"
            onChange={this.onChangeUsername}
            value={this.state.username}
            placeholder="Login username"
          />

          <input
            name="password"
            type="text"
            onChange={this.onChangePassword}
            value={this.state.password}
            placeholder="Login password"
          />
            <button type='submit'>Login</button>

        </form>
      </div>
    );
  }
}

function mapStateToProps (reduxState) {
    console.log("mstp of login component", reduxState)
    return {
      jwt: reduxState.user
    }
}

export default connect(mapStateToProps, {login})(Login)