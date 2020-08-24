import React from "react";
import axios from "axios";

class GetData extends React.Component {
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
      modules_target: "",
      tech_hours_progress: "",
      tech_modules_progress: "",
      prof_hours_progress: "",
      prof_modules_progress: "",
      code_hours_progress: "",
      code_modules_progress: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/curriculums", { withCredentials: true })
      .then(({ data }) => {
        var th = 0;
        var tm = 0;
        var tht = 0;
        var tmt = 0;
        var ph = 0;
        var pm = 0;
        var pht = 0;
        var pmt = 0;
        var ch = 0;
        var cm = 0;
        var cht = 0;
        var cmt = 0;

        if (typeof data == "object") {
          data.forEach(hours => {
            if (this.props.id === hours.user_id) {
              if (hours.name === "Technical Curriculum") {
                th = parseInt(hours.hours_done);
                tm = parseInt(hours.modules_done);
                tht = parseInt(hours.hours_target);
                tmt = parseInt(hours.modules_target);
              }
              if (hours.name === "Prof Skills Curriculum") {
                ph = parseInt(hours.hours_done);
                pm = parseInt(hours.modules_done);
                pht = parseInt(hours.hours_target);
                pmt = parseInt(hours.modules_target);
              }
              if (hours.name === "Coding Challenges") {
                ch = parseInt(hours.hours_done);
                cm = parseInt(hours.modules_done);
                cht = parseInt(hours.hours_target);
                cmt = parseInt(hours.modules_target);
              }
              // console.log("dc", data.count);
            }
          });
          console.log(
            "d",
            this.props.id,
            th,
            tm,
            tht,
            tmt,
            ph,
            pm,
            pht,
            pmt,
            ch,
            cm,
            cht,
            cmt
          );
        }
        this.setState({
          // curriculum
          tech_hours_progress: (th / tht) * 100,
          tech_modules_progress: (tm / tmt) * 100,
          prof_hours_progress: (ph / pht) * 100,
          prof_modules_progress: (pm / pmt) * 100,
          code_hours_progress: (ch / cht) * 100,
          code_modules_progress: (cm / cmt) * 100
        });
      })
      .catch(err => {});
  }
  render() {
    // const { radius, stroke, progress } = this.props;

    const radius = 60;
    const stroke = 4;
    const {
      tech_hours_progress,
      tech_modules_progress,
      prof_hours_progress,
      prof_modules_progress,
      code_hours_progress,
      code_modules_progress
    } = this.state;
    // const progress = (th / tht) * 100;
    // const progress = 80;
    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;

    let strokeDashoffset = this.circumference - (50 / 100) * this.circumference;
    // strokeDashoffset = this.circumference - (70 / 100) * this.circumference;
    // const strokeDashoffsetTM =
    //   this.circumference - (tech_modules_progress / 100) * this.circumference;
    // const strokeDashoffsetPH =
    //   this.circumference - (prof_hours_progress / 100) * this.circumference;
    // const strokeDashoffsetPM =
    //   this.circumference - (prof_modules_progress / 100) * this.circumference;
    // const strokeDashoffsetCH =
    //   this.circumference - (code_hours_progress / 100) * this.circumference;
    // const strokeDashoffsetCM =
    //   this.circumference - (50 / 100) * this.circumference;
    console.log(
      "sdo",
      strokeDashoffset,
      // strokeDashoffsetTH,
      this.circumference,
      tech_hours_progress
      // tech_modules_progress,
      // prof_hours_progress,
      // prof_modules_progress,
      // code_hours_progress,
      // code_modules_progress
    );
    // this.normalizedRadius = radius - stroke * 2;
    // this.circumference = this.normalizedRadius * 2 * Math.PI;
    return (
      <>
        <div className="container bg-light border border-primary">
          {/* <div className="row">
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={this.circumference + " " + this.circumference}
                style={{ strokeDashoffset }}
                // strokeWidth={stroke}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
          </div> */}

          <div className="row  text-center border border-primary">
            Technical Curriculum
            <div style={{ display: "none" }}>
              {
                (strokeDashoffset =
                  this.circumference -
                  (tech_hours_progress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={this.circumference + " " + this.circumference}
                style={{ strokeDashoffset }}
                // strokeWidth={stroke}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div style={{ display: "none" }}>
              {
                (strokeDashoffset =
                  this.circumference -
                  (tech_modules_progress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={this.circumference + " " + this.circumference}
                style={{ strokeDashoffset }}
                // strokeWidth={stroke}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div>
              <div>Hours</div>
              <div>Modules</div>
            </div>
          </div>
          <div className="row  text-center border border-primary">
            Professional Skills Curriculum
            <div style={{ display: "none" }}>
              {
                (strokeDashoffset =
                  this.circumference -
                  (prof_hours_progress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={this.circumference + " " + this.circumference}
                style={{ strokeDashoffset }}
                // strokeWidth={stroke}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div style={{ display: "none" }}>
              {
                (strokeDashoffset =
                  this.circumference -
                  (prof_modules_progress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={this.circumference + " " + this.circumference}
                style={{ strokeDashoffset }}
                // strokeWidth={stroke}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
          </div>
          <div className="row  text-center border border-primary">
            Coding Challenges
            <div style={{ display: "none" }}>
              {
                (strokeDashoffset =
                  this.circumference -
                  (code_hours_progress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={this.circumference + " " + this.circumference}
                style={{ strokeDashoffset }}
                // strokeWidth={stroke}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div style={{ display: "none" }}>
              {
                (strokeDashoffset =
                  this.circumference -
                  (code_modules_progress / 100) * this.circumference)
              }
            </div>
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={this.circumference + " " + this.circumference}
                style={{ strokeDashoffset }}
                // strokeWidth={stroke}
                r={this.normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default GetData;
