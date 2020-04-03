import { STORE_AUTH, STORE_PAGE_NUMBER, SET_REGISTERED } from '../constants/types';

// Initialise state
export const initialState = {
  authenticated: false,
  guid: "",
  pageNumber: 1,
  registered: 0,
  showModal: 0
}

const rootReducer = (state = initialState, action) => {
  if(action.type === STORE_AUTH) {
    return Object.assign({}, state, {
      authenticated: action.payload.authenticated,
      guid: action.payload.guid
    })
  }

  if(action.type === STORE_PAGE_NUMBER) {
    return Object.assign({}, state, {
      pageNumber: action.payload
    })
  }

  if(action.type === SET_REGISTERED) {
    return Object.assign({}, state, {
      registered: action.payload.registered,
      showModal: action.payload.showModal
    })
  }

  return state;
}
export default rootReducer;
