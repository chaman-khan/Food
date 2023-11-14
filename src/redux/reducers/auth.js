import * as types from '../actions/types';
import {AUTH_PENDING, AUTH_ERROR} from '../actions/auth';

const initialState = {
  token: '',
  call: '',
  authLoading: false,
  signupData: {},
  loginData: {},
  loggedIn: false,
  internet: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signupData: action.payload,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload,
        loggedIn: true,
      };

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };

    case types.CHECK_INTERNET:
      return {
        ...state,
        internet: action.payload,
      };
    case types.SAVE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case types.CHANGE_CALL:
      return {
        ...state,
        callAPI: action.payload,
      };
    default:
      return state;
  }
};
