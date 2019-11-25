import { LOGIN, LOGOUT } from "../type";

const initialState = {
  login: false,
  userId: ""
};
const loginHandler = (state, userId) => {
  let newState = { ...state };
  newState.login = true;
  newState.userId = userId;
  return newState;
};
const logoutHandler = () => {
  let newState = {
    login: false,
    userId: ""
  };
  return newState;
};
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return loginHandler(state, action.payload);
    case LOGOUT:
      return logoutHandler();
    default:
      return state;
  }
}

export default loginReducer;
