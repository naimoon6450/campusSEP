import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewStudentToDb, validateFields } from "../store";

const StudentForm = props => {
  const { handleSubmit, campuses } = props;
  return (
    <form className="control" id="container" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control has-icons-left has-icons-right">
          <input
            id="fn"
            name="firstName"
            className="input is-success"
            type="text"
            placeholder="names of sorts..."
            onInvalid={() => {
              validateFields("fn", "First Name");
            }}
            onChange={() => validateFields("fn")}
            required
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
            id="ln"
            name="lastName"
            className="input is-success"
            type="text"
            placeholder="names of sorts"
            onInvalid={() => {
              validateFields("ln", "Last Name");
            }}
            onChange={() => validateFields("ln")}
            required
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
            id="em"
            name="email"
            className="input is-success"
            placeholder="somename@sorts.com"
            onInvalid={() => {
              validateFields("em", "Email");
            }}
            onChange={() => validateFields("em")}
            required
            // onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">University</label>
        <div className="control has-icons-left">
          <div className="select is-success">
            <select name="select">
              <option>-- None --</option>
              {campuses.map(campus => {
                return (
                  <option name="options" key={campus.id} campkey={campus.id}>
                    {campus.name}
                  </option>
                );
              })}
            </select>
          </div>
          <span className="icon is-small is-left">
            <i className="fa fa-university" />
          </span>
        </div>
      </div>
      <div className="control">
        <button
          type="submit"
          style={{ fontFamily: "Russo One" }}
          className="button is-link"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: evt => {
      evt.preventDefault();
      // doing the following to capture the campus id for the student instead of looping through campuses
      // thought of having state of selectedCampus but want the data to be together
      const index = evt.target.select.options.selectedIndex;
      const campusId =
        index !== 0
          ? evt.target.select.options[index].attributes.campkey.value
          : 0;

      const studObj = {
        firstName: evt.target.firstName.value,
        lastName: evt.target.lastName.value,
        email: evt.target.email.value,
        campusId
      };
      dispatch(postNewStudentToDb(studObj, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
