import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="container text-center body-bg " style={{ height: '2em' }}>
        <div className="row body-header text-center">
          {/* <div className="row mt-auto w-100 button-footer d-flex align-items-center"> */}
          {/* <div
        className="row  text-center text-white font-weight-bold bg-light"
        style={{ height: "2em" }}
      > */}
          {/* <h1>Menu items</h1> */}

          <div className=" col-md text-dark bg-light footer-bg">
            <Link to="/Inputs1">Add data</Link>
          </div>
          <div className=" col-md text-dark bg-light footer-bg">
            <Link to="/TrackIt">Track It</Link>
          </div>
          <div className=" col-md text-dark bg-light footer-bg">
            <Link to="/Progress">Progress</Link>
          </div>
          <div className=" col-md text-dark bg-light footer-bg">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
