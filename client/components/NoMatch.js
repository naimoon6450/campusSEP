import React from "react";

const NoMatch = () => {
  return (
    <div>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title" style={{ fontSize: "3em" }}>
              Yikes! That ID doesn't exist
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoMatch;
