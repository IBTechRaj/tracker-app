import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Home = props => {
  const handleClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout();
        props.history.push("/");
      })
      .catch(error => console.log(error));
  };
  return (
    <div
      className="row  container bg-light text-center text-dark font-weight-bold  border border-primary"
      style={{ height: "5em" }}
    >
      <br></br>
      {props.loggedInStatus ? (
        <Link to="/logout" onClick={handleClick}>
          Log Out
        </Link>
      ) : (
        <div>
          <Link to="/login">Log In</Link>
          <br></br>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};
export default Home;
