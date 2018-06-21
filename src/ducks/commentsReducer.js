import axios from 'axios';
// CONSTANTS
const GET_COMMENT = 'GET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// ACTION CREATORS
export function getComments(hoaid) {
  // console.log(id)
    return {
      type: GET_COMMENT,
      payload: axios.get(`/api/getComments/${hoaid}`)
    };
  }

export function addComments(comments, userid, hoaid) {
  return {
    type: ADD_COMMENT,
    payload: axios.post('/api/addComments', {comments, userid, hoaid})
  };
}

export function editComments(id, comments) {
  return {
    type: EDIT_COMMENT,
    payload: axios.put(`/api/editComments/${id}`, {comments})
  }
}

export function deleteComments(comments) {
  // console.log(id)
  return {
    type: DELETE_COMMENT,
    payload: axios.delete(`/api/deleteComments/${comments}`)
  };
}

// INITIAL STATE

const initialState = {
    comments: []
};

// REDUCER

export default function commentsReducer(state = initialState, action) {
//   console.log("PAYLOAD                     ", action.payload)
  switch (action.type) {
    case `${GET_COMMENT}_FULFILLED`:
      return {
        ...state,
        comments: action.payload.data
      };
    case `${ADD_COMMENT}_FULFILLED`:
      return {
        ...state,
      };
    case `${EDIT_COMMENT}_FULFILLED`:
        return {
          ...state,
        };
    case `${DELETE_COMMENT}_FULFILLED`:
      return {
        ...state,
      };
    default:
      return state;
  }
}