import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import store, { fetchCampuses, fetchStudents } from "../store";
import axios from "axios";
import Students from "./Students";
import Campuses from "./Campuses";
import Home from "./Home";

export default class Main extends Component {
  // this will get the store filled with the requisite data
  componentDidMount() {
    // dispatch to get campuses
    // dispatch to get students
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
  }
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">WELCOME TO CAMPUS</h1>
              <Link to="/students">Go to ALL Students</Link>
              <br />
              <Link to="/campuses">Go to ALL Campuses</Link>
              <br />
              <Link to="/">Go Home</Link>
            </div>
          </div>
        </section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/students" component={Students} />
          <Route path="/campuses" component={Campuses} />
          {/* <Redirect to="/" /> */}
        </Switch>
        {/* <Route path="/students" component={Campuses} /> */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     students: state.students,
//     campuses: state.campuses
//   };
// };

// export default connect(mapStateToProps)(Main);
