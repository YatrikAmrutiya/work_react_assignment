import { combineReducers } from "redux";
import loggedIn from "./loggedIn";
import loginData from "./loginData";

const rootReducer = combineReducers({
  loggedIn,
  loginData,
});
export default rootReducer;
