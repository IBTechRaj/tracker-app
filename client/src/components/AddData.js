import React, { Component } from "react";
import axios from "axios";
class AddData extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   curriculums: [],
    //   id: this.props.data,
    //   username: this.props.data
    //   // username: this.props.data.user
    // };
    this.state = {
      curriculums: [],
      id: this.props.data,
      username: this.props.data,
      user_id: "",
      name: "",
      hours_done: "",
      hours_target: "",
      modules_done: "",
      modules_target: ""
    };
    // const { user } = this.props.user;
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/curriculums", { withCredentials: true })
      .then(response => {
        console.log("CurrCont-1", response);
        this.setState({
          curriculums: response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    // const { id, username } = this.state;
    console.log("CurrCntnr-2 ", this.props.id, this.props.user);
    const myCurriculums = this.state.curriculums.filter(c => {
      return c.user_id === this.props.id;
    });

    return (
      <>
        {/* <h1>Logged In: {this.props.user}</h1> */}
        <div className="Curriculums-container bg-info">
          <h1 className="Curriculums-container">
            Add Data - {this.props.user}
          </h1>
          <h5 className="Curriculums-container">Technical Curriculum</h5>
          {/* {this.state.curriculums.map(curriculum => { */}
          {myCurriculums.map(myCurriculum => {
            return (
              <div className="curriculum-list" key={myCurriculum.id}>
                <h4>{myCurriculum.name}</h4>
                <p> Hours Done : {myCurriculum.hours_done}</p>
                <p> Hours Target : {myCurriculum.hours_target}</p>
                <p> Modules Done : {myCurriculum.modules_done}</p>
                <p> Modules Target : {myCurriculum.modules_target}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default AddData;
