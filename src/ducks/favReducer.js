import axios from 'axios';
// CONSTANTS
const GET_FAVINFO = 'GET_FAVINFO';
const ADD_FAVINFO = 'ADD_FAVINFO';
const DELETE_FAVINFO = 'DELETE_FAVINFO';

// ACTION CREATORS
export function getFavInfo(id) {
  // console.log(id)
    return {
      type: GET_FAVINFO,
      payload: axios.get(`/api/getFav/${id}`)
    };
  }

export function addFavInfo(userid, hoaid) {
  return {
    type: ADD_FAVINFO,
    payload: axios.post('/api/addFav', {userid, hoaid})
  };
}

export function deleteFavInfo(id) {
  // console.log(id)
  return {
    type: DELETE_FAVINFO,
    payload: axios.delete(`/api/deleteFav/${id}`)
  };
}
// INITIAL STATE

const initialState = {
    favoritesList: []
};

// REDUCER

export default function favReducer(state = initialState, action) {
  // console.log("PAYLOAD                     ", action.payload)
  switch (action.type) {
    case `${GET_FAVINFO}_FULFILLED`:
      return {
        ...state,
      favoritesList: action.payload.data
      };
    case `${ADD_FAVINFO}_FULFILLED`:
      return {
        ...state,
      };
    case `${DELETE_FAVINFO}_FULFILLED`:
      return {
        ...state,
      };
    default:
      return state;
  }
}