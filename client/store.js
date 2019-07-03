import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

const initialState = {
  students: [],
  campuses: [],
  currentStudent: ""
};

// action types
const GET_STUDENTS = "GET_STUDENTS";
const GET_CAMPUSES = "GET_CAMPUSES";
const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";

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

const getStudent = currStudent => {
  return {
    type: GET_SINGLE_STUDENT,
    currStudent
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
      })
      .catch(e => console.error(e));
  };
};

export const fetchCampuses = () => {
  return dispatch => {
    return axios
      .get("/api/campuses")
      .then(resp => resp.data)
      .then(campuses => {
        dispatch(getCampuses(campuses));
      })
      .catch(e => console.error(e));
  };
};

export const fetchSingleStudent = studId => {
  return dispatch => {
    return axios
      .get(`api/students/${studId}`)
      .then(resp => resp.data)
      .then(student => {
        dispatch(getStudent(student));
      })
      .catch(e => console.error(e));
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
    case GET_SINGLE_STUDENT:
      return {
        ...state,
        currentStudent: action.currStudent
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
