import React from "react";

class SampleBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 60,
      stroke: 4,
      progress: 80
    };
    // const { radius, stroke } = this.props;

    this.normalizedRadius = this.radius - this.stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.state;
    const strokeDashoffset =
      this.circumference - (progress / 100) * this.circumference;

    console.log(
      ",,,",
      this.strokeDashoffset,
      this.circumference,
      this.progress,
      this.normalizedRadius
    );
    return (
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
    );
  }
}

export default SampleBar;
