import React from 'react';
import { connect } from 'react-redux';
import CampusCard from './CampusCard';
import { Link } from 'react-router-dom';
import { deleteCampusFromDb, deleteCampusFromStore } from '../store';

const Campuses = props => {
  const { campuses, delCampusFromDb, delCampusFromStore } = props;
  return (
    <div id="container">
      <div id="newButton">
        <Link to="/campuses/addNewCampus" className="button is-primary">
          + New Campus
        </Link>
      </div>
      <div className="columns is-multiline">
        {props.campuses.map(campus => {
          return (
            campus.id && (
              <div className="column is-4" key={campus.id}>
                <CampusCard
                  campus={campus}
                  delCampusFromDb={delCampusFromDb}
                  delCampusFromStore={delCampusFromStore}
                />
              </div>
            )
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
    delCampusFromDb: campId => {
      dispatch(deleteCampusFromDb(campId));
    },
    delCampusFromStore: campId => {
      dispatch(deleteCampusFromStore(campId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
