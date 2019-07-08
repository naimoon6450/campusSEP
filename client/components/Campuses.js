import React from "react";
import { connect } from "react-redux";
import CampusCard from "./CampusCard";
import { Link } from "react-router-dom";

const Campuses = props => {
  const { campuses } = props;
  return (
    <div id="container">
      <div id="newCampus">
        <Link to="/campuses/addNewCampus" className="button is-primary">
          + New Campus
        </Link>
      </div>
      <div className="columns is-multiline">
        {props.campuses.map(campus => {
          return <CampusCard key={campus.id} campus={campus} />;
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

export default connect(mapStateToProps)(Campuses);
