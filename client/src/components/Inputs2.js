import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Inputs2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curriculum: {
        name: "",
        hoursDone: "",
        hoursTarget: "",
        modulesDone: "",
        modulesTarget: "",
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
    const { hoursDone, hoursTarget, modulesDone, modulesTarget } = this.state;
    const curriculum = {
      entry_date: `${edate}`,
      name: "Prof Skills Curriculum",
      hoursDone,
      hoursTarget,
      modulesDone,
      modulesTarget,
      user_id: this.props.id
    };
    axios
      .post("http://localhost:3001/curriculums", {
        curriculum: {
          entry_date: `${edate}`,
          name: "Prof Skills Curriculum",
          hoursDone,
          hoursTarget,
          modulesDone,
          modulesTarget,
          user_id: this.props.id
        }
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
    this.props.history.push("/Inputs3");
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
      <div className="container-fluid  bg-light h-100 ">
        <h1>Prof Skills Curriculum</h1>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Hours Done
            <input
              // placeholder="Hours Done"
              type="number"
              name="hoursDone"
              value={this.state.curriculum.hoursDone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Hours Target
            <input
              // placeholder="Hours Target"
              type="number"
              name="hoursTarget"
              value={this.state.curriculum.hoursTarget}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Modules Done
            <input
              // placeholder="Modules Done"
              type="number"
              name="modulesDone"
              value={this.state.curriculum.modulesDone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            {" "}
            Modules Target
            <input
              // placeholder="Modules Target"
              type="number"
              name="modulesTarget"
              value={this.state.curriculum.modulesTarget}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          <Link to="/Inputs1">Prev</Link>
          <Link to="/Inputs3">Next</Link>
        </form>
        <br></br>
      </div>
    );
  }
}

Inputs2.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string
};
export default Inputs2;
