import { createStore, combineReducers, applyMiddleware } from "redux";
import {
    composeWithDevTools,
    conposeWithDevtools,
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducer from "./reducers/Reducer"
const reducer = combineReducers({
    User: Reducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;