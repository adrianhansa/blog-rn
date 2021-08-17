import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/userReducers";

const middleware = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, middleware);

export default store;