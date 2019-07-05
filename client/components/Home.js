import React from 'react';
import { Link } from 'react-router-dom';
import Students from './Students';
import Campuses from './Campuses';

const Home = props => {
  return (
    <div>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <p className="title">
              WELCOME TO THE UNIVERSITY OF BRILLIANCE CATALOG
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
