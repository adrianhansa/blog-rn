import axios from "axios";
import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_MY_POSTS_FAIL,
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
} from "../constants/postConstants";
import { BASE_URL } from "../constants/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_POSTS_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/posts/all`);
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

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_POST_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const result = await axios.post(`${BASE_URL}/posts`, post, {
      headers: { token },
    });
    dispatch({ type: CREATE_POST_SUCCESS, payload: result.data });
    const data = await axios.get(`${BASE_URL}/posts/all`);
    dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const getPost = (slug) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/posts/${slug}`);
    dispatch({ type: GET_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_POST_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deletePost = (slug) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });
    const token = await AsyncStorage.getItem("token");
    const result = await axios.delete(`${BASE_URL}/posts/${slug}`, {
      headers: { token },
    });
    dispatch({ type: DELETE_POST_SUCCESS, payload: result.data });
    const { data } = await axios.get(`${BASE_URL}/posts/my-posts`, {
      headers: { token },
    });
    dispatch({ type: GET_MY_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
