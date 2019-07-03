import React from 'react';

const StudentCard = props => {
  const { student } = props;
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={student.imageUrl}
              alt="Placeholder image"
              style={{ objectFit: 'cover', height: '300px' }}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {`${student.firstName}, ${student.lastName}`}
              </p>
            </div>
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
    </div>
  );
};

export default StudentCard;
