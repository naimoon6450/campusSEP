import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { writeCampus, postNewCampusToDb } from '../store';

const StudentForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="control" id="container" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="firstName"
            className="input is-success"
            type="text"
            placeholder="names of sorts..."
            // onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-user" />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="lastName"
            className="input is-success"
            type="text"
            placeholder="names of sorts"
            // onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-user" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <textarea
            name="email"
            className="textarea"
            placeholder="somename@sorts.com"
            // onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="control">
        <button
          type="submit"
          style={{ fontFamily: 'Russo One' }}
          className="button is-link"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: evt => {
      evt.preventDefault();
      //   const campObj = {
      //     uniName: evt.target.uniName.value,
      //     uniAddress: evt.target.uniAddress.value,
      //     uniDescription: evt.target.uniDescription.value,
      //   };
      //   dispatch(postNewCampusToDb(campObj, ownProps.history));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StudentForm);
