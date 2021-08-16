import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../constants/userConstants";

export const authReducer = (state = { user: {}, errors: {} }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload };
    case REGISTER_FAIL:
      return { state, errors: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, errors: action.payload };
    case LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
