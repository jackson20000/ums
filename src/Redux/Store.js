import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./Reducer/LoginReducer";
import updateReducer from "./Reducer/updateReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const rootReducer = combineReducers({
  login: loginReducer,
  updateReducer,
  form: formReducer
});

const pReducer = persistReducer(persistConfig, rootReducer);
export const configureStore = createStore(pReducer);
export const persistor = persistStore(configureStore);

export default {configureStore,persistor};
