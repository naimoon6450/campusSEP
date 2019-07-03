import React from "react";
import { Link } from "react-router-dom";
import Students from "./Students";
import Campuses from "./Campuses";

const Home = props => {
  return (
    <div>
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <p class="title">WELCOME TO THE UNIVERSITY OF BRILLIANCE CATALOG</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
