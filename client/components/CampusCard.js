import React from "react";

const CampusCard = props => {
  const { campus } = props;
  return (
    <div className="column is-4">
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
    </div>
  );
};

export default CampusCard;
