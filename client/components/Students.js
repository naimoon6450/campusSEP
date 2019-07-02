import React from "react";
import { connect } from "react-redux";
import StudentCard from "./StudentCard";

const Students = props => {
  return (
    <div id="studentContainer">
      <div className="columns is-multiline">
        {props.students.map(student => {
          return <StudentCard key={student.id} student={student} />;
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

export default connect(mapStateToProps)(Students);
