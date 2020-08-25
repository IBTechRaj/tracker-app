import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <>
      <div
        className=" container-fluid header-bg item-height text-center px-0"
        style={{ height: "5em" }}
      >
        <div className="col-md-12 text-center px-0">
          <p>Microverse</p>
          <h1>Curriculum Tracker</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
