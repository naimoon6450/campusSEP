import React from "react";
import { connect } from "react-redux";
import { StudentCard, SingleStudent, NoMatch } from "./index";
import {
  fetchSingleStudent,
  deleteStudFromDb,
  deleteStudFromStore
} from "../store";
import { withRouter } from "react-router";
import { Link, Route } from "react-router-dom";

const Students = props => {
  return (
    <div id="container">
      <div id="newButton">
        <Link to="/students/addNewStudent" className="button is-primary">
          + New Student
        </Link>
      </div>
      <div className="columns is-multiline">
        {props.students.map(student => {
          return (
            <StudentCard
              key={student.id}
              student={student}
              deleteStudFromDb={props.deleteStudFromDb}
              deleteStudFromStore={props.deleteStudFromStore}
              match={props.match}
            />
          );
        })}
      </div>

      {/* Route not working... */}
      <Route path={`${props.match.url}/:id`} component={NoMatch} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteStudFromDb: studId => {
      dispatch(deleteStudFromDb(studId));
    },
    deleteStudFromStore: studId => {
      dispatch(deleteStudFromStore(studId));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Students)
);
