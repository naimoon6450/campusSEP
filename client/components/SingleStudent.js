import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import store, { fetchSingleStudent } from "../store";
// show single student page when button clicked
class SingleStudent extends Component {
  componentDidMount() {
    const currentStudId = this.props.match.params.id;
    const action = fetchSingleStudent(currentStudId);
    store.dispatch(action);
  }
  render() {
    const { currentStudent, campuses } = this.props;
    // may not be the best approach
    const studCampus = campuses.map(campus => {
      if (campus.id === currentStudent.campusId) {
        return campus.name;
      }
    });

    return (
      // doesn't persist may need state here
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={currentStudent.imageUrl} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src={currentStudent.imageUrl}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{`${currentStudent.firstName} ${
                    currentStudent.lastName
                  }`}</p>
                  <p className="subtitle is-6">
                    {currentStudent.campusId
                      ? studCampus
                      : "~ ~ University dropout ~ ~"}
                    <br />
                    {currentStudent.email} | GPA: {currentStudent.gpa}
                  </p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentStudent: state.currentStudent,
    campuses: state.campuses
  };
};

export default withRouter(connect(mapStateToProps)(SingleStudent));
