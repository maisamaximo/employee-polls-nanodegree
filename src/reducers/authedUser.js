import { AUTH_USER, AUTH_USER_LOGOUT } from "../constants/pollAuth";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.authedUser;
    case AUTH_USER_LOGOUT:
      return null;
    default:
      return state;
  }
}
