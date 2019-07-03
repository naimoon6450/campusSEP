import React from 'react';
import { connect } from 'react-redux';
import CampusCard from './CampusCard';

const Campuses = props => {
  const { campuses } = props;
  return (
    <div id="studentContainer">
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
    campuses: state.campuses,
  };
};

export default connect(mapStateToProps)(Campuses);
