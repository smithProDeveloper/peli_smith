import {combineReducers} from "@reduxjs/toolkit";
import navReducer from "./nav-reducers.ts";

const RootReducer = combineReducers({
    navState: navReducer,
});
export default RootReducer;
