import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { fetchCampuses, fetchStudents } from '../store';
import axios from 'axios';
import {
  Students,
  Campuses,
  Home,
  Navbar,
  SingleStudent,
  SingleCampus,
  CampusForm,
  StudentForm,
} from './index';

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
      <div id="main">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students/addNewStudent" component={StudentForm} />
          <Route exact path="/campuses/addNewCampus" component={CampusForm} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/campuses/:id" component={SingleCampus} />
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
