import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { fetchCampuses, fetchStudents } from '../store';
import axios from 'axios';
import { Students, Campuses, Home, Navbar } from './index';

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
        <Navbar />
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
