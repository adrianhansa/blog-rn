import axios from "axios";
import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_MY_POSTS_FAIL,
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
} from "../constants/postConstants";
import { BASE_URL } from "../constants/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_POSTS_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/posts/all`, {
      headers: { token },
    });
    dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_POSTS_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getMyPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MY_POSTS_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const { data } = await axios.get(`${BASE_URL}/posts/my-posts`, {
      headers: { token },
    });
    dispatch({ type: GET_MY_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MY_POSTS_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
