import { AUTH_USER, AUTH_USER_LOGOUT } from "../constants/pollAuth";

export function setAuthedUser(authedUser) {
  return {
    type: AUTH_USER,
    authedUser,
  };
}

export function logoutAuthedUser() {
  return {
    type: AUTH_USER_LOGOUT,
  };
}

export function handleLogin(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();

    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );

    if (!!user) return dispatch(setAuthedUser(user));
  };
}

export function handleLogout() {
  return (dispatch) => {
    return dispatch(logoutAuthedUser());
  };
}
