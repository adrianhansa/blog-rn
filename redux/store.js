import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/userReducers";
import {
  getAllPostsReducer,
  getMyPostsReducer,
  getPostReducer,
  createPostReducer,
  deletePostReducer,
} from "./reducers/postReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  auth: authReducer,
  allPosts: getAllPostsReducer,
  myPosts: getMyPostsReducer,
  createdPost: createPostReducer,
  deletePost: deletePostReducer,
  postDetails: getPostReducer,
});

const store = createStore(rootReducer, middleware);

export default store;
