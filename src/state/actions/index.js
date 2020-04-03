import {STORE_AUTH, STORE_PAGE_NUMBER, SET_REGISTERED} from '../constants/types.js';

export const storeAuth = payload => {
  return {
    type: STORE_AUTH,
    payload
  }
}

export const storePageNumber = payload => {
  return {
    type: STORE_PAGE_NUMBER,
    payload
  }
}

export const setRegistered = payload => {
  return {
    type: SET_REGISTERED,
    payload
  }
}
