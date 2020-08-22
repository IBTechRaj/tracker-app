import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Inputs1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curriculum: {
        name: "",
        hours_done: "",
        hours_target: "",
        modules_done: "",
        modules_target: "",
        user_id: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const {
  //     hours_done,
  //     hours_target,
  //     modules_done,
  //     modules_target
  //   } = this.state;
  //   let curriculum = {
  //     name: "Technical Curriculum",
  //     hours_done: hours_done,
  //     hours_target: hours_target,
  //     modules_done: modules_done,
  //     modules_target: modules_target
  //   };
  // };

  // redirect = () => {
  //   this.props.history.push("/");
  // };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log("h", this.props.location.state.detail.id);
    const {
      hours_done,
      hours_target,
      modules_done,
      modules_target
    } = this.state;
    let curriculum = {
      name: "Technical Curriculum",
      hours_done: hours_done,
      hours_target: hours_target,
      modules_done: modules_done,
      modules_target: modules_target,
      user_id: this.props.id
    };
    axios
      .post(
        "http://localhost:3001/curriculums",
        {
          curriculum: {
            name: "Technical Curriculum",
            hours_done: hours_done,
            hours_target: hours_target,
            modules_done: modules_done,
            modules_target: modules_target,
            user_id: this.props.id
          }
        }
        // { withCredentials: true }
      )
      .then(response => {
        console.log(response);
        // const curriculums = [...this.state.curriculums, response.data];
        this.setState({ curriculum });
      })
      .catch(error => {
        console.log(error);
      });
  };
  redirect = () => {
    this.props.history.push("/Inputs2");
  };
  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    console.log("Inputs1-", this.props.id);
    const {
      // user_id,
      // name,
      hours_done,
      hours_target,
      modules_done,
      modules_target
    } = this.state;
    // const { username, email, password } = this.props.user;
    return (
      <div className="container text-left bg-light border border-primary border border-primary">
        <h1>Technial Curriculum</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Hours Done
            <input
              // placeholder="Hours Done"
              type="text"
              name="hours_done"
              value={this.state.curriculum.hours_done}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            {" "}
            Hours Target
            <input
              // placeholder="Hours Target"
              type="text"
              name="hours_target"
              value={this.state.curriculum.hours_target}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            {" "}
            Modules Done
            <input
              // placeholder="Modules Done"
              type="text"
              name="modules_done"
              value={this.state.curriculum.modules_done}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            {" "}
            Modules Target
            <input
              // placeholder="Modules Target"
              type="text"
              name="modules_target"
              value={this.state.curriculum.modules_target}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
          <Link to="/Inputs2">Next</Link>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Inputs1;
