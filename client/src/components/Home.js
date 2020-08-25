import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/home.css";

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
      className="container-fluid h-100 d-inline-block !important  font-weight-bold bg-success item-height align-items-stretch px-0"
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

Home.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired
};

export default Home;
