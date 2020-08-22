import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="row  text-center text-white font-weight-bold bg-light"
        style={{ height: "2em" }}
      >
        {/* <h1>Menu items</h1> */}

        <div className=" col text-dark bg-light border border-primary">
          <Link to="/Inputs1">Add data</Link>
        </div>
        <div className=" col text-dark bg-light border border-primary">
          <Link to="/TrackIt">Track It</Link>
        </div>
        <div className=" col text-dark bg-light border border-primary">
          <Link to="/ProgressRing">Progress</Link>
        </div>
        <div className=" col text-dark bg-light border border-primary">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
