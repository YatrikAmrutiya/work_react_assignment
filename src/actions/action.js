export const isLoggedIn = () => {
  return {
    type: "LOGIN",
  };
};
export const isloggedOut = () => {
  return {
    type: "LOGOUT_USER",
  };
};
export const UserData = (firstName, lastName, email, password) => {
  return {
    type: "addUser",
    payLoad: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      pass: password,
    },
  };
};
