const loginData = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      return state.some((user) => user.email === action.payLoad.email)
        ? alert("User already present !")
        : (state = [
            ...state,
            {
              firstName: action.payLoad.firstName,
              lastName: action.payLoad.lastName,
              email: action.payLoad.email,
              pwd: action.payLoad.pass,
            },
          ]);

    default:
      return state;
  }
};

export default loginData;
