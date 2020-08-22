import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
class Inputs3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: ""
    };
  }

  redirect = () => {
    this.props.history.push("/");
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <h1>Pref Skills Curriculum</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button placeholder="submit" type="submit">
            Submit
          </button>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
        <br></br>
        <Link to="/Inputs2">Prev</Link>
      </div>
    );
  }
}
export default Inputs3;
