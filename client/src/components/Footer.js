import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <div
        className="container-fluid   bg-footer text-center text-primary item-height font-weight-bold px-0"
        style={{ height: "5em" }}
      >
        {/* <div className="container text-center body-bg " style={{ height: "8em" }}> */}
        <div className="row">
          {/* <div className="row mt-auto w-100 button-footer d-flex align-items-center"> */}
          {/* <div
        className="row  text-center text-white font-weight-bold bg-light"
        style={{ height: "2em" }}
      > */}
          {/* <h1>Menu items</h1> */}

          <div className=" col-md ">
            <Link to="/Inputs1">Add data</Link>
          </div>
          <div className=" col-md  ">
            <Link to="/TrackIt">Track It</Link>
          </div>
          <div className=" col-md  ">
            <Link to="/Progress">Progress</Link>
          </div>
          <div className=" col-md  ">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
