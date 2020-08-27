import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "../img/icon1.png";

function Footer() {
  return (
    <>
      <div
        className="container-fluid   bg-footer text-sm-center text-primary item-height font-weight-bold px-0"
        style={{ height: "5em" }}
      >
        <div className="row">
          <div
            className="col-sm py-3   text-white item-height d-flex text-center justify-content-center"
            style={{ backgroundColor: "#41b5e8", height: "5em" }}
          >
            <img src={"icon1"} alt="X" />
            <Link to="/Inputs1" style={{ color: "white", marginTop: "2em" }}>
              Add Data
            </Link>
            {/* </button> */}
          </div>
          {/* <div className=" col-md ">
            <Link to="/Inputs1">Add data</Link>
          </div> */}
          <div className=" col-sm  ">
            <Link to="/TrackIt">Track It</Link>
          </div>
          <div className=" col-sm  ">
            <Link to="/Progress">Progress</Link>
          </div>
          <div className=" col-sm  ">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
