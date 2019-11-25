import { createStore, combineReducers } from "redux";

import loginReducer from "./Reducer/LoginReducer";

const rootReducer = combineReducers({
  login: loginReducer
});

const configureStore = createStore(rootReducer);

export default configureStore;
