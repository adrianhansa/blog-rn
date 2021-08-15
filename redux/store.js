import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { register, login } from "./reducers/userReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  registeredUser: register,
  loggedInUser: login,
});

const store = createStore(rootReducer, middleware);

export default store;
