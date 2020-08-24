import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Inputs1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curriculum: {
        entry_date: "",
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
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: parseInt(value)
    });
    // console.log(
    //   "1A-dat",
    //   this.state.curriculum.hours_done,
    //   this.state.curriculum.hours_target,
    //   this.state.curriculum.modules_done,
    //   this.state.curriculum.modules_target
    // );
  };
  handleSubmit = event => {
    event.preventDefault();
    let edate = new Date().toDateString();
    // let edate = "22-Aug-2020";
    console.log(edate);

    const {
      hours_done,
      hours_target,
      modules_done,
      modules_target
    } = this.state;
    let curriculum = {
      // entry_date: `${edate}`,
      entry_date: `${edate}`,
      name: "Tech Skills Curriculum",
      hours_done: hours_done,
      hours_target: hours_target,
      modules_done: modules_done,
      modules_target: modules_target,
      user_id: this.props.id
    };
    console.log("o", curriculum);
    // console.log(
    //   "1-dat",
    //   this.state.curriculum.hours_done,
    //   this.state.curriculum.hours_target,
    //   this.state.curriculum.modules_done,
    //   this.state.curriculum.modules_target
    // );
    axios
      .post(
        "http://localhost:3001/curriculums",
        {
          curriculum
          // curriculum: {
          //   entry_date: `${edate}`,
          //   name: "Technical Curriculum",
          //   hours_done: hours_done,
          //   hours_target: hours_target,
          //   modules_done: modules_done,
          //   modules_target: modules_target,
          //   user_id: this.props.id
          // }
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
    // const {
    //   // user_id,
    //   // name,
    //   hours_done,
    //   hours_target,
    //   modules_done,
    //   modules_target
    // } = this.state;
    // const { username, email, password } = this.props.user;
    return (
      <div className="container text-left bg-light border border-primary ">
        <h1>Technial Curriculum</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Hours Done
            <input
              // placeholder="Hours Done"
              type="text"
              name="hours_done"
              value={this.state.curriculum.hours_done || 0}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            {" "}
            Hours Target
            <input
              // placeholder="Hours Target"
              type="number"
              name="hours_target"
              value={this.state.curriculum.hours_target || 0}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            {" "}
            Modules Done
            <input
              // placeholder="Modules Done"
              type="number"
              name="modules_done"
              value={this.state.curriculum.modules_done || 0}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            {" "}
            Modules Target
            <input
              // placeholder="Modules Target"
              type="number"
              name="modules_target"
              value={this.state.curriculum.modules_target || 0}
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

Inputs1.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string
};
export default Inputs1;
