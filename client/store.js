import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

const initialState = {
  students: [],
  campuses: [],
  currentStudent: "",
  currentCampus: ""
};

// action types
const GET_STUDENTS = "GET_STUDENTS";
const GET_CAMPUSES = "GET_CAMPUSES";
const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";
const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";
const WRITE_NEW_CAMPUS = "WRITE_NEW_CAMPUS";
const POST_NEW_CAMPUS = "POST_NEW_CAMPUS";
const WRITE_NEW_STUDENT = "WRITE_NEW_STUDENT";
const POST_NEW_STUDENT = "POST_NEW_STUDENT";
const DELETE_STUDENT_FROM_STORE = "DELETE_STUDENT_FROM_STORE";
const DELETE_CAMPUS_FROM_STORE = "DELETE_CAMPUS_FROM_STORE";

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

// not sure if this is needed either...
export const writeCampus = (campusFormVal, campusField) => {
  return {
    type: WRITE_NEW_CAMPUS,
    fieldToChange: campusField,
    fieldValue: campusFormVal
  };
};

export const postCampus = campusObj => {
  return {
    type: POST_NEW_CAMPUS,
    campusObj
  };
};

export const postStudent = studObj => {
  return {
    type: POST_NEW_STUDENT,
    studObj
  };
};

export const deleteStudFromStore = studId => {
  return {
    type: DELETE_STUDENT_FROM_STORE,
    studId
  };
};

export const deleteCampusFromStore = campId => {
  return {
    type: DELETE_CAMPUS_FROM_STORE,
    campId
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

export const postNewCampusToDb = (campObj, history) => {
  return dispatch => {
    return axios
      .post("/api/campuses", campObj)
      .then(resp => resp.data)
      .then(campus => {
        // console.log(campus);
        dispatch(postCampus(campus));
        history.push("/campuses");
      })
      .catch(e => console.error(e));
  };
};

export const postNewStudentToDb = (studObj, history) => {
  return dispatch => {
    return axios
      .post("/api/students", studObj)
      .then(resp => resp.data)
      .then(student => {
        // console.log(student);
        dispatch(postStudent(student));
        history.push("/students");
      })
      .catch(e => console.error(e));
  };
};

export const deleteStudFromDb = studId => {
  return dispatch => {
    return axios.delete(`/api/students/${studId}`).catch(e => console.error(e));
  };
};

export const deleteCampusFromDb = campId => {
  return dispatch => {
    return axios.delete(`/api/campuses/${campId}`).catch(e => console.error(e));
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
    case WRITE_NEW_CAMPUS: // probably not needed
      return {
        ...state,
        [action.fieldToChange]: action.fieldValue
      };
    case POST_NEW_CAMPUS:
      return {
        ...state,
        campuses: [...state.campuses, action.campusObj]
      };
    case POST_NEW_STUDENT:
      return {
        ...state,
        students: [...state.students, action.studObj]
      };
    case DELETE_STUDENT_FROM_STORE:
      const newStudentArr = state.students.filter(stud => {
        if (stud.id !== action.studId) return stud;
      });
      return {
        ...state,
        students: newStudentArr
      };
    case DELETE_CAMPUS_FROM_STORE:
      const newCampusArr = state.campuses.filter(camp => {
        if (camp.id !== action.campId) return camp;
      });
      return {
        ...state,
        campuses: newCampusArr
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

// hacky validator
export const validateFields = (fieldId, fieldName) => {
  let field;
  field = document.getElementById(fieldId).setCustomValidity(``);
  if (fieldName) {
    field = document
      .getElementById(fieldId)
      .setCustomValidity(`Please enter a valid ${fieldName}`);
  }
};
