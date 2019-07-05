import React from 'react';
import { Link } from 'react-router-dom';

const CampusCard = props => {
  const { campus } = props;
  return (
    <div className="column is-4">
      <Link to={`/campuses/${campus.id}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={campus.imageUrl} alt="Placeholder image" />
            </figure>
          </div>
          {/* 
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default CampusCard;
