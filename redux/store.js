import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { registerReducer, loginReducer } from "./reducers/userReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  registeredUser: registerReducer,
  loggedInUser: loginReducer,
});

const store = createStore(rootReducer, middleware);

export default store;
