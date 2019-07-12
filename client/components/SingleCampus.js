import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import store, { fetchSingleCampus } from "../store";
import CampusCard from "./CampusCard";
import { NoMatch } from "./index";
// show single campus page when button clicked
class SingleCampus extends Component {
  componentDidMount() {
    const currentCampId = this.props.match.params.id;
    const action = fetchSingleCampus(currentCampId);
    store.dispatch(action);
  }
  render() {
    const { currentCampus, students } = this.props;
    let studCount = 0;
    return currentCampus ? (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={currentCampus.imageUrl} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={currentCampus.imageUrl} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="subtitle is-6">{currentCampus.address}</p>
                </div>
              </div>

              <div className="content">
                {currentCampus.description}
                Current Students:
                {students.map(student => {
                  if (student.campusId == currentCampus.id) {
                    studCount++;
                    return (
                      <li key={student.id}>{`${student.firstName} ${
                        student.lastName
                      }`}</li>
                    );
                  }
                })}
                {studCount === 0 && <li>No students in this university</li>}
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <NoMatch />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentCampus: state.currentCampus,
    students: state.students
  };
};

export default withRouter(connect(mapStateToProps)(SingleCampus));
