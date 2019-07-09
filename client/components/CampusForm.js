import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeCampus, postNewCampusToDb } from '../store';
import { Link } from 'react-router-dom';
/**
 * Steps for form creation / submission
 * Need some state that will hold the data onChange (uni name, address, desc)
 * Will be dispatching an action to make this change in the state
 *
 * Need to post that existing data into the db using a thunk onSubmit
 *
 * For redirecting, needed to push to history, add campus to campus array, receive the
 * posted object from the api route and dispatch accordingly
 */

const CampusForm = props => {
  const { handleChange, handleSubmit } = props;
  return (
    <form className="control" id="container" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">University/College Name</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="uniName"
            className="input is-success"
            type="text"
            placeholder="ABC University..."
            // onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-university" />
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Address</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="uniAddress"
            className="input is-success"
            type="text"
            placeholder="116 ABC Street"
            // onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fa fa-map-marker" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            name="uniDescription"
            className="textarea"
            placeholder="The university of alphabets..."
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
    // probably no reason to have this handleChange?
    handleChange: evt => {
      dispatch(writeCampus(evt.target.value, evt.target.name));
    },
    handleSubmit: evt => {
      evt.preventDefault();
      const campObj = {
        uniName: evt.target.uniName.value,
        uniAddress: evt.target.uniAddress.value,
        uniDescription: evt.target.uniDescription.value,
      };
      dispatch(postNewCampusToDb(campObj, ownProps.history));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CampusForm);
