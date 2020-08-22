import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Inputs2 extends Component {
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
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const {
      hours_done,
      hours_target,
      modules_done,
      modules_target
    } = this.state;
    let curriculum = {
      name: "Prof Skills Curriculum",
      hours_done: hours_done,
      hours_target: hours_target,
      modules_done: modules_done,
      modules_target: modules_target,
      user_id: this.props.id
    };
    axios
      .post("http://localhost:3001/curriculums", {
        curriculum: {
          name: "Prof Skills Curriculum",
          hours_done: hours_done,
          hours_target: hours_target,
          modules_done: modules_done,
          modules_target: modules_target,
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
    const {
      hours_done,
      hours_target,
      modules_done,
      modules_target
    } = this.state;
    return (
      <div className="container text-left bg-light border border-primary border border-primary">
        <h1>Prof Skills Curriculum</h1>
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
          <input type="submit" value="Submit" />
          <Link to="/Inputs1">Prev</Link>
          <Link to="/Inputs3">Next</Link>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Inputs2;
