import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// show single student page when button clicked
const SingleStudent = props => {
  const { currentStudent } = props;
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
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{`${currentStudent.firstName} ${
                  currentStudent.lastName
                }`}</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentStudent: state.currentStudent
  };
};

export default withRouter(connect(mapStateToProps)(SingleStudent));