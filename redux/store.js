import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  registerReducer,
  loginReducer,
  logoutReducer,
} from "./reducers/userReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  registeredUser: registerReducer,
  loggedInUser: loginReducer,
  loggedOutUser: logoutReducer,
});

const store = createStore(rootReducer, middleware);

export default store;
