import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/userConstants";

import { BASE_URL } from "../constants/utils";

export const register = (info) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post(`${BASE_URL}/users/register`, info);
    await AsyncStorage.setItem("token", data);
    dispatch({ type: REGISTER_SUCCESS, payload: data.token });
    return data;
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const login = (info) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`${BASE_URL}/users/login`, info);
    await AsyncStorage.setItem("token", data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await AsyncStorage.removeItem("token");
  const { data } = await axios.get(`${BASE_URL}/users/logout`);
  dispatch({ type: LOGOUT, payload: data });
};
