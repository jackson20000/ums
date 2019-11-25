import {
  LOGIN,
  LOGOUT,
  REGISTER
} from "./type";

export const register = data => ({
  type: REGISTER,
  payload: data
});

export const login = userId => ({
  type: LOGIN,
  payload: userId
});

export const logout = () => ({
  type: LOGOUT
});
