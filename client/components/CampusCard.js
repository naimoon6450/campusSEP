import React from "react";
import { Link } from "react-router-dom";

const CampusCard = props => {
  const { campus } = props;
  return (
    <div className="card">
      <div className="card-image">
        <Link to={`/campuses/${campus.id}`}>
          <figure className="image">
            <img src={campus.imageUrl} alt="Placeholder image" />
          </figure>
        </Link>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <a class="button is-danger">Delete</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusCard;
