export const RegisterAction = (user) => (dispatch, getState) => {
    console.log("inside action")
    const {
        User: { users },
    } = getState();

    const hasUser = users.find(i => i.user === user)

    if (!hasUser && user !== "") {
        console.log("accepted")
        dispatch({
            type: "USER_REGISTER_SUCCESS",
            payload: [{ id: user, user }, ...users]
        })
    } else {
        console.log("user present")
    }
};

export const LoginAction = (user) => (dispatch, getState) => {
    const {
        User: { users },
    } = getState();

    const hasUser = users.find(i => i.user === user)

    if (hasUser && user !== "") {
        dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: [{ id: user, user }, ...users]
        })
    }
};