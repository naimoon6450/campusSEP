import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';

const initialState = {
  students: [],
  campuses: [],
};

// action types
const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

// action creators
export const getStudents = allStudents => {
  return {
    type: GET_STUDENTS,
    allStudents,
  };
};

export const getCampuses = allCampuses => {
  return {
    type: GET_CAMPUSES,
    allCampuses,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.allStudents,
      };
    case GET_CAMPUSES:
      return {
        ...state,
        campuses: action.allCampuses,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggingMiddleware));

export default store;
