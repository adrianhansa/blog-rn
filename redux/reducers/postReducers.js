import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_MY_POSTS_FAIL,
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
} from "../constants/postConstants";

export const getAllPostsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return { loading: true };
    case GET_ALL_POSTS_SUCCESS:
      return { loading: false, allPosts: action.payload, success: true };
    case GET_ALL_POSTS_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const getMyPostsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MY_POSTS_REQUEST:
      return { loading: true };
    case GET_MY_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, success: true };
    case GET_MY_POSTS_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
