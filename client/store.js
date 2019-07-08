import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

const initialState = {
  students: [],
  campuses: [],
  currentStudent: "",
  currentCampus: "",
  // campus form states
  uniName: "",
  uniAddress: "",
  uniDescription: ""
};

// action types
const GET_STUDENTS = "GET_STUDENTS";
const GET_CAMPUSES = "GET_CAMPUSES";
const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";
const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";
const WRITE_NEW_CAMPUS = "WRITE_NEW_CAMPUS";
const POST_NEW_CAMPUS = "POST_NEW_CAMPUS";

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

const getCampus = currCampus => {
  return {
    type: GET_SINGLE_CAMPUS,
    currCampus
  };
};

export const writeCampus = (campusFormVal, campusField) => {
  return {
    type: WRITE_NEW_CAMPUS,
    fieldToChange: campusField,
    fieldValue: campusFormVal
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

export const fetchSingleCampus = campId => {
  return dispatch => {
    return axios
      .get(`api/campuses/${campId}`)
      .then(resp => resp.data)
      .then(campus => {
        dispatch(getCampus(campus));
      })
      .catch(e => console.error(e));
  };
};

export const postNewCampus = campObj => {
  return dispatch => {
    return axios.post("/api/campuses", campObj).then(resp => {
      console.log(resp);
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
    case GET_SINGLE_STUDENT:
      return {
        ...state,
        currentStudent: action.currStudent
      };
    case GET_SINGLE_CAMPUS:
      return {
        ...state,
        currentCampus: action.currCampus
      };
    case WRITE_NEW_CAMPUS:
      return {
        ...state,
        [action.fieldToChange]: action.fieldValue
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
