import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_MY_POSTS_FAIL,
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
} from "../constants/postConstants";

const initialState = {
  auth,
  allPosts: [],
  myPosts: [],
};

export const getAllPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return { ...state, allPosts: { loading: true } };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: { loading: false, allPosts: action.payload, success: true },
      };
    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        allPosts: { loading: false, error: action.payload, success: false },
      };
    default:
      return state;
  }
};

export const getMyPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_POSTS_REQUEST:
      return { ...state, myPosts: { loading: true } };
    case GET_MY_POSTS_SUCCESS:
      return {
        ...state,
        myPosts: { posts: action.payload, loading: false, success: true },
      };
    case GET_MY_POSTS_FAIL:
      return {
        ...state,
        myPosts: { loading: false, success: false, error: action.payload },
      };
  }
};
