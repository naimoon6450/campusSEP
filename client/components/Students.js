import React from "react";
import { connect } from "react-redux";
import StudentCard from "./StudentCard";
import { fetchSingleStudent } from "../store";
import { withRouter } from "react-router";

const Students = props => {
  return (
    <div id="studentContainer">
      <div className="columns is-multiline">
        {props.students.map(student => {
          return (
            <StudentCard
              key={student.id}
              student={student}
              studentClickedEvt={props.studentClickedEvt}
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
    campuses: state.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    studentClickedEvt: studentId => {
      dispatch(fetchSingleStudent(studentId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
