const initialState = { login: false };

export default function loggedIn(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { login: true };

    case "LOGOUT_USER":
      return { login: false };

    default:
      return state;
  }
}
