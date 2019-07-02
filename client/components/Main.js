import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { getCampuses, getStudents } from '../store';
import axios from 'axios';

export default class Main extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    // dispatch to get students
    axios
      .get('/students')
      .then(resp => resp.data)
      .then(students => {
        const action = getStudents(students);
        store.dispatch(action);
      });
    // dispatch to get campuses
    axios
      .get('/campuses')
      .then(resp => resp.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        store.dispatch(action);
      });
  }
  render() {
    return (
      <div className="columns is-multiline">
        <div class="card is-one-quarter">
          <div class="card-image">
            {/* <figure class="image">
                  <img src="" alt="Placeholder image" />
                </figure> */}
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                {/* <figure class="image">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure> */}
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
              <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
