import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddData from "./components/AddData";
import Inputs1 from "./components/Inputs1";
import Inputs2 from "./components/Inputs2";
import Inputs3 from "./components/Inputs3";
import TrackIt from "./components/TrackIt";
import ProgressRing from "./components/ProgressRing";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import CurriculumsContainer from "./components/CurriculumsContainer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    this.loginStatus();
  }
  loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        console.log("st1", response.data);
        if (response.data.logged_in) {
          this.handleLogin(response.data);
        } else {
          this.handleLogout();
        }
      })
      .catch(error => console.log("api A errors:", error));
  };
  handleLogin = data => {
    // console.log("App-", data.data.logged_in, data.data.user);
    this.setState({
      isLoggedIn: true, //data.data.logged_in,
      user: data.user //data.data.user
    });
    // console.log("st2", data.data.user);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  };

  render() {
    console.log("st3", this.state.user);
    const { id, username } = this.state.user;
    console.log("in app render", id, username);
    return (
      <div className="container text-center bg-light border border-primary">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              // exact
              path="/Inputs1"
              render={props => <Inputs1 id={id} user={username} />}
            />
            <Route
              exact
              path="/Inputs2"
              render={props => <Inputs2 id={id} user={username} />}
            />
            <Route
              exact
              path="/Inputs3"
              render={props => <Inputs3 id={id} user={username} />}
            />
            <Route
              exact
              path="/TrackIt"
              render={props => <TrackIt id={id} user={username} />}
            />
            <Route
              exact
              path="/CurriculumsContainer"
              render={props => <CurriculumsContainer id={id} user={username} />}
            />
            {/* <Route
              exact
              path="/Progress"
              render={props => <Progress id={id} user={username} />}
            /> */}
            <Route
              exact
              path="/ProgressRing"
              render={props => (
                <ProgressRing radius={60} stroke={4} progress={85} />
              )}
            />
            {/* <Route exact path="/Inputs2" render={props => <Inputs2 />} />
            <Route exact path="/Inputs3" render={props => <Inputs3 />} />
            <Route exact path="/TrackIt" render={props => <TrackIt />} />
            <Route exact path="/Progress" render={props => <Progress />} /> */}
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/AddData"
              render={props => <AddData {...props} id={id} user={username} />}
            />
          </Switch>
          {/* <AddData id={id} user={username} /> */}
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
