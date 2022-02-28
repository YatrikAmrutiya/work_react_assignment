const Reducer = (state = { user_details: [] }, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            return { user_details: action.payload };

        case "LOGIN_USER":
            return { user_details: action.payload };

        default:
            return state;
    }
};
export default Reducer;