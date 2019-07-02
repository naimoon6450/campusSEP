import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

const initialState = {
  students: [],
  campuses: []
};

// action types
const GET_STUDENTS = "GET_STUDENTS";
const GET_CAMPUSES = "GET_CAMPUSES";

// action creators
const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students
  };
};
const getCampuses = campuses => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

// thunks for fetching
export const fetchStudents = () => {
  return dispatch => {
    return axios
      .get("/api/students")
      .then(resp => resp.data)
      .then(students => {
        dispatch(getStudents(students));
      });
  };
};

export const fetchCampuses = () => {
  return dispatch => {
    return axios
      .get("/api/campuses")
      .then(resp => resp.data)
      .then(campuses => {
        dispatch(getCampuses(campuses));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.students
      };
    case GET_CAMPUSES:
      return {
        ...state,
        campuses: action.campuses
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(loggingMiddleware, thunkMiddleware)
);

export default store;
