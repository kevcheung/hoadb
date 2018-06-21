import axios from 'axios';
// CONSTANTS
const GET_HOAINFO = 'GET_HOAINFO';
const ADD_HOAINFO = 'ADD_HOAINFO';
const EDIT_HOAINFO = 'EDIT_HOAINFO';

// ACTION CREATORS
export function getHoaInfo(hoaname) {
    return {
      type: GET_HOAINFO,
      payload: axios.get(`/api/getHoa/${hoaname}`)
  };
}

export function addHoaInfo(hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress) {
  return {
    type: ADD_HOAINFO,
    payload: axios.post('/api/addHoa', {hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress})
  };
}

export function editHoaInfo(id, hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress) {
  return {
    type: EDIT_HOAINFO,
    payload: axios.put(`/api/editHoa/${id}`, {hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress})
  }
}

// INITIAL STATE

const initialState = {//either add this to the front end or keep them here
    // hoaname: '',
    // maintenancefee: '',
    // transferfee: '',
    // refinancefee: '',
    // resalecertfee: '',
    // otherfees: '',
    // mailingaddress: ''
    searchResult: []
};

// REDUCER

export default function hoaReducer(state = initialState, action) {
  // console.log("PAYLOAD                     ", action.payload)
  switch (action.type) {
    case `${GET_HOAINFO}_FULFILLED`:
      return {
        ...state,
        searchResult: action.payload.data
      };
    case `${GET_HOAINFO}_REJECTED`:
      return {
        ...state,
      };
    case `${ADD_HOAINFO}_FULFILLED`:
      return {
        ...state,
        hoaName: action.payload.hoaname,
        maintenanceFee: action.payload.maintenancefee,
        transferFee: action.payload.transferfee,
        refinanceFee: action.payload.refinancefee,
        resalecertFee: action.payload.resalecertfee,
        otherFees: action.payload.otherfees,
        mailingAddress: action.payload.mailingaddress
      };
    case `${EDIT_HOAINFO}_FULFILLED`:
        return {
          ...state,
        };
    default:
      return state;
  }
}