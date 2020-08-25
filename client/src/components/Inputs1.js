import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import "../styles/main-body.css";

class Inputs1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curriculum: {
        entry_date: "",
        name: "",
        hoursDone: "",
        hoursTarget: "",
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
      [name]: parseInt(value, 10)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const edate = new Date().toDateString();
    console.log(edate);

    const { hoursDone, hoursTarget, modulesDone, modulesTarget } = this.state;
    const curriculum = {
      entry_date: `${edate}`,
      name: "Tech Skills Curriculum",
      hours_done: hoursDone,
      hours_target: hoursTarget,
      modules_done: modulesDone,
      modules_target: modulesTarget,
      user_id: this.props.id
    };
    console.log("o", curriculum);
    axios
      .post("http://localhost:3001/curriculums", {
        curriculum
      })
      .then(response => {
        console.log(response);
        this.setState({ curriculum });
      })
      .catch(error => {
        console.log(error);
      });
  };

  redirect = () => {
    this.props.history.push("/Inputs2");
  };

  handleErrors = () => (
    <div>
      <ul>
        {this.state.errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );

  render() {
    return (
      <div className="container-fluid  bg-light h-100">
        <h1>Technial Curriculum</h1>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Hours Done
            <input
              type="text"
              name="hoursDone"
              value={this.state.curriculum.hoursDone || 0}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Hours Target
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]+([\.,][0-9]+)?"
              name="hoursTarget"
              value={this.state.curriculum.hoursTarget || 0}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Modules Done
            <input
              type="number"
              name="modules_done"
              value={this.state.curriculum.modules_done || 0}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Modules Target
            <input
              type="number"
              name="modules_target"
              value={this.state.curriculum.modules_target || 0}
              onChange={this.handleChange}
            />
          </label>
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
  username: PropTypes.string,
  history: PropTypes.string
};
export default Inputs1;
