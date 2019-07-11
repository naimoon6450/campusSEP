import React from 'react';
import { connect } from 'react-redux';
import StudentCard from './StudentCard';
import {
  fetchSingleStudent,
  deleteStudFromDb,
  deleteStudFromStore,
} from '../store';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

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
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteStudFromDb: studId => {
      dispatch(deleteStudFromDb(studId));
    },
    deleteStudFromStore: studId => {
      dispatch(deleteStudFromStore(studId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
