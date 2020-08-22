import React from "react";

class ProgressRing extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;

    const strokeDashoffset =
      this.circumference - (progress / 100) * this.circumference;

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

export default ProgressRing;

// class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       progress: 0
//     };
//   }

//   componentDidMount() {
//     // emulating progress
//     const interval = setInterval(() => {
//       this.setState({ progress: this.state.progress + 10 });
//       if (this.state.progress === 100) clearInterval(interval);
//     }, 1000);
//   }

//   render() {
//     return (
//       <ProgressRing radius={60} stroke={4} progress={this.state.progress} />
//     );
//   }
// }

// ReactDOM.render(
//  <Example />,
//   document.getElementById('example')
// );
// import React, { Component } from "react";
// class ProgressRing extends React.Component {
//   constructor(props) {
//     super(props);

//     const { radius, stroke } = this.props;

//     this.normalizedRadius = radius - stroke * 2;
//     this.circumference = this.normalizedRadius * 2 * Math.PI;
//   }

//   render() {
//     const { radius, stroke, progress } = this.props;
//     const strokeDashoffset =
//       this.circumference - (progress / 100) * this.circumference;

//     return (
//       <svg height={radius * 2} width={radius * 2}>
//         <circle
//           stroke="white"
//           fill="transparent"
//           strokeWidth={stroke}
//           strokeDasharray={this.circumference + " " + this.circumference}
//           style={{ strokeDashoffset }}
//           strokeWidth={stroke}
//           r={this.normalizedRadius}
//           cx={radius}
//           cy={radius}
//         />
//       </svg>
//     );
//   }
// }

// export default ProgressRing;
