import React, { Component } from "react";
import axios from "axios";
class TrackIt extends Component {
  constructor(props) {
    super(props);

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
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/curriculums", { withCredentials: true })
      .then(response => {
        this.setState({
          curriculums: response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    // const allCurriculums = this.state.curriculums.filter(c => {
    //   return c.user_id === this.props.id;
    // });

    const name = this.state.curriculums.filter(c => {
      return c.user_id === this.props.id;
    });
    const myCurriculums = name.sort(function (name1, name2) {
      if (name1.name > name2.name) {
        return -1;
      } else if (name1.name < name2.name) {
        return 1;
      }
    });

    console.log(myCurriculums);
    return (
      <>
        {/* <h1>Logged In: {this.props.user}</h1> */}
        <div className="Curriculums-container bg-info border border-primary">
          <h1 className="Curriculums-container">
            Track Progress - {this.props.user}
          </h1>
          {/* <h5 className="Curriculums-container"></h5> */}
          {myCurriculums.map(myCurriculum => {
            // let d = myCurriculum.entry_date;

            // let d1 = d.subString(1, 10);

            return (
              <div className="curriculum-list" key={myCurriculum.id}>
                <p>
                  {myCurriculum.name} {myCurriculum.entry_date.substring(1, 10)}{" "}
                  Hours : {myCurriculum.hours_done}{" "}
                  {/* <p> Hours Target : {myCurriculum.hours_target}</p> */}
                  {/* {myCurriculum.entry_date} */}
                  Modules : {myCurriculum.modules_done}
                </p>
                {/* <p> Modules Target : {myCurriculum.modules_target}</p> */}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default TrackIt;
